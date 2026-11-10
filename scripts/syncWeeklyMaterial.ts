import fs from 'node:fs';
import path from 'node:path';
import {
  WEEKLY_FORENSIC_UPDATES,
  WeeklyForensicUpdate,
} from '../src/data/weeklyUpdatesData';

const TARGET_FILE = path.resolve(
  process.cwd(),
  'src/data/weeklyUpdatesData.ts'
);

interface PubMedESearchResponse {
  esearchresult?: {
    idlist?: string[];
  };
}

interface PubMedSummaryItem {
  uid: string;
  title?: string;
  pubdate?: string;
  source?: string;
  authors?: { name: string }[];
}

interface PubMedESummaryResponse {
  result?: Record<string, PubMedSummaryItem>;
}

/**
 * Consulta la API pública E-utilities de NCBI / PubMed para buscar nuevas publicaciones
 * indexadas sobre Enfermería Forense, protocolo SANE, Cadena de Custodia y Sumisión Química.
 */
async function fetchLatestPubMedForensicNursingArticles(): Promise<
  WeeklyForensicUpdate[]
> {
  const query = encodeURIComponent(
    '("forensic nursing"[Title/Abstract] OR "sexual assault nurse examiner"[Title/Abstract] OR "drug-facilitated sexual assault"[Title/Abstract])'
  );
  const searchUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${query}&retmode=json&retmax=5&sort=date`;

  const searchRes = await fetch(searchUrl, {
    headers: { Accept: 'application/json' },
  });
  if (!searchRes.ok) {
    throw new Error(`PubMed search HTTP status ${searchRes.status}`);
  }

  const searchJson = (await searchRes.json()) as PubMedESearchResponse;
  const ids = searchJson.esearchresult?.idlist ?? [];
  if (ids.length === 0) return [];

  const summaryUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${ids.join(
    ','
  )}&retmode=json`;
  const summaryRes = await fetch(summaryUrl, {
    headers: { Accept: 'application/json' },
  });
  if (!summaryRes.ok) {
    throw new Error(`PubMed summary HTTP status ${summaryRes.status}`);
  }

  const summaryJson = (await summaryRes.json()) as PubMedESummaryResponse;
  const resultObj = summaryJson.result ?? {};
  const nowIso = new Date().toISOString();

  const discovered: WeeklyForensicUpdate[] = [];
  for (const pmid of ids) {
    const item = resultObj[pmid];
    if (!item || !item.title) continue;

    const cleanOriginalTitle = item.title.replace(/\.$/, '').trim();
    const firstAuthor = item.authors?.[0]?.name || 'Equipo de Investigación Forense';
    const journal = item.source || 'Journal of Forensic Nursing / PubMed';

    discovered.push({
      id: `wk-pmid-${pmid}`,
      externalId: `PMID:${pmid}`,
      syncedAt: nowIso,
      source: 'PubMed / NCBI Forensic Nursing',
      titleSpanish: `[Actualización Científica] ${cleanOriginalTitle}`,
      originalTitle: cleanOriginalTitle,
      publicationDate: item.pubdate || new Date().getFullYear().toString(),
      authorsOrInstitution: `${firstAuthor} et al. (${journal})`,
      clinicalSummarySpanish:
        'Publicación científica reciente indexada en PubMed sobre práctica clínica en enfermería forense, preservación de evidencias o atención informada en el trauma (SANE/DFSA).',
      practicalNursingTakeaway:
        'Revisa el artículo original en PubMed para contrastar los hallazgos con los protocolos de los Institutos de Medicina Legal (IMLCF) y las guías de la IAFN.',
      sourceUrl: `https://pubmed.ncbi.nlm.nih.gov/${pmid}/`,
    });
  }

  return discovered;
}

async function runWeeklySync() {
  console.log('Iniciando comprobación semanal de nuevo material forense...');
  const existingIds = new Set(
    WEEKLY_FORENSIC_UPDATES.map((item) => item.externalId)
  );

  let fetchedUpdates: WeeklyForensicUpdate[] = [];
  try {
    fetchedUpdates = await fetchLatestPubMedForensicNursingArticles();
    console.log(
      `Se consultó PubMed satisfactoriamente (${fetchedUpdates.length} artículos recientes analizados).`
    );
  } catch (err) {
    console.warn(
      'Aviso: No se pudo conectar con la API externa en este entorno o sin red; manteniendo catálogo actual.',
      err
    );
  }

  const newItems = fetchedUpdates.filter(
    (item) => !existingIds.has(item.externalId)
  );

  const updatedList = [...newItems, ...WEEKLY_FORENSIC_UPDATES].slice(0, 25);
  const nowIso = new Date().toISOString();

  const fileContent = `export interface WeeklyForensicUpdate {
  id: string;
  externalId: string;
  syncedAt: string;
  source: 'PubMed / NCBI Forensic Nursing' | 'IAFN / Journal of Forensic Nursing' | 'BOE / Ministerio de Justicia (INTCF)';
  titleSpanish: string;
  originalTitle: string;
  publicationDate: string;
  authorsOrInstitution: string;
  clinicalSummarySpanish: string;
  practicalNursingTakeaway: string;
  sourceUrl: string;
}

export const LAST_WEEKLY_SYNC_METADATA = {
  lastCheckedIso: ${JSON.stringify(nowIso)},
  workflowSchedule: 'Cada lunes a las 08:00 UTC (.github/workflows/weekly-content-sync.yml)',
};

export const WEEKLY_FORENSIC_UPDATES: WeeklyForensicUpdate[] = ${JSON.stringify(
    updatedList,
    null,
    2
  )};
`;

  fs.writeFileSync(TARGET_FILE, fileContent, 'utf-8');
  console.log(
    `Sincronización completada. Nuevas entradas añadidas: ${newItems.length}. Total en catálogo: ${updatedList.length}.`
  );
}

runWeeklySync();
