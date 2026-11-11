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
  lastCheckedIso: "2026-11-11T06:57:15.811Z",
  workflowSchedule: 'Cada lunes a las 08:00 UTC (.github/workflows/weekly-content-sync.yml)',
};

export const WEEKLY_FORENSIC_UPDATES: WeeklyForensicUpdate[] = [
  {
    "id": "wk-pmid-43000654",
    "externalId": "PMID:43000654",
    "syncedAt": "2026-11-11T06:42:46.143Z",
    "source": "PubMed / NCBI Forensic Nursing",
    "titleSpanish": "[Actualización Científica] Mapping a Quarter-Century of Forensic Nursing Research: A Multi-Database Bibliometric and Science-Mapping Analysis (2000-2025)",
    "originalTitle": "Mapping a Quarter-Century of Forensic Nursing Research: A Multi-Database Bibliometric and Science-Mapping Analysis (2000-2025)",
    "publicationDate": "2026 Nov 9",
    "authorsOrInstitution": "Sirago G et al. (J Forensic Nurs)",
    "clinicalSummarySpanish": "Publicación científica reciente indexada en PubMed sobre práctica clínica en enfermería forense, preservación de evidencias o atención informada en el trauma (SANE/DFSA).",
    "practicalNursingTakeaway": "Revisa el artículo original en PubMed para contrastar los hallazgos con los protocolos de los Institutos de Medicina Legal (IMLCF) y las guías de la IAFN.",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/43000654/"
  },
  {
    "id": "wk-pmid-42984374",
    "externalId": "PMID:42984374",
    "syncedAt": "2026-11-11T06:42:46.143Z",
    "source": "PubMed / NCBI Forensic Nursing",
    "titleSpanish": "[Actualización Científica] Nursing on the Threshold: A Hermeneutic Phenomenological Study of General Psychiatric Nurses' Experiences of Caring for Justice-Involved Individuals With Mental Illness",
    "originalTitle": "Nursing on the Threshold: A Hermeneutic Phenomenological Study of General Psychiatric Nurses' Experiences of Caring for Justice-Involved Individuals With Mental Illness",
    "publicationDate": "2026 Dec",
    "authorsOrInstitution": "Kim SY et al. (Int J Ment Health Nurs)",
    "clinicalSummarySpanish": "Publicación científica reciente indexada en PubMed sobre práctica clínica en enfermería forense, preservación de evidencias o atención informada en el trauma (SANE/DFSA).",
    "practicalNursingTakeaway": "Revisa el artículo original en PubMed para contrastar los hallazgos con los protocolos de los Institutos de Medicina Legal (IMLCF) y las guías de la IAFN.",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42984374/"
  },
  {
    "id": "wk-pmid-42973775",
    "externalId": "PMID:42973775",
    "syncedAt": "2026-11-11T06:42:46.143Z",
    "source": "PubMed / NCBI Forensic Nursing",
    "titleSpanish": "[Actualización Científica] Breaking the silence on drug-facilitated sexual assault: disclosure patterns and barriers to reporting among young people in Spain",
    "originalTitle": "Breaking the silence on drug-facilitated sexual assault: disclosure patterns and barriers to reporting among young people in Spain",
    "publicationDate": "2026",
    "authorsOrInstitution": "Prego-Meleiro P et al. (Front Public Health)",
    "clinicalSummarySpanish": "Publicación científica reciente indexada en PubMed sobre práctica clínica en enfermería forense, preservación de evidencias o atención informada en el trauma (SANE/DFSA).",
    "practicalNursingTakeaway": "Revisa el artículo original en PubMed para contrastar los hallazgos con los protocolos de los Institutos de Medicina Legal (IMLCF) y las guías de la IAFN.",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42973775/"
  },
  {
    "id": "wk-pmid-42970560",
    "externalId": "PMID:42970560",
    "syncedAt": "2026-11-11T06:42:46.143Z",
    "source": "PubMed / NCBI Forensic Nursing",
    "titleSpanish": "[Actualización Científica] Retrospective Chart Review of Law Enforcement Involvement, Survivor Declination, and Forensic Kit Completion Among Sexual Assault Survivors",
    "originalTitle": "Retrospective Chart Review of Law Enforcement Involvement, Survivor Declination, and Forensic Kit Completion Among Sexual Assault Survivors",
    "publicationDate": "2026 Nov 2",
    "authorsOrInstitution": "Carter GA et al. (J Forensic Nurs)",
    "clinicalSummarySpanish": "Publicación científica reciente indexada en PubMed sobre práctica clínica en enfermería forense, preservación de evidencias o atención informada en el trauma (SANE/DFSA).",
    "practicalNursingTakeaway": "Revisa el artículo original en PubMed para contrastar los hallazgos con los protocolos de los Institutos de Medicina Legal (IMLCF) y las guías de la IAFN.",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42970560/"
  },
  {
    "id": "wk-pmid-42967194",
    "externalId": "PMID:42967194",
    "syncedAt": "2026-11-11T06:42:46.143Z",
    "source": "PubMed / NCBI Forensic Nursing",
    "titleSpanish": "[Actualización Científica] A Dimensional Approach to PTSD After Drug-Facilitated Sexual Assault: Impact on Sexual Functioning",
    "originalTitle": "A Dimensional Approach to PTSD After Drug-Facilitated Sexual Assault: Impact on Sexual Functioning",
    "publicationDate": "2026",
    "authorsOrInstitution": "Lizarán M et al. (Depress Anxiety)",
    "clinicalSummarySpanish": "Publicación científica reciente indexada en PubMed sobre práctica clínica en enfermería forense, preservación de evidencias o atención informada en el trauma (SANE/DFSA).",
    "practicalNursingTakeaway": "Revisa el artículo original en PubMed para contrastar los hallazgos con los protocolos de los Institutos de Medicina Legal (IMLCF) y las guías de la IAFN.",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42967194/"
  },
  {
    "id": "wk-init-01",
    "externalId": "IAFN-JFN-2026-01",
    "syncedAt": "2026-11-09T08:00:00.000Z",
    "source": "IAFN / Journal of Forensic Nursing",
    "titleSpanish": "Actualización en la Detección Clínica de Estrangulamiento No Letal en Urgencias y Consulta SANE",
    "originalTitle": "Non-Fatal Strangulation Assessment in Emergency and Forensic Nursing Practice: Updated Clinical Indicators",
    "publicationDate": "2026",
    "authorsOrInstitution": "International Association of Forensic Nurses (IAFN) Clinical Committee",
    "clinicalSummarySpanish": "Hasta el 50% de las víctimas de estrangulamiento manual o por ligadura no presentan equimosis externas visibles en el cuello en las primeras horas, pero tienen riesgo elevado de disección carotídea o vertebral diferida, edema laríngeo tardío y eventos isquémicos cerebrales.",
    "practicalNursingTakeaway": "Ante todo relato de presión cervical en violencia de género o agresión sexual, buscar activamente petequias subconjuntivales, palatinas o retroauriculares, preguntar por disfonía, odinofagia o pérdida de control de esfínteres durante la hipoxia y valorar angio-TC de troncos supraaórticos.",
    "sourceUrl": "https://www.forensicnurses.org/"
  },
  {
    "id": "wk-init-02",
    "externalId": "BOE-INTCF-2026-02",
    "syncedAt": "2026-11-09T08:00:00.000Z",
    "source": "BOE / Ministerio de Justicia (INTCF)",
    "titleSpanish": "Criterios de Cribado de Nuevas Sustancias Psicoactivas (NPS) y Benzodiacepinas de Diseño en Sumisión Química",
    "originalTitle": "Protocolo de Vigilancia Toxicológica de Nuevas Sustancias Psicoactivas en Delitos contra la Libertad Sexual",
    "publicationDate": "2026",
    "authorsOrInstitution": "Instituto Nacional de Toxicología y Ciencias Forenses (INTCF)",
    "clinicalSummarySpanish": "Incorporación de nuevas benzodiacepinas de diseño (bromazolam, etizolam, flubromazolam) y análogos sintéticos de catinonas/disociativos en los paneles de espectrometría de masas de alta resolución (HRMS) de los departamentos del INTCF.",
    "practicalNursingTakeaway": "Refuerza la directriz de no confiar nunca en los test inmunocromatográficos rápidos de orina de urgencias y preservar siempre dos alícuotas de 20 mL de la primera micción refrigeradas entre 2 °C y 8 °C.",
    "sourceUrl": "https://www.mjusticia.gob.es/"
  }
];
