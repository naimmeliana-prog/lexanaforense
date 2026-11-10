import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Circle,
  ClipboardList,
  FileText,
  Globe,
  ListChecks,
  Scale,
  Table,
} from 'lucide-react';
import {
  CurriculumModule,
  LearningLevelId,
  RegionSource,
  UserProgressData,
} from '../types/forensic';
import { LEARNING_LEVELS } from '../data/curriculumData';
import { CurriculumProgressSummary } from '../services/storageService';

interface CurriculumViewProps {
  modules: CurriculumModule[];
  progress: UserProgressData;
  progressSummary: CurriculumProgressSummary;
  showOriginalExcerpts: boolean;
  onToggleSubTopic: (subTopicId: string) => void;
  onSaveModuleNote: (moduleId: string, note: string) => void;
  onNavigateToLab: () => void;
}

export const CurriculumView: React.FC<CurriculumViewProps> = ({
  modules,
  progress,
  progressSummary,
  showOriginalExcerpts,
  onToggleSubTopic,
  onSaveModuleNote,
  onNavigateToLab,
}) => {
  const [selectedLevel, setSelectedLevel] = useState<LearningLevelId | 'ALL'>('ALL');
  const [selectedRegion, setSelectedRegion] = useState<RegionSource | 'ALL'>('ALL');
  // By default expand all modules so the user immediately sees the full real study content
  const [collapsedModuleIds, setCollapsedModuleIds] = useState<string[]>([]);

  const filteredModules = modules.filter((mod) => {
    const matchesLevel = selectedLevel === 'ALL' || mod.levelId === selectedLevel;
    const matchesRegion =
      selectedRegion === 'ALL' || mod.originSources.includes(selectedRegion);
    return matchesLevel && matchesRegion;
  });

  const completedSet = new Set(progress.completedSubTopicIds);

  const toggleModuleCollapse = (moduleId: string) => {
    setCollapsedModuleIds((prev) =>
      prev.includes(moduleId)
        ? prev.filter((id) => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  return (
    <div className="space-y-12">
      {/* Level Progression Strip */}
      <section aria-labelledby="levels-heading" className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium text-teal-700 dark:text-teal-400">
              Temario Completo de Estudio · 8 Módulos y 15 Unidades Clínico-Forenses Desarrolladas
            </p>
            <h2
              id="levels-heading"
              className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1"
            >
              Manual Autodidacta de Especialización en Enfermería Forense
            </h2>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-200/70 dark:bg-slate-800 rounded-lg">
            <button
              type="button"
              onClick={() => setSelectedLevel('ALL')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                selectedLevel === 'ALL'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Todos los niveles
            </button>
            {LEARNING_LEVELS.map((lvl) => (
              <button
                key={lvl.id}
                type="button"
                onClick={() => setSelectedLevel(lvl.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 tabular-nums ${
                  selectedLevel === lvl.id
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Nivel {lvl.number}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Level Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {LEARNING_LEVELS.map((level) => {
            const stats = progressSummary.byLevel[level.id];
            const isSelected = selectedLevel === level.id;
            return (
              <div
                key={level.id}
                onClick={() =>
                  setSelectedLevel((prev) => (prev === level.id ? 'ALL' : level.id))
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedLevel((prev) => (prev === level.id ? 'ALL' : level.id));
                  }
                }}
                className={`p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-teal-50/60 dark:bg-teal-950/30 border-teal-600 dark:border-teal-500'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 tabular-nums">
                    <span>0{level.number}. Nivel Formativo</span>
                    <span>
                      {stats.completedSubTopics}/{stats.totalSubTopics} unidades ·{' '}
                      {stats.percentage}%
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 leading-snug">
                    {level.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {level.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-teal-600 dark:bg-teal-400 transition-all duration-300"
                      style={{ width: `${stats.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Regional Standard Filter & Expand/Collapse All Bar */}
      <section className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/70 dark:bg-slate-800 rounded-lg">
          {(
            [
              { id: 'ALL', label: 'Todas las fuentes' },
              { id: RegionSource.SPAIN, label: 'España (IMLCF / LECrim)' },
              { id: RegionSource.LATAM, label: 'Hispanoamérica' },
              { id: RegionSource.USA_IAFN, label: 'EE.UU. (IAFN / SANE Traducido)' },
            ] as const
          ).map((reg) => (
            <button
              key={reg.id}
              type="button"
              onClick={() => setSelectedRegion(reg.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                selectedRegion === reg.id
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {reg.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setCollapsedModuleIds([])}
            className="px-3 py-1.5 text-xs font-semibold text-teal-800 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800 rounded-lg hover:bg-teal-100 transition-colors whitespace-nowrap"
          >
            Desplegar todos los módulos
          </button>
          <button
            type="button"
            onClick={() => setCollapsedModuleIds(modules.map((m) => m.id))}
            className="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 transition-colors whitespace-nowrap"
          >
            Contraer módulos
          </button>
        </div>
      </section>

      {/* Modules Full Study List */}
      <section aria-label="Módulos del plan de estudios" className="space-y-8">
        {filteredModules.map((mod) => {
          const isExpanded = !collapsedModuleIds.includes(mod.id);
          const completedInMod = mod.subTopics.filter((st) =>
            completedSet.has(st.id)
          ).length;
          const totalInMod = mod.subTopics.length;
          const modPercent =
            totalInMod > 0 ? Math.round((completedInMod / totalInMod) * 100) : 0;

          return (
            <article
              key={mod.id}
              className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden"
            >
              {/* Module Header */}
              <div className="p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white dark:bg-slate-900">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 tabular-nums">
                    <span className="font-mono font-semibold text-teal-700 dark:text-teal-400">
                      {mod.code}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>Nivel {mod.levelNumber}</span>
                    <span aria-hidden="true">·</span>
                    <span>{mod.estimatedHours} h de estudio</span>
                    <span aria-hidden="true">·</span>
                    <span>{mod.originSources.join(' / ')}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                    {mod.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {mod.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <div className="text-right tabular-nums">
                    <div className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                      {completedInMod} de {totalInMod} unidades completadas ({modPercent}%)
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {modPercent === 100
                        ? 'Módulo completado'
                        : modPercent === 0
                        ? 'Pendiente de iniciar (0%)'
                        : 'En estudio'}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleModuleCollapse(mod.id)}
                    className="px-4 py-2 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-1.5 whitespace-nowrap shrink-0"
                  >
                    <span>{isExpanded ? 'Ocultar contenido' : 'Ver contenido completo'}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Expanded Module Body with Full Textbook Content */}
              {isExpanded && (
                <div className="border-t border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-10 bg-slate-50/60 dark:bg-slate-950/40">
                  {/* Clinical Sub-Topics Full Lessons */}
                  <div className="space-y-8">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-teal-700 dark:text-teal-400" />
                      <span>
                        Desarrollo Teórico-Práctico Completo, Protocolos Paso a Paso y Tablas Clínicas
                      </span>
                    </h4>

                    <div className="space-y-8">
                      {mod.subTopics.map((st, idx) => {
                        const isChecked = completedSet.has(st.id);
                        return (
                          <div
                            key={st.id}
                            className="p-6 sm:p-7 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-6"
                          >
                            {/* Unit Title & Completion Toggle */}
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                              <div className="space-y-1.5">
                                <div className="text-xs font-mono font-semibold text-teal-700 dark:text-teal-400">
                                  UNIDAD {mod.code}.{idx + 1}
                                </div>
                                <h5 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                                  {st.title}
                                </h5>
                                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                                  {st.clinicalProtocolSummary}
                                </p>
                              </div>

                              <button
                                type="button"
                                onClick={() => onToggleSubTopic(st.id)}
                                className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 border ${
                                  isChecked
                                    ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700'
                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-teal-600'
                                }`}
                              >
                                {isChecked ? (
                                  <>
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                    <span>Unidad Estudiada ✓</span>
                                  </>
                                ) : (
                                  <>
                                    <Circle className="w-4 h-4 text-slate-400" />
                                    <span>Marcar como estudiada</span>
                                  </>
                                )}
                              </button>
                            </div>

                            {/* Legal Framework Reference Box */}
                            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                              <Scale className="w-4 h-4 mt-0.5 shrink-0 text-teal-700 dark:text-teal-400" />
                              <div>
                                <strong className="font-semibold text-slate-900 dark:text-white">
                                  Base Legal y Normativa Aplicable:
                                </strong>{' '}
                                {st.legalFrameworkNote}
                              </div>
                            </div>

                            {/* Full Multi-Paragraph Theoretical Content */}
                            <div className="space-y-4">
                              <h6 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                1. Fundamento Clínico, Forense y Médico-Legal
                              </h6>
                              <div className="space-y-3.5 text-sm sm:text-[15px] text-slate-800 dark:text-slate-200 leading-relaxed">
                                {st.theoreticalContent.map((paragraph, pIdx) => (
                                  <p key={pIdx} className="leading-[1.75]">
                                    {paragraph}
                                  </p>
                                ))}
                              </div>
                            </div>

                            {/* Step-by-Step Clinical Protocol */}
                            {st.stepByStepProtocol && st.stepByStepProtocol.length > 0 && (
                              <div className="space-y-3 pt-2">
                                <h6 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                                  <ClipboardList className="w-4 h-4 text-teal-700 dark:text-teal-400" />
                                  <span>2. Protocolo Operativo de Actuación Paso a Paso</span>
                                </h6>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                  {st.stepByStepProtocol.map((stepObj, sIdx) => (
                                    <div
                                      key={sIdx}
                                      className="p-4 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 space-y-1"
                                    >
                                      <div className="text-xs font-bold text-teal-800 dark:text-teal-300">
                                        {stepObj.step}
                                      </div>
                                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                                        {stepObj.detail}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Clinical Reference Tables */}
                            {st.clinicalTables &&
                              st.clinicalTables.map((table, tIdx) => (
                                <div key={tIdx} className="space-y-2.5 pt-2">
                                  <h6 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                                    <Table className="w-4 h-4 text-teal-700 dark:text-teal-400" />
                                    <span>Tabla de Referencia: {table.title}</span>
                                  </h6>
                                  <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
                                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                                      <thead>
                                        <tr className="bg-slate-100 dark:bg-slate-800/90 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700">
                                          {table.headers.map((h, hIdx) => (
                                            <th
                                              key={hIdx}
                                              className="py-2.5 px-3.5 font-semibold"
                                            >
                                              {h}
                                            </th>
                                          ))}
                                        </tr>
                                      </thead>
                                      <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
                                        {table.rows.map((row, rIdx) => (
                                          <tr
                                            key={rIdx}
                                            className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40"
                                          >
                                            {row.map((cell, cIdx) => (
                                              <td
                                                key={cIdx}
                                                className={`py-2.5 px-3.5 text-slate-700 dark:text-slate-300 align-top leading-relaxed ${
                                                  cIdx === 0
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
                              ))}

                            {/* Practical Self-Verification Checklist */}
                            {st.practicalChecklist && st.practicalChecklist.length > 0 && (
                              <div className="p-4 rounded-lg bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200/70 dark:border-teal-900 space-y-2">
                                <div className="text-xs font-bold text-teal-900 dark:text-teal-300 flex items-center gap-1.5">
                                  <ListChecks className="w-4 h-4" />
                                  <span>Puntos Clave de Dominio Autodidacta:</span>
                                </div>
                                <ul className="space-y-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300 list-disc list-inside">
                                  {st.practicalChecklist.map((item, cIdx) => (
                                    <li key={cIdx}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Full Official Protocols & Translated International Excerpts */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                    {/* Official Documents with Full Sections */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-teal-700 dark:text-teal-400" />
                        <span>Documentos Oficiales y Guías Clínicas Desarrolladas</span>
                      </h4>

                      <div className="space-y-4">
                        {mod.resources.map((res) => (
                          <div
                            key={res.id}
                            className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4"
                          >
                            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 tabular-nums">
                              <span>{res.type}</span>
                              <span aria-hidden="true">·</span>
                              <span>{res.origin}</span>
                              <span aria-hidden="true">·</span>
                              <span>{res.estimatedMinutes} min de estudio</span>
                            </div>
                            <h5 className="text-base font-bold text-slate-900 dark:text-slate-100">
                              {res.title}
                            </h5>
                            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                              {res.summary}
                            </p>

                            {/* Full Document Sections */}
                            {res.fullDocumentSections &&
                              res.fullDocumentSections.map((sec, sIdx) => (
                                <div
                                  key={sIdx}
                                  className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 space-y-1.5"
                                >
                                  <div className="text-xs font-bold text-slate-900 dark:text-slate-100">
                                    {sec.sectionTitle}
                                  </div>
                                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                                    {sec.body}
                                  </p>
                                </div>
                              ))}

                            <div className="pt-1">
                              <div className="text-xs font-semibold text-teal-800 dark:text-teal-400 mb-1">
                                Conclusiones Operativas:
                              </div>
                              <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300 list-disc list-inside">
                                {res.keyTakeaways.map((kt, i) => (
                                  <li key={i}>{kt}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Translated International Standards */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                        <Globe className="w-4 h-4 text-teal-700 dark:text-teal-400" />
                        <span>Extractos Internacionales Traducidos (IAFN / COFEN / Interpol)</span>
                      </h4>

                      <div className="space-y-4">
                        {mod.translatedExcerpts.map((tr) => (
                          <div
                            key={tr.id}
                            className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3.5"
                          >
                            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                              <span>{tr.sourceInstitution}</span>
                              <span aria-hidden="true">·</span>
                              <span>{tr.originalLanguage}</span>
                            </div>
                            <h5 className="text-base font-bold text-slate-900 dark:text-slate-100">
                              {tr.originalTitle}
                            </h5>

                            <div className="space-y-2.5">
                              <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-950 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                                <span className="font-semibold text-teal-700 dark:text-teal-400 block mb-1">
                                  Traducción Clínica al Español:
                                </span>
                                {tr.translatedText}
                              </div>

                              {showOriginalExcerpts && (
                                <div className="p-3.5 rounded-lg bg-slate-100/70 dark:bg-slate-800/50 text-xs sm:text-sm text-slate-600 dark:text-slate-400 italic leading-relaxed">
                                  <span className="not-italic font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                                    Texto Original ({tr.originalLanguage}):
                                  </span>
                                  {tr.originalText}
                                </div>
                              )}
                            </div>

                            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                              <strong className="text-slate-800 dark:text-slate-200">
                                Equivalencia en España / SNS:
                              </strong>{' '}
                              {tr.clinicalAdaptationSpain}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Personal Study Notes per Module + Practice Trigger */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col lg:flex-row gap-6 items-start">
                    <div className="w-full lg:flex-1 space-y-2">
                      <label
                        htmlFor={`note-${mod.id}`}
                        className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
                      >
                        Cuaderno de Apuntes Personales del Módulo ({mod.code}) — Guardado automático en local
                      </label>
                      <textarea
                        id={`note-${mod.id}`}
                        rows={3}
                        value={progress.moduleNotes[mod.id] || ''}
                        onChange={(e) => onSaveModuleNote(mod.id, e.target.value)}
                        placeholder="Anota aquí esquemas, teléfonos del Juzgado de Guardia de tu hospital, dudas o resúmenes personales..."
                        className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3.5 py-2.5 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-600"
                      />
                    </div>

                    <div className="w-full lg:w-72 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shrink-0">
                      <div className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                        Autoevaluación Práctica (18 Casos)
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Pon a prueba los protocolos de este módulo con los 18 casos clínicos reales y el simulador de cadena de custodia.
                      </p>
                      <button
                        type="button"
                        onClick={onNavigateToLab}
                        className="w-full py-2 px-4 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-500 rounded-lg transition-colors whitespace-nowrap"
                      >
                        Practicar Casos de Nivel {mod.levelNumber}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </section>
    </div>
  );
};
