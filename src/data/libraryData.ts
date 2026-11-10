import { RegionSource } from '../types/forensic';

export type LibraryPillarCategory =
  | 'Protocolo SANE (IAFN / DOJ)'
  | 'Recolección de Evidencia Biológica'
  | 'Cadena de Custodia en Enfermería'
  | 'Toxicología Forense y DFSA (UNODC)'
  | 'Marcos Internacionales (COFEN / ONU)';

export interface StructuredTechnicalSummary {
  keyConcept: string;
  clinicalDirective: string;
  scientificRationale: string;
}

export interface LibraryTechnicalDocument {
  id: string;
  code: string;
  pillar: LibraryPillarCategory;
  titleSpanish: string;
  originalTitle: string;
  institution: string;
  originalLanguage:
    | 'Inglés (EE.UU. - IAFN / ANA / NIJ)'
    | 'Portugués (Brasil - COFEN)'
    | 'Inglés (ONU / UNODC / ENFSI)';
  publicationYear: string;
  targetRegionAdaptation: RegionSource;
  estimatedReadingMinutes: number;
  executiveSummary: string;
  structuredSummaries: StructuredTechnicalSummary[];
  originalVerbatimExcerpt: string;
  spanishTechnicalTranslation: string;
  spainAndLatamClinicalAdaptation: string;
  fullStudyChapters: {
    chapterTitle: string;
    contentParagraphs: string[];
    protocolChecklist: string[];
  }[];
  comparativeTable: {
    title: string;
    headers: string[];
    rows: string[][];
  };
}

