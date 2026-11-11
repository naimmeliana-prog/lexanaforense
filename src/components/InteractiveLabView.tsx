import React, { useMemo, useState } from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  ClipboardCheck,
  Download,
  Image as ImageIcon,
  RotateCcw,
  ShieldCheck,
  Sliders,
  Sparkles,
} from 'lucide-react';
import {
  ExerciseAttemptRecord,
  InteractiveExercise,
  LearningLevelId,
} from '../types/forensic';
import { CHAIN_OF_CUSTODY_STEPS } from '../data/exercisesData';
import { estimatePostMortemIntervalHours } from '../services/storageService';
import diagramCustodyImg from '../assets/images/diagram_chain_custody_1794272208013.jpg';
import schematicDnaImg from '../assets/images/schematic_custody_dna_swabs_1794280689674.jpg';
import schematicToxImg from '../assets/images/schematic_custody_toxicology_tubes_1794280693060.jpg';
import schematicTextileImg from '../assets/images/schematic_custody_textile_evidence_1794280693667.jpg';

interface InteractiveLabViewProps {
  exercises: InteractiveExercise[];
  exerciseAttempts: Record<string, ExerciseAttemptRecord>;
  onRecordAttempt: (exerciseId: string, selectedOptionId: string, isCorrect: boolean) => void;
}

type LabMode = 'casos' | 'tanatologia' | 'custodia' | 'diagramas';

type SchematicTemplateId =
  | 'adn_doble_hisopo'
  | 'toxicologia_sangre_orina'
  | 'prendas_textiles'
  | 'kit_integral_urgencias';

interface SchematicTemplateConfig {
  id: SchematicTemplateId;
  title: string;
  subtitle: string;
  normativeRef: string;
  imageSrc: string;
  imageAlt: string;
  primaryContainer: string;
  secondaryContainer: string;
  dryingOrPreservative: string;
  storageTemp: string;
  criticalWarning: string;
  steps: {
    stepNumber: string;
    phaseTitle: string;
    actionSummary: string;
    technicalSpec: string;
  }[];
}

