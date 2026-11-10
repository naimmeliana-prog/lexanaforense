import React, { useMemo, useState } from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  ClipboardCheck,
  RotateCcw,
  ShieldCheck,
  Sliders,
} from 'lucide-react';
import {
  ExerciseAttemptRecord,
  InteractiveExercise,
  LearningLevelId,
} from '../types/forensic';
import { CHAIN_OF_CUSTODY_STEPS } from '../data/exercisesData';
import { estimatePostMortemIntervalHours } from '../services/storageService';

interface InteractiveLabViewProps {
  exercises: InteractiveExercise[];
  exerciseAttempts: Record<string, ExerciseAttemptRecord>;
  onRecordAttempt: (exerciseId: string, selectedOptionId: string, isCorrect: boolean) => void;
}

type LabMode = 'casos' | 'tanatologia' | 'custodia';

export const InteractiveLabView: React.FC<InteractiveLabViewProps> = ({
  exercises,
  exerciseAttempts,
  onRecordAttempt,
}) => {
  const [labMode, setLabMode] = useState<LabMode>('casos');
  const [levelFilter, setLevelFilter] = useState<LearningLevelId | 'ALL'>('ALL');
  const [categoryFilter, setCategoryFilter] = useState<string>('ALL');

  // Thanatology Simulator State
  const [rectalTemp, setRectalTemp] = useState<number>(31.5);
  const [ambientTemp, setAmbientTemp] = useState<number>(19.0);
  const [bodyWeight, setBodyWeight] = useState<number>(68);
  const [clothingFactor, setClothingFactor] = useState<number>(1.2);

  // Chain of Custody Interactive Audit State (starts at 0 verified)
  const [verifiedSteps, setVerifiedSteps] = useState<string[]>([]);
  const [selectedSampleScenario, setSelectedSampleScenario] = useState<
    'hisopo_adn' | 'alcoholemia' | 'sumision_orina'
  >('hisopo_adn');
  const [imageError, setImageError] = useState(false);

  const categories = useMemo(() => {
    const set = new Set(exercises.map((e) => e.category));
    return ['ALL', ...Array.from(set)];
  }, [exercises]);

  const filteredExercises = exercises.filter((ex) => {
    const matchLevel = levelFilter === 'ALL' || ex.levelId === levelFilter;
    const matchCat = categoryFilter === 'ALL' || ex.category === categoryFilter;
    return matchLevel && matchCat;
  });

  const totalAttempted = Object.keys(exerciseAttempts).length;
  const totalCorrect = Object.values(exerciseAttempts).filter((a) => a.isCorrect).length;
  const accuracyPercent =
    totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;

  const pmiResult = useMemo(
    () =>
      estimatePostMortemIntervalHours({
        rectalTempCelsius: rectalTemp,
        ambientTempCelsius: ambientTemp,
        bodyWeightKg: bodyWeight,
        clothingFactor,
      }),
    [rectalTemp, ambientTemp, bodyWeight, clothingFactor]
  );

  const toggleCustodyStep = (id: string) => {
    setVerifiedSteps((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-8">
      {/* Header & Mode Switcher */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <p className="text-xs font-medium text-teal-700 dark:text-teal-400">
            Entrenamiento Práctico Autodidacta · Casos Reales y Simulación Forense
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">
            Laboratorio Clínico-Forense y Base de Ejercicios
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-200/70 dark:bg-slate-800 rounded-lg">
          <button
            type="button"
            onClick={() => setLabMode('casos')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
              labMode === 'casos'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Casos Clínicos ({exercises.length})
          </button>
          <button
            type="button"
            onClick={() => setLabMode('tanatologia')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
              labMode === 'tanatologia'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Simulador Cronotanatodiagnóstico
          </button>
          <button
            type="button"
            onClick={() => setLabMode('custodia')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
              labMode === 'custodia'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Auditoría Cadena de Custodia
          </button>
        </div>
      </div>

      {/* MODE 1: INTERACTIVE CLINICAL CASE DATABASE */}
      {labMode === 'casos' && (
        <div className="space-y-6">
          {/* Metrics & Filter Bar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="lg:col-span-5 flex items-center gap-6 tabular-nums">
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Casos Resueltos
                </div>
                <div className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  {totalAttempted} / {exercises.length}
                </div>
              </div>
              <div className="h-8 w-px bg-slate-200 dark:bg-slate-800" />
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Precisión Diagnóstico-Legal
                </div>
                <div className="text-xl font-bold text-teal-700 dark:text-teal-400">
                  {accuracyPercent}% ({totalCorrect} aciertos)
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-wrap items-center justify-end gap-3">
              <select
                aria-label="Filtrar casos por nivel"
                value={levelFilter}
                onChange={(e) =>
                  setLevelFilter(e.target.value as LearningLevelId | 'ALL')
                }
                className="rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-2 text-xs font-medium text-slate-800 dark:text-slate-200"
              >
                <option value="ALL">Todos los niveles</option>
                <option value={LearningLevelId.LEVEL_1}>Nivel 1 · Fundamentos</option>
                <option value={LearningLevelId.LEVEL_2}>Nivel 2 · Criminalística</option>
                <option value={LearningLevelId.LEVEL_3}>Nivel 3 · SANE y Violencia</option>
                <option value={LearningLevelId.LEVEL_4}>Nivel 4 · Patología y Peritaje</option>
              </select>

              <select
                aria-label="Filtrar casos por categoría clínica"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-2 text-xs font-medium text-slate-800 dark:text-slate-200"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === 'ALL' ? 'Todas las áreas clínicas' : cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Exercise Cards */}
          <div className="space-y-6">
            {filteredExercises.map((ex) => {
              const attempt = exerciseAttempts[ex.id];
              return (
                <article
                  key={ex.id}
                  className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 space-y-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 tabular-nums">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono font-semibold text-teal-700 dark:text-teal-400">
                        {ex.code}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{ex.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>Dificultad: {ex.difficulty}</span>
                      <span aria-hidden="true">·</span>
                      <span>{ex.origin}</span>
                    </div>

                    {attempt && (
                      <span
                        className={`font-semibold flex items-center gap-1 ${
                          attempt.isCorrect
                            ? 'text-emerald-700 dark:text-emerald-400'
                            : 'text-amber-700 dark:text-amber-400'
                        }`}
                      >
                        {attempt.isCorrect ? (
                          <>
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Respuesta Correcta</span>
                          </>
                        ) : (
                          <>
                            <AlertTriangle className="w-4 h-4" />
                            <span>Revisión Recomendada</span>
                          </>
                        )}
                      </span>
                    )}
                  </div>

                  {/* Clinical Vignette */}
                  <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-950 text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                    <strong className="font-semibold text-slate-900 dark:text-white block mb-1">
                      Escenario Clínico:
                    </strong>
                    {ex.clinicalVignette}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                    {ex.question}
                  </h3>

                  {/* Options */}
                  <div className="grid grid-cols-1 gap-2.5">
                    {ex.options.map((opt) => {
                      const isSelected = attempt?.selectedOptionId === opt.id;
                      const isCorrectOption = ex.correctOptionId === opt.id;

                      let btnStyle =
                        'border-slate-200 dark:border-slate-800 hover:border-teal-600 dark:hover:border-teal-500 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200';

                      if (attempt) {
                        if (isCorrectOption) {
                          btnStyle =
                            'border-emerald-600 bg-emerald-50/70 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-200 font-medium';
                        } else if (isSelected && !isCorrectOption) {
                          btnStyle =
                            'border-rose-600 bg-rose-50/70 dark:bg-rose-950/40 text-rose-950 dark:text-rose-200';
                        }
                      }

                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() =>
                            onRecordAttempt(
                              ex.id,
                              opt.id,
                              opt.id === ex.correctOptionId
                            )
                          }
                          className={`w-full text-left p-4 rounded-lg border text-sm transition-colors flex items-start gap-3 ${btnStyle}`}
                        >
                          <span className="font-mono font-bold uppercase text-xs mt-0.5 shrink-0">
                            {opt.id})
                          </span>
                          <span className="flex-1 leading-relaxed">{opt.text}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Rationale Feedback */}
                  {attempt && (
                    <div className="p-4 rounded-lg bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2 text-xs leading-relaxed">
                      <div className="font-bold text-slate-900 dark:text-white">
                        Justificación Clínico-Forense:
                      </div>
                      <p className="text-slate-700 dark:text-slate-300">
                        {ex.clinicalRationale}
                      </p>
                      <div className="text-slate-500 dark:text-slate-400 pt-1">
                        <strong>Base Legal y Protocolo:</strong> {ex.legalReference}
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      )}

      {/* MODE 2: TWO-ZONE THANATOLOGICAL SANDBOX (HENSSGE COOLING CURVE) */}
      {labMode === 'tanatologia' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Zone (65% width -> 7 cols): Interactive Visual Stage */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 tabular-nums">
                <span>Modelo Matemático de Enfriamiento Cadavérico (Algor Mortis)</span>
                <span>Tª Fisiológica Basal: 37.2 °C</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                Curva de Disipación Térmica e Intervalo Post-Mortem (IPM)
              </h3>
            </div>

            {/* Live SVG Cooling Curve Diagram */}
            <div className="bg-slate-50 dark:bg-slate-950 rounded-xl p-4 border border-slate-200 dark:border-slate-800">
              <svg
                viewBox="0 0 520 240"
                className="w-full h-56 overflow-visible"
                role="img"
                aria-label="Gráfica de enfriamiento post-mortem según temperatura rectal y ambiental"
              >
                {/* Grid lines */}
                <line x1="50" y1="20" x2="50" y2="200" stroke="#94a3b8" strokeWidth="1" />
                <line x1="50" y1="200" x2="490" y2="200" stroke="#94a3b8" strokeWidth="1" />
                <line
                  x1="50"
                  y1={200 - (ambientTemp / 40) * 170}
                  x2="490"
                  y2={200 - (ambientTemp / 40) * 170}
                  stroke="#0284c7"
                  strokeDasharray="4 4"
                  strokeWidth="1.5"
                />
                <text
                  x="485"
                  y={194 - (ambientTemp / 40) * 170}
                  textAnchor="end"
                  className="text-[10px] fill-sky-600 dark:fill-sky-400 font-mono"
                >
                  Tª Ambiente ({ambientTemp.toFixed(1)} °C)
                </text>

                {/* Sigmoidal Cooling Curve */}
                <path
                  d={`M 50 ${200 - (37.2 / 40) * 170} C 110 ${
                    200 - (36.8 / 40) * 170
                  }, 210 ${200 - ((37.2 + ambientTemp) / 80) * 170}, 480 ${
                    200 - ((ambientTemp + 1.2) / 40) * 170
                  }`}
                  fill="none"
                  stroke="#0f766e"
                  strokeWidth="3"
                />

                {/* Current Rectal Temp Marker */}
                {(() => {
                  const clampedX = Math.min(
                    470,
                    Math.max(65, 50 + (pmiResult.estimatedHoursMean / 36) * 420)
                  );
                  const clampedY = 200 - (rectalTemp / 40) * 170;
                  return (
                    <g>
                      <line
                        x1={clampedX}
                        y1={clampedY}
                        x2={clampedX}
                        y2="200"
                        stroke="#dc2626"
                        strokeDasharray="3 3"
                        strokeWidth="1.5"
                      />
                      <circle cx={clampedX} cy={clampedY} r="6" fill="#dc2626" />
                      <text
                        x={Math.min(430, clampedX + 10)}
                        y={Math.max(30, clampedY - 8)}
                        className="text-[11px] font-mono font-bold fill-slate-900 dark:fill-slate-100"
                      >
                        Tª Rectal: {rectalTemp.toFixed(1)} °C (~{pmiResult.estimatedHoursMean} h)
                      </text>
                    </g>
                  );
                })()}

                {/* Axis Labels */}
                <text x="12" y="32" className="text-[10px] fill-slate-500 font-mono">
                  37°C
                </text>
                <text x="12" y="115" className="text-[10px] fill-slate-500 font-mono">
                  20°C
                </text>
                <text x="12" y="200" className="text-[10px] fill-slate-500 font-mono">
                  0°C
                </text>
                <text x="50" y="220" className="text-[10px] fill-slate-500 font-mono">
                  0 h (Éxitus)
                </text>
                <text x="250" y="220" className="text-[10px] fill-slate-500 font-mono">
                  18 h
                </text>
                <text x="445" y="220" className="text-[10px] fill-slate-500 font-mono">
                  36 h
                </text>
              </svg>
            </div>

            {/* Diagnostic Result Readout */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 tabular-nums">
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  IPM Medio Estimado
                </div>
                <div className="text-2xl font-bold text-teal-700 dark:text-teal-400 font-mono mt-0.5">
                  {pmiResult.estimatedHoursMean} horas
                </div>
              </div>
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Horquilla de Confianza
                </div>
                <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 font-mono mt-0.5">
                  {pmiResult.estimatedHoursMin} – {pmiResult.estimatedHoursMax} h
                </div>
              </div>
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Gradiente Térmico
                </div>
                <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 font-mono mt-0.5">
                  {(37.2 - rectalTemp).toFixed(1)} °C perdidos
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-900 text-xs text-slate-800 dark:text-slate-200">
              <strong>Estadio Tanatológico Correspondiente:</strong>{' '}
              {pmiResult.thanatologicalPhase}
            </div>
          </div>

          {/* Right Zone (35% width -> 5 cols): Control & Concept Deck */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-teal-700 dark:text-teal-400" />
                  <span>Parámetros del Nomograma de Henssge</span>
                </h4>
                <button
                  type="button"
                  onClick={() => {
                    setRectalTemp(31.5);
                    setAmbientTemp(19.0);
                    setBodyWeight(68);
                    setClothingFactor(1.2);
                  }}
                  className="text-xs text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Restablecer</span>
                </button>
              </div>

              {/* Slider 1: Rectal Temp */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium tabular-nums">
                  <label htmlFor="slider-rectal" className="text-slate-700 dark:text-slate-300">
                    Temperatura Rectal Profunda
                  </label>
                  <span className="font-mono font-bold text-teal-700 dark:text-teal-400">
                    {rectalTemp.toFixed(1)} °C
                  </span>
                </div>
                <input
                  id="slider-rectal"
                  type="range"
                  min={18}
                  max={37}
                  step={0.5}
                  value={rectalTemp}
                  onChange={(e) => setRectalTemp(parseFloat(e.target.value))}
                  className="w-full accent-teal-700"
                />
              </div>

              {/* Slider 2: Ambient Temp */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium tabular-nums">
                  <label htmlFor="slider-ambient" className="text-slate-700 dark:text-slate-300">
                    Temperatura Ambiental del Lugar
                  </label>
                  <span className="font-mono font-bold text-sky-700 dark:text-sky-400">
                    {ambientTemp.toFixed(1)} °C
                  </span>
                </div>
                <input
                  id="slider-ambient"
                  type="range"
                  min={5}
                  max={32}
                  step={0.5}
                  value={ambientTemp}
                  onChange={(e) => setAmbientTemp(parseFloat(e.target.value))}
                  className="w-full accent-teal-700"
                />
              </div>

              {/* Slider 3: Body Weight */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium tabular-nums">
                  <label htmlFor="slider-weight" className="text-slate-700 dark:text-slate-300">
                    Masa Corporal Estimada
                  </label>
                  <span className="font-mono font-bold text-slate-900 dark:text-slate-100">
                    {bodyWeight} kg
                  </span>
                </div>
                <input
                  id="slider-weight"
                  type="range"
                  min={40}
                  max={120}
                  step={2}
                  value={bodyWeight}
                  onChange={(e) => setBodyWeight(parseInt(e.target.value, 10))}
                  className="w-full accent-teal-700"
                />
              </div>

              {/* Clothing Insulation Factor Selector */}
              <div className="space-y-2">
                <span className="block text-xs font-medium text-slate-700 dark:text-slate-300">
                  Factor Corrector de Vestimenta / Abrigo:
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { factor: 1.0, label: '1.0 · Desnudo' },
                    { factor: 1.2, label: '1.2 · Ropa ligera' },
                    { factor: 1.4, label: '1.4 · Ropa gruesa' },
                  ].map((item) => (
                    <button
                      key={item.factor}
                      type="button"
                      onClick={() => setClothingFactor(item.factor)}
                      className={`py-2 px-2.5 text-xs font-medium rounded-lg border transition-colors tabular-nums ${
                        clothingFactor === item.factor
                          ? 'bg-teal-700 text-white border-teal-700'
                          : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1.5 leading-relaxed">
              <div className="font-semibold text-slate-900 dark:text-slate-200">
                Nota de Práctica Forense:
              </div>
              <p>
                Durante las primeras 2–3 horas post-mortem se produce la «meseta térmica
                inicial» (plateau de Henssge) por baja conductividad de los tejidos. Nunca
                tomar temperatura rectal antes de recoger hisopos anorrectales si se
                sospecha delito contra la libertad sexual.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* MODE 3: CHAIN OF CUSTODY & PACKAGING AUDITOR */}
      {labMode === 'custodia' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <ClipboardCheck className="w-5 h-5 text-teal-700 dark:text-teal-400" />
                  <span>Protocolo de Verificación de Cadena de Custodia (Orden JUS/1291/2010)</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Audita los 5 eslabones críticos desde la recogida clínica en Urgencias hasta el INTCF / IMLCF.
                </p>
              </div>
              <span className="text-xs font-mono font-bold text-teal-700 dark:text-teal-400 tabular-nums">
                {verifiedSteps.length} / {CHAIN_OF_CUSTODY_STEPS.length} verificados
              </span>
            </div>

            <div className="space-y-3">
              {CHAIN_OF_CUSTODY_STEPS.map((step) => {
                const isVerified = verifiedSteps.includes(step.id);
                return (
                  <div
                    key={step.id}
                    onClick={() => toggleCustodyStep(step.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleCustodyStep(step.id);
                      }
                    }}
                    className={`p-4 rounded-xl border transition-colors cursor-pointer ${
                      isVerified
                        ? 'bg-teal-50/50 dark:bg-teal-950/30 border-teal-600 dark:border-teal-500'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1.5">
                        <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                          Paso 0{step.order}. {step.title}
                        </div>
                        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                          {step.clinicalAction}
                        </p>
                        <p className="text-xs text-rose-700 dark:text-rose-400">
                          <strong>Error invalidante a evitar:</strong> {step.commonMistakeToAvoid}
                        </p>
                      </div>
                      <span className="text-xs font-semibold shrink-0 text-teal-700 dark:text-teal-400">
                        {isVerified ? '✓ Verificado' : 'Marcar'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Panel: Interactive Container Selector + Kit Visual */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 space-y-5">
            <div className="rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 aspect-4/3 relative">
              {!imageError ? (
                <img
                  src="/src/assets/images/diagram_chain_custody_1794272208013.jpg"
                  alt="Kit clínico de recogida de indicios biológicos con hisopos estériles, testigo métrico y bolsas de evidencia"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-100 to-teal-50 dark:from-slate-900 dark:to-teal-950">
                  <ShieldCheck className="w-10 h-10 text-teal-700 dark:text-teal-400 mb-2" />
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    Kit Estándar de Cadena de Custodia Clínica
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                Selector Rápido de Envase y Conservante (INTCF / IAFN)
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: 'hisopo_adn', label: 'Hisopo ADN / Mordedura' },
                  { id: 'alcoholemia', label: 'Sangre Alcohol / Tóxicos' },
                  { id: 'sumision_orina', label: 'Orina Sumisión Química' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() =>
                      setSelectedSampleScenario(
                        tab.id as 'hisopo_adn' | 'alcoholemia' | 'sumision_orina'
                      )
                    }
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors ${
                      selectedSampleScenario === tab.id
                        ? 'bg-teal-700 text-white border-teal-700'
                        : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {selectedSampleScenario === 'hisopo_adn' && (
                <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs space-y-1.5">
                  <div className="font-bold text-slate-900 dark:text-white">
                    Envase requerido: Sobre de papel transpirable + Caja de cartón ventilada
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
                    Técnica de doble hisopo (1º humedecido con agua destilada estéril, 2º seco). Secar al aire a temperatura ambiente antes de cerrar. Prohibido usar tubos cerrados de plástico sin ventilación.
                  </p>
                </div>
              )}

              {selectedSampleScenario === 'alcoholemia' && (
                <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs space-y-1.5">
                  <div className="font-bold text-slate-900 dark:text-white">
                    Envase requerido: 2 Tubos de 5 mL con Fluoruro Sódico + Oxalato Potásico (Tapón Gris)
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
                    Desinfectar la piel con clorhexidina acuosa o suero fisiológico (NUNCA alcohol etílico). Llenar el tubo por completo para evitar cámara de aire y volatilización. Conservar a 2–8 °C.
                  </p>
                </div>
              )}

              {selectedSampleScenario === 'sumision_orina' && (
                <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs space-y-1.5">
                  <div className="font-bold text-slate-900 dark:text-white">
                    Envase requerido: 2 Tubos estériles de polipropileno de 20 mL con precinto de seguridad
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
                    Recoger la primera micción inmediatamente en triaje sin añadir conservantes químicos. Refrigerar a 2–8 °C (o congelar a -20 °C si la remisión al INTCF demora más de 72 h).
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