export const LIBRARY_TECHNICAL_DOCUMENTS: LibraryTechnicalDocument[] = [
  // ============================================================================
  // PILAR 1: PROTOCOLO SANE (SEXUAL ASSAULT NURSE EXAMINER - IAFN / U.S. DOJ)
  // ============================================================================
  {
    id: 'lib-sane-01',
    code: 'IAFN-SANE-01',
    pillar: 'Protocolo SANE (IAFN / DOJ)',
    titleSpanish:
      'Protocolo Clínico-Forense SANE (Sexual Assault Nurse Examiner): Valoración Integral, Anogenital y Cuidados Informados en el Trauma',
    originalTitle:
      'IAFN Sexual Assault Nurse Examiner (SANE-A / SANE-P) Education Guidelines & U.S. DOJ National Protocol for Sexual Assault Medical Forensic Examinations',
    institution:
      'International Association of Forensic Nurses (IAFN) & U.S. Department of Justice',
    originalLanguage: 'Inglés (EE.UU. - IAFN / ANA / NIJ)',
    publicationYear: 'Estándar Consolidado IAFN / DOJ',
    targetRegionAdaptation: RegionSource.USA_IAFN,
    estimatedReadingMinutes: 95,
    executiveSummary:
      'Compendio técnico exhaustivo del protocolo norteamericano SANE para enfermeras examinadoras de violencia sexual en pacientes adultos/adolescentes (SANE-A) y pediátricos (SANE-P). Desarrolla la entrevista forense basada en la neurobiología del trauma, la exploración física cráneo-caudal, la nomenclatura anogenital TEARS, la fotocolposcopia, la tinción nuclear con azul de toluidina al 1% y la profilaxis farmacológica post-exposición.',
    structuredSummaries: [
      {
        keyConcept: 'Prioridad Clínica y Consentimiento Informado Fraccionado',
        clinicalDirective:
          'La estabilización hemodinámica, respiratoria y quirúrgica precede siempre a la toma de muestras. El consentimiento informado es progresivo y revocable en cada paso de la exploración.',
        scientificRationale:
          'Devolver el control de las decisiones sobre su propio cuerpo a la víctima reduce la hiperactivación amigdalina y previene la victimización secundaria institucional.',
      },
      {
        keyConcept: 'Nomenclatura Anogenital Estandarizada (Acrónimo TEARS y Reloj)',
        clinicalDirective:
          'Describir toda lesión según el acrónimo TEARS (Tear/Desgarro, Ecchymosis/Equimosis, Abrasion/Abrasión, Redness/Eritema, Swelling/Edema) ubicándola en la esfera del reloj en litotomía (12 h clítoris, 6 h horquilla vulvar posterior).',
        scientificRationale:
          'Entre el 65% y el 75% de las lesiones agudas por penetración no consentida asientan entre las 5 y las 7 horas (horquilla posterior y fosa navicular); sin embargo, hasta el 60-70% de las exploraciones son macroscópicamente normales por la elasticidad mucosa.',
      },
      {
        keyConcept: 'Tinción Nuclear con Azul de Toluidina al 1% (Secuencia Estricta)',
        clinicalDirective:
          'Aplicar solución acuosa de azul de toluidina al 1% en horquilla vulvar y fosa navicular ÚNICAMENTE DESPUÉS de haber finalizado toda la toma de hisopos para estudio de ADN.',
        scientificRationale:
          'El azul de toluidina se fija a los núcleos de las células parabasales expuestas en microlaceraciones, pero si entra en contacto previo con los hisopos puede inhibir la enzima Taq polimerasa durante la PCR genética.',
      },
    ],
    originalVerbatimExcerpt:
      '"The SANE coordinates trauma-informed, patient-centered care with meticulous forensic evidence collection. The examiner must obtain informed consent for each component of the exam, document anogenital findings using the standardized clock-face and TEARS classification, apply 1% toluidine blue dye strictly after all DNA swabs have been collected, and clearly state in the medical record that a normal anogenital exam does not exclude sexual assault."',
    spanishTechnicalTranslation:
      '«La enfermera SANE coordina los cuidados centrados en el paciente e informados en el trauma con la recolección meticulosa de evidencia forense. La examinadora debe obtener el consentimiento informado para cada componente del examen, documentar los hallazgos anogenitales utilizando la clasificación estandarizada de la esfera del reloj y el sistema TEARS, aplicar el colorante azul de toluidina al 1% estrictamente después de haber recolectado todos los hisopos de ADN, y dejar constancia expresa en la historia clínica de que una exploración anogenital normal no excluye la agresión sexual.»',
    spainAndLatamClinicalAdaptation:
      'En España (Protocolo Nacional de Actuación Médico-Forense y Policial en Delitos contra la Libertad Sexual y Ley Orgánica 10/2022), la exploración se ejecuta mediante el "Acto Único Coordinado" entre el Médico Forense de guardia del IMLCF y el equipo hospitalario (Ginecología y Enfermería/Matrona). La enfermera lidera el triaje confidencial, la preservación temprana de la primera micción, la preparación del kit libre de ADN exógeno, la asistencia en la toma de muestras y la administración de profilaxis post-exposición (PPE frente a VIH, ITS y anticoncepción de urgencia).',
    fullStudyChapters: [
      {
        chapterTitle:
          '1. Neurobiología del Trauma Agudo y Entrevista Clínica Forense',
        contentParagraphs: [
          'Ante una agresión sexual, la descarga catecolaminérgica y de cortisol mediada por el circuito amígdala-hipotálamo-tronco encefálico activa respuestas reflejas de supervivencia entre las que destaca la "inmovilidad tónica" (tonic immobility o freezing): una parálisis motora y vocal involuntaria en la que la víctima es incapaz de gritar, moverse o defenderse. Al mismo tiempo, la sobrecarga de glucocorticoides sobre los receptores del hipocampo altera la codificación secuencial de la memoria episódica, preservando recuerdos sensoriales fragmentados (olores, sonidos, texturas) pero dificultando un relato lineal inmediato.',
          'La entrevista enfermera SANE comienza en un box privado sin acompañantes, utilizando preguntas abiertas no sugestivas («Cuénteme qué ha sucedido desde lo que usted recuerde») y absteniéndose de preguntas culpabilizadoras («¿Por qué no pidió ayuda?»). A continuación, se formulan preguntas clínicas dirigidas exclusivamente a guiar la recolección de indicios: orificios anatómicos implicados (vaginal, oral, anal), uso de preservativo o lubricantes, existencia de eyaculación, contacto salival (besos, mordeduras o succión en cuello, mamas o abdomen), maniobras de estrangulamiento cervical (que obligan a buscar petequias en conjuntivas, mucosa oral y retroauricular, así como disfonía u odinofagia) y actividades post-agresión (ducha, lavado genital, micción, defecación, ingesta de líquidos, cepillado dental o cambio de ropa).',
        ],
        protocolChecklist: [
          'Ubicar a la paciente inmediatamente en consulta reservada sin espera en sala general.',
          'Explicar la naturaleza fisiológica de la inmovilidad tónica ("freezing") para erradicar el sentimiento de culpa.',
          'Registrar entre comillas las palabras textuales de la paciente respecto al mecanismo traumático y los síntomas actuales.',
          'Valorar signos de compresión cervical (estrangulamiento no letal): petequias tarsales, dolor a la palpación del hueso hioides/cartílago tiroides y cambios en la voz.',
        ],
      },
      {
        chapterTitle:
          '2. Exploración Anogenital Sistemática, Fotocolposcopia y Tinción Nuclear',
        contentParagraphs: [
          'Con la paciente en posición de litotomía (o en decúbito supino en "posición de rana" / genupectoral en edad pediátrica SANE-P), la inspección anogenital sigue una secuencia anatómica externa a interna: monte de Venus, labios mayores, labios menores, clítoris y capuchón clitoridiano, meato uretral, vestíbulo vaginal, himen / carúnculas mirtiformes, fosa navicular, horquilla vulvar posterior (6 horas del reloj), cuerpo perineal y pliegues radiados perianales.',
          'Para exponer el borde himeneal y la fosa navicular sin causar dolor ni microtraumatismos yatrogénicos, se emplea la "maniobra de separación y tracción labial" (sujetando suavemente el tercio inferior de los labios mayores entre el pulgar y el índice y traccionando ligeramente hacia afuera y hacia abajo). Si se requiere examen especular para visualizar paredes vaginales y cérvix (y tomar hisopos endocervicales), el espéculo NUNCA debe lubricarse con geles hidrosolubles, vaselina ni antisépticos antes de la toma de ADN, pues actúan como inhibidores de la PCR y espermicidas; se humedece únicamente con agua destilada estéril o suero fisiológico estéril templado.',
          'Finalizada la recogida de todos los hisopos genéticos, se aplica Azul de Toluidina acuoso al 1% con un hisopo sobre la horquilla vulvar posterior y fosa navicular, se deja actuar 60 segundos y se decolora suavemente con lubricante hidrosoluble o ácido acético al 1% sin frotar. La captación lineal o puntiforme de color azul oscuro intenso confirma daño epitelial con exposición de células nucleadas de estratos profundos (diferenciándolo del simple eritema vascular que no capta colorante).',
        ],
        protocolChecklist: [
          'Utilizar la nomenclatura de la esfera del reloj (12 h pubis/clítoris, 6 h horquilla posterior, 3 h izquierda de la paciente, 9 h derecha de la paciente).',
          'Clasificar cada hallazgo con el sistema TEARS indicando dimensiones en milímetros.',
          'Humedecer el espéculo exclusivamente con agua estéril o suero fisiológico templado antes de los hisopos de ADN.',
          'Aplicar el Azul de Toluidina al 1% siempre DESPUÉS de haber completado la toma de muestras de ADN.',
        ],
      },
      {
        chapterTitle:
          '3. Profilaxis Farmacológica Post-Exposición (ITS, VIH, Hepatitis B) y Seguimiento',
        contentParagraphs: [
          'Una vez concluida la recogida forense, la enfermera administra el tratamiento preventivo integral conforme a las guías CDC / OMS / Ministerio de Sanidad: 1) Anticoncepción hormonal de urgencia en toda mujer en edad fértil con riesgo de embarazo (Acetato de Ulipristal 30 mg dosis única oral eficaz hasta 120 h, o Levonorgestrel 1,5 mg dosis única eficaz hasta 72 h, previo test de embarazo basal en orina para descartar gestación preexistente); 2) Profilaxis empírica frente a Infecciones de Transmisión Sexual bacterianas y protozoarias (Ceftriaxona 500 mg IM dosis única para Neisseria gonorrhoeae + Azitromicina 1 g VO o Doxiciclina 100 mg/12 h 7 días para Chlamydia trachomatis + Metronidazol 2 g VO para Trichomonas vaginalis); 3) Profilaxis Post-Exposición frente al VIH (PPE con triple terapia antirretroviral iniciada lo antes posible, idealmente en las primeras 4–24 horas y siempre antes de las 72 horas, mantenida durante 28 días); y 4) Inmunoprofilaxis frente a Hepatitis B (vacuna VHB ± inmunoglobulina específica anti-HBs según estado vacunal) y vacuna frente a VPH y tétanos si hay heridas contaminadas.',
        ],
        protocolChecklist: [
          'Realizar test de embarazo basal y serologías basales (VIH, VHB, VHC, Lúes) antes de iniciar la profilaxis.',
          'Iniciar la PPE frente al VIH dentro de la ventana crítica de las primeras 72 horas.',
          'Entregar informe clínico y plan de seguimiento en consultas de Enfermedades Infecciosas, Ginecología y Salud Mental.',
        ],
      },
    ],
    comparativeTable: {
      title:
        'Resumen Estructurado del Protocolo SANE (IAFN) frente al Protocolo Estatal Español (IMLCF / SNS)',
      headers: [
        'Dimensión Clínica',
        'Protocolo SANE (IAFN / U.S. DOJ)',
        'Protocolo Nacional en España (IMLCF / INTCF / SNS)',
      ],
      rows: [
        [
          'Liderazgo de la exploración',
          'Enfermera especialista SANE-A / SANE-P acreditada con autonomía pericial completa',
          'Exploración Única Conjunta: Médico Forense (IMLCF) + Ginecología + Enfermería / Matrona hospitalaria',
        ],
        [
          'Documentación de lesiones anogenitales',
          'Sistema TEARS + Esfera del reloj + Fotocolposcopia con escala ABFO + Azul de Toluidina 1%',
          'Descripción topográfica horaria + Fotografías periciales + Parte Judicial al Juzgado de Guardia',
        ],
        [
          'Custodia de Kits de Agresión Sexual',
          'Sexual Assault Evidence Collection Kit (SAECK) con cadena de custodia hacia Crime Lab',
          'Sobres individuales de papel precintados y remitidos al INTCF conforme a la Orden JUS/1291/2010',
        ],
      ],
    },
  },

  // ============================================================================
  // PILAR 2: GUÍAS DE RECOLECCIÓN DE EVIDENCIA BIOLÓGICA (ESTÁNDARES INTERNACIONALES)
  // ============================================================================
  {
    id: 'lib-bio-02',
    code: 'NIJ-ENFSI-BIO-02',
    pillar: 'Recolección de Evidencia Biológica',
    titleSpanish:
      'Guía Internacional de Recolección de Evidencia Biológica, ADN de Contacto y Trazas en el Ámbito Clínico',
    originalTitle:
      'Biological Evidence Preservation Handbook: Best Practices for Collection, Double-Swabbing & DNA Contamination Prevention (NIJ / IAFN / ENFSI / CNUFADN)',
    institution:
      'National Institute of Justice (NIJ), IAFN, European Network of Forensic Science Institutes (ENFSI) & CNUFADN',
    originalLanguage: 'Inglés (EE.UU. - IAFN / ANA / NIJ)',
    publicationYear: 'Directriz Técnica Internacional',
    targetRegionAdaptation: RegionSource.GLOBAL,
    estimatedReadingMinutes: 85,
    executiveSummary:
      'Protocolo técnico detallado sobre los estándares internacionales para la recuperación de fluidos biológicos (semen, sangre, saliva, sudor), células epiteliales de transferencia (Touch DNA), tomas subungueales, peinado púbico, luz forense alternativa (ALS) y prevención de la contaminación por ADN del personal sanitario.',
    structuredSummaries: [
      {
        keyConcept: 'Técnica del Doble Hisopo (Sweet et al.) para Piel Intacta',
        clinicalDirective:
          'Aplicar un primer hisopo humedecido con 1–2 gotas de agua destilada estéril con rotación circular durante 15–20 s, seguido inmediatamente de un segundo hisopo seco sobre la misma zona.',
        scientificRationale:
          'El primer hisopo rehidrata y libera las células epiteliales y nucleadas adheridas al estrato córneo; el segundo hisopo seco absorbe por capilaridad la suspensión celular, triplicando el rendimiento de ADN frente a un solo hisopo.',
      },
      {
        keyConcept: 'Prevención de Contaminación por ADN Exógeno Sanitario ("ADN Fantasma")',
        clinicalDirective:
          'Usar mascarilla quirúrgica y doble guante de nitrilo sin talco, cambiando el par exterior entre cada región anatómica. Limpiar superficies de apoyo con hipoclorito sódico diluido (lejía al 10%), nunca solo con alcohol.',
        scientificRationale:
          'El alcohol etílico fija las proteínas y NO destruye el ADN; en cambio, el hipoclorito sódico produce despurinación y rotura oxidativa de las cadenas de ADN residual sobre las mesas de exploración.',
      },
      {
        keyConcept: 'Separación entre Indicios Dubitados y Muestra Indubitada',
        clinicalDirective:
          'Recoger siempre una muestra indubitada de referencia de la propia víctima (2 hisopos bucales de mucosa yugal o 1 tubo de sangre EDTA) en un acto separado de las muestras dubitadas.',
        scientificRationale:
          'En los perfiles genéticos mixtos (víctima + agresor), el laboratorio necesita conocer el perfil STR autosómico exacto de la paciente para descartar sus alelos y aislar el perfil del agresor.',
      },
    ],
    originalVerbatimExcerpt:
      '"To maximize the recovery of cellular material and salivary DNA from bite marks, ligature furrows, or manual grip sites on intact skin, clinicians must employ the double-swab technique: first, thoroughly swab the site with a sterile cotton or Dacron swab moistened with sterile distilled water; second, immediately swab the exact same area with a dry sterile swab to collect the rehydrated cells. Wear a surgical mask and change nitrile gloves between each anatomical site to prevent handler DNA contamination."',
    spanishTechnicalTranslation:
      '«Para maximizar la recuperación de material celular y ADN salival en huellas de mordedura, surcos de ligadura o zonas de agarre manual sobre piel intacta, el personal clínico debe emplear la técnica del doble hisopo: en primer lugar, frotar minuciosamente la zona con un hisopo estéril de algodón o dacrón humedecido con agua destilada estéril; en segundo lugar, pasar inmediatamente un hisopo estéril seco por la misma área exacta para recoger las células rehidratadas. Utilice mascarilla quirúrgica y cambie los guantes de nitrilo entre cada región anatómica para evitar la contaminación con ADN del propio sanitario.»',
    spainAndLatamClinicalAdaptation:
      'Adoptado íntegramente por la Comisión Nacional para el Uso Forense del ADN (CNUFADN) en España y por los laboratorios de Biología Forense de los IMLCF e INTCF. En todos los hospitales españoles, los hisopos para genética deben ser hisopos secos sin medio de transporte (están prohibidos los hisopos con gel de Stuart o Amies de microbiología porque diluyen y degradan el ADN).',
    fullStudyChapters: [
      {
        chapterTitle:
          '1. Uso de Fuente de Luz Forense Alternativa (ALS / Lámpara de Wood) y Muestreo Cutáneo',
        contentParagraphs: [
          'Los fluidos biológicos secos (especialmente el semen, la saliva y el sudor) depositados sobre la piel de la víctima suelen ser invisibles bajo la iluminación blanca convencional del hospital. Los estándares de la IAFN y del NIJ recomiendan oscurecer la sala de exploración y rastrear la superficie corporal con una Fuente de Luz Alternativa (ALS, con longitudes de onda entre 415 y 480 nm y gafas filtro naranjas/amarillas) o lámpara ultravioleta de Wood (365 nm): las manchas de semen y saliva emiten fluorescencia blanquecina-azulada o verdosa.',
          'Cada foco fluorescente detectado se delimita y se muestrea mediante la Técnica del Doble Hisopo de Sweet. El mismo protocolo se aplica sistemáticamente sobre las zonas donde la víctima relata haber sido sujetada con fuerza (muñecas, antebrazos, cara anterolateral del cuello en intentos de estrangulamiento manual), ya que la fricción intensa transfiere queratinocitos nucleados y células del sudor del agresor ("Touch DNA" o ADN de contacto).',
        ],
        protocolChecklist: [
          'Inspeccionar la piel con luz oblicua y, si está disponible, con fuente de luz forense (ALS 450 nm) antes de limpiar al paciente.',
          'Humedecer el primer hisopo con solo 1 o 2 gotas de agua destilada estéril (no empaparlo en exceso para no diluir la muestra).',
          'Pasar el segundo hisopo seco inmediatamente y rotular ambos sobres especificando "Hisopo 1 (húmedo)" e "Hisopo 2 (seco)" y la localización anatómica exacta.',
        ],
      },
      {
        chapterTitle:
          '2. Protocolo de Toma Bucal, Subungueal, Vaginal, Endocervical y Anorrectal',
        contentParagraphs: [
          '1) Cavidad Oral (Agresión oral <24 horas): El flujo salival constante y la deglución eliminan rápidamente el fluido seminal de la boca, pero los espermatozoides quedan retenidos en los recesos gingivales e interdentales. Se pasan 2 hisopos secos frotando los surcos gingivales superiores e inferiores, detrás de los últimos molares y bajo la lengua. Si se toma además muestra indubitada de referencia de la víctima mediante frotis bucal, debe enjuagarse antes la boca o esperar 30 minutos tras la toma dubitada, o bien optar por extraer sangre periférica con EDTA como muestra indubitada.',
          '2) Lecho Subungueal (Uñas de ambas manos): Cuando la víctima se ha defendido arañando la piel o tirando del cabello/ropa del agresor, bajo el hiponiquio de las uñas quedan células epidérmicas y sangre del atacante. Se utiliza un hisopo fino humedecido con agua estéril para barrer debajo de las uñas de la mano derecha (guardándolo en el sobre "Uñas Mano Derecha") y otro distinto para la mano izquierda, o bien se recorta el borde libre distal de las uñas sobre dos pliegos independientes de papel blanco.',
          '3) Cavidades Vaginal y Anorrectal: En fondo de saco vaginal posterior y endocérvix se emplean hisopos secos rotándolos suavemente durante 15–30 segundos para que absorban el pool mucoso. Antes de pasar a la región perianal y al canal anorrectal, el profesional debe retirarse el par de guantes exterior y colocarse guantes limpios, evitando así transferir trazas vaginales a la muestra anal (lo cual alteraría la calificación jurídica de las vías de penetración).',
        ],
        protocolChecklist: [
          'Separar estrictamente en sobres distintos los hisopos subungueales de la mano derecha y de la mano izquierda.',
          'Cambiar obligatoriamente de guantes entre la toma vulvovaginal y la toma perianal/anorrectal.',
          'Recoger la ropa interior (braguita/calzoncillo) que llevaba puesta la víctima o la primera que se colocó tras la agresión, ya que actúa como reservorio del drenaje gravitatorio.',
        ],
      },
      {
        chapterTitle:
          '3. Técnica de la Doble Sábana y Plegado Farmacéutico para Microindicios y Ropa',
        contentParagraphs: [
          'Las prendas de vestir contienen más del 50% de los indicios biológicos y no biológicos (pelos púbicos o capilares transferidos, fibras de la ropa del agresor, polen, tierra, cristales, restos de pintura en atropellos o residuos de disparo balístico). Para recogerlos sin pérdida, se coloca en el suelo una primera sábana hospitalaria limpia (barrera frente a la suciedad del suelo de urgencias) y encima un gran pliego o sábana de papel blanco estéril.',
          'El paciente se sitúa descalzo sobre el papel superior y se desviste prenda a prenda. Al finalizar, el papel superior donde han caído las fibras y pelos desprendidos se pliega hacia adentro por sus cuatro lados ("plegado de farmacéutico" o druggist fold) para que ningún microindicio pueda escaparse por las esquinas, y se introduce en un sobre de papel rotulado.',
        ],
        protocolChecklist: [
          'No sacudir jamás las prendas de vestir en el box de urgencias.',
          'Intercalar papel blanco limpio al doblar una prenda con manchas para evitar que una cara de la tela manche la cara opuesta.',
          'Aplicar el plegado de farmacéutico en el pliego de papel superior de desvestido y en el papel de peinado de vello púbico.',
        ],
      },
    ],
    comparativeTable: {
      title:
        'Guía de Ventanas Temporales Máximas y Soportes para Recolección Biológica (CNUFADN / NIJ / ENFSI)',
      headers: [
        'Región Anatómica / Matriz',
        'Ventana Máxima Recomendada',
        'Técnica de Recolección Estandarizada',
        'Soporte y Envase Requerido',
      ],
      rows: [
        [
          'Fondo de saco vaginal y Endocérvix',
          'Hasta 72–120 horas (3 a 5 días)',
          '2 hisopos secos en fondo vaginal posterior + 2 hisopos en canal endocervical (rotación 15–30 s)',
          'Hisopos de algodón/dacrón SIN medio de cultivo, secados al aire y ensobrados en papel',
        ],
        [
          'Región Perianal y Canal Anorrectal',
          'Hasta 48–72 horas (2 a 3 días)',
          'Doble hisopo en margen perianal + 2 hisopos introducidos 2–3 cm en canal rectal (previo cambio de guantes)',
          'Sobres de papel individuales para zona perianal y zona intrarrectal',
        ],
        [
          'Cavidad Oral (Surcos gingivales)',
          'Hasta 24 horas (ideal <12 h)',
          '2 hisopos secos frotando surcos gingivales, espacios interdentales y región sublingual',
          'Hisopos secos al aire en sobre de papel transpirable',
        ],
        [
          'Mordeduras, Cuello y Agarres en Piel',
          'Hasta 48 horas (si no hubo ducha)',
          'Técnica del Doble Hisopo de Sweet (1º humedecido con agua destilada estéril + 2º seco)',
          'Ambos hisopos secados a Tª ambiente en sobres de papel rotulados',
        ],
        [
          'Lecho Subungueal (Arañazos defensivos)',
          'Hasta 48–72 horas',
          'Hisopo fino humedecido con agua estéril bajo cada uña o recorte distal de uñas sobre papel',
          'Sobres de papel independientes para mano derecha y mano izquierda',
        ],
      ],
    },
  },

  // ============================================================================
  // PILAR 3: PROCEDIMIENTOS DE CADENA DE CUSTODIA PARA ENFERMERÍA
  // ============================================================================
  {
    id: 'lib-custody-03',
    code: 'JUS-1291-CUSTODY-03',
    pillar: 'Cadena de Custodia en Enfermería',
    titleSpanish:
      'Procedimientos de Cadena de Custodia para Enfermería: Secado, Embalaje, Precintado, Cadena de Frío y Trazabilidad Procesal',
    originalTitle:
      'Forensic Nursing Chain of Custody Standard Operating Procedures & Orden JUS/1291/2010 (INTCF)',
    institution:
      'Ministerio de Justicia de España (INTCF), IAFN & National Institute of Justice (NIJ)',
    originalLanguage: 'Inglés (EE.UU. - IAFN / ANA / NIJ)',
    publicationYear: 'Normativa Vigente JUS/1291/2010 & NIJ',
    targetRegionAdaptation: RegionSource.SPAIN,
    estimatedReadingMinutes: 90,
    executiveSummary:
      'Manual operativo completo de Cadena de Custodia hospitalaria y extrahospitalaria diseñado para enfermería. Explica el fundamento jurídico del "principio de mismidad", las reglas microbiológicas de secado y embalaje en papel frente al plástico, la técnica de precintado y firma cruzada, la conservación refrigerada por tipo de tubo y la cumplimentación sin rupturas del formulario oficial de traspaso.',
    structuredSummaries: [
      {
        keyConcept: 'Principio Jurídico de "Mismidad" e Incolumidad Probatoria',
        clinicalDirective:
          'Todo indicio debe estar permanentemente bajo control visual directo del sanitario que lo extrae o depositado bajo llave en frigorífico/armario forense precintado hasta su entrega documentada.',
        scientificRationale:
          'Según la jurisprudencia del Tribunal Supremo (Sala de lo Penal), una ruptura injustificada en la cadena de custodia (dejar muestras sin vigilar o sin registro de horas/firmas) genera duda razonable sobre su autenticidad y acarrea la nulidad de la prueba pericial.',
      },
      {
        keyConcept: 'Prohibición Absoluta del Plástico en Muestras Biológicas Húmedas',
        clinicalDirective:
          'Secar todos los hisopos y vestimentas húmedas a temperatura ambiente (20–22 °C) y embalarlos exclusivamente en sobres de PAPEL transpirable o cajas de cartón.',
        scientificRationale:
          'El plástico hermético impide la evaporación, creando un microclima anaerobio y húmedo que multiplica bacterias y hongos cuyas endonucleasas destruyen los marcadores STR del ADN nuclear en menos de 24–48 horas.',
      },
      {
        keyConcept: 'Precintado de Seguridad y Firma Cruzada Inviolable',
        clinicalDirective:
          'Cerrar cada sobre o envase con cinta de seguridad o precinto forense y estampar la firma de la enfermera, fecha y número de colegiada abarcando mitad cinta adhesiva y mitad papel del sobre.',
        scientificRationale:
          'Garantiza físicamente que si alguien despega la cinta antes de llegar al laboratorio del INTCF, el trazo de la firma quedará partido o el papel se desgarrará evidenciando la manipulación.',
      },
    ],
    originalVerbatimExcerpt:
      '"Chain of custody is the chronological paper or electronic trail that records the sequence of custody, control, transfer, analysis, and disposition of physical or biological evidence. Every individual who handles the specimen—starting with the collecting nurse—must sign and record the exact date, military time, badge/license number, and purpose of transfer. Packaging must feature tamper-evident seals signed across the seal-to-container interface."',
    spanishTechnicalTranslation:
      '«La cadena de custodia es el registro cronológico en papel o soporte electrónico que documenta la secuencia de custodia, control, transferencia, análisis y disposición de la evidencia física o biológica. Cada persona que manipula la muestra —comenzando por la enfermera que realiza la toma— debe firmar y consignar la fecha exacta, la hora en formato 24 h, su número de colegiada o identificación profesional y el motivo del traspaso. El embalaje debe contar con precintos de seguridad firmados cruzando la unión entre el precinto y el envase.»',
    spainAndLatamClinicalAdaptation:
      'En España, la Orden JUS/1291/2010 (BOE núm. 122) regula con carácter vinculante la preparación y remisión de muestras al Instituto Nacional de Toxicología y Ciencias Forenses (INTCF). En Hispanoamérica rigen protocolos homólogos (como la Guía Nacional de Cadena de Custodia en México y el Manual del Sistema de Cadena de Custodia de la Fiscalía General de la Nación en Colombia).',
    fullStudyChapters: [
      {
        chapterTitle:
          '1. Los 5 Eslabones Operativos de la Cadena de Custodia en Enfermería',
        contentParagraphs: [
          'El trabajo de la enfermera comprende los cinco primeros eslabones críticos de la cadena de custodia: 1) Extracción u obtención identificada (comprobando la identidad del paciente mediante DNI/pasaporte o pulsera de filiación hospitalaria en presencia de testigo o médico forense); 2) Secado y acondicionamiento primario (secado al aire de hisopos/prendas o adición al tubo con el anticoagulante/conservante específico según la Orden JUS/1291/2010); 3) Rotulado inequívoco e individualizado (nunca rotular solo la tapa de un bote, sino el cuerpo del propio tubo o sobre con rotulador indeleble resistente al frío y a la humedad); 4) Precintado inviolable con firma cruzada; y 5) Almacenamiento temporal seguro en cadena de frío (frigorífico exclusivo o caja precintada entre 2 °C y 8 °C) y entrega contra firma al Médico Forense, Policía Científica o Guardia Civil.',
          'Cada vez que las muestras cambian de manos, se cubre una fila del Formulario de Cadena de Custodia: ningún agente policial ni celador ni facultativo puede retirar una muestra del servicio sin firmar en ese mismo instante el recibí con su número de identificación profesional (TIP o nº de colegiado), fecha y hora con minutos.',
        ],
        protocolChecklist: [
          'Rotular siempre el cuerpo del tubo o envase primario (nunca únicamente el tapón, que puede intercambiarse por error).',
          'No utilizar nunca cinta de esparadrapo poroso fácil de despegar: emplear precinto forense numerado o cinta adhesiva de seguridad firmada transversalmente.',
          'Conservar una copia firmada del acta de entrega de Cadena de Custodia grapada o escaneada en la Historia Clínica del hospital.',
        ],
      },
      {
        chapterTitle:
          '2. Normativa Técnica de Envases, Aditivos y Cadena de Frío (Orden JUS/1291/2010)',
        contentParagraphs: [
          'El uso de un tubo equivocado o la ruptura de la cadena de frío invalida la analítica toxicológica o genética: 1) Para Sangre destinada a Alcohol Etílico, Drogas de Abuso y Sumisión Química se exigen 2 tubos de 5 mL con Fluoruro Sódico (conservante enzimático que bloquea la glucólisis y evita tanto la formación post-mortem/in vitro de etanol como la hidrólisis de cocaína y nitrobenzodiacepinas) y Oxalato Potásico (anticoagulante), identificados con Tapón Gris. Deben llenarse al 100% de su capacidad para no dejar cámara de aire superior (headspace) donde se volatilicen el alcohol o los disolventes, y tras limpiarse la piel con antiséptico acuoso SIN alcohol.',
          '2) Para Sangre Indubitada destinada a Genética Forense (ADN) se exige 1 tubo de 5 mL con anticoagulante EDTA (Tapón Lila / Morado) o mancha de sangre depositada sobre tarjeta de celulosa FTA. NUNCA debe emplearse heparina (tapón verde), ya que la heparina inhibe potentemente la enzima ADN polimerasa en la reacción de PCR.',
          '3) Para Orina destinada a Toxicología y Sumisión Química se exigen 2 tubos o botes estériles de polipropileno de al menos 20 mL cada uno, SIN ningún conservante químico añadido, cerrados con precinto de seguridad y refrigerados a 2–8 °C (o congelados a -20 °C si la remisión al laboratorio demora más de 72 horas).',
        ],
        protocolChecklist: [
          'Verificar que jamás se utilicen tubos con Heparina (tapón verde) ni hisopos con medio de Stuart/Amies para estudios de ADN.',
          'Comprobar el llenado completo (sin cámara de aire) de los dos tubos de tapón gris (fluoruro/oxalato) en alcoholemia y tóxicos.',
          'Mantener las muestras líquidas refrigeradas entre 2 °C y 8 °C evitando congelar tubos de vidrio con sangre entera.',
        ],
      },
      {
        chapterTitle:
          '3. Causas de Impugnación y Nulidad de la Cadena de Custodia en el Juicio Oral',
        contentParagraphs: [
          'En los procedimientos penales españoles e iberoamericanos, las defensas letradas auditan minuciosamente el acta de cadena de custodia buscando "lagunas temporales" o defectos técnicos: 1) Discrepancia entre el número de hisopos o tubos anotados en la historia clínica de enfermería y los recibidos en el INTCF; 2) Ausencia de registro horario entre el momento de la extracción en Urgencias (ej. viernes a las 23:00 h) y su entrega a la Policía Científica o al IMLCF el lunes por la mañana, sin especificar en qué frigorífico cerrado con llave permanecieron; 3) Uso de alcohol de 70° o clorhexidina alcohólica al limpiar la piel en una extracción de alcoholemia judicial; y 4) Embalaje de ropa húmeda en bolsas plásticas que llegan al laboratorio con crecimiento fúngico.',
        ],
        protocolChecklist: [
          'Anotar en la historia clínica la frase explícita: "Se desinfecta zona de venopunción con solución acuosa exenta de alcohol".',
          'Registrar la ubicación exacta de custodia intermedia (ej. "Depositado en frigorífico forense con cerradura del Servicio de Urgencias a 4 °C").',
          'Comprobar que el número de precinto anotado en el formulario coincide dígito a dígito con el adherido a la bolsa de seguridad.',
        ],
      },
    ],
    comparativeTable: {
      title:
        'Protocolo Maestro de Cadena de Custodia y Envases para Enfermería (Orden JUS/1291/2010 & NIJ)',
      headers: [
        'Tipo de Indicio / Muestra',
        'Envase Primario Correcto',
        'Envases PROHIBIDOS (Causan Nulidad/Degradación)',
        'Temperatura y Custodia',
      ],
      rows: [
        [
          'Hisopos biológicos (vaginal, anal, bucal, piel, mordeduras)',
          'Hisopos estériles secos en caja de cartón ventilada o sobre individual de papel transpirable',
          'Bolsas de plástico cerradas o tubos con gel bacteriológico (Stuart / Amies)',
          'Secar al aire a Tª ambiente (20–22 °C) y conservar en ambiente seco precintado',
        ],
        [
          'Sangre para Genética Forense (ADN indubitado)',
          'Tubo de 5 mL con anticoagulante EDTA (Tapón Lila) o tarjeta FTA',
          'Tubos con Heparina (Tapón Verde) o tubos con coágulo sin anticoagulante',
          'Refrigeración a 2–8 °C (Tarjetas FTA secas se conservan a Tª ambiente)',
        ],
        [
          'Sangre para Alcohol y Toxicología Forense',
          '2 Tubos de 5 mL con Fluoruro Sódico + Oxalato Potásico (Tapón Gris) llenos al 100%',
          'Tubos sin fluoruro sódico, tubos con cámara de aire o venopunción con alcohol etílico',
          'Refrigeración inmediata entre 2 °C y 8 °C',
        ],
        [
          'Orina para Sumisión Química (DFSA) y Drogas',
          '2 Tubos/frascos de polipropileno estéril de 20 mL sin aditivos',
          'Botes no estériles, sin precinto o con aditivos oxidantes',
          'Refrigeración a 2–8 °C (<72 h) o congelación a -20 °C (>72 h)',
        ],
        [
          'Prendas de vestir con manchas o impactos balísticos',
          'Bolsas de papel Kraft transpirable (una bolsa independiente por cada prenda)',
          'Bolsas de plástico de basura hospitalaria o mezclar varias prendas en una misma bolsa',
          'Secar al aire antes de empaquetar; conservar a Tª ambiente en lugar seco',
        ],
      ],
    },
  },

  // ============================================================================
  // PILAR 4: TOXICOLOGÍA FORENSE Y SUMISIÓN QUÍMICA (UNODC / IAFN / INTCF)
  // ============================================================================
  {
    id: 'lib-unodc-04',
    code: 'UNODC-DFSA-04',
    pillar: 'Toxicología Forense y DFSA (UNODC)',
    titleSpanish:
      'Directrices de Naciones Unidas (UNODC) e INTCF para la Investigación de Delitos Facilitados por Drogas y Sumisión Química (DFSA)',
    originalTitle:
      'UNODC Guidelines for the Forensic Analysis of Drugs Facilitating Sexual Assault and Other Criminal Acts',
    institution:
      'Oficina de las Naciones Unidas contra la Droga y el Delito (UNODC), IAFN & INTCF',
    originalLanguage: 'Inglés (ONU / UNODC / ENFSI)',
    publicationYear: 'Directriz Internacional UNODC / INTCF',
    targetRegionAdaptation: RegionSource.SPAIN,
    estimatedReadingMinutes: 75,
    executiveSummary:
      'Protocolo toxicológico internacional para la detección de sustancias psicoactivas de semivida ultracorta empleadas en sumisión química (GHB/GBL, zolpidem, zopiclona, midazolam, lorazepam, flunitrazepam, ketamina, escopolamina y etanol). Detalla la actuación de emergencia en triaje, la invalidez de los test rápidos hospitalarios y la técnica de corte segmentario de cabello.',
    structuredSummaries: [
      {
        keyConcept: 'Emergencia Metabólica en Triaje (Primera Micción)',
        clinicalDirective:
          'Recoger la primera micción nada más llegar la paciente a Urgencias, antes de administrar fluidoterapia intravenosa y antes de que acuda al baño por su cuenta.',
        scientificRationale:
          'El GHB exógeno se metaboliza a semialdehído succínico y ácido succínico entrando en el ciclo de Krebs, por lo que desaparece de la sangre en <6–8 h y de la orina en <10–12 h.',
      },
      {
        keyConcept: 'Prohibición de Descartar DFSA con Test Rápidos de Urgencias',
        clinicalDirective:
          'No emplear tiras reactivas de inmunoensayo de Urgencias para descartar sumisión química; remitir siempre las alícuotas íntegras al INTCF para cromatografía acoplada a espectrometría de masas en tándem (GC-MS/MS y LC-MS/MS).',
        scientificRationale:
          'Los inmunoensayos rápidos carecen de anticuerpos para GHB, hipnóticos Z (zolpidem), ketamina, escopolamina o bajas concentraciones de benzodiacepinas potentes, arrojando falsos negativos sistemáticos.',
      },
      {
        keyConcept: 'Muestreo Capilar Diferido en el Vértex Posterior (4–6 Semanas)',
        clinicalDirective:
          'Si han transcurrido >5 días desde el suceso, citar a las 4–6 semanas para cortar a ras de piel 2 mechones de cabello de la coronilla (vértex posterior) señalizando el extremo proximal.',
        scientificRationale:
          'El cabello crece ~1 cm/mes y tarda 3–4 semanas en emerger sobre la epidermis; el análisis segmentario centímetro a centímetro permite datar la exposición única.',
      },
    ],
    originalVerbatimExcerpt:
      '"Because many substances used in drug-facilitated sexual assault possess very short elimination half-lives—such as GHB, zaleplon, zolpidem, midazolam, and scopolamine—hospital triage personnel must treat the collection of the first urine void as a time-critical forensic emergency. Rapid immunoassay urine dipsticks used in emergency departments are wholly inadequate and must never be used to rule out DFSA."',
    spanishTechnicalTranslation:
      '«Dado que muchas sustancias empleadas en las agresiones sexuales facilitadas por drogas poseen semividas de eliminación muy cortas —como el GHB, zaleplón, zolpidem, midazolam y escopolamina—, el personal de triaje hospitalario debe tratar la recogida de la primera micción como una emergencia forense tiempo-dependiente. Las tiras reactivas rápidas de inmunoensayo utilizadas en los servicios de urgencias son totalmente inadecuadas y jamás deben emplearse para descartar sumisión química.»',
    spainAndLatamClinicalAdaptation:
      'Aplicado en la Guía Metodológica de Sumisión Química del Ministerio de Justicia e INTCF en España: <24 h se recoge sangre (2 tubos grises) + orina (2 tubos de 20 mL); entre 24 h y 5 días se recoge orina; y >5 días se programa la toma de cabello a las 4–6 semanas.',
    fullStudyChapters: [
      {
        chapterTitle:
          '1. Clasificación Forense de la Sumisión Química (Proactiva, Oportunista y Mixta)',
        contentParagraphs: [
          'Las directrices internacionales distinguen tres escenarios clínicos: 1) Sumisión química proactiva o premeditada (administración encubierta de una sustancia inodora, incolora o insípida en la bebida o comida de la víctima sin su conocimiento); 2) Sumisión química oportunista (el agresor se aprovecha de la intoxicación grave producida por el consumo voluntario previo de alcohol o psicofármacos por parte de la víctima, siendo estadísticamente la más frecuente con el etanol presente en más del 70% de los casos positivos); y 3) Sumisión mixta (combinación de consumo voluntario de alcohol con adición subrepticia de un hipnótico o sedante que multiplica sinérgicamente la depresión del sistema nervioso central y la amnesia anterógrada).',
        ],
        protocolChecklist: [
          'Registrar en el formulario toxicológico tanto el consumo voluntario referido por la paciente (bebidas alcohólicas, medicación habitual) como los fármacos administrados en la ambulancia o en Urgencias.',
          'Recoger vómito si la paciente vomita en el box de triaje en las primeras horas tras la ingesta sospechosa, ya que contiene concentraciones muy elevadas del fármaco sin metabolizar.',
        ],
      },
    ],
    comparativeTable: {
      title:
        'Protocolo de Toma de Muestras en Sumisión Química según el Intervalo Transcurrido (UNODC / INTCF)',
      headers: [
        'Tiempo desde el Suceso',
        'Muestra de Sangre',
        'Muestra de Orina',
        'Muestra de Cabello (Vértex Posterior)',
      ],
      rows: [
        [
          'Menos de 24 horas (<24 h)',
          'SÍ: 2 tubos de 5 mL con Fluoruro Sódico + Oxalato Potásico (Tapón Gris) + 1 tubo EDTA',
          'SÍ (URGENTE): 1ª micción en 2 tubos estériles de 20 mL sin aditivos',
          'Dejar constancia por si se precisa contraste posterior a las 4–6 semanas',
        ],
        [
          'De 24 horas a 5 días (24–120 h)',
          'Solo si persiste clínica de intoxicación aguda o para ADN indubitado (EDTA)',
          'SÍ (OBLIGATORIA): 2 tubos estériles de 20 mL sin aditivos',
          'Programar cita en el IMLCF a las 4–6 semanas del suceso',
        ],
        [
          'Más de 5 días (>120 h)',
          'NO para tóxicos de dosis única (ya depurados del plasma)',
          'NO para tóxicos de dosis única (ya eliminados de la orina)',
          'SÍ (MATRIZ DE ELECCIÓN): Corte de 2 mechones a ras de piel a las 4–6 semanas',
        ],
      ],
    },
  },

  // ============================================================================
  // PILAR 5: MARCOS INTERNACIONALES (COFEN 556/2017 & PROTOCOLO DE ESTAMBUL ONU)
  // ============================================================================
  {
    id: 'lib-intl-05',
    code: 'COFEN-ONU-05',
    pillar: 'Marcos Internacionales (COFEN / ONU)',
    titleSpanish:
      'Estándares Iberoamericanos (Resolución COFEN 556/2017) y Protocolo de Estambul de la ONU para Documentación de Lesiones y Tortura',
    originalTitle:
      'Resolução COFEN nº 556/2017 (Enfermagem Forense) & UN Istanbul Protocol on the Effective Investigation and Documentation of Torture',
    institution:
      'Conselho Federal de Enfermagem (COFEN - Brasil) & Alto Comisionado de las Naciones Unidas para los Derechos Humanos (ACNUDH)',
    originalLanguage: 'Portugués (Brasil - COFEN)',
    publicationYear: 'Normativa COFEN 2017/2022 & ONU',
    targetRegionAdaptation: RegionSource.LATAM,
    estimatedReadingMinutes: 70,
    executiveSummary:
      'Síntesis estructurada del marco regulador iberoamericano de la Enfermería Forense (8 áreas competenciales oficiales) junto con las directrices de Naciones Unidas (Protocolo de Estambul) para evaluar el grado de congruencia pericial de las lesiones en personas bajo custodia, centros penitenciarios o víctimas de violencia institucional y trata.',
    structuredSummaries: [
      {
        keyConcept: 'Escala de Congruencia Pericial del Protocolo de Estambul (ONU)',
        clinicalDirective:
          'Valorar cada lesión y el cuadro global en 5 grados de consistencia respecto al relato: 1) No congruente, 2) Congruente/Compatible, 3) Altamente congruente, 4) Típico de, o 5) Diagnóstico de.',
        scientificRationale:
          'Proporciona a los tribunales nacionales e internacionales una métrica estandarizada de correlación biomecánica entre el mecanismo traumático relatado y la huella anatómica objetivada.',
      },
      {
        keyConcept: 'Las 8 Áreas Competenciales de la Enfermería Forense Iberoamericana',
        clinicalDirective:
          'Integra violencia sexual, maltrato infantil/anciano, trauma en urgencias, investigación post-mortem, catástrofes masivas, psiquiatría forense, enfermería penitenciaria y peritaje judicial.',
        scientificRationale:
          'Demuestra cómo articular legalmente la especialidad enfermera dentro de los sistemas procesales de Derecho Continental (España y América Latina).',
      },
    ],
    originalVerbatimExcerpt:
      '"Art. 2º O Enfermeiro Forense atua na preservação de vestígios, coleta de provas em vítimas e perpetradores vivos ou pós-morte, elaboração de pareceres técnicos e atuação como perito judicial ou assistente técnico em processos judiciais que envolvam a assistência de enfermagem e a violência interpessoal."',
    spanishTechnicalTranslation:
      '«Art. 2º La Enfermera Forense actúa en la preservación de vestigios, recogida de pruebas en víctimas y presuntos agresores vivos o post-mortem, elaboración de dictámenes técnicos y actuación como perito judicial o perito de parte en procesos judiciales que involucren la asistencia de enfermería y la violencia interpersonal.»',
    spainAndLatamClinicalAdaptation:
      'En España (LECrim, LOPS 44/2003, Art. 335 LEC e Instituciones Penitenciarias) y en toda América Latina (México NOM-046, Colombia, Argentina, Chile), estas directrices fundamentan la actuación enfermera en los partes de lesiones de personas detenidas, valoración de sujeciones mecánicas y peritaje ante los tribunales.',
    fullStudyChapters: [
      {
        chapterTitle:
          '1. Aplicación Enfermera del Protocolo de Estambul y las 8 Áreas COFEN',
        contentParagraphs: [
          'Cuando una persona detenida o privada de libertad es trasladada al servicio de urgencias o atendida en la enfermería penitenciaria, el Protocolo de Estambul exige realizar la exploración física sin la presencia visual ni auditiva de los agentes custodios (salvo riesgo extremo acreditado de agresión al sanitario, en cuyo caso se deja constancia expresa). Se deben documentar tanto las lesiones cutáneas visibles como los síndromes dolorosos sin hematoma superficial evidente (como el traumatismo plantar repetido o "falanga", la suspensión articular y la asfixia posicional o por bolsa) y el estado de estrés postraumático agudo.',
        ],
        protocolChecklist: [
          'Explorar a las personas detenidas o bajo custodia en condiciones de privacidad y confidencialidad clínica.',
          'Documentar mediante diagramas corporales y fotografías con escala métrica cualquier marca en muñecas (grilletes/lazos), tobillos, cuello o plantas de los pies.',
        ],
      },
    ],
    comparativeTable: {
      title:
        'Grados de Congruencia Médico-Legal de las Lesiones según el Protocolo de Estambul (ONU)',
      headers: [
        'Grado de Congruencia (ONU)',
        'Definición Técnico-Pericial',
        'Ejemplo Clínico en Enfermería Forense',
      ],
      rows: [
        [
          '1. No congruente (Not consistent)',
          'La lesión no pudo haber sido causada por el mecanismo traumático que se relata',
          'Relato de caída simple sobre suelo liso para explicar una quemadura bilateral simétrica "en calcetín" sin salpicaduras',
        ],
        [
          '2. Congruente / Compatible (Consistent with)',
          'La lesión pudo haber sido causada por el mecanismo descrito, pero es inespecífica y existen muchas otras causas posibles',
          'Equimosis circular aislada de 2 cm en cara anterior de rodilla o tibia',
        ],
        [
          '3. Altamente congruente (Highly consistent)',
          'La lesión pudo haber sido causada por el traumatismo descrito y existen muy pocas causas alternativas posibles',
          'Cortes incisos múltiples en el borde cubital del antebrazo y cara palmar de los dedos en relato de defensa frente a cuchillo',
        ],
        [
          '4. Típico de (Typical of)',
          'Cuadro habitual de ese tipo de traumatismo, aunque teóricamente cabría alguna otra etiología excepcional',
          'Equimosis digitiformes alineadas en cara interna de ambos brazos o cuello por sujeción manual violenta',
        ],
        [
          '5. Diagnóstico de (Diagnostic of)',
          'El hallazgo no podría haberse producido de ningún otro modo distinto al mecanismo descrito',
          'Equimosis figurada en doble raíl con estampación exacta de los dientes de una hebilla específica o huella dental con >8 puntos concordantes',
        ],
      ],
    },
  },
];