const CUSTODY_SCHEMATIC_TEMPLATES: Record<SchematicTemplateId, SchematicTemplateConfig> = {
  adn_doble_hisopo: {
    id: 'adn_doble_hisopo',
    title: 'Esquema 1 · Muestras Biológicas de ADN (Técnica del Doble Hisopo)',
    subtitle: 'Saliva en mordeduras, semen, epiteliales de contacto (Touch DNA) y tomas ginecológicas/anorrectales',
    normativeRef: 'Orden JUS/1291/2010 (Art. 15–19) · CNUFADN · Estándar SANE/IAFN',
    imageSrc: schematicDnaImg,
    imageAlt: 'Diagrama esquemático de los 4 pasos de la cadena de custodia en hisopos biológicos de ADN',
    primaryContainer: 'Cajetín ventilado o tubo de cartón transpirable sin aditivos',
    secondaryContainer: 'Sobre de papel Kraft transpirable con precinto inviolable',
    dryingOrPreservative: 'Secado al aire a temperatura ambiente (20–22 °C) durante 30–60 min',
    storageTemp: 'Temperatura ambiente seca (o refrigeración 2–8 °C una vez seco)',
    criticalWarning: 'PROHIBIDO introducir hisopos húmedos en fundas de plástico herméticas (proliferación bacteriana y degradación de ADN). Aplicar Azul de Toluidina SIEMPRE DESPUÉS del hisopado.',
    steps: [
      {
        stepNumber: '01',
        phaseTitle: 'Toma con Doble Hisopo (Sweet)',
        actionSummary: '1º Hisopo humedecido (1–2 gotas H₂O destilada) rotando 15 s + 2º Hisopo seco recolector.',
        technicalSpec: 'Guantes libres de polvo cambiados por cada región anatómica',
      },
      {
        stepNumber: '02',
        phaseTitle: 'Secado al Aire en Gradilla',
        actionSummary: 'Secado obligatorio a temperatura ambiente lejos de corrientes y fuentes de calor.',
        technicalSpec: 'Sin exposición solar directa · Sin tapón plástico hermético',
      },
      {
        stepNumber: '03',
        phaseTitle: 'Embalaje en Papel y Precintado',
        actionSummary: 'Sobre individual de papel Kraft transpirable + cinta de seguridad inviolable.',
        technicalSpec: 'Firma indeleble cruzando mitad precinto y mitad papel (sin grapas)',
      },
      {
        stepNumber: '04',
        phaseTitle: 'Acta de Traspaso al INTCF',
        actionSummary: 'Registro continuo de fecha, hora exacta, nº de colegiada que entrega y agente/perito receptor.',
        technicalSpec: 'Acompañar siempre de muestra indubitada bucal de la víctima',
      },
    ],
  },
  toxicologia_sangre_orina: {
    id: 'toxicologia_sangre_orina',
    title: 'Esquema 2 · Sangre Venosa y Orina (Sumisión Química DFSA y Alcoholemia)',
    subtitle: 'Detección de GHB, benzodiacepinas de diseño, escopolamina, etanol y drogas de abuso',
    normativeRef: 'Orden JUS/1291/2010 (Capítulo Toxicología) · Guía Metodológica DFSA INTCF / UNODC',
    imageSrc: schematicToxImg,
    imageAlt: 'Diagrama esquemático de cadena de custodia en tubos de sangre con tapón gris y orina para toxicología forense',
    primaryContainer: '2 tubos sangre 5 mL (Tapón Gris NaF/KOx) + 2 tubos orina 20 mL polipropileno',
    secondaryContainer: 'Contenedor secundario isotermo rígido con absorbente y precinto',
    dryingOrPreservative: 'Fluoruro Sódico 1–2% + Oxalato Potásico en sangre · Orina sin aditivos',
    storageTemp: 'Cadena de frío estricta entre 2 °C y 8 °C (congelar orina a -20 °C si demora >72 h)',
    criticalWarning: 'PROHIBIDO desinfectar la piel con alcohol etílico antes de la venopunción (usar clorhexidina acuosa o suero). Llenar los tubos al 100% sin dejar cámara de aire.',
    steps: [
      {
        stepNumber: '01',
        phaseTitle: 'Recogida Precoz en Triaje',
        actionSummary: 'Primera micción inmediata (GHB <12 h) y venopunción con antisepsia acuosa sin alcohol.',
        technicalSpec: '2 tubos Tapón Gris 5 mL (NaF/KOx) llenos al 100% + 2 tubos orina 20 mL',
      },
      {
        stepNumber: '02',
        phaseTitle: 'Rotulado y Precintado Individual',
        actionSummary: 'Etiqueta con código único, fecha/hora exacta de extracción y precinto longitudinal sobre el tapón.',
        technicalSpec: 'Código de barras forense + firma de la enfermera extractora',
      },
      {
        stepNumber: '03',
        phaseTitle: 'Custodia en Cadena de Frío',
        actionSummary: 'Almacenamiento inmediato en nevera clínica bajo llave entre 2 °C y 8 °C.',
        technicalSpec: 'Inhibe la glucólisis, fermentación post-mortem y esterasas plasmáticas',
      },
      {
        stepNumber: '04',
        phaseTitle: 'Entrega Refrigerada a Laboratorio',
        actionSummary: 'Transporte refrigerado al INTCF / IMLCF con acta firmada de cadena de custodia.',
        technicalSpec: 'Confirmación por GC-MS / LC-MS/MS (no basta el test rápido de urgencias)',
      },
    ],
  },
  prendas_textiles: {
    id: 'prendas_textiles',
    title: 'Esquema 3 · Prendas Textiles, Lencería y Ropa con Vestigios Biológicos',
    subtitle: 'Preservación de manchas de semen, sangre, saliva, pelos, fibras y partículas traza (Principio de Locard)',
    normativeRef: 'Orden JUS/1291/2010 · Estándar SAFER Act (NIJ) · Protocolo Delitos Sexuales SNS',
    imageSrc: schematicTextileImg,
    imageAlt: 'Diagrama esquemático de preservación de prendas y evidencia textil en bolsas de papel Kraft',
    primaryContainer: 'Doble sábana de desvestido + hojas de papel blanco limpio intercaladas',
    secondaryContainer: 'Bolsas individuales de papel Kraft marrón transpirable por cada prenda',
    dryingOrPreservative: 'Secado completo a temperatura ambiente antes de plegar y embolsar',
    storageTemp: 'Ambiente seco y protegido de la luz a temperatura controlada',
    criticalWarning: 'PROHIBIDO meter ropa húmeda en bolsas de plástico cerradas o sacudir las prendas. Si es imprescindible cortar una prenda en reanimación, NO cortar nunca por los desgarros ni por los orificios de bala/arma blanca.',
    steps: [
      {
        stepNumber: '01',
        phaseTitle: 'Desvestido sobre Doble Sábana',
        actionSummary: 'Sábana inferior de barrera + sábana superior de papel blanco para recoger pelos y fibras caídas.',
        technicalSpec: 'Plegar la sábana superior hacia dentro como un sobre para no perder trazas',
      },
      {
        stepNumber: '02',
        phaseTitle: 'Secado de Manchas Húmedas',
        actionSummary: 'Extender cada prenda húmeda a temperatura ambiente hasta su secado completo.',
        technicalSpec: 'Evita el enmohecimiento y la hidrólisis bacteriana del perfil STR',
      },
      {
        stepNumber: '03',
        phaseTitle: 'Intercalado de Papel y Bolsa Kraft',
        actionSummary: 'Colocar papel blanco limpio entre pliegues y meter cada prenda en su propia bolsa de papel Kraft.',
        technicalSpec: 'Una prenda = Una bolsa de papel independiente (nunca mezclar prendas)',
      },
      {
        stepNumber: '04',
        phaseTitle: 'Precinto Cruzado y Registro',
        actionSummary: 'Cerrar con cinta adhesiva forense (sin grapas), firmar cruzando el borde y anotar en el acta.',
        technicalSpec: 'Custodia en armero/taquilla forense hasta recogida por Policía Científica',
      },
    ],
  },
  kit_integral_urgencias: {
    id: 'kit_integral_urgencias',
    title: 'Esquema 4 · Kit Clínico Integral de Urgencias y Fotodocumentación ABFO',
    subtitle: 'Secuencia completa: Fotografía forense a 90° -> Toma biológica -> Embalaje -> Custodia documental',
    normativeRef: 'Protocolo Común SNS / Ministerio de Justicia · ABFO No. 2 Photomacrographic Standard',
    imageSrc: diagramCustodyImg,
    imageAlt: 'Kit clínico integral de recogida de indicios biológicos con testigo métrico ABFO y sobres de custodia',
    primaryContainer: 'Kit estandarizado con hisopos estériles, escala métrica ABFO nº 2 y tubos precintables',
    secondaryContainer: 'Caja/Estuche oficial de remisión al Instituto de Medicina Legal (IMLCF)',
    dryingOrPreservative: 'Secuencia estricta pre-antisepsia: Fotografiar -> Hisopar -> Curar',
    storageTemp: 'Según matriz (Ambiente seco para ADN seco / 2–8 °C para fluidos líquidos)',
    criticalWarning: 'PROHIBIDO limpiar o aplicar antisépticos (povidona yodada, clorhexidina) sobre una mordedura o lesión defensiva antes de fotografiarla con testigo métrico y tomar el doble hisopo.',
    steps: [
      {
        stepNumber: '01',
        phaseTitle: 'Fijación Fotográfica (ABFO nº 2)',
        actionSummary: 'Panorámica anatómica + primer plano sin regla + primer plano con testigo métrico en L a 90°.',
        technicalSpec: 'En el mismo plano de profundidad de la piel y sin tapar la lesión',
      },
      {
        stepNumber: '02',
        phaseTitle: 'Recogida Pre-Antisepsia',
        actionSummary: 'Obtención de muestras dubitadas e indubitadas antes de lavar, desbridar o suturar.',
        technicalSpec: 'Cambio de guantes entre cada toma para garantizar el principio de mismidad',
      },
      {
        stepNumber: '03',
        phaseTitle: 'Triple Verificación de Sellado',
        actionSummary: 'Comprobar concordancia entre etiqueta del envase primario, sobre exterior y formulario.',
        technicalSpec: 'Identificación inequívoca: ID paciente, región anatómica, fecha y hora',
      },
      {
        stepNumber: '04',
        phaseTitle: 'Trazabilidad Sin Eslabones Vacíos',
        actionSummary: 'Custodia bajo llave hasta entrega nominal con DNI/TIP y firma de ambos intervinientes.',
        technicalSpec: 'Garantiza validez probatoria plena en el Juicio Oral (STS Sala 2ª)',
      },
    ],
  },
};

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

  // Schematic Diagram Generator State
  const [selectedTemplateId, setSelectedTemplateId] =
    useState<SchematicTemplateId>('adn_doble_hisopo');
  const [customSampleCode, setCustomSampleCode] = useState<string>('EXP-2026-URG-001');
  const [customServiceUnit, setCustomServiceUnit] = useState<string>(
    'Servicio de Urgencias Hospitalarias · Box Triaje Forense'
  );
  const [customDestinationLab, setCustomDestinationLab] = useState<string>(
    'INTCF / Instituto de Medicina Legal y Ciencias Forenses (IMLCF)'
  );
  const [activeHighlightedStep, setActiveHighlightedStep] = useState<number>(0);

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

  const currentTemplate = CUSTODY_SCHEMATIC_TEMPLATES[selectedTemplateId];

  const handleDownloadSvgDiagram = () => {
    const t = currentTemplate;
    const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 440" width="960" height="440">
  <rect width="960" height="440" fill="#f8fafc" rx="16" />
  <rect x="20" y="20" width="920" height="72" fill="#0f766e" rx="10" />
  <text x="40" y="48" fill="#ffffff" font-family="sans-serif" font-size="16" font-weight="bold">LEXANA FORENSE · ESQUEMA OFICIAL DE CADENA DE CUSTODIA EN MUESTRAS BIOLÓGICAS</text>
  <text x="40" y="72" fill="#ccfbf1" font-family="monospace" font-size="12">${t.title} | Ref: ${customSampleCode} | Origen: ${customServiceUnit}</text>

  ${t.steps
    .map((s, idx) => {
      const x = 20 + idx * 232;
      return `
  <g transform="translate(${x}, 112)">
    <rect width="220" height="220" fill="#ffffff" stroke="#0f766e" stroke-width="2" rx="12" />
    <rect width="220" height="38" fill="#f0fdfa" rx="12" />
    <text x="16" y="25" fill="#0f766e" font-family="monospace" font-size="13" font-weight="bold">ESLABÓN ${s.stepNumber} · ${s.phaseTitle.slice(0, 22)}</text>
    <text x="16" y="68" fill="#0f172a" font-family="sans-serif" font-size="12" font-weight="bold">${s.phaseTitle}</text>
    <text x="16" y="96" fill="#334155" font-family="sans-serif" font-size="11">${s.actionSummary.slice(0, 36)}</text>
    <text x="16" y="114" fill="#334155" font-family="sans-serif" font-size="11">${s.actionSummary.slice(36, 72)}</text>
    <text x="16" y="132" fill="#334155" font-family="sans-serif" font-size="11">${s.actionSummary.slice(72, 110)}</text>
    <line x1="16" y1="154" x2="204" y2="154" stroke="#e2e8f0" stroke-width="1" />
    <text x="16" y="176" fill="#0f766e" font-family="monospace" font-size="10" font-weight="bold">REQUISITO TÉCNICO:</text>
    <text x="16" y="194" fill="#475569" font-family="sans-serif" font-size="10">${s.technicalSpec.slice(0, 38)}</text>
    <text x="16" y="208" fill="#475569" font-family="sans-serif" font-size="10">${s.technicalSpec.slice(38, 76)}</text>
  </g>`;
    })
    .join('\n')}

  <rect x="20" y="350" width="920" height="70" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5" rx="10" />
  <text x="36" y="374" fill="#9f1239" font-family="sans-serif" font-size="12" font-weight="bold">ALERTA DE VALIDEZ PROBATORIA (${t.normativeRef}):</text>
  <text x="36" y="394" fill="#881337" font-family="sans-serif" font-size="11">${t.criticalWarning.slice(0, 125)}</text>
  <text x="36" y="410" fill="#881337" font-family="monospace" font-size="10">Envase Primario: ${t.primaryContainer} | Conservación: ${t.storageTemp} | Destino: ${customDestinationLab}</text>
</svg>`;

    const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `esquema-custodia-${selectedTemplateId}-${customSampleCode}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8">
      {/* Header & Mode Switcher */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <p className="text-xs font-medium text-teal-700 dark:text-teal-400">
            Entrenamiento Práctico Autodidacta · Casos Reales, Simulación y Generador de Esquemas Visuales
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
          <button
            type="button"
            onClick={() => setLabMode('diagramas')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              labMode === 'diagramas'
                ? 'bg-teal-700 text-white shadow-xs'
                : 'text-teal-800 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-950/40'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Generador Diagramas Custodia (Imagen)</span>
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
                  src={diagramCustodyImg}
                  alt="Kit clínico de recogida de indicios biológicos con hisopos estériles, testigo métrico y bolsas de evidencia"
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

              <button
                type="button"
                onClick={() => setLabMode('diagramas')}
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <ImageIcon className="w-4 h-4" />
                <span>Abrir Generador de Diagramas Esquemáticos (Imagen)</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODE 4: VISUAL SCHEMATIC DIAGRAM GENERATOR FOR BIOLOGICAL SAMPLES CHAIN OF CUSTODY */}
      {labMode === 'diagramas' && (
        <div className="space-y-8">
          {/* Top Controls & Template Selector */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-teal-700 dark:text-teal-400">
                  <Sparkles className="w-4 h-4" />
                  <span>
                    Referencia Visual Generada con Imagen + Esquema Técnico Vectorial Personalizable
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-1">
                  Generador de Diagramas Esquemáticos de Cadena de Custodia en Muestras Biológicas
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                  Selecciona el tipo de muestra biológica forense para visualizar su lámina esquemática de 4 fases (generada mediante Imagen) y personalizar tu propio diagrama técnico descargable según la Orden JUS/1291/2010 del INTCF y estándares SANE/IAFN.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <a
                  href={currentTemplate.imageSrc}
                  download={`lamina-custodia-${selectedTemplateId}.jpg`}
                  className="px-3.5 py-2 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Descargar Lámina (.JPG)</span>
                </a>
                <button
                  type="button"
                  onClick={handleDownloadSvgDiagram}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-teal-700 hover:bg-teal-800 text-white flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Exportar Esquema Personalizado (.SVG)</span>
                </button>
              </div>
            </div>

            {/* 4 Biological Sample Matrix Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {(
                [
                  {
                    id: 'adn_doble_hisopo',
                    badge: 'ADN / SANE',
                    name: 'Hisopos Biológicos (Doble Hisopo Sweet)',
                    desc: 'Saliva en mordeduras, semen, tomas vaginales/anales y ADN de contacto',
                  },
                  {
                    id: 'toxicologia_sangre_orina',
                    badge: 'DFSA / INTCF',
                    name: 'Sangre (Tapón Gris) y Orina (Sumisión Química)',
                    desc: 'GHB, benzodiacepinas, escopolamina, alcoholemia y cadena de frío 2–8 °C',
                  },
                  {
                    id: 'prendas_textiles',
                    badge: 'LOCARD / NIJ',
                    name: 'Prendas Textiles y Ropa Interior con Trazas',
                    desc: 'Desvestido en doble sábana, secado al aire y bolsas de papel Kraft',
                  },
                  {
                    id: 'kit_integral_urgencias',
                    badge: 'ABFO / IMLCF',
                    name: 'Secuencia Integral en Box de Urgencias',
                    desc: 'Fotografía ABFO a 90°, toma pre-antisepsia y triple sellado oficial',
                  },
                ] as const
              ).map((item) => {
                const isSelected = selectedTemplateId === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setSelectedTemplateId(item.id);
                      setActiveHighlightedStep(0);
                    }}
                    className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between space-y-2 ${
                      isSelected
                        ? 'bg-teal-50/70 dark:bg-teal-950/40 border-teal-600 dark:border-teal-500 ring-1 ring-teal-600/30'
                        : 'bg-slate-50/70 dark:bg-slate-950/40 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                    }`}
                  >
                    <div className="space-y-1">
                      <span className="text-[11px] font-mono font-bold text-teal-700 dark:text-teal-400">
                        {item.badge}
                      </span>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">
                        {item.name}
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Custom Metadata Inputs for the Live Schematic */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div>
                <label
                  htmlFor="input-sample-code"
                  className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                >
                  Código de Muestra / Etiqueta de Precinto
                </label>
                <input
                  id="input-sample-code"
                  type="text"
                  value={customSampleCode}
                  onChange={(e) => setCustomSampleCode(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-2 text-xs font-mono text-slate-900 dark:text-slate-100"
                />
              </div>
              <div>
                <label
                  htmlFor="input-service-unit"
                  className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                >
                  Unidad Clínica que Inicia la Custodia
                </label>
                <input
                  id="input-service-unit"
                  type="text"
                  value={customServiceUnit}
                  onChange={(e) => setCustomServiceUnit(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-2 text-xs text-slate-900 dark:text-slate-100"
                />
              </div>
              <div>
                <label
                  htmlFor="input-dest-lab"
                  className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                >
                  Laboratorio Forense Receptor
                </label>
                <input
                  id="input-dest-lab"
                  type="text"
                  value={customDestinationLab}
                  onChange={(e) => setCustomDestinationLab(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-2 text-xs text-slate-900 dark:text-slate-100"
                />
              </div>
            </div>
          </div>

          {/* Main Visual Output: Left = Imagen Infographic Plate, Right = Interactive Step-by-Step Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Column (7 cols): High-Resolution Imagen Schematic Plate + Live Spanish SVG Flow */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="px-5 py-3.5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-900 dark:text-slate-100">
                      Lámina Esquemática Ilustrada (Generada con Imagen)
                    </span>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      {currentTemplate.title} · {currentTemplate.normativeRef}
                    </p>
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-teal-700 dark:text-teal-400">
                    {customSampleCode}
                  </span>
                </div>

                <div className="bg-slate-100 dark:bg-slate-950 aspect-16/9 relative">
                  <img
                    src={currentTemplate.imageSrc}
                    alt={currentTemplate.imageAlt}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Interactive Spanish Vector Flow Diagram */}
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    Diagrama de Flujo Operativo en Español (Haz clic en cada eslabón para inspeccionar)
                  </h4>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    Origen: {customServiceUnit}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {currentTemplate.steps.map((st, idx) => {
                    const isFocused = activeHighlightedStep === idx;
                    return (
                      <div
                        key={st.stepNumber}
                        onClick={() => setActiveHighlightedStep(idx)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setActiveHighlightedStep(idx);
                          }
                        }}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between space-y-2 ${
                          isFocused
                            ? 'bg-teal-50 dark:bg-teal-950/50 border-teal-600 dark:border-teal-400'
                            : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 hover:border-teal-600/50'
                        }`}
                      >
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-[11px] font-mono font-bold text-teal-700 dark:text-teal-400">
                            <span>FASE {st.stepNumber}</span>
                            {idx < 3 && <span aria-hidden="true">→</span>}
                          </div>
                          <div className="text-xs font-bold text-slate-900 dark:text-slate-100">
                            {st.phaseTitle}
                          </div>
                          <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                            {st.actionSummary}
                          </p>
                        </div>
                        <div className="pt-2 border-t border-slate-200/70 dark:border-slate-800 text-[10px] font-mono text-slate-500 dark:text-slate-400">
                          {st.technicalSpec}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): Technical Specifications Card & Invalidating Error Alert */}
            <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 space-y-5">
              <div className="space-y-1 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="text-xs font-mono font-bold text-teal-700 dark:text-teal-400">
                  FICHA TÉCNICA DE ENVASADO Y CUSTODIA · {customSampleCode}
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  {currentTemplate.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {currentTemplate.subtitle}
                </p>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="font-bold text-slate-900 dark:text-white">
                    1. Envase Primario (En contacto con la muestra):
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    {currentTemplate.primaryContainer}
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="font-bold text-slate-900 dark:text-white">
                    2. Envase Secundario y Precintado:
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    {currentTemplate.secondaryContainer}
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="font-bold text-slate-900 dark:text-white">
                    3. Secado Previo / Conservante Químico:
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    {currentTemplate.dryingOrPreservative}
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="font-bold text-slate-900 dark:text-white">
                    4. Rango Térmico y Laboratorio de Destino:
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    {currentTemplate.storageTemp} → <strong>{customDestinationLab}</strong>
                  </p>
                </div>
              </div>

              {/* Selected Step Deep Dive */}
              <div className="p-4 rounded-xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-900 space-y-1.5 text-xs">
                <div className="font-mono font-bold text-teal-800 dark:text-teal-300">
                  DETALLE DEL ESLABÓN SELECCIONADO (FASE{' '}
                  {currentTemplate.steps[activeHighlightedStep].stepNumber}):
                </div>
                <div className="font-bold text-slate-900 dark:text-white text-sm">
                  {currentTemplate.steps[activeHighlightedStep].phaseTitle}
                </div>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  {currentTemplate.steps[activeHighlightedStep].actionSummary}
                </p>
                <p className="text-teal-800 dark:text-teal-300 font-mono text-[11px] pt-1">
                  Estándar: {currentTemplate.steps[activeHighlightedStep].technicalSpec}
                </p>
              </div>

              {/* Critical Alert */}
              <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900 space-y-1 text-xs">
                <div className="font-bold text-rose-800 dark:text-rose-300 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>Error Crítico que Invalida la Prueba ante el Tribunal:</span>
                </div>
                <p className="text-rose-900 dark:text-rose-200 leading-relaxed">
                  {currentTemplate.criticalWarning}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
