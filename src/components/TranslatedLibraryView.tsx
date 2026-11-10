import React, { useState } from 'react';
import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  ClipboardCheck,
  Globe,
  ListChecks,
  Search,
  Table,
} from 'lucide-react';
import { CurriculumModule } from '../types/forensic';
import {
  LIBRARY_TECHNICAL_DOCUMENTS,
  LibraryPillarCategory,
} from '../data/libraryData';

interface TranslatedLibraryViewProps {
  modules: CurriculumModule[];
}

export const TranslatedLibraryView: React.FC<TranslatedLibraryViewProps> = ({
  modules,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPillar, setSelectedPillar] = useState<
    LibraryPillarCategory | 'ALL'
  >('ALL');
  const [languageFilter, setLanguageFilter] = useState<'ALL' | 'EN' | 'PT'>(
    'ALL'
  );
  const [collapsedDocIds, setCollapsedDocIds] = useState<string[]>([]);

  const pillars: ('ALL' | LibraryPillarCategory)[] = [
    'ALL',
    'Protocolo SANE (IAFN / DOJ)',
    'Recolección de Evidencia Biológica',
    'Cadena de Custodia en Enfermería',
    'Toxicología Forense y DFSA (UNODC)',
    'Marcos Internacionales (COFEN / ONU)',
  ];

  const toggleDocCollapse = (id: string) => {
    setCollapsedDocIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredDocuments = LIBRARY_TECHNICAL_DOCUMENTS.filter((doc) => {
    const matchesPillar =
      selectedPillar === 'ALL' || doc.pillar === selectedPillar;
    const matchesLang =
      languageFilter === 'ALL' ||
      (languageFilter === 'EN' && doc.originalLanguage.includes('Inglés')) ||
      (languageFilter === 'PT' && doc.originalLanguage.includes('Portugués'));
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      doc.titleSpanish.toLowerCase().includes(q) ||
      doc.originalTitle.toLowerCase().includes(q) ||
      doc.spanishTechnicalTranslation.toLowerCase().includes(q) ||
      doc.spainAndLatamClinicalAdaptation.toLowerCase().includes(q) ||
      doc.structuredSummaries.some(
        (s) =>
          s.keyConcept.toLowerCase().includes(q) ||
          s.clinicalDirective.toLowerCase().includes(q) ||
          s.scientificRationale.toLowerCase().includes(q)
      ) ||
      doc.fullStudyChapters.some(
        (ch) =>
          ch.chapterTitle.toLowerCase().includes(q) ||
          ch.contentParagraphs.some((p) => p.toLowerCase().includes(q))
      );
    return matchesPillar && matchesLang && matchesSearch;
  });

  const moduleExcerpts = modules.flatMap((mod) =>
    mod.translatedExcerpts.map((ex) => ({
      ...ex,
      moduleCode: mod.code,
      moduleTitle: mod.title,
      levelNumber: mod.levelNumber,
    }))
  );

  return (
    <div className="space-y-10">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <p className="text-xs font-medium text-teal-700 dark:text-teal-400">
            Repositorio Técnico Profundo · Protocolo SANE, Recolección Biológica Internacional y Cadena de Custodia en Enfermería
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">
            Biblioteca IAFN y Estándares Forenses Internacionales
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar SANE, TEARS, doble hisopo, custodia..."
              className="pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
            />
          </div>

          <div className="flex items-center gap-1 p-1 bg-slate-200/70 dark:bg-slate-800 rounded-lg">
            {[
              { id: 'ALL', label: 'Todos los idiomas' },
              { id: 'EN', label: 'Inglés (IAFN / NIJ / ONU)' },
              { id: 'PT', label: 'Portugués (COFEN Brasil)' },
            ].map((btn) => (
              <button
                key={btn.id}
                type="button"
                onClick={() => setLanguageFilter(btn.id as 'ALL' | 'EN' | 'PT')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  languageFilter === btn.id
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Pillar Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/70 dark:bg-slate-800 rounded-lg">
          {pillars.map((pillar) => (
            <button
              key={pillar}
              type="button"
              onClick={() => setSelectedPillar(pillar)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                selectedPillar === pillar
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {pillar === 'ALL' ? 'Todos los Pilares Técnicos' : pillar}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setCollapsedDocIds([])}
            className="px-3 py-1.5 text-xs font-semibold text-teal-800 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800 rounded-lg hover:bg-teal-100 transition-colors whitespace-nowrap"
          >
            Desplegar todos los manuales
          </button>
          <button
            type="button"
            onClick={() =>
              setCollapsedDocIds(LIBRARY_TECHNICAL_DOCUMENTS.map((d) => d.id))
            }
            className="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 transition-colors whitespace-nowrap"
          >
            Contraer manuales
          </button>
        </div>
      </div>

      {/* Section 1: Deep Technical Manuals & Structured Summaries */}
      <section className="space-y-8">
        {filteredDocuments.map((doc) => {
          const isExpanded = !collapsedDocIds.includes(doc.id);
          return (
            <article
              key={doc.id}
              className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden"
            >
              {/* Document Header */}
              <div className="p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 tabular-nums">
                    <Globe className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
                    <span className="font-mono font-semibold text-teal-700 dark:text-teal-400">
                      {doc.code}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      {doc.pillar}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{doc.institution}</span>
                    <span aria-hidden="true">·</span>
                    <span>{doc.estimatedReadingMinutes} min de estudio</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                    {doc.titleSpanish}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                    Documento fuente: {doc.originalTitle} ({doc.originalLanguage})
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {doc.executiveSummary}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => toggleDocCollapse(doc.id)}
                  className="px-4 py-2 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-1.5 whitespace-nowrap shrink-0 self-start lg:self-center"
                >
                  <span>{isExpanded ? 'Contraer contenido' : 'Ver contenido completo'}</span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Expanded Full Study Manual Body */}
              {isExpanded && (
                <div className="border-t border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-8 bg-slate-50/50 dark:bg-slate-950/40">
                  {/* Structured Technical Summaries Grid */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <ClipboardCheck className="w-4 h-4 text-teal-700 dark:text-teal-400" />
                      <span>Resúmenes Técnicos Estructurados (Directriz Clínica y Fundamento Científico)</span>
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {doc.structuredSummaries.map((sum, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-3"
                        >
                          <div className="space-y-2">
                            <div className="text-xs font-mono font-bold text-teal-700 dark:text-teal-400">
                              DIRECTRIZ 0{sIdx + 1}
                            </div>
                            <h5 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                              {sum.keyConcept}
                            </h5>
                            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                              <strong className="text-slate-900 dark:text-white">
                                Actuación Enfermera:
                              </strong>{' '}
                              {sum.clinicalDirective}
                            </p>
                          </div>

                          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            <strong className="text-teal-800 dark:text-teal-300">
                              Justificación Científica:
                            </strong>{' '}
                            {sum.scientificRationale}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Side-by-Side Bilingual Standard Comparison */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                      <div className="text-xs font-bold text-teal-700 dark:text-teal-400">
                        Traducción Técnica al Español
                      </div>
                      <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                        {doc.spanishTechnicalTranslation}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                      <div className="text-xs font-bold text-slate-600 dark:text-slate-400">
                        Extracto Literal Original ({doc.originalLanguage})
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">
                        {doc.originalVerbatimExcerpt}
                      </p>
                    </div>
                  </div>

                  {/* Clinical Adaptation for Spain & LatAm */}
                  <div className="p-4 rounded-xl bg-teal-50/60 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-900 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                    <strong className="font-bold text-slate-900 dark:text-white">
                      Armonización con el Protocolo Español (IMLCF / INTCF / SNS) e Hispanoamérica:
                    </strong>{' '}
                    {doc.spainAndLatamClinicalAdaptation}
                  </div>

                  {/* Full Chapters */}
                  <div className="space-y-6">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-teal-700 dark:text-teal-400" />
                      <span>Desarrollo Técnico Profundo por Capítulos</span>
                    </h4>

                    <div className="space-y-5">
                      {doc.fullStudyChapters.map((ch, cIdx) => (
                        <div
                          key={cIdx}
                          className="p-5 sm:p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4"
                        >
                          <h5 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                            {ch.chapterTitle}
                          </h5>
                          <div className="space-y-3 text-sm sm:text-[15px] text-slate-700 dark:text-slate-200 leading-relaxed">
                            {ch.contentParagraphs.map((p, pIdx) => (
                              <p key={pIdx} className="leading-[1.75]">
                                {p}
                              </p>
                            ))}
                          </div>

                          {ch.protocolChecklist && ch.protocolChecklist.length > 0 && (
                            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 space-y-1.5">
                              <div className="text-xs font-bold text-teal-800 dark:text-teal-300 flex items-center gap-1.5">
                                <ListChecks className="w-4 h-4" />
                                <span>Checklist de Verificación Operativa para Enfermería:</span>
                              </div>
                              <ul className="space-y-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300 list-disc list-inside">
                                {ch.protocolChecklist.map((item, iIdx) => (
                                  <li key={iIdx}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Comparative Table */}
                  {doc.comparativeTable && (
                    <div className="space-y-2.5">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <Table className="w-4 h-4 text-teal-700 dark:text-teal-400" />
                        <span>{doc.comparativeTable.title}</span>
                      </h5>
                      <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                        <table className="w-full text-left border-collapse text-xs sm:text-sm">
                          <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700">
                              {doc.comparativeTable.headers.map((h, hIdx) => (
                                <th key={hIdx} className="py-2.5 px-3.5 font-semibold">
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                            {doc.comparativeTable.rows.map((row, rIdx) => (
                              <tr key={rIdx}>
                                {row.map((cell, cellIdx) => (
                                  <td
                                    key={cellIdx}
                                    className={`py-2.5 px-3.5 text-slate-700 dark:text-slate-300 align-top leading-relaxed ${
                                      cellIdx === 0
                                        ? 'font-semibold text-slate-900 dark:text-slate-100'
                                        : ''
                                    }`}
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </section>

      {/* Section 2: Quick Reference of Module Bilingual Excerpts */}
      <section className="space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
          Índice de Citas Bilingües Vinculadas a los 8 Módulos Curriculares
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {moduleExcerpts.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 space-y-3"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span className="font-mono font-semibold text-teal-700 dark:text-teal-400">
                  {item.moduleCode}
                </span>
                <span aria-hidden="true">·</span>
                <span>Nivel {item.levelNumber}</span>
                <span aria-hidden="true">·</span>
                <span>{item.sourceInstitution}</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                {item.originalTitle}
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {item.translatedText}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 italic leading-relaxed">
                Original: {item.originalText}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
