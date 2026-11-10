export interface WeeklyForensicUpdate {
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
  lastCheckedIso: '2026-11-09T08:00:00.000Z',
  workflowSchedule: 'Cada lunes a las 08:00 UTC (.github/workflows/weekly-content-sync.yml)',
};

export const WEEKLY_FORENSIC_UPDATES: WeeklyForensicUpdate[] = [
  {
    id: 'wk-init-01',
    externalId: 'IAFN-JFN-2026-01',
    syncedAt: '2026-11-09T08:00:00.000Z',
    source: 'IAFN / Journal of Forensic Nursing',
    titleSpanish:
      'Actualización en la Detección Clínica de Estrangulamiento No Letal en Urgencias y Consulta SANE',
    originalTitle:
      'Non-Fatal Strangulation Assessment in Emergency and Forensic Nursing Practice: Updated Clinical Indicators',
    publicationDate: '2026',
    authorsOrInstitution: 'International Association of Forensic Nurses (IAFN) Clinical Committee',
    clinicalSummarySpanish:
      'Hasta el 50% de las víctimas de estrangulamiento manual o por ligadura no presentan equimosis externas visibles en el cuello en las primeras horas, pero tienen riesgo elevado de disección carotídea o vertebral diferida, edema laríngeo tardío y eventos isquémicos cerebrales.',
    practicalNursingTakeaway:
      'Ante todo relato de presión cervical en violencia de género o agresión sexual, buscar activamente petequias subconjuntivales, palatinas o retroauriculares, preguntar por disfonía, odinofagia o pérdida de control de esfínteres durante la hipoxia y valorar angio-TC de troncos supraaórticos.',
    sourceUrl: 'https://www.forensicnurses.org/',
  },
  {
    id: 'wk-init-02',
    externalId: 'BOE-INTCF-2026-02',
    syncedAt: '2026-11-09T08:00:00.000Z',
    source: 'BOE / Ministerio de Justicia (INTCF)',
    titleSpanish:
      'Criterios de Cribado de Nuevas Sustancias Psicoactivas (NPS) y Benzodiacepinas de Diseño en Sumisión Química',
    originalTitle:
      'Protocolo de Vigilancia Toxicológica de Nuevas Sustancias Psicoactivas en Delitos contra la Libertad Sexual',
    publicationDate: '2026',
    authorsOrInstitution: 'Instituto Nacional de Toxicología y Ciencias Forenses (INTCF)',
    clinicalSummarySpanish:
      'Incorporación de nuevas benzodiacepinas de diseño (bromazolam, etizolam, flubromazolam) y análogos sintéticos de catinonas/disociativos en los paneles de espectrometría de masas de alta resolución (HRMS) de los departamentos del INTCF.',
    practicalNursingTakeaway:
      'Refuerza la directriz de no confiar nunca en los test inmunocromatográficos rápidos de orina de urgencias y preservar siempre dos alícuotas de 20 mL de la primera micción refrigeradas entre 2 °C y 8 °C.',
    sourceUrl: 'https://www.mjusticia.gob.es/',
  },
];
