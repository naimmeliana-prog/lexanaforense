import {
  CurriculumModule,
  LearningLevelId,
  RegionSource,
} from '../types/forensic';

export interface LevelMetadata {
  id: LearningLevelId;
  number: 1 | 2 | 3 | 4;
  title: string;
  subtitle: string;
  summary: string;
  targetCompetencies: string[];
}

export const LEARNING_LEVELS: LevelMetadata[] = [
  {
    id: LearningLevelId.LEVEL_1,
    number: 1,
    title: 'Fundamentos Médico-Legales y Tanatología Clínica',
    subtitle: 'Legislación en España (LECrim / Código Penal), Iberoamérica, Estándares IAFN y Signos de Muerte',
    summary:
      'Desarrolla la base jurídica, deontológica y tanatológica imprescindible para que una enfermera en España o América Latina actúe con rigor probatorio ante hechos con relevancia judicial.',
    targetCompetencies: [
      'Diferenciar secreto profesional y deber legal de denuncia (Arts. 259, 262 y 340 LECrim)',
      'Cumplimentar partes judiciales de lesiones y registros clínicos con validez procesal',
      'Identificar signos de muerte cierta, fenómenos cadavéricos y manejo del cadáver judicial',
    ],
  },
  {
    id: LearningLevelId.LEVEL_2,
    number: 2,
    title: 'Criminalística Clínica, Cadena de Custodia y Sumisión Química',
    subtitle: 'Orden JUS/1291/2010 (INTCF), Indicios Biológicos, Fotografía Forense y Toxicología de Urgencia',
    summary:
      'Protocolos completos paso a paso para recoger, secar, embalar y precintar indicios en Servicios de Urgencias, UCI y extrahospitalaria sin invalidar las pruebas antes de su análisis en el INTCF o el IMLCF.',
    targetCompetencies: [
      'Aplicar íntegramente la Orden JUS/1291/2010 del Ministerio de Justicia e INTCF',
      'Preservar sangre, orina y cabello según la ventana toxicológica en Sumisión Química (DFSA)',
      'Ejecutar la secuencia fotográfica forense con testigo métrico ABFO y custodia de vestimenta',
    ],
  },
  {
    id: LearningLevelId.LEVEL_3,
    number: 3,
    title: 'Especialización SANE, Violencia Sexual y Maltrato Vulnerable',
    subtitle: 'Currículo IAFN SANE-A / SANE-P Traducido, Protocolo Estatal VISEM, Pediatría y Geriatría',
    summary:
      'Temario íntegro adaptado de las guías norteamericanas Sexual Assault Nurse Examiner (IAFN) junto con el Protocolo Nacional de Actuación Médico-Forense en España, LOPIVI y valoración en el adulto mayor.',
    targetCompetencies: [
      'Realizar entrevista clínica centrada en el trauma evitando la revictimización secundaria',
      'Aplicar la técnica del doble hisopo (Sweet et al.) y tinción con azul de toluidina al 1%',
      'Diferenciar traumatismo accidental de maltrato infantil (zarandeo, escaldaduras) y negligencia geriátrica',
    ],
  },
  {
    id: LearningLevelId.LEVEL_4,
    number: 4,
    title: 'Patología Forense Avanzada, Catástrofes y Peritaje Enfermero',
    subtitle: 'Balística de Heridas, Armas Blancas, Asfixiología, Protocolo DVI Interpol y Norma UNE 197001',
    summary:
      'Estudio profundo de las lesiones por proyectil de arma de fuego, armas blancas, asfixias mecánicas, identificación de víctimas en desastres (RD 32/2009) y elaboración y defensa del Dictamen Pericial Enfermero en juicio oral.',
    targetCompetencies: [
      'Analizar orificios de entrada/salida balística (anillo de Fisch, tatuaje verdadero) y heridas defensivas',
      'Aplicar los formularios Interpol DVI Ante-Mortem y Post-Mortem en sucesos con múltiples víctimas',
      'Redactar y ratificar un Dictamen Pericial Enfermero conforme al Art. 335 LEC y Norma UNE 197001',
    ],
  },
];

export const CURRICULUM_MODULES: CurriculumModule[] = [
  // ============================================================================
  // NIVEL 1 · MÓDULO 101
  // ============================================================================
  {
    id: 'mod-101',
    code: 'MOD-101',
    levelId: LearningLevelId.LEVEL_1,
    levelNumber: 1,
    title: 'Marco Jurídico de la Enfermería Forense: España, Hispanoamérica y EE.UU.',
    subtitle: 'Situación real de la especialidad, obligaciones en la LECrim, Código Penal y redacción del Parte de Lesiones',
    estimatedHours: 16,
    originSources: [RegionSource.SPAIN, RegionSource.LATAM, RegionSource.USA_IAFN],
    clinicalCompetencies: [
      'Comprender el marco legal real de la enfermería forense y pericial en España frente a títulos propios no oficiales',
      'Resolver el conflicto ético-jurídico entre el secreto profesional (Art. 199 CP) y el deber de denuncia (Art. 262 LECrim)',
      'Redactar registros enfermeros y partes judiciales de lesiones con terminología descriptiva neutra y valor probatorio',
    ],
    subTopics: [
      {
        id: 'st-101-1',
        title: 'Situación legal en España vs. Modelo Anglosajón (IAFN) e Iberoamericano (COFEN)',
        clinicalProtocolSummary:
          'Análisis riguroso de por qué en España no existe la especialidad vía EIR de Enfermería Forense, qué facultades legales tienes hoy mismo como enfermera colegiada según la LOPS 44/2003 y la LEC 1/2000, y cómo se estructura internacionalmente.',
        legalFrameworkNote:
          'Ley 44/2003 de Ordenación de las Profesiones Sanitarias (LOPS), Real Decreto 450/2005 de Especialidades de Enfermería, Art. 335 de la Ley 1/2000 de Enjuiciamiento Civil (LEC) y Resolución CGE nº 10/2021.',
        theoreticalContent: [
          'En España, las especialidades oficiales de Enfermería están tasadas por el Real Decreto 450/2005 (Obstétrico-Ginecológica/Matrona, Salud Mental, Trabajo, Geriátrica, Pediátrica, Familiar y Comunitaria, y Médico-Quirúrgica). Ni el Ministerio de Sanidad ni el Ministerio de Ciencia, Innovación y Universidades han creado un título oficial de Especialista en Enfermería Forense. Por ello, los másteres o expertos privados comercializados como "Enfermería Forense" son títulos propios universitarios o cursos no universitarios que no habilitan por sí mismos para una plaza específica de especialista en el Sistema Nacional de Salud.',
          'Sin embargo, carecer de una especialidad EIR específica NO impide ejercer competencias médico-legales y periciales. La Ley 44/2003 (LOPS), en sus artículos 5 y 7, atribuye a las enfermeras graduadas/diplomadas la dirección, evaluación y prestación de los cuidados de enfermería. Asimismo, el artículo 335 de la Ley de Enjuiciamiento Civil (LEC) establece que puede actuar como perito judicial quien posea el título oficial que corresponda a la materia objeto del dictamen (Grado/Diplomatura en Enfermería cuando se peritan cuidados, praxis enfermera, úlceras por presión, caídas, administración de fármacos o triaje).',
          'En el ámbito comparado, Estados Unidos reconoció oficialmente la Enfermería Forense como especialidad en 1995 a través de la American Nurses Association (ANA) y la International Association of Forensic Nurses (IAFN), articulando figuras clínicas de alta autonomía como la SANE-A (Sexual Assault Nurse Examiner - Adult/Adolescent), SANE-P (Pediatric), FNDI (Forensic Nurse Death Investigator) y LNC (Legal Nurse Consultant). En Iberoamérica, Brasil reguló formalmente la especialidad mediante la Resolución COFEN nº 556/2017, mientras que México (NOM-046-SSA2-2005) y Colombia integran a la enfermera en la red de atención pericial y cadena de custodia hospitalaria.',
        ],
        stepByStepProtocol: [
          {
            step: '1. Verificación de habilitación colegial',
            detail:
              'Para actuar como enfermera perito en España basta con estar colegiada en un Colegio Oficial de Enfermería, no estar inhabilitada y demostrar dominio técnico de la Lex Artis y la Norma UNE 197001.',
          },
          {
            step: '2. Integración en Comisiones Clínicas de Violencia',
            detail:
              'En los hospitales públicos españoles (SNS), las enfermeras de Urgencias, UCI, Pediatría y Obstetricia forman parte de las Comisiones contra la Violencia de Género y Maltrato Infantil, aplicando los protocolos del Ministerio de Sanidad y del Ministerio de Justicia.',
          },
          {
            step: '3. Coordinación con los Institutos de Medicina Legal (IMLCF)',
            detail:
              'Durante la asistencia aguda, la enfermera actúa como primer eslabón de la cadena de custodia, preservando muestras biológicas, tóxicos y vestimenta hasta la personación del Médico Forense de guardia o la Policía Científica.',
          },
        ],
        clinicalTables: [
          {
            title: 'Comparativa Internacional del Ejercicio de la Enfermería Forense',
            headers: ['Jurisdicción', 'Marco Regulador', 'Figuras / Roles Clínicos', 'Requisito Legal Real'],
            rows: [
              [
                'España (SNS / Justicia)',
                'LOPS 44/2003, LECrim Art. 262, LEC Art. 335, Orden JUS/1291/2010',
                'Enfermera asistencial en Urgencias/VISEM, Enfermera Perito Judicial y de Parte, Comisiones de Violencia',
                'Grado/Diplomatura en Enfermería + Colegiación + Dominio de protocolos oficiales (no requiere máster privado)',
              ],
              [
                'EE.UU. y Canadá (IAFN / ANA)',
                'ANA Scope & Standards of Forensic Nursing Practice',
                'SANE-A, SANE-P, Forensic Nurse Death Investigator (FNDI), Legal Nurse Consultant (LNC)',
                'RN License + Formación clínica estructurada de 40 h SANE + Práctica clínica supervisada',
              ],
              [
                'Brasil (COFEN)',
                'Resolução COFEN nº 556/2017 y nº 700/2022',
                'Enfermeiro Forense (Violencia sexual, sistema penitenciario, desastres masivos, peritaje)',
                'Registro en Conselho Regional de Enfermagem (COREN) y capacitación técnica forense',
              ],
              [
                'México / Colombia',
                'NOM-046-SSA2-2005 (México) / Manual de Cadena de Custodia Fiscalía (Colombia)',
                'Enfermería Pericial, Primer Respondiente en Cadena de Custodia Hospitalaria',
                'Título profesional de Enfermería y cumplimiento de las guías ministeriales de indicios',
              ],
            ],
          },
        ],
        practicalChecklist: [
          'Distingo entre un título propio universitario (no oficial) y las competencias legales que me otorga el Grado en Enfermería (LOPS 44/2003).',
          'Conozco los requisitos del artículo 335 de la Ley de Enjuiciamiento Civil para emitir dictámenes periciales sobre cuidados de enfermería.',
          'Identifico las funciones de las figuras SANE-A, SANE-P y LNC de la IAFN y su equivalencia asistencial en el sistema español.',
        ],
      },
      {
        id: 'st-101-2',
        title: 'Secreto Profesional frente a Obligación Legal de Denuncia (Arts. 259 y 262 LECrim)',
        clinicalProtocolSummary:
          'Cuándo cede el deber de confidencialidad clínica ante la comisión de un delito público perseguible de oficio y cómo actuar cuando la víctima solicita que no se dé parte al Juzgado.',
        legalFrameworkNote:
          'Artículos 259, 262 y 355 de la Ley de Enjuiciamiento Criminal (LECrim); Artículo 199 y 450 del Código Penal español; Ley Orgánica 1/2004 de Medidas de Protección Integral contra la Violencia de Género.',
        theoreticalContent: [
          'El secreto profesional es un deber ético y legal fundamental recogido en el Artículo 199 del Código Penal español (que castiga con penas de prisión de 1 a 4 años e inhabilitación al profesional que divulgue secretos de otra persona) y en el Código Deontológico de la Enfermería Española. Protege la intimidad del paciente recogida en la Ley 41/2002 de Autonomía del Paciente.',
          'No obstante, el secreto profesional NO es absoluto. El Artículo 262 de la Ley de Enjuiciamiento Criminal (LECrim) impone una obligación imperativa a todos los profesionales sanitarios: «Los que por razón de sus cargos, profesiones u oficios tuvieren noticia de algún delito público, estarán obligados a denunciarlo inmediatamente al Ministerio Fiscal, al Tribunal competente, al Juez de instrucción y, en su defecto, al municipal o al funcionario de policía más próximo al sitio, si se tratare de un delito flagrante».',
          'Son delitos públicos (perseguibles de oficio sin necesidad de denuncia previa de la víctima): el homicidio y sus tentativas, las lesiones dolosas, la violencia de género y doméstica habitual (Art. 153 y 173.2 CP), el maltrato infantil y de personas vulnerables, y las agresiones sexuales (tras la reforma de la LO 10/2022 y en menores o cuando media violencia/sumisión química). Por tanto, cuando una paciente acude a Urgencias con lesiones compatibles con violencia de género pero pide que no se comunique al Juzgado por miedo, el equipo sanitario TIENE LA OBLIGACIÓN LEGAL de emitir el Parte Judicial de Lesiones, informando siempre previamente a la paciente con empatía, explicándole que es un imperativo legal y activando trabajo social y medidas de protección.',
        ],
        stepByStepProtocol: [
          {
            step: '1. Asistencia clínica en entorno privado y seguro',
            detail:
              'Entrevistar siempre a la paciente a solas, sin la presencia de acompañantes o pareja, garantizando una escucha activa libre de juicios.',
          },
          {
            step: '2. Evaluación del riesgo vital y social inmediato',
            detail:
              'Identificar indicadores de riesgo extremo (amenazas de muerte, armas en el domicilio, embarazo, menores a cargo, escalada de violencia) y contactar con Trabajo Social y Fuerzas de Seguridad si existe peligro inminente.',
          },
          {
            step: '3. Comunicación transparente del deber legal (Art. 262 LECrim)',
            detail:
              'Nunca emitir el parte a espaldas de la víctima. Explicar con cercanía que el hospital está obligado por ley a remitir el parte de lesiones al Juzgado de Guardia y que esa documentación protegerá sus derechos probatorios.',
          },
          {
            step: '4. Registro íntegro en la Historia Clínica y copia al Juzgado',
            detail:
              'Anotar en la evolución de enfermería las manifestaciones literales de la víctima entrecomilladas («refiere que su pareja le sujetó del cuello hace 2 horas») junto con la descripción morfológica objetiva de cada lesión.',
          },
        ],
        clinicalTables: [
          {
            title: 'Resolución de Conflictos entre Confidencialidad y Deber de Denuncia en Urgencias',
            headers: ['Supuesto Clínico en Urgencias', 'Calificación Procesal', 'Actuación Enfermera y Sanitaria Obligatoria'],
            rows: [
              [
                'Mujer adulta con lesiones por violencia de género que rechaza denunciar',
                'Delito público perseguible de oficio (Art. 153/173.2 CP y Art. 262 LECrim)',
                'Emisión obligatoria del Parte Judicial de Lesiones + Información empática a la paciente + Activación de Trabajo Social',
              ],
              [
                'Menor de edad o persona con discapacidad con signos de maltrato o abuso',
                'Delito público con protección reforzada (LOPIVI 8/2021 y Art. 262 LECrim)',
                'Parte Judicial inmediato + Hoja de notificación de riesgo infantil + Valoración de ingreso hospitalario protector si el agresor convive con el menor',
              ],
              [
                'Paciente que acude con intoxicación por consumo propio voluntario de sustancias sin terceros implicados',
                'Ámbito estrictamente asistencial (no existe delito público)',
                'Prevalece el Secreto Profesional (Art. 199 CP). Prohibido revelar datos a terceros o policía salvo orden judicial expresa',
              ],
              [
                'Herida por arma de fuego o arma blanca de origen violento o dudoso',
                'Sospecha de delito público violento (Art. 262 LECrim)',
                'Comunicación inmediata al Juzgado de Guardia y Fuerzas de Seguridad + Preservación de prendas y proyectiles bajo cadena de custodia',
              ],
            ],
          },
        ],
        practicalChecklist: [
          'Conozco el contenido exacto del Artículo 262 de la LECrim y del Artículo 199 del Código Penal.',
          'Sé cómo actuar deontológicamente cuando una víctima de violencia de género pide que no se emita parte al juzgado.',
          'Separo en todo momento al acompañante sospechoso durante el triaje y la exploración clínica.',
        ],
      },
      {
        id: 'st-101-3',
        title: 'Redacción Técnica del Parte Judicial de Lesiones y Notas de Enfermería con Valor Probatorio',
        clinicalProtocolSummary:
          'Cómo describir lesiones cutáneas, mucosas y osteomusculares con rigor forense (tipo de lesión, dimensiones en milímetros, coloración cronológica, localización anatómica y lateralidad) evitando interpretaciones subjetivas.',
        legalFrameworkNote:
          'Protocolo Común para la Actuación Sanitaria ante la Violencia de Género (Consejo Interterritorial del SNS) y Estándares de Documentación Clínica IAFN.',
        theoreticalContent: [
          'Un registro clínico de enfermería o un parte de lesiones mal redactado puede arruinar la prueba pericial meses o años después durante el juicio oral. El error más común en la práctica asistencial es utilizar términos vagos («presenta hematomas en el brazo», «herida superficial en cara») o incluir calificaciones jurídicas («paciente agredida», «lesión intencionada»), las cuales corresponden exclusivamente al Juez.',
          'La regla de oro de la redacción forense enfermera es la objetividad descriptiva y mensurable. Toda lesión elemental debe describirse consignando 6 parámetros obligatorios: 1) Tipo semiológico exacto (eritema, excoriación/erosión, equimosis, hematoma, herida contusa, herida incisa, quemadura), 2) Morfología (lineal, ovalada, figurada reproducindo la hebilla o suela, digitiforme por presión de pulpejos), 3) Dimensiones exactas en milímetros o centímetros en sus dos ejes mayores (ej. 35 × 12 mm), 4) Coloración exacta para permitir la data cronológica de las equimosis (rojo-violácea <24-48 h; azul-negruzca 2-4 días; verdosa 5-7 días; amarillenta >8-12 días), 5) Localización anatómica precisa respecto a puntos óseos fijos y línea media, y 6) Lateralidad (derecha/izquierda) y cara (anterior, posterior, medial, lateral).',
          'En cuanto al relato del paciente, debe recogerse siempre en estilo directo y entrecomillado, precedido de verbos neutros como «la paciente refiere literalmente: "..."». Asimismo, debe describirse la conducta y estado emocional observable (llanto activo, temblor distal, bradipsiquia, discurso incoherente, mirada hipervigilante) sin etiquetarlo con juicios de credibilidad.',
        ],
        stepByStepProtocol: [
          {
            step: '1. Inspección corporal sistemática cráneo-caudal',
            detail:
              'Con buena iluminación y respetando el pudor mediante descubrimiento secuencial por regiones, inspeccionar cuero cabelludo, retroauricular, cuello, mucosa labial interna (frenillo), tronco, mamas, extremidades y región glútea/genital.',
          },
          {
            step: '2. Medición milimétrica de cada lesión',
            detail:
              'Utilizar regla milimetrada desechable o testigo métrico tipo ABFO. Anotar longitud, anchura y distancia a referencias anatómicas fijas (ej. "a 4 cm por encima de la apófisis estiloides cubital derecha").',
          },
          {
            step: '3. Diferenciación cromática de equimosis en distinto estadio evolutivo',
            detail:
              'La coexistencia de equimosis violáceas recientes junto con equimosis verdosas y amarillentas en un mismo paciente es un signo patognomónico de maltrato crónico o repetido en el tiempo (síndrome de Kempe en pediatría o violencia habitual).',
          },
          {
            step: '4. Registro de cuidados y muestras recogidas',
            detail:
              'Detallar qué curas se han realizado (especificando que se tomaron fotografías e hisopos ANTES de limpiar o suturar), lotes de vacunas/profilaxis administradas y número de precinto de las muestras.',
          },
        ],
        clinicalTables: [
          {
            title: 'Cronocromodiagnóstico orientativo de las Equimosis Cutáneas (Espectro de Legrand du Saulle)',
            headers: ['Coloración Predominante', 'Transformación Bioquímica de la Hemoglobina', 'Antigüedad Estimada Orientativa'],
            rows: [
              ['Rojo-azulada o violácea oscura', 'Hemoglobina extravasada y desoxihemoglobina', 'Primeras 24 a 72 horas (1–3 días)'],
              ['Azul-negruzca a pardo-oscura', 'Metahemoglobina / hemosiderina inicial', 'De 3 a 5 días'],
              ['Verdosa', 'Biliverdina (degradación del grupo hemo)', 'De 6 a 8 días'],
              ['Amarillenta / ocre pálido', 'Bilirrubina / hematoidina antes de reabsorción', 'De 9 a 15 días (desaparece hacia los 15–21 días)'],
            ],
          },
        ],
        practicalChecklist: [
          'Describo las lesiones en milímetros indicando tipo, forma, color, región anatómica y lateralidad.',
          'Utilizo comillas para transcribir las palabras exactas de la víctima sin emitir juicios de valor.',
          'Reconozco la importancia forense de encontrar equimosis de distinta coloración evolutiva (violáceas, verdes y amarillas) en un mismo paciente.',
        ],
      },
    ],
    resources: [
      {
        id: 'res-101-1',
        title: 'Protocolo Común para la Actuación Sanitaria ante la Violencia de Género (SNS España)',
        type: 'Protocolo Oficial',
        origin: RegionSource.SPAIN,
        estimatedMinutes: 50,
        summary:
          'Directrices oficiales del Ministerio de Sanidad para la detección precoz, valoración biopsicosocial, emisión del parte de lesiones y derivación segura.',
        keyTakeaways: [
          'La entrevista clínica debe realizarse siempre en privado, asegurando que la pareja o acompañante permanezca fuera de la consulta.',
          'El parte de lesiones debe reflejar tanto las lesiones físicas agudas como el estado psicológico y los antecedentes de episodios previos.',
        ],
        fullDocumentSections: [
          {
            sectionTitle: '1. Indicadores de Sospecha en la Consulta de Enfermería y Triaje',
            body: 'Deben alertar a la enfermera: retraso injustificado entre el momento de producirse la lesión y la solicitud de asistencia sanitaria; discordancia entre el mecanismo traumático relatado («me golpeé con una puerta») y la localización o severidad de las lesiones (ej. contusiones bilaterales en ambos ojos, cara interna de brazos o cuello); actitud evasiva o mirada constante hacia su acompañante antes de responder; y frecuentación reiterada por somatizaciones, ansiedad, dolor pélvico crónico o lesiones menores.',
          },
          {
            sectionTitle: '2. Algoritmo de Actuación ante Reconocimiento o Sospecha de Maltrato',
            body: 'Si la paciente presenta lesiones agudas o existe riesgo vital: 1º Asistencia sanitaria urgente y preservación de muestras; 2º Emisión obligatoria del Parte al Juzgado de Guardia (Art. 262 LECrim) entregando copia en sobre cerrado o vía telemática judicial; 3º Valoración de seguridad (¿puede regresar a su domicilio hoy sin peligro de muerte?) y activación del teléfono 016 / dispositivos de emergencia y Trabajo Social hospitalario.',
          },
          {
            sectionTitle: '3. Contenido Mínimo Obligatorio del Informe / Parte Judicial',
            body: 'Datos filiatorios completos del centro y del profesional (nombre, apellidos y número de colegiado), fecha y hora exacta de la asistencia, antecedentes referidos entrecomillados, descripción morfológica y topográfica exhaustiva de las lesiones físicas, valoración del estado emocional, pruebas complementarias solicitadas, tratamiento administrado y destino al alta.',
          },
        ],
      },
      {
        id: 'res-101-2',
        title: 'ANA & IAFN Forensic Nursing: Scope and Standards of Practice (Compendio Traducido)',
        type: 'Guía Traducida',
        origin: RegionSource.USA_IAFN,
        estimatedMinutes: 60,
        summary:
          'Los 6 estándares del Proceso de Enfermería Forense y los 11 estándares de desempeño profesional de la International Association of Forensic Nurses.',
        keyTakeaways: [
          'El cuidado enfermero forense nunca subordina la salud física o emocional del paciente a la recogida de pruebas: la prioridad número 1 es siempre la estabilización clínica.',
          'La imparcialidad científica exige buscar, documentar y preservar tanto los indicios incriminatorios como los exculpatorios.',
        ],
        fullDocumentSections: [
          {
            sectionTitle: 'Estándar 1 y 2: Valoración (Assessment) y Diagnóstico (Diagnosis)',
            body: 'La enfermera forense realiza una anamnesis dirigida a identificar mecanismos de lesión contusa, penetrante, térmica o química. Formula diagnósticos enfermeros (NANDA-I) centrados en el síndrome postraumático, el deterioro de la integridad tisular, el riesgo de infección y el riesgo de violencia autodirigida o dirigida a otros.',
          },
          {
            sectionTitle: 'Estándar 5: Ejecución y Preservación Probatoria (Implementation)',
            body: 'Durante las intervenciones clínicas, la enfermera integra técnicas de recogida de indicios biológicos y trazas (fibras, pelos, residuos de disparo, fluidos) asegurando que cada muestra mantenga su integridad física y su trazabilidad documental ininterrumpida.',
          },
        ],
      },
    ],
    translatedExcerpts: [
      {
        id: 'tr-101-1',
        originalTitle: 'IAFN / ANA Forensic Nursing: Scope and Standards of Practice — Standard 1: Assessment',
        originalLanguage: 'Inglés (EE.UU. - IAFN/NIJ)',
        sourceInstitution: 'International Association of Forensic Nurses (IAFN)',
        originalText:
          '"The forensic registered nurse collects comprehensive data pertinent to the patient’s health, traumatic injury mechanisms, and potential evidentiary materials in a systematic, trauma-informed, and unbiased manner. Clinical stabilization always precedes forensic evidence collection."',
        translatedText:
          '«La enfermera titulada forense recopila datos exhaustivos pertinentes a la salud del paciente, los mecanismos traumáticos de la lesión y los posibles materiales probatorios de manera sistemática, informada en el trauma e imparcial. La estabilización clínica precede siempre a la recogida de evidencia forense.»',
        clinicalAdaptationSpain:
          'En los hospitales españoles, esta valoración se plasma en el informe de cuidados de urgencias y en el anexo del parte al Juzgado de Guardia, utilizando lenguaje descriptivo neutro (ej. "eritema lineal de 42 × 6 mm en cara anteromedial de antebrazo izquierdo" en lugar de "marca de agarre por agresión").',
      },
    ],
  },

  // ============================================================================
  // NIVEL 1 · MÓDULO 102
  // ============================================================================
  {
    id: 'mod-102',
    code: 'MOD-102',
    levelId: LearningLevelId.LEVEL_1,
    levelNumber: 1,
    title: 'Tanatología Forense y Cronotanatodiagnóstico Clínico',
    subtitle: 'Fenómenos cadavéricos tempranos y tardíos, nomograma de Henssge y manejo del cadáver judicial en el hospital',
    estimatedHours: 18,
    originSources: [RegionSource.SPAIN, RegionSource.LATAM],
    clinicalCompetencies: [
      'Identificar y datar algor mortis, livor mortis, rigor mortis y signos oculares de deshidratación (Stenon-Louis y Sommer-Larcher)',
      'Aplicar el modelo de enfriamiento de Henssge para estimar el Intervalo Post-Mortem (IPM)',
      'Cumplir el protocolo de preservación de dispositivos invasivos en muertes hospitalarias judicializadas',
    ],
    subTopics: [
      {
        id: 'st-102-1',
        title: 'Fenómenos Cadavéricos Abióticos y Bióticos: Enfriamiento, Deshidratación, Livideces y Rigidez',
        clinicalProtocolSummary:
          'Fisiopatología y cronología exacta de los signos post-mortem tempranos para estimar la data de la muerte y detectar transposiciones del cadáver o intoxicaciones específicas.',
        legalFrameworkNote:
          'Artículo 340 y 343 de la Ley de Enjuiciamiento Criminal (LECrim) y Ley 20/2011 del Registro Civil sobre prohibición de certificar defunción ordinaria en muertes violentas o sospechosas de criminalidad.',
        theoreticalContent: [
          'Tras el cese irreversible de las funciones cardiorrespiratoria y encefálica, el cuerpo experimenta una serie de transformaciones físicas y químicas pasivas y activas cuya evolución temporal permite realizar el cronotanatodiagnóstico (estimación del Intervalo Post-Mortem o IPM). Los fenómenos abióticos inmediatos comprenden el enfriamiento cadavérico (algor mortis), la deshidratación y las livideces cadavéricas (livor mortis).',
          '1) Algor mortis (Enfriamiento): Al cesar la termogénesis metabólica, el cadáver iguala progresivamente su temperatura con la del medio ambiente siguiendo una curva sigmoidea (modelo de Marshall y Hoare perfeccionado por el nomograma de Henssge). Durante las primeras 2 a 3 horas existe una "meseta térmica inicial" en la que la temperatura rectal apenas desciende, seguida de una pérdida media de 0,8 a 1,0 °C por hora en las primeras 12 horas y de 0,3 a 0,5 °C por hora en las 12 horas siguientes. La hipertermia previa (sepsis, golpe de calor, intoxicación por cocaína/MDMA) o el abrigo retrasan el enfriamiento; la caquexia, hemorragia masiva, infancia o inmersión en agua fría lo aceleran.',
          '2) Deshidratación cadavérica: Produce pérdida de peso (relevante en neonatos), apergaminamiento cutáneo (placa amarillenta, dura y seca en zonas donde la epidermis sufrió una erosión antemortem o perimortem) y dos signos oculares clásicos si los párpados permanecen abiertos: el Signo de Stenon-Louis (hundimiento del globo ocular y pérdida de transparencia corneal a los 45 minutos con párpados abiertos, o a las 15-24 horas con párpados cerrados) y el Signo de Sommer-Larcher (mancha negra esclerótica triangular en el ángulo externo e interno del ojo a las 3-5 horas por transparentarse el pigmento coroideo al deshidratarse la esclera).',
          '3) Livor mortis (Livideces cadavéricas): Acumulación pasiva de la sangre intravascular por acción de la gravedad en las zonas declives del cadáver que NO están sometidas a presión de apoyo (respetan escápulas, glúteos, pantorrillas en decúbito supino, o marcas de cinturones y collares). Aparecen en la región cervical posterior a los 20-45 minutos, confluyen a las 3-5 horas, y hasta las 10-12 horas son móviles (desaparecen al presionar con un cristal —vitropresión— y reaparecen en el nuevo plano declive si se mueve el cadáver). Entre las 10 y 12 horas se produce el fenómeno de "transposición de livideces" (coexisten livideces antiguas y nuevas si alguien movió el cuerpo), y pasadas las 12-15 horas quedan fijas por hemólisis e imbibición de hemoglobina en los tejidos.',
          '4) Rigor mortis (Rigidez cadavérica): Estado de contracción y endurecimiento muscular por agotamiento total del ATP celular, que impide la disociación de los puentes de actina y miosina. Sigue la Ley de Nysten (orden descendente cráneo-caudal): se inicia en articulación temporomandibular y orbicular de los párpados a las 2-4 horas, se extiende a cuello y extremidades superiores a las 4-6 horas, alcanza su máxima intensidad e inmovilidad total entre las 12 y 24 horas (vencerla exige gran fuerza y provoca desgarros musculares, sin que vuelva a instaurarse), y desaparece en el mismo orden descendente entre las 24 y 36 horas al iniciarse la autólisis y putrefacción (mancha verde abdominal en fosa ilíaca derecha por acción de bacterias anaerobias sobre el ciego).',
        ],
        stepByStepProtocol: [
          {
            step: '1. Comprobación de signos de muerte cierta y postura inicial',
            detail:
              'Documentar la posición exacta del cuerpo (decúbito supino, prono, lateral, suspensión) antes de cualquier manipulación.',
          },
          {
            step: '2. Exploración de livideces y maniobra de vitropresión',
            detail:
              'Anotar topografía de las livideces, zonas de respeto por apoyo, coloración (rojo-violácea normal; rojo-cereza brillante en intoxicación por CO o cianuro; achocolatada en metahemoglobinemias; pálidas en exanguinación) y si blanquean a la presión digital/vitropresión.',
          },
          {
            step: '3. Exploración articular de la rigidez cadavérica',
            detail:
              'Comprobar suavemente mandíbula, dedos de las manos, codos y rodillas sin forzar la rotura de la rigidez antes de la llegada del médico forense.',
          },
        ],
        clinicalTables: [
          {
            title: 'Tabla Cronológica de Fenómenos Cadavéricos para el Cronotanatodiagnóstico',
            headers: ['Intervalo Post-Mortem (IPM)', 'Temperatura y Ojos', 'Livideces (Livor Mortis)', 'Rigidez (Rigor Mortis)'],
            rows: [
              [
                '0,5 a 2 horas',
                'Cuerpo caliente (meseta térmica). Signo de Stenon-Louis si párpados abiertos (45 min)',
                'Inician en cuello posterior como pequeñas manchas violáceas aisladas',
                'Flacidez muscular primaria generalizada (excepto si hubo espasmo cadavérico instantáneo)',
              ],
              [
                '3 a 6 horas',
                'Descenso térmico de ~1 °C/h. Mancha negra esclerótica de Sommer-Larcher (3–5 h)',
                'Confluyen en planos declives. Desaparecen por completo a la vitropresión (móviles)',
                'Instauración en mandíbula, nuca y extremidades superiores',
              ],
              [
                '8 a 12 horas',
                'Cuerpo frío al tacto superficial; persiste calor profundo abdominal',
                'Máxima extensión. Fenómeno de transposición posible si se cambia de postura el cadáver',
                'Rigidez generalizada en extremidades inferiores; si se vence aún puede reinstaurarse débilmente',
              ],
              [
                '12 a 24 horas',
                'Equilibrio térmico progresivo con la temperatura ambiental',
                'Livideces FIJAS (no desaparecen a la vitropresión ni cambian si se gira el cuerpo)',
                'Rigidez máxima e irreductible; vencerla no produce nueva rigidez',
              ],
              [
                '24 a 36+ horas',
                'Equilibrio térmico completo',
                'Livideces fijas con inicio de hemólisis intravascular',
                'Resolución progresiva de la rigidez (orden cráneo-caudal) y aparición de mancha verde en fosa ilíaca derecha',
              ],
            ],
          },
        ],
        practicalChecklist: [
          'Sé explicar la diferencia entre livideces móviles (<10-12 h) y fijas (>12-15 h) y el significado criminalístico de la transposición de livideces.',
          'Relaciono las livideces de color rojo cereza vivo con intoxicación por monóxido de carbono (carboxihemoglobina) o cianuro.',
          'Conozco la secuencia de instauración y resolución de la rigidez cadavérica (Ley de Nysten) y la diferencia con el espasmo cadavérico.',
        ],
      },
      {
        id: 'st-102-2',
        title: 'Protocolo Enfermero ante Muerte Judicial en el Hospital (Urgencias, UCI y Planta)',
        clinicalProtocolSummary:
          'Qué muertes no pueden certificarse mediante Certificado Médico de Defunción ordinario y cómo preparar el cuerpo conservando todos los catéteres, tubos y drenajes para la autopsia judicial.',
        legalFrameworkNote:
          'Artículos 340 y 343 de la LECrim, Instrucciones de los Institutos de Medicina Legal y Ciencias Forenses (IMLCF) y Resolución COFEN 556/2017.',
        theoreticalContent: [
          'En el ámbito hospitalario, toda muerte se clasifica legalmente en dos grandes grupos: muerte natural (certificable por el médico asistencial mediante el Certificado Médico de Defunción oficial de la OMC) y muerte judicial (aquella violenta —accidental, suicida u homicida— o sospechosa de criminalidad, incluyendo muertes súbitas de causa desconocida en jóvenes, intoxicaciones, fallecimientos bajo custodia policial/penitenciaria, o muertes asociadas a presunta mala praxis sanitaria).',
          'Cuando ocurre una muerte judicial en el box de críticos, quirófano o UCI, queda terminantemente prohibido emitir el certificado de defunción ordinario; debe comunicarse de inmediato al Juzgado de Guardia para que ordene el levantamiento del cadáver y la autopsia judicial en el IMLCF. En ese instante, el cuerpo del paciente pasa a ser la prueba pericial principal del procedimiento penal.',
          'El protocolo de cuidados post-mortem en una muerte judicial es radicalmente opuesto al amortajamiento convencional: la enfermera NUNCA debe retirar el tubo endotraqueal, cánula de traqueostomía, catéteres venosos centrales o periféricos, catéteres arteriales, sondas nasogástricas o vesicales, ni drenajes torácicos o abdominales. Durante la autopsia, el médico forense necesita verificar in situ si el tubo endotraqueal estaba alojado en tráquea o en esófago, si el catéter subclavio perforó la pleura o el pericardio produciendo un taponamiento yatrogénico, y qué luces contenían medicación.',
        ],
        stepByStepProtocol: [
          {
            step: '1. Conservación in situ de todos los dispositivos invasivos',
            detail:
              'Desconectar las líneas de infusión de las bombas, pinzar o colocar tapones estériles obturadores en todos los catéteres venosos, sondas y drenajes, y fijar el tubo endotraqueal en la comisura labial a la misma distancia en centímetros en que se encontraba.',
          },
          {
            step: '2. Marcaje diferencial de punciones terapéuticas y lesiones de RCP',
            detail:
              'Rodear con rotulador demográfico o documentar en el mapa anatómico los puntos de venopunción intentados sin éxito por el equipo sanitario y las placas del desfibrilador, para que el patólogo forense no los confunda con venopunciones previas de tóxicos o estigmas eléctricos.',
          },
          {
            step: '3. Protección de manos con bolsas de papel transpirable',
            detail:
              'Si el fallecimiento se debe a agresión física, sexual o arma de fuego, enfundar ambas manos del cadáver en bolsas de papel limpio sujetas en las muñecas con cinta de papel (nunca plástico) para preservar restos subungueales de ADN del agresor o residuos de disparo (GSR).',
          },
          {
            step: '4. Prohibición de lavado corporal y custodia de pertenencias',
            detail:
              'No lavar el cuerpo ni limpiar manchas de sangre o fluidos periféricos. Introducir el cadáver en el sudario judicial precintado junto con copia completa de la historia clínica de urgencias y las muestras de sangre/orina extraídas al ingreso.',
          },
        ],
        practicalChecklist: [
          'Mantengo in situ (pinzados u obturados) el tubo endotraqueal, vías centrales, vías periféricas, sondas y drenajes en todo cadáver judicial.',
          'Enfundo las manos del fallecido en bolsas de papel transpirable ante muertes violentas con posible defensa o uso de armas de fuego.',
          'Registro en la evolución de enfermería todas las maniobras invasivas de RCP avanzada (compresiones, desfibrilaciones, punciones fallidas).',
        ],
      },
    ],
    resources: [
      {
        id: 'res-102-1',
        title: 'Guía de Actuación ante Muertes con Intervención Judicial en Centros Sanitarios (IMLCF)',
        type: 'Protocolo Oficial',
        origin: RegionSource.SPAIN,
        estimatedMinutes: 45,
        summary:
          'Protocolo de coordinación entre hospitales del SNS y los Servicios de Patología Forense de los Institutos de Medicina Legal.',
        keyTakeaways: [
          'Las muestras biológicas extraídas en vida al ingreso del paciente en Urgencias tienen un valor incalculable si el paciente fallece días después en la UCI tras politransfusión y hemodilución.',
          'La enfermera debe asegurarse de que los tubos de ingreso en Urgencias no sean desechados por el laboratorio clínico cuando el caso se judicializa.',
        ],
        fullDocumentSections: [
          {
            sectionTitle: '1. Importancia Crítica de las Muestras del Ingreso Hospitalario ("Muestras Antemortem")',
            body: 'Cuando un paciente intoxicado o agredido ingresa en la UCI y fallece 48 o 72 horas después tras recibir litros de cristaloides, hemoderivados y fármacos sedantes, la sangre obtenida en la autopsia ya no refleja la alcoholemia ni los tóxicos presentes en el momento del suceso. Por ello, la enfermera debe comunicar inmediatamente al Laboratorio de Urgencias/Bioquímica que reserve y custodie bajo refrigeración todos los tubos de sangre y orina extraídos a la llegada del paciente.',
          },
          {
            sectionTitle: '2. Artefactos de Reanimación Cardiopulmonar (RCP)',
            body: 'Las maniobras de RCP avanzada pueden ocasionar fracturas costales anteriores/laterales y esternales, equimosis precordiales, erosiones por palas de desfibrilador, desgarros mucosos faríngeos por laringoscopia y enfisema subcutáneo. Su registro pormenorizado en la hoja de parada evita falsas interpretaciones de traumatismo homicida.',
          },
        ],
      },
    ],
    translatedExcerpts: [
      {
        id: 'tr-102-1',
        originalTitle: 'COFEN Resolução nº 556/2017 — Enfermagem Forense no Brasil (Preservação Pós-Morte)',
        originalLanguage: 'Portugués (Brasil - COFEN)',
        sourceInstitution: 'Conselho Federal de Enfermagem (COFEN - Brasil)',
        originalText:
          '"Compete ao Enfermeiro Forense preservar os vestígios biológicos e dispositivos invasivos instalados no corpo antes do óbito, documentando rigorosamente cada intervenção de reanimação para evitar confusão com lesões antemortem."',
        translatedText:
          '«Compete a la Enfermera Forense preservar los vestigios biológicos y dispositivos invasivos instalados en el cuerpo antes del óbito, documentando rigurosamente cada intervención de reanimación para evitar confusión con lesiones antemortem.»',
        clinicalAdaptationSpain:
          'Brasil reguló oficialmente la Enfermería Forense mediante la Resolución COFEN 556/2017. Su protocolo de preservación post-mortem coincide íntegramente con las directrices de los Institutos de Medicina Legal españoles para muertes intrahospitalarias judicializadas.',
      },
    ],
  },

  // ============================================================================
  // NIVEL 2 · MÓDULO 201
  // ============================================================================
  {
    id: 'mod-201',
    code: 'MOD-201',
    levelId: LearningLevelId.LEVEL_2,
    levelNumber: 2,
    title: 'Cadena de Custodia, Recogida de Indicios y Orden JUS/1291/2010',
    subtitle: 'Normativa técnica del INTCF, secado y embalaje en papel, custodia de vestimenta y Fotografía Forense Clínica',
    estimatedHours: 20,
    originSources: [RegionSource.SPAIN, RegionSource.USA_IAFN],
    clinicalCompetencies: [
      'Aplicar sin errores la Orden JUS/1291/2010 para la preparación y envío de muestras al Instituto Nacional de Toxicología (INTCF)',
      'Evitar la nulidad probatoria de la Cadena de Custodia (Jurisprudencia del Tribunal Supremo y Tribunal Constitucional)',
      'Cortar, secar y embalar vestimenta con indicios biológicos o balísticos y realizar fotografía forense con escala ABFO',
    ],
    subTopics: [
      {
        id: 'st-201-1',
        title: 'La Cadena de Custodia y la Orden JUS/1291/2010: Tubos, Conservantes y Embalaje en Papel',
        clinicalProtocolSummary:
          'Requisitos técnicos y jurídicos para garantizar la "mismidad" e integridad de las muestras clínicas desde que la enfermera las obtiene hasta que se analizan en el laboratorio forense.',
        legalFrameworkNote:
          'Orden JUS/1291/2010, de 13 de mayo, por la que se aprueban las normas para la preparación y remisión de muestras objeto de análisis por el Instituto Nacional de Toxicología y Ciencias Forenses (BOE núm. 122), y Sentencias del Tribunal Supremo sobre Cadena de Custodia.',
        theoreticalContent: [
          'La Cadena de Custodia es el procedimiento documentado que garantiza que el indicio o muestra biológica recogido en el cuerpo del paciente o en la escena es exactamente el mismo ("principio de mismidad") que llega al laboratorio pericial (INTCF o laboratorios de Policía Científica / Guardia Civil), sin haber sufrido alteración, sustitución, contaminación ni destrucción.',
          'En España, toda la operativa técnica se rige por la Orden JUS/1291/2010 del Ministerio de Justicia. El principio microbiológico y bioquímico más importante para la enfermera es que NUNCA se deben introducir hisopos húmedos ni ropas manchadas con fluidos biológicos (sangre, semen, saliva, exudado vaginal) en bolsas de plástico cerradas o tubos herméticos sin ventilación. La humedad combinada con la ausencia de transpiración provoca la proliferación rápida de bacterias y hongos cuyas enzimas nucleasas fragmentan y destruyen el ADN nuclear en pocas horas, inutilizando el cotejo genético.',
          'Por tanto, todo hisopo de algodón o dacrón y toda prenda manchada deben dejarse secar completamente a temperatura ambiente (en zona limpia, controlada y sin usar estufas ni secadores de aire caliente que desnaturalizan el ADN) y embalarse de forma individual en sobres o bolsas de PAPEL transpirable o cajas de cartón ventiladas. Cada sobre debe cerrarse, sellarse con cinta de seguridad o precinto y firmarse de puño y letra por el profesional sanitario cruzando el borde entre la cinta y el papel.',
        ],
        stepByStepProtocol: [
          {
            step: '1. Preparación del campo limpio y uso de doble guante sin talco',
            detail:
              'Colocarse mascarilla (para no contaminar la muestra con el propio ADN salival al hablar) y guantes de nitrilo limpios, cambiándolos obligatoriamente entre cada zona anatómica muestreada.',
          },
          {
            step: '2. Selección del tubo y conservante según el análisis requerido (Orden JUS/1291/2010)',
            detail:
              'Verificar el código de color y aditivo: EDTA (tapón lila) para genética/ADN; Fluoruro sódico + oxalato potásico (tapón gris) para alcohol etílico y drogas de abuso en sangre.',
          },
          {
            step: '3. Secado a temperatura ambiente y ensobrado individual en papel',
            detail:
              'Nunca mezclar en un mismo sobre hisopos de distintas regiones anatómicas ni prendas que hayan estado en contacto entre sí.',
          },
          {
            step: '4. Cumplimentación del Formulario Oficial de Cadena de Custodia',
            detail:
              'Anotar en el acta: código de identificación de la muestra, naturaleza y región anatómica, fecha y hora exacta de la toma, nombre completo, DNI/número de colegiado y firma de quien entrega y de quien recibe (Médico Forense o agente con número de TIP), así como temperatura de conservación.',
          },
        ],
        clinicalTables: [
          {
            title: 'Tabla Oficial de Muestras, Envases, Conservantes y Temperaturas (Orden JUS/1291/2010 - INTCF)',
            headers: ['Estudio Solicitado', 'Muestra Clínica', 'Envase y Conservante Obligatorio', 'Conservación y Observaciones Críticas'],
            rows: [
              [
                'Genética Forense / Cotejo de ADN (Muestra indubitada)',
                'Frotis bucal (mucosa yugal) o sangre periférica',
                '2 hisopos estériles secos en sobre de papel transpirable, o tarjeta FTA, o 1 tubo sangre de 5 mL con EDTA (tapón lila)',
                'Hisopos: secar a Tª ambiente y conservar en lugar seco. Sangre EDTA: refrigerar a 2–8 °C (no congelar el tubo de vidrio)',
              ],
              [
                'Indicios biológicos dubitados (Semen, saliva, sangre en piel)',
                'Hisopos vaginales, anales, bucales o cutáneos (doble hisopo)',
                'Hisopos de algodón/dacrón sin medio de cultivo (NUNCA medio Stuart/Amies bacteriológico) en sobres individuales de papel',
                'Secar al aire antes de ensobrar. Los medios de transporte microbiológico degradan el ADN forense',
              ],
              [
                'Alcoholemia Judicial y Volátiles en Sangre',
                'Sangre venosa periférica (2 tubos de 5 mL)',
                'Tubo con Fluoruro Sódico (conservante antiglucolítico) + Oxalato Potásico (anticoagulante) — Tapón Gris',
                'Desinfectar piel con solución acuosa SIN alcohol. Llenar el tubo al 100% sin dejar cámara de aire. Refrigerar a 2–8 °C',
              ],
              [
                'Toxicología General y Sumisión Química en Orina',
                'Primera micción disponible (2 alícuotas de 20 mL)',
                'Envases estériles de polipropileno con cierre de seguridad precintable, SIN aditivos ni conservantes químicos',
                'Refrigerar a 2–8 °C. Si el envío al INTCF supera las 72 h, congelar una alícuota a -20 °C',
              ],
            ],
          },
        ],
        practicalChecklist: [
          'Jamás utilizo hisopos con medio de transporte bacteriológico (gel de Stuart o Amies) para genética forense: uso hisopos secos en tubo ventilado o sobre de papel.',
          'En extracciones de alcoholemia judicial limpio la piel con clorhexidina acuosa o suero fisiológico y lleno los tubos grises sin cámara de aire.',
          'Firmo el precinto de cada sobre de papel abarcando mitad cinta adhesiva y mitad superficie del sobre.',
        ],
      },
      {
        id: 'st-201-2',
        title: 'Manejo y Corte de Vestimenta en el Paciente Politraumatizado o Agredido',
        clinicalProtocolSummary:
          'Cómo retirar las prendas de vestir en la sala de reanimación o consulta sin destruir desgarros por arma blanca, orificios de proyectil ni trazas biológicas.',
        legalFrameworkNote:
          'Manuales de Policía Científica, Guardia Civil y Guías Clínicas de Enfermería de Urgencias y Emergencias Forenses.',
        theoreticalContent: [
          'La ropa que viste la víctima en el momento del suceso actúa como un filtro físico de valor criminalístico extraordinario: retiene residuos de disparo (pólvora, fulminante de bario, antimonio y plomo) que permiten determinar la distancia del tiro, conserva la morfología del corte de una hoja de cuchillo, alberga fibras textiles de la ropa del agresor y absorbe fluidos biológicos (semen, saliva, sangre).',
          'En los boxes de urgencias y emergencias, la prisa por exponer el tórax o el abdomen del paciente herido lleva con frecuencia a cortar la camiseta o el pantalón pasando las tijeras directamente a través del orificio de la puñalada o del impacto de bala. Este error destruye irreversiblemente la morfología de los bordes textiles y desprende los granos de pólvora depositados alrededor del agujero.',
          'Cuando el paciente está consciente y hemodinámicamente estable, debe desvestirse de pie sobre dos sábanas extendidas en el suelo: una sábana limpia inferior (que aísla del suelo del hospital) y una sábana superior de papel blanco (que recoge cualquier pelo, fibra, tierra o botón que se desprenda al quitarse la ropa). Esta sábana superior de papel se pliega en forma de paquete ("plegado de farmacéutico") y se introduce en una bolsa de papel precintada.',
        ],
        stepByStepProtocol: [
          {
            step: '1. Técnica de las dos sábanas en paciente ambulante',
            detail:
              'Extender una sábana hospitalaria limpia en el suelo y encima una sábana o pliego grande de papel limpio. Pedir al paciente que se quite los zapatos y se desvista sobre el papel.',
          },
          {
            step: '2. Técnica de corte por costuras en paciente crítico / inconsciente',
            detail:
              'Utilizar tijeras corta-ropas siguiendo exclusivamente las costuras laterales de mangas, perneras y hombros, manteniendo un margen mínimo de 10 cm de distancia respecto a cualquier orificio, desgarro o mancha.',
          },
          {
            step: '3. Protección de manchas húmedas con papel limpio',
            detail:
              'No sacudir nunca las prendas. Si la prenda está húmeda, extenderla para que seque al aire o intercalar hojas de papel blanco limpio antes de plegarla suavemente para evitar la transferencia de manchas entre el delantero y la espalda.',
          },
          {
            step: '4. Embalaje individualizado prenda por prenda',
            detail:
              'Cada prenda (ropa interior, pantalón, camisa, calzado) debe ir en su propia bolsa de papel independiente, rotulada y precintada. Nunca mezclar todas las prendas en una bolsa de basura de plástico del hospital.',
          },
        ],
        practicalChecklist: [
          'Corto siempre la ropa del paciente traumatizado siguiendo las costuras laterales y respetando intactos los orificios de proyectil o arma blanca.',
          'Utilizo la técnica de la doble sábana (sábana base + pliego de papel superior) para recoger microindicios al desvestir al paciente.',
          'Embalo cada prenda por separado en bolsas de papel transpirable, nunca en bolsas de plástico.',
        ],
      },
      {
        id: 'st-201-3',
        title: 'Fotografía Forense Clínica y Documentación en Mapas Anatómicos',
        clinicalProtocolSummary:
          'Secuencia fotográfica estandarizada (planos generales, medios y de detalle con testigo métrico ABFO) y requisitos de protección de datos.',
        legalFrameworkNote:
          'Ley Orgánica 3/2018 de Protección de Datos Personales (LOPDGDD), Ley 41/2002 de Autonomía del Paciente y Estándares de Fotografía Clínica IAFN.',
        theoreticalContent: [
          'La fotografía forense clínica congela en el tiempo el aspecto exacto de una lesión antes de que evolucione, cicatrice o sea modificada por la intervención médico-quirúrgica (limpieza, desbridamiento, sutura). Para que una fotografía tomada en Urgencias sea admitida como prueba documental o pericial en un juicio sin ser impugnada por distorsión de perspectiva, debe seguir una metodología óptica rigurosa.',
          'El estándar internacional exige el uso de un testigo métrico milimetrado (idealmente la regleta en forma de "L" tipo ABFO nº 2, que incorpora círculos de referencia gris del 18% y escalas en milímetros en dos ejes perpendiculares). Colocar una moneda, un bolígrafo o un tapón de aguja junto a la herida es una mala práctica, ya que no permite corregir la deformación angular ni calibrar el color.',
          'Toda lesión relevante debe fotografiarse mediante una secuencia mínima de cuatro tomas: 1) Toma de código de identificación del expediente/paciente; 2) Plano general o regional que muestre la lesión junto con al menos un punto de referencia anatómica inequívoco (ej. codo, hombro, ombligo) para demostrar en qué parte del cuerpo se encuentra; 3) Plano de detalle (macro) SIN testigo métrico para demostrar que la regleta no oculta ninguna parte de la lesión; y 4) Plano de detalle CON el testigo métrico situado en el mismo plano de profundidad que la herida y con el objetivo de la cámara a 90° (perpendicular) respecto a la superficie cutánea.',
        ],
        stepByStepProtocol: [
          {
            step: '1. Consentimiento informado específico para fotografía clínico-forense',
            detail:
              'Explicar al paciente la finalidad probatoria de las imágenes e incorporar el consentimiento firmado en la historia clínica (salvo orden judicial directa o paciente inconsciente en riesgo vital).',
          },
          {
            step: '2. Ejecución de las fotografías ANTES de limpiar o suturar (y después si procede)',
            detail:
              'Si la herida presenta sangre seca, tierra o tatuaje de pólvora, fotografiar primero en su estado original ("in situ") y realizar una segunda serie tras la limpieza con suero fisiológico.',
          },
          {
            step: '3. Alineación perpendicular a 90° con regleta milimetrada ABFO',
            detail:
              'Colocar el testigo métrico al lado de la lesión (sin tapar sus bordes) a la misma altura epidérmica y disparar en ángulo recto para evitar escorzos.',
          },
        ],
        practicalChecklist: [
          'Realizo siempre un plano medio de ubicación anatómica y dos planos cortos de detalle (uno sin testigo métrico y otro con testigo métrico milimetrado).',
          'Mantengo la lente de la cámara perpendicular (90°) al plano de la piel y al testigo métrico.',
          'Tomo las fotografías antes de aplicar antisépticos coloreados o suturar los bordes de la herida.',
        ],
      },
    ],
    resources: [
      {
        id: 'res-201-1',
        title: 'Orden JUS/1291/2010 del Ministerio de Justicia — Texto Técnico Comentado para Enfermería',
        type: 'Protocolo Oficial',
        origin: RegionSource.SPAIN,
        estimatedMinutes: 60,
        summary:
          'Análisis de los artículos 1 a 35 de la Orden JUS/1291/2010 aplicable a la toma, conservación y remisión de muestras clínicas al INTCF.',
        keyTakeaways: [
          'Toda muestra debe ir acompañada del formulario de cadena de custodia donde conste la identidad de todas las personas que han tenido contacto físico con ella.',
          'El incumplimiento de las condiciones térmicas o el uso de envases inadecuados debe hacerse constar en el informe de recepción del laboratorio.',
        ],
        fullDocumentSections: [
          {
            sectionTitle: 'Artículos 4 a 8: Garantía de la Cadena de Custodia y Precintado',
            body: 'La cadena de custodia se inicia en el mismo instante de la recogida u obtención de la muestra. Cada envase primario (tubo o sobre) y secundario (caja o bolsa de seguridad) debe ser rotulado con código indeleble y cerrado mediante un sistema de precinto que evidencie cualquier intento de apertura no autorizada.',
          },
          {
            sectionTitle: 'Artículos 14 a 18: Normas para Estudios de Biología y Genética Forense',
            body: 'Las muestras de fluidos biológicos depositadas sobre soportes absorbentes o hisopos se remitirán perfectamente secas a temperatura ambiente y en envases de papel o cartón transpirables. Cuando se extraiga sangre líquida indubitada para cotejo de ADN, se emplearán tubos con anticoagulante tipo EDTA refrigerados entre 2 y 8 °C.',
          },
        ],
      },
    ],
    translatedExcerpts: [
      {
        id: 'tr-201-1',
        originalTitle: 'U.S. Department of Justice & IAFN — National Protocol for Sexual Assault Medical Forensic Examinations (Packaging)',
        originalLanguage: 'Inglés (EE.UU. - IAFN/NIJ)',
        sourceInstitution: 'National Institute of Justice (NIJ) & IAFN',
        originalText:
          '"Never package wet or damp biological evidence in plastic bags. Moisture promotes bacterial growth that rapidly destroys nuclear DNA. Air-dry swabs completely before placing them in breathable paper envelopes sealed with tamper-evident tape."',
        translatedText:
          '«Nunca embale evidencia biológica húmeda en bolsas de plástico. La humedad promueve el crecimiento bacteriano que destruye rápidamente el ADN nuclear. Seque los hisopos al aire por completo antes de colocarlos en sobres de papel transpirable sellados con cinta de seguridad.»',
        clinicalAdaptationSpain:
          'Principio idéntico al exigido por el INTCF en España (Orden JUS/1291/2010): cada muestra va en su sobre individual de papel, firmado cruzando la solapa por quien la toma y precintado.',
      },
    ],
  },

  // ============================================================================
  // NIVEL 2 · MÓDULO 202
  // ============================================================================
  {
    id: 'mod-202',
    code: 'MOD-202',
    levelId: LearningLevelId.LEVEL_2,
    levelNumber: 2,
    title: 'Toxicología Clínica Forense y Sumisión Química (DFSA)',
    subtitle: 'Farmacocinética de sustancias de vida media ultracorta, ventanas en sangre, orina y cabello y protocolo de triaje',
    estimatedHours: 16,
    originSources: [RegionSource.SPAIN, RegionSource.LATAM, RegionSource.USA_IAFN],
    clinicalCompetencies: [
      'Identificar el cuadro clínico de sumisión química (premeditada, oportunista o mixta) desde el triaje de enfermería',
      'Priorizar la recogida de la primera micción antes de que se eliminen metabolitos de GHB, zolpidem o ketamina',
      'Gestionar el protocolo de corte diferido de cabello del vértex craneal a las 4–6 semanas',
    ],
    subTopics: [
      {
        id: 'st-202-1',
        title: 'Farmacocinética Forense de la Sumisión Química: GHB, Benzodiacepinas, Hipnóticos Z, Ketamina y Escopolamina',
        clinicalProtocolSummary:
          'Por qué la primera micción al llegar al hospital es una emergencia médico-legal absoluta y cuáles son los tiempos máximos de detección en cada matriz biológica.',
        legalFrameworkNote:
          'Guía Metodológica de Actuación Médico-Forense en Sumisión Química (Ministerio de Justicia / Consejo Médico Forense / INTCF).',
        theoreticalContent: [
          'Se define como Sumisión Química (Drug-Facilitated Sexual Assault o DFSA en la literatura anglosajona) la administración de sustancias psicoactivas a una persona con el fin de anular o disminuir su voluntad, capacidad de defensa o juicio para cometer un delito (habitualmente contra la libertad sexual o robo). Se clasifica en tres modalidades: 1) Sumisión química proactiva o premeditada (administración subrepticia o engañosa de un tóxico en la bebida); 2) Sumisión química oportunista (aprovechamiento del estado de vulnerabilidad e intoxicación derivado del consumo voluntario de alcohol o fármacos por parte de la víctima, que en España constituye igualmente agresión sexual al estar viciado o anulado el consentimiento según la LO 10/2022); y 3) Sumisión mixta (consumo voluntario de alcohol al que el agresor añade subrepticiamente un depresor del SNC, generando sinergia potenciadora).',
          'La clínica cardinal en Urgencias es la triada de: amnesia anterógrada parcial o total ("laguna amnésica" con inicio brusco o despertar en lugar desconocido), sintomatología residual desproporcionada para la cantidad de alcohol que la paciente recuerda haber ingerido (somnolencia, disartria, ataxia, diplopía, hipotonía muscular, confusión) y hallazgos físicos o indiciarios de contacto sexual o despojo de ropa/pertenencias.',
          'Desde el punto de vista toxicocinético, muchos de los agentes empleados poseen una semivida de eliminación plasmática ultracorta y se metabolizan rápidamente a compuestos endógenos. El caso paradigmático es el GHB (ácido gamma-hidroxibutírico o "éxtasis líquido") y sus precursores (GBL y 1,4-butanodiol): el GHB se transforma rápidamente en ácido succínico y entra en el ciclo de Krebs, desapareciendo de la sangre en tan solo 6 a 8 horas y de la orina en 10 a 12 horas. Otros fármacos frecuentes son los hipnóticos Z (zolpidem, zopiclona), benzodiacepinas de acción corta (lorazepam, midazolam, alprazolam, flunitrazepam, clonazepam), ketamina y alcaloides tropánicos como la escopolamina (burundanga).',
        ],
        stepByStepProtocol: [
          {
            step: '1. Alerta inmediata en el Triaje de Enfermería ("Código Sumisión Química")',
            detail:
              'Ante toda paciente que refiera amnesia o sospecha de sumisión química en las últimas 24-48 h, si solicita ir al aseo en sala de espera o triaje, NUNCA permitir que orine en el inodoro: entregar de inmediato el frasco estéril para recoger esa primera micción.',
          },
          {
            step: '2. Extracción venosa previa a la sueroterapia',
            detail:
              'Antes de infundir suero fisiológico o glucosado (que provoca hemodilución y diuresis forzada diluyendo los metabolitos urinarios), extraer los tubos de sangre forense.',
          },
          {
            step: '3. Registro exhaustivo de la medicación propia y hospitalaria',
            detail:
              'Anotar todos los medicamentos tomados por el paciente en los últimos 7 días y cualquier fármaco administrado por el 112 o en Urgencias (ej. si el hospital administra diazepam por agitación y no lo anota en el formulario del INTCF, el laboratorio dará un falso positivo de sumisión por benzodiacepinas).',
          },
        ],
        clinicalTables: [
          {
            title: 'Ventanas de Detección Toxicológica en Sangre, Orina y Cabello (Estándar INTCF / UNODC)',
            headers: ['Sustancia / Grupo Farmacológico', 'Ventana en Sangre', 'Ventana en Orina', 'Análisis Segmentario en Cabello (a las 4–6 semanas)'],
            rows: [
              [
                'GHB (Ácido gamma-hidroxibutírico) / GBL',
                '4 a 8 horas',
                '8 a 12 horas (Crítico recoger 1ª micción)',
                'Complejo (requiere comparar segmento basal con nivel endógeno del propio sujeto)',
              ],
              [
                'Etanol (Alcohol etílico) y Etílico-Glucurónido (EtG)',
                '8 a 14 horas',
                'Etanol: 24 h / Metabolito EtG: hasta 72–80 horas',
                'No aplicable para dosis única aguda',
              ],
              [
                'Hipnóticos Z (Zolpidem, Zopiclona)',
                '12 a 24 horas',
                '24 a 48 horas',
                'Detectable en dosis única mediante LC-MS/MS de alta sensibilidad',
              ],
              [
                'Benzodiacepinas de acción corta (Midazolam, Lorazepam, Triazolam)',
                '12 a 24 horas',
                '2 a 4 días (como glucurónidos)',
                'Detectable en el segmento correspondiente al mes del suceso',
              ],
              [
                'Ketamina y Norketamina / Escopolamina',
                '12 a 24 horas',
                '2 a 4 días',
                'Detectable en análisis segmentario capilar',
              ],
            ],
          },
        ],
        practicalChecklist: [
          'Priorizo la recogida de la primera micción en triaje antes de que el paciente acuda al baño o reciba sueroterapia intravenosa.',
          'Conozco la ventana máxima de detección del GHB (<8 h en sangre y <12 h en orina).',
          'Registro en el formulario del INTCF toda medicación prescrita o administrada en la asistencia de urgencias.',
        ],
      },
      {
        id: 'st-202-2',
        title: 'Algoritmo Cronológico de Toma de Muestras (<24 h, 24 h a 5 días, >5 días) y Muestra Capilar',
        clinicalProtocolSummary:
          'Qué muestras exactas tomar según el tiempo transcurrido desde el suceso y cómo se realiza la toma de mechón de cabello del vértex posterior.',
        legalFrameworkNote:
          'Protocolo Nacional de Actuación Médico-Forense y Policial en Delitos contra la Libertad Sexual y Sumisión Química.',
        theoreticalContent: [
          'La elección de las muestras toxicológicas depende estrictamente del intervalo transcurrido entre el episodio sospechoso y la llegada al centro sanitario:',
          '• Menos de 24 horas desde el suceso: Se deben recoger TANTO sangre (2 tubos de 5 mL con fluoruro sódico y oxalato potásico —tapón gris— llenos al máximo sin cámara de aire, más 1 tubo EDTA si se requiere genética) COMO orina (2 alícuotas de al menos 20 mL cada una en envases estériles sin conservantes).',
          '• Entre 24 horas y 5 días (120 horas) desde el suceso: La mayoría de los fármacos de sumisión ya se han depurado del torrente sanguíneo, pero sus metabolitos conjugados persisten en la orina. Se recoge obligatoriamente orina (2 tubos de 20 mL) y se deja constancia para valorar toma diferida de cabello.',
          '• Más de 5 días desde el suceso: La sangre y la orina ya resultarán negativas para una dosis única. La única matriz capaz de acreditar el consumo retrospectivo es el cabello. Como el pelo humano del cuero cabelludo crece a una velocidad media de 1 centímetro al mes (~0,35 mm/día) y la porción intradérmica del folículo tarda entre 3 y 4 semanas en emerger a la superficie cutánea, si el paciente acude a los 6 días del suceso se le debe citar a las 4–6 semanas para que el médico forense corte dos mechones del grosor de un lápiz en la región del vértex posterior (coronilla), a ras del cuero cabelludo, atando el extremo proximal (raíz) con un hilo para orientar el corte segmentario.',
        ],
        stepByStepProtocol: [
          {
            step: '1. Cálculo de las horas transcurridas desde la ingesta sospechosa',
            detail:
              'Determinar con la mayor precisión posible el tramo horario del suceso para activar el kit de <24 h (sangre + orina), 24 h–5 días (orina) o >5 días (programación capilar).',
          },
          {
            step: '2. Prohibición de arrancar el pelo de raíz en toxicología de sumisión',
            detail:
              'A diferencia de algunos estudios genéticos, para toxicología de sumisión química el mechón de cabello del vértex posterior se CORTA a ras de piel con tijera limpia (sin arrancar los bulbos) pasadas 4 a 6 semanas del hecho, señalizando siempre cuál es el extremo proximal.',
          },
        ],
        practicalChecklist: [
          'Sé qué muestras corresponden a los tramos <24 h (sangre + orina), 24 h–5 días (orina) y >5 días (cabello a las 4–6 semanas).',
          'Comprendo por qué el cabello debe cortarse en el vértex posterior a las 4–6 semanas del suceso (crecimiento de ~1 cm/mes).',
        ],
      },
    ],
    resources: [
      {
        id: 'res-202-1',
        title: 'Instrucción del INTCF sobre Remisión de Muestras en Sospecha de Sumisión Química',
        type: 'Protocolo Oficial',
        origin: RegionSource.SPAIN,
        estimatedMinutes: 45,
        summary:
          'Directrices de los Departamentos de Madrid, Barcelona, Sevilla y La Laguna del Instituto Nacional de Toxicología y Ciencias Forenses.',
        keyTakeaways: [
          'No utilizar test rápidos de drogas en orina de Urgencias (inmunoensayos) para descartar sumisión química: dan falsos negativos para GHB, zolpidem, ketamina, escopolamina y bajas dosis de benzodiacepinas, y además consumen volumen de la muestra forense.',
        ],
        fullDocumentSections: [
          {
            sectionTitle: '1. Peligro de los Test Rápidos de Cribado Hospitalario (Inmunoensayo)',
            body: 'Las tiras reactivas o paneles rápidos de drogas de abuso disponibles en los laboratorios de urgencias están diseñados para sobredosis clínicas de metabolitos clásicos (THC, metabolito de cocaína, opiáceos a altas concentraciones), pero NO detectan GHB, hipnóticos Z, ketamina, clonazepam ni escopolamina. Un resultado "negativo" en el cribado rápido de urgencias nunca debe anotarse como "se descarta sumisión química", pues genera confusión judicial. El análisis pericial requiere cromatografía acoplada a espectrometría de masas en tándem (GC-MS/MS y LC-MS/MS) en el INTCF.',
          },
        ],
      },
    ],
    translatedExcerpts: [
      {
        id: 'tr-202-1',
        originalTitle: 'UNODC & IAFN Guidelines for Drug-Facilitated Sexual Assault (DFSA) Forensic Sampling',
        originalLanguage: 'Inglés (EE.UU. - IAFN/NIJ)',
        sourceInstitution: 'UNODC / IAFN',
        originalText:
          '"When a patient presents with anterograde amnesia, disproportionate intoxication, or unexplained confusion, collect the very first urine void immediately upon triage arrival before administering intravenous fluids that could dilute trace metabolites."',
        translatedText:
          '«Cuando un paciente se presenta con amnesia anterógrada, intoxicación desproporcionada o confusión inexplicable, recoja la primera micción inmediatamente al llegar a triaje antes de administrar sueroterapia intravenosa que pueda diluir los metabolitos traza.»',
        clinicalAdaptationSpain:
          'En los protocolos autonómicos españoles (Madrid, Cataluña, Andalucía, País Vasco, C. Valenciana), el triaje de enfermería activa el "Código VISEM / Sumisión Química" priorizando la recogida urinaria antes de la canalización de sueroterapia.',
      },
    ],
  },

  // ============================================================================
  // NIVEL 3 · MÓDULO 301
  // ============================================================================
  {
    id: 'mod-301',
    code: 'MOD-301',
    levelId: LearningLevelId.LEVEL_3,
    levelNumber: 3,
    title: 'Currículo SANE-A / SANE-P Traducido y Atención Integral a la Violencia Sexual',
    subtitle: 'Exploración única coordinada, técnica del doble hisopo, anatomía anogenital y azul de toluidina al 1%',
    estimatedHours: 22,
    originSources: [RegionSource.USA_IAFN, RegionSource.SPAIN, RegionSource.LATAM],
    clinicalCompetencies: [
      'Aplicar el protocolo de exploración conjunta Médico-Forense y Ginecológica en un único acto asistencial',
      'Ejecutar correctamente la técnica del doble hisopo (húmedo + seco) y la toma subungueal, oral y anogenital',
      'Utilizar la nomenclatura del reloj anogenital y la tinción con azul de toluidina al 1% sin comprometer el ADN',
    ],
    subTopics: [
      {
        id: 'st-301-1',
        title: 'Entrevista Informada en el Trauma y Exploración Conjunta Única (Prevención de la Victimización Secundaria)',
        clinicalProtocolSummary:
          'Cómo estructurar la acogida clínica en Urgencias y Centros de Crisis 24h coordinando al equipo sanitario y al Médico Forense para que la víctima solo sea explorada una vez.',
        legalFrameworkNote:
          'Ley Orgánica 10/2022 de Garantía Integral de la Libertad Sexual y Protocolo de Actuación Médico-Forense y Policial ante Delitos contra la Libertad Sexual.',
        theoreticalContent: [
          'La victimización secundaria (o revictimización institucional) es el daño psicológico adicional que sufre una víctima de violencia sexual cuando el sistema sanitario o judicial la somete a interrogatorios repetitivos, actitudes incrédulas o múltiples exploraciones ginecológicas sucesivas (primero por el ginecólogo de guardia y horas después por el médico forense).',
          'En España, el Protocolo Nacional obliga a realizar una Exploración Única Conjunta: cuando una víctima de agresión sexual aguda (<72-96 horas) acude al hospital, se avisa inmediatamente al Juzgado de Guardia para que el Médico Forense se desplace al centro hospitalario y realice la exploración y toma de muestras de forma simultánea y coordinada con el equipo de Ginecología y Enfermería/Matrona (salvo urgencia vital hemorrágica o quirúrgica que no admita demora).',
          'Desde la neurobiología del trauma (estándar IAFN SANE), durante una agresión sexual la amígdala cerebral secuestra la respuesta de supervivencia activando reacciones automáticas de lucha, huida o bloqueo tónico ("freezing" o inmovilidad tónica involuntaria), mientras que los altos niveles de cortisol y catecolaminas alteran la consolidación secuencial en el hipocampo. Por ello, es completamente fisiológico que la víctima presente bloqueos, llanto, aplanamiento afectivo aparente o recuerde fragmentos sensoriales (olores, sonidos) de forma desordenada. La enfermera debe explicar a la paciente que la parálisis o ausencia de gritos/defensa activa es una respuesta neurobiológica refleja de supervivencia.',
        ],
        stepByStepProtocol: [
          {
            step: '1. Acogida inmediata en box reservado sin espera en sala general',
            detail:
              'Asignar prioridad alta en triaje, trasladar a un despacho o box tranquilo y cálido, e indicar a la paciente que no se lave, no se cambie de ropa, no beba ni cepille los dientes hasta la toma de muestras (excepto recoger la 1ª orina si hay sospecha de sumisión química).',
          },
          {
            step: '2. Activación del Médico Forense de guardia y Consentimiento Informado',
            detail:
              'Avisar al Juzgado de Guardia para la exploración conjunta. Explicar que la paciente tiene derecho a aceptar o rechazar cualquier paso de la exploración en cualquier momento.',
          },
          {
            step: '3. Anamnesis dirigida a orientar la búsqueda de indicios biológicos',
            detail:
              'Preguntar con delicadeza y finalidad estrictamente clínica/forense: vía de penetración o intento (vaginal, oral, anal), uso de preservativo, existencia de eyaculación, besos, lamidos o mordeduras en cuello/mamas, arañazos defensivos y si la víctima se ha duchado o cambiado de ropa tras el hecho.',
          },
        ],
        practicalChecklist: [
          'Garantizo la exploración conjunta única (equipo hospitalario + médico forense) salvo emergencia vital quirúrgica.',
          'Comprendo la neurobiología de la inmovilidad tónica ("freezing") y valido emocionalmente a la paciente evitando cualquier pregunta culpabilizadora.',
          'Anoto qué acciones de higiene (ducha, lavado bucal, cambio de ropa interior) han ocurrido entre la agresión y la llegada al hospital.',
        ],
      },
      {
        id: 'st-301-2',
        title: 'Técnica del Doble Hisopo (Sweet et al.), Toma de Muestras Anogenitales y Azul de Toluidina al 1%',
        clinicalProtocolSummary:
          'Procedimiento técnico paso a paso para recuperar ADN salival, epitelial y seminal, nomenclatura horaria anogenital y orden estricto de aplicación del colorante nuclear.',
        legalFrameworkNote:
          'Recomendaciones de la Comisión Nacional para el Uso Forense del ADN (CNUFADN - España) y Guías Clínicas SANE-A de la IAFN.',
        theoreticalContent: [
          'La recuperación de ADN de contacto (células epiteliales descamadas del agresor en agarres de cuello o muñecas) y de saliva (en mordeduras, succiones o mamas) sobre la piel intacta de la víctima se realiza mediante la Técnica del Doble Hisopo descrita por Sweet et al. (1997) y adoptada por la IAFN y la CNUFADN española: 1) Se humedece ligeramente la punta de un primer hisopo estéril con 1–2 gotas de agua destilada estéril o suero fisiológico estéril y se frota toda la superficie de la lesión aplicando presión moderada y rotación circular durante 15-20 segundos para rehidratar y levantar las células adheridas; 2) Inmediatamente después, se pasa un segundo hisopo completamente SECO con el mismo movimiento circular para absorber toda la humedad y las células en suspensión. Ambos hisopos se dejan secar al aire y se ensobran identificándolos como 1º (húmedo) y 2º (seco) de la misma zona.',
          'En la exploración ginecológica y anogenital, la localización de eritemas, abrasiones, equimosis y desgarros se describe utilizando la analogía de la esfera del reloj con la paciente en posición de litotomía: las 12 en punto corresponden al clítoris / sínfisis del pubis, las 6 en punto a la horquilla vulvar posterior / rafe perineal, y las 3 y 9 en punto a los bordes laterales (izquierdo y derecho de la paciente respectivamente). La localización anatómica más frecuente de lesiones por penetración vaginal no consentida (cerca del 70% de los hallazgos positivos) es el cuadrante posterior entre las 5 y las 7 horas (horquilla vulvar posterior, fosa navicular y labios menores posteriores).',
          'Para visualizar microlaceraciones epiteliales que pasan inadvertidas al ojo desnudo, la guía SANE emplea la tinción con solución acuosa de Azul de Toluidina al 1%: dado que las células superficiales intactas de la epidermis queratinizada son anucleadas, no captan el colorante; en cambio, cuando existe una solución de continuidad o desgarro reciente, quedan expuestas las células nucleadas de las capas basales más profundas, las cuales fijan intensamente el azul de toluidina mostrando una línea azul oscuro nítida tras retirar el exceso con lubricante hidrosoluble o ácido acético al 1%. REGLA CRÍTICA: El azul de toluidina y cualquier lubricante especular deben aplicarse SIEMPRE DESPUÉS de haber recogido todos los hisopos para estudio de ADN, nunca antes.',
        ],
        stepByStepProtocol: [
          {
            step: '1. Toma de muestras bucales y subungueales previas',
            detail:
              'Si hubo agresión oral (<24 h), frotar hisopos secos por surcos gingivales, espacios interdentales y cara inferior de la lengua antes de que la paciente beba. Si la víctima arañó al agresor, limpiar bajo el borde libre de cada uña con hisopos finos humedecidos con agua estéril o cortar el borde distal de las uñas sobre papel limpio.',
          },
          {
            step: '2. Secuencia de hisopos anogenitales (de exterior a interior)',
            detail:
              'Sin usar espéculo lubricado (si se precisa espéculo, humedecerlo únicamente con agua tibia o suero estéril): 1º Hisopos de vulva/labios externos, 2º Hisopos de vestíbulo y fondo de saco vaginal posterior (2 hisopos secos), 3º Hisopos endocervicales, y 4º Hisopos perianales y anorrectales (cambiando de guantes antes de pasar a la región anal para no arrastrar fluido vaginal al ano).',
          },
          {
            step: '3. Aplicación opcional de Azul de Toluidina al 1% y Fotocolposcopia',
            detail:
              'Una vez finalizada y asegurada la toma de todos los hisopos de ADN y microbiología, aplicar azul de toluidina al 1% en horquilla vulvar posterior y fosa navicular, esperar 60 segundos, retirar el exceso sin frotar y fotografiar con testigo métrico.',
          },
          {
            step: '4. Profilaxis clínica post-exposición y anticoncepción de urgencia',
            detail:
              'Administrar anticoncepción de urgencia (levonorgestrel o acetato de ulipristal), profilaxis antibiótica frente a ITS (ceftriaxona, azitromicina/doxiciclina, metronidazol) y profilaxis post-exposición frente a VIH (PPE en las primeras 72 h) y Hepatitis B según protocolo hospitalario.',
          },
        ],
        clinicalTables: [
          {
            title: 'Tiempos Máximos Orientativos de Persistencia de Espermatozoides y ADN Seminal (CNUFADN / IAFN)',
            headers: ['Cavidad o Superficie Anatómica', 'Espermatozoides Móviles', 'Espermatozoides Inmóviles / Cabezas', 'ADN Masculino (Cromosoma Y / STR)'],
            rows: [
              ['Cavidad Vaginal / Fondo de Saco', 'Hasta 6–12 horas', 'Hasta 72–96 horas (3–4 días)', 'Hasta 5–7 días en endocérvix'],
              ['Región Anorrectal', 'Pocas horas', 'Hasta 24–48 horas', 'Hasta 48–72 horas'],
              ['Cavidad Bucal', 'Hasta 3–6 horas', 'Hasta 12–24 horas', 'Hasta 24 horas (depende de ingesta y cepillado)'],
              ['Piel intacta / Mordeduras y Lecho Subungueal', 'No aplica', 'Hasta 24–48 horas (si no hubo ducha)', 'Hasta 48–72 horas bajo las uñas'],
            ],
          },
        ],
        practicalChecklist: [
          'Domino la técnica del doble hisopo (1º húmedo con agua estéril + 2º seco) para mordeduras y ADN de contacto en piel.',
          'Recuerdo que jamás se debe aplicar lubricante ni azul de toluidina al 1% antes de tomar los hisopos de ADN anogenital.',
          'Cambio de guantes entre la toma de muestras vaginales y la toma de muestras perianales/rectales para evitar transferencia yatrogénica.',
        ],
      },
    ],
    resources: [
      {
        id: 'res-301-1',
        title: 'IAFN Sexual Assault Nurse Examiner (SANE-A & SANE-P) Education Guidelines — Síntesis Clínica en Español',
        type: 'Guía Traducida',
        origin: RegionSource.USA_IAFN,
        estimatedMinutes: 75,
        summary:
          'Guía estructurada de competencias clínicas y forenses para la atención de pacientes adultos, adolescentes y pediátricos víctimas de violencia sexual.',
        keyTakeaways: [
          'Más del 60–70% de las exploraciones anogenitales tras una agresión sexual no presentan lesiones macroscópicas visibles debido a la elasticidad y rápida regeneración del epitelio mucoso.',
          'El informe clínico debe explicar expresamente que una exploración física normal es plenamente compatible con el relato de agresión sexual.',
        ],
        fullDocumentSections: [
          {
            sectionTitle: '1. Interpretación Pericial de la Exploración Anogenital Normal',
            body: 'Existe el mito social y judicial de que toda violación produce desgarros himeneales o vaginales sangrantes. La evidencia científica acumulada por la IAFN demuestra que los tejidos mucosos estrogenizados poseen gran distensibilidad y que las microerosiones epiteliales epitelizan en menos de 48 a 72 horas sin dejar cicatriz. Además, bajo coacción, miedo o sumisión química no siempre se produce resistencia física brusca.',
          },
          {
            sectionTitle: '2. Prevención de Contaminación Cruzada de ADN en la Sala de Exploración',
            body: 'El ADN amplificado mediante PCR actual es tan sensible que puede detectar el perfil genético del personal sanitario si habla sin mascarilla sobre los hisopos o si apoya los sobres sobre superficies no desinfectadas con hipoclorito sódico (lejía diluida, que destruye el ADN residual, a diferencia del alcohol que solo lo fija).',
          },
        ],
      },
    ],
    translatedExcerpts: [
      {
        id: 'tr-301-1',
        originalTitle: 'IAFN SANE Education Guidelines — Clinical Pearl on Anogenital Findings',
        originalLanguage: 'Inglés (EE.UU. - IAFN/NIJ)',
        sourceInstitution: 'International Association of Forensic Nurses (IAFN)',
        originalText:
          '"Normal or non-specific anogenital examination findings are common after non-consensual sexual contact. Mucous membranes heal rapidly, often within 48 to 72 hours. Documentation must state clearly that the absence of visible trauma does not exclude sexual assault."',
        translatedText:
          '«Los hallazgos normales o inespecíficos en la exploración anogenital son frecuentes tras un contacto sexual no consentido. Las mucosas cicatrizan con rapidez, a menudo en 48 a 72 horas. La documentación debe reflejar con claridad que la ausencia de traumatismo visible no excluye la agresión sexual.»',
        clinicalAdaptationSpain:
          'Criterio respaldado por la jurisprudencia del Tribunal Supremo español y los protocolos de los IMLCF: la enfermera debe registrar la sintomatología referida (dolor, disuria, sangrado previo) y el estado emocional junto con los hallazgos físicos.',
      },
    ],
  },

  // ============================================================================
  // NIVEL 3 · MÓDULO 302
  // ============================================================================
  {
    id: 'mod-302',
    code: 'MOD-302',
    levelId: LearningLevelId.LEVEL_3,
    levelNumber: 3,
    title: 'Valoración Forense del Maltrato Infantil (LOPIVI) y del Adulto Mayor Vulnerable',
    subtitle: 'Diagnóstico diferencial entre lesión accidental e intencionada, síndrome de zarandeo y negligencia geriátrica',
    estimatedHours: 18,
    originSources: [RegionSource.SPAIN, RegionSource.LATAM, RegionSource.USA_IAFN],
    clinicalCompetencies: [
      'Aplicar la regla clínica TEN-4-FACESp para detectar equimosis centinela de maltrato en lactantes y niños pequeños',
      'Diferenciar quemaduras por inmersión forzada ("en guante o calcetín") de derrames accidentales',
      'Identificar signos forenses de maltrato físico, sujeción mecánica ilegal y negligencia grave en el anciano',
    ],
    subTopics: [
      {
        id: 'st-302-1',
        title: 'Semiología Forense del Maltrato Infantil No Accidental (Regla TEN-4-FACESp, Quemaduras y Fracturas)',
        clinicalProtocolSummary:
          'Cómo distinguir en Urgencias de Pediatría y Atención Primaria las lesiones típicas del juego infantil de los traumatismos no accidentales y el trauma craneal abusivo.',
        legalFrameworkNote:
          'Ley Orgánica 8/2021 de Protección Integral a la Infancia y la Adolescencia frente a la Violencia (LOPIVI) y Protocolo Básico de Intervención contra el Maltrato Infantil en el Ámbito Sanitario.',
        theoreticalContent: [
          'En pediatría forense rige el aforismo clásico de Sugar et al.: «Those who don’t cruise, rarely bruise» (los lactantes que aún no gatean ni deambulan rara vez presentan equimosis accidentales). Cualquier equimosis en un lactante menor de 4-6 meses sin movilidad autónoma debe considerarse una "lesión centinela" de posible maltrato físico hasta que se demuestre lo contrario.',
          'Para sistematizar la detección en Urgencias y Pediatría, Pierce et al. validaron la regla clínica TEN-4-FACESp, que presenta una altísima sensibilidad y especificidad para maltrato infantil: indica sospecha fundada ante cualquier equimosis en menores de 4 años localizada en T (Torso: tórax, abdomen, espalda, glúteos, genitales), E (Ears: pabellón auricular y región retroauricular) o N (Neck: cuello), en cualquier región en menores de 4 meses ("4"), así como en F (Frenulum: desgarro de frenillo labial o lingual por introducción forzada de biberón/cuchara o golpe), A (Angle of jaw: ángulo mandibular), C (Cheeks: mejillas carnosas), E (Eyelids: párpados), S (Subconjunctival: hemorragia subconjuntival) y "p" (patterned: lesiones figuradas que reproducen dedos, cinturones, cables o mordeduras adultas con distancia intercanina >3 cm).',
          'En cuanto a las lesiones térmicas pediátricas: los derrames accidentales (cuando el niño tira de un cazo de líquido caliente) producen escaldaduras asimétricas en mentón, cuello, tórax anterior y brazo con bordes irregulares en "mapa geográfico", profundidad decreciente hacia abajo y presencia de gotas de salpicadura satélite. Por el contrario, las quemaduras por inmersión forzada intencionada (castigo al introducir pies, manos o nalgas en agua hirviendo) presentan una distribución simétrica "en calcetín", "en guante" o "en rosquilla/dona" (donde el centro de las nalgas queda pálido y sin quemar por estar comprimido contra el fondo frío de la bañera), con una línea de demarcación superior horizontal completamente nítida y ausencia total de salpicaduras.',
        ],
        stepByStepProtocol: [
          {
            step: '1. Aplicación de la regla TEN-4-FACESp en la exploración desnuda completa',
            detail:
              'Explorar siempre al lactante o niño completamente desnudo (incluyendo área del pañal, detrás de las orejas y frenillo labial superior) documentando en el mapa corporal.',
          },
          {
            step: '2. Identificación del Trauma Craneal Abusivo (Síndrome del Bebé Zarandeado)',
            detail:
              'Sospechar ante lactante que ingresa con apnea, letargia o convulsiones sin signos externos de impacto pero con la tríada clásica: hematoma subdural, hemorragias retinianas bilaterales multicapa y encefalopatía hipóxico-isquémica.',
          },
          {
            step: '3. Notificación dual: Parte Judicial + Hoja de Notificación de Riesgo Infantil',
            detail:
              'Conforme a la LOPIVI (LO 8/2021), ante sospecha grave se emite parte al Juzgado de Guardia / Fiscalía de Menores y se activa a los Servicios de Protección de Menores.',
          },
        ],
        clinicalTables: [
          {
            title: 'Diagnóstico Diferencial Forense entre Traumatismo Accidental y Maltrato Infantil',
            headers: ['Parámetro Clínico', 'Lesión Accidental Típica (Juego / Caída)', 'Lesión No Accidental (Maltrato Físico)'],
            rows: [
              [
                'Localización de las equimosis',
                'Prominencias óseas anteriores: espinillas (tibias), rodillas, frente, mentón, codos',
                'Zonas blandas y protegidas (TEN-4-FACESp): pabellón auricular, cuello, mejillas, abdomen, espalda, glúteos, cara interna de muslos',
              ],
              [
                'Quemaduras por líquido caliente (Escaldaduras)',
                'Asimétricas, bordes irregulares, profundidad variable y múltiples gotas de salpicadura',
                'Simétricas en "guante" o "calcetín", borde superior lineal nítido, profundidad uniforme y signo de la "dona" en glúteos sin salpicaduras',
              ],
              [
                'Patrón de fracturas óseas (Serie ósea radiológica)',
                'Fractura única diafisaria de clavícula, radio o tibia congruente con la caída relatada',
                'Fracturas múltiples en distintos estadios de callo óseo, fracturas costales posteriores (por compresión torácica) y fracturas metafisarias en "asa de cubo"',
              ],
            ],
          },
        ],
        practicalChecklist: [
          'Aplico sistemáticamente la regla TEN-4-FACESp en la valoración de equimosis en pediatría.',
          'Distingo una escaldadura por inmersión forzada (bordes nítidos en calcetín/guante sin salpicaduras) de un derrame accidental.',
          'Conozco que una distancia intercanina >3,0 cm en una huella de mordedura indica dentición definitiva de adulto.',
        ],
      },
      {
        id: 'st-302-2',
        title: 'Enfermería Forense en el Adulto Mayor: Maltrato Físico, Sujeciones y Negligencia Grave',
        clinicalProtocolSummary:
          'Indicadores clínico-forenses de abandono, sobremedicación sedante ("sujeción química") y lesiones por omisión de cuidados en personas mayores o dependientes.',
        legalFrameworkNote:
          'Artículos 173 y 229 del Código Penal, Instrucción 1/2022 de la Fiscalía General del Estado sobre uso de contenciones mecánicas y farmacológicas en centros residenciales.',
        theoreticalContent: [
          'El maltrato al adulto mayor (Elder Abuse) incluye el maltrato físico, psicológico, sexual, la explotación patrimonial y, con especial frecuencia en el ámbito asistencial y domiciliario, la negligencia grave o abandono de los cuidados básicos. La enfermera de Atención Primaria, Urgencias y Geriatría suele ser el único profesional que accede al domicilio o que recibe al paciente anciano trasladado desde un centro sociosanitario.',
          'Deben investigarse desde una óptica médico-legal: 1) La presencia de múltiples úlceras por presión (UPP) en estadio III o IV con tejido necrótico fétido o miasis, acompañadas de caquexia y deshidratación hipernatrémica severa sin que exista una patología terminal consuntiva que lo justifique ni se hayan solicitado curas a Atención Primaria; 2) Marcas de abrasión o equimosis circunferenciales en ambas muñecas y tobillos compatibles con sujeciones mecánicas no pautadas o aplicadas con correas impropias; 3) Intoxicación o sedación profunda inexplicable por neurolépticos o benzodiacepinas ("contención química" no prescrita para anular la demanda de cuidados); y 4) Fracturas de cadera o muñeca no tratadas durante días.',
        ],
        stepByStepProtocol: [
          {
            step: '1. Valoración integral nutricional, de hidratación e integridad cutánea al ingreso',
            detail:
              'Fotografiar con testigo métrico todas las lesiones por presión (UPP) al minuto cero del ingreso en Urgencias o planta, registrando estadio, dimensiones, tunelizaciones y signos de infección para deslindar responsabilidades previas al ingreso.',
          },
          {
            step: '2. Cribado analítico y toxicológico ante estupor inexplicable',
            detail:
              'Solicitar ionograma (sodio plasmático >150 mEq/L orienta a privación hídrica prolongada), función renal, CPK (rabdomiólisis por inmovilización o caída prolongada en el suelo) y tóxicos en orina.',
          },
        ],
        practicalChecklist: [
          'Documentar al ingreso todas las UPP preexistentes con medidas exactas en milímetros y estadio para acreditar su origen extrahospitalario.',
          'Identifico los signos de sujeción mecánica o farmacológica indebida conforme a la Instrucción 1/2022 de la Fiscalía General del Estado.',
        ],
      },
    ],
    resources: [
      {
        id: 'res-302-1',
        title: 'Protocolo Básico de Intervención contra el Maltrato Infantil y Guía LOPIVI en el Ámbito Sanitario',
        type: 'Protocolo Oficial',
        origin: RegionSource.SPAIN,
        estimatedMinutes: 50,
        summary:
          'Guía estatal de detección, valoración de gravedad, notificación y protección hospitalaria del menor.',
        keyTakeaways: [
          'La obligación de notificar según la LOPIVI 8/2021 se activa ante la sospecha fundada de violencia, sin que el sanitario tenga que esperar a tener la certeza judicial plena.',
        ],
        fullDocumentSections: [
          {
            sectionTitle: '1. Obligación Reforzada de Comunicación (Art. 15 y 16 LOPIVI 8/2021)',
            body: 'El personal sanitario tiene el deber cualificado de comunicar de forma inmediata a los Servicios Sociales y, cuando pudiera ser constitutivo de delito, al Ministerio Fiscal o Juzgado de Guardia, cualquier situación de violencia física, sexual o negligencia grave sobre un menor de edad.',
          },
        ],
      },
    ],
    translatedExcerpts: [
      {
        id: 'tr-302-1',
        originalTitle: 'Pierce et al. / IAFN Pediatric Forensic Assessment — TEN-4-FACESp Bruising Clinical Decision Rule',
        originalLanguage: 'Inglés (EE.UU. - IAFN/NIJ)',
        sourceInstitution: 'Journal of the American Medical Association (JAMA Network) & IAFN SANE-P',
        originalText:
          '"Any bruising on the Torso, Ears, or Neck in a child under 4 years of age, any bruising anywhere on an infant under 4 months of age, or patterned bruising on the Frenulum, Angle of jaw, Cheeks, Eyelids, or Subconjunctivae requires immediate forensic evaluation for physical abuse."',
        translatedText:
          '«Cualquier equimosis en el Torso, Orejas o Cuello en un niño menor de 4 años, cualquier equimosis en cualquier parte del cuerpo en un lactante menor de 4 meses, o equimosis en el Frenillo, Ángulo mandibular, Mejillas, Párpados o Subconjuntiva exige una evaluación forense inmediata por maltrato físico.»',
        clinicalAdaptationSpain:
          'Regla clínica de referencia incorporada en los protocolos de Urgencias Pediátricas de la Asociación Española de Pediatría (AEP / SEUP) y de los Institutos de Medicina Legal.',
      },
    ],
  },

  // ============================================================================
  // NIVEL 4 · MÓDULO 401
  // ============================================================================
  {
    id: 'mod-401',
    code: 'MOD-401',
    levelId: LearningLevelId.LEVEL_4,
    levelNumber: 4,
    title: 'Traumatología Forense Avanzada: Balística de Heridas, Armas Blancas y Asfixiología',
    subtitle: 'Semiología de orificios de entrada y salida, residuos de disparo (GSR), heridas defensivas y protocolo DVI Interpol',
    estimatedHours: 20,
    originSources: [RegionSource.SPAIN, RegionSource.LATAM, RegionSource.GLOBAL],
    clinicalCompetencies: [
      'Identificar los elementos del orificio de entrada balístico (anillo de Fisch, golpe de mina de Hofmann, tatuaje verdadero y falso)',
      'Diferenciar heridas incisas, punzantes, contusas e inciso-contusas y localizar heridas de defensa en manos y antebrazos',
      'Aplicar el Real Decreto 32/2009 y los formularios Interpol DVI en sucesos con víctimas múltiples',
    ],
    subTopics: [
      {
        id: 'st-401-1',
        title: 'Balística de las Heridas: Orificio de Entrada, Anillo de Fisch, Tatuaje de Pólvora y Orificio de Salida',
        clinicalProtocolSummary:
          'Cómo describir técnicamente las lesiones por proyectil de arma de fuego en Urgencias y Quirófano, preservando el proyectil extraído y los residuos de disparo.',
        legalFrameworkNote:
          'Tratado de Medicina Legal y Ciencias Forenses (Gisbert Calabuig) y Protocolos de Balística Forense.',
        theoreticalContent: [
          'Cuando un proyectil de arma de fuego impacta contra el cuerpo humano, junto con la bala salen por la boca del cañón gases incandescentes a alta presión, llama, humo negro (hollín) y granos de pólvora total o parcialmente incombustos. El estudio de estos elementos en la piel y en la ropa permite determinar cuál es el orificio de entrada, cuál el de salida y a qué distancia se efectuó el disparo.',
          'El Orificio de Entrada presenta elementos constantes (independientes de la distancia) y elementos secundarios (dependientes de la distancia): 1) Los elementos constantes forman el llamado Anillo de Fisch, compuesto por el "collarete o halo de enjugamiento" (reborde negruzco donde el proyectil limpia la suciedad y lubricante que arrastra del ánima del cañón al atravesar la piel) superpuesto sobre la "cintilla erosivo-contusiva" (zona circular o semilunar desprovista de epidermis por el estiramiento y fricción de la piel al invaginarse). Si el anillo erosivo es circular concéntrico, el disparo fue perpendicular (90°); si tiene forma de semiluna excéntrica, la parte más ancha de la semiluna indica la dirección desde la que vino el proyectil.',
          '2) Según la distancia del disparo: En el disparo a "boca de jarro" o en contacto firme (cañón apoyado contra la piel sobre un plano óseo como el cráneo), los gases penetran bajo la piel y rebotan contra el hueso desgarrando los bordes en forma estrellada con bordes ennegrecidos ("Golpe de mina de Hofmann") y dejando a veces la impronta de la boca del cañón ("Signo de Puppe-Werkgartner"). En el disparo a "quemarropa" (<10-15 cm), se suma el efecto térmico de la llama (quemadura de pelos y epidermis) junto con el ahumamiento ("falso tatuaje", que desaparece al lavar con suero) y el "tatuaje verdadero" (granos de pólvora incombusta incrustados en la dermis que NO desaparecen con el lavado). En el disparo a corta distancia (15 a 60-70 cm en armas cortas) persiste el tatuaje verdadero sin quemadura. En el disparo a larga distancia (>70-100 cm) solo se observa el orificio con su anillo de Fisch, sin tatuaje ni ahumamiento.',
          'El Orificio de Salida, por el contrario, suele ser de mayor tamaño o irregular, presenta bordes evertidos (hacia afuera), grasa subcutánea herniada y CARECE SIEMPRE de cintilla erosiva de Fisch, de halo de enjugamiento y de tatuaje.',
        ],
        stepByStepProtocol: [
          {
            step: '1. Fotografiar la herida balística ANTES de lavar la piel o desbridar los bordes',
            detail:
              'En quirófano o urgencias, no recortar quirúrgicamente los bordes cutáneos del orificio de entrada (Friedrich) sin haberlos fotografiado con testigo métrico; si se extirpa piel perilesional, conservarla en envase estéril sin formol para análisis de residuos de disparo.',
          },
          {
            step: '2. Extracción del proyectil en quirófano sin usar pinzas metálicas dentadas',
            detail:
              'Al extraer una bala o posta alojada en el cuerpo, NUNCA sujetarla directamente con pinzas quirúrgicas metálicas (Kocher, Pean), ya que las estrías de la pinza rayan el blindaje del proyectil y destruyen las microestrías del cañón necesarias para el cotejo balístico microscópico. Utilizar los dedos enguantados o pinzas recubiertas con goma/gasa.',
          },
          {
            step: '3. Embalaje del proyectil y preservación de manos',
            detail:
              'Secar el proyectil al aire sin frotarlo, envolverlo en gasa o papel suave dentro de un bote rígido precintado y firmar la cadena de custodia.',
          },
        ],
        clinicalTables: [
          {
            title: 'Diagnóstico Diferencial Forense entre Orificio de Entrada y Orificio de Salida Balístico',
            headers: ['Característica Anatómica', 'Orificio de Entrada (Típico)', 'Orificio de Salida (Típico)'],
            rows: [
              [
                'Morfología y Bordes',
                'Circular u ovalado regular, bordes invertidos hacia el interior (salvo Golpe de Mina de Hofmann en cráneo)',
                'Irregular, estrellado o en hendidura, bordes evertidos hacia el exterior',
              ],
              [
                'Anillo de Fisch (Cintilla erosiva + Halo de enjugamiento)',
                'PRESENTE (signo patognomónico de entrada)',
                'AUSENTE siempre (excepto el rarísimo signo de Romanese si la espalda apoyaba contra un muro duro)',
              ],
              [
                'Tatuaje de pólvora (verdadero) y Ahumamiento (falso)',
                'Presente en disparos a corta distancia (<50–70 cm). El tatuaje verdadero es indeleble al lavado',
                'AUSENTE siempre',
              ],
            ],
          },
        ],
        practicalChecklist: [
          'Reconozco el Anillo de Fisch (cintilla erosivo-contusiva + halo de enjugamiento) y la diferencia entre tatuaje verdadero (indeleble) y falso tatuaje (hollín lavable).',
          'Sé que en quirófano jamás se debe sujetar un proyectil con pinzas metálicas sin protección para no rayar sus estrías balísticas.',
        ],
      },
      {
        id: 'st-401-2',
        title: 'Lesiones por Arma Blanca, Heridas de Defensa y Protocolo Interpol DVI en Catástrofes',
        clinicalProtocolSummary:
          'Semiología de heridas incisas, punzantes, contusas e inciso-contusas, localización de lesiones defensivas y actuación en sucesos con múltiples víctimas.',
        legalFrameworkNote:
          'Real Decreto 32/2009 por el que se aprueba el Protocolo nacional de actuación Médico-forense y de Policía Científica en sucesos con víctimas múltiples y Guía Interpol DVI.',
        theoreticalContent: [
          'Las armas blancas producen cuatro tipos de lesiones según su mecanismo de acción: 1) Heridas incisas o cortantes (predomina la longitud sobre la profundidad; bordes lineales limpios sin puentes de tejido que se unen en dos extremos llamados "colas de Lacassagne": una cola de entrada corta y profunda, y una cola de salida larga y superficial llamadas "cola de ratón", que indica la dirección del corte); 2) Heridas punzantes (producidas por instrumentos cilíndricos como punzones o destornilladores; predomina la profundidad sobre la extensión superficial); 3) Heridas punzocortantes (hojas de cuchillo o navaja de un filo o doble filo; dejan un ojal con un ángulo agudo y otro romo si es monocortante —ojal de Filhos-Langer—); y 4) Heridas inciso-contusas (hachas, machetes; combinan corte profundo con fractura ósea y contusión de bordes, sin puentes dérmicos).',
          'De enorme valor forense es diferenciar una herida contusa (producida por un objeto romo como un palo o barra sobre una cresta ósea como el cuero cabelludo o la ceja, que simula un corte pero presenta bordes magullados y "puentes de tejido conjuntivo o vasos" tendidos de un borde al otro en el fondo de la herida) de una herida incisa (en la que la hoja afilada secciona absolutamente todos los tejidos sin dejar puentes de unión en el fondo).',
          'Asimismo, ante toda agresión con arma blanca o contusa deben buscarse sistemáticamente las "Heridas de Defensa": cuando la víctima intenta protegerse el rostro y el tórax levantando los brazos o intentando sujetar el cuchillo del agresor, se producen cortes transversales típicos en el borde cubital (posterointerno) de los antebrazos, dorso de las manos y pliegues flexores de la cara palmar de los dedos y primer espacio interdigital.',
        ],
        stepByStepProtocol: [
          {
            step: '1. Inspección del fondo de la herida (presencia o ausencia de puentes tisulares)',
            detail:
              'La existencia de puentes de tejido fibroso o vascular entre las paredes de la herida confirma un mecanismo contuso (impacto romo) y descarta un corte por filo de cuchillo.',
          },
          {
            step: '2. Documentación de heridas defensivas en antebrazos y manos',
            detail:
              'Registrar y fotografiar el borde cubital de ambos antebrazos y las palmas de las manos, pues acreditan que la víctima estaba consciente y trató de repeler el ataque.',
          },
          {
            step: '3. Actuación en Sucesos con Víctimas Múltiples (RD 32/2009 / Interpol DVI)',
            detail:
              'En catástrofes, no retirar efectos personales adheridos a los fallecidos, asignar numeración correlativa única y colaborar en la recopilación de datos Ante-Mortem (Formulario Amarillo Interpol: odontograma, tatuajes, cicatrices quirúrgicas, números de serie de prótesis/marcapasos) para su cruce con el Formulario Post-Mortem (Rosa).',
          },
        ],
        practicalChecklist: [
          'Sé distinguir una herida contusa en región ciliar/craneal (con puentes de tejido en el fondo) de una herida incisa (sin puentes y con colas de entrada/salida).',
          'Inspecciono y documento siempre el borde cubital de los antebrazos y la cara palmar de las manos en busca de heridas de defensa.',
          'Conozco el código de colores de los formularios Interpol DVI (Amarillo para datos Ante-Mortem y Rosa para datos Post-Mortem).',
        ],
      },
    ],
    resources: [
      {
        id: 'res-401-1',
        title: 'Real Decreto 32/2009 — Protocolo Nacional de Actuación Médico-Forense en Sucesos con Víctimas Múltiples',
        type: 'Protocolo Oficial',
        origin: RegionSource.SPAIN,
        estimatedMinutes: 55,
        summary:
          'Organización de las Fases Preliminar, de Recuperación de Cadáveres, de Examen Post-Mortem y de Identificación (DVI).',
        keyTakeaways: [
          'Los métodos primarios de identificación científica reconocidos por Interpol son tres: Huella dactilar (Lofoscopia), Perfil de ADN (Genética) y Odontología Forense (Odontograma comparativo), complementados con números de serie de implantes quirúrgicos.',
        ],
        fullDocumentSections: [
          {
            sectionTitle: '1. Prohibición del Reconocimiento Visual como Método Único en Catástrofes',
            body: 'El estrés agudo de los familiares y las alteraciones traumáticas o tafonómicas hacen que el reconocimiento visual directo genere un alto porcentaje de errores de identificación. El RD 32/2009 exige el cotejo científico de datos Ante-Mortem y Post-Mortem.',
          },
        ],
      },
    ],
    translatedExcerpts: [
      {
        id: 'tr-401-1',
        originalTitle: 'INTERPOL Disaster Victim Identification (DVI) Guide — Primary Identifiers',
        originalLanguage: 'Inglés (EE.UU. - IAFN/NIJ)',
        sourceInstitution: 'INTERPOL Standing Committee on DVI',
        originalText:
          '"Visual recognition is notoriously unreliable and must never be used as the sole basis for identification in mass fatality incidents. Primary identifiers are friction ridge analysis, forensic odontology, and DNA profiling, alongside unique serial numbers of medical implants."',
        translatedText:
          '«El reconocimiento visual es notoriamente poco fiable y nunca debe utilizarse como única base para la identificación en incidentes con múltiples víctimas mortales. Los identificadores primarios son el análisis de crestas papilares, la odontología forense y el perfil de ADN, junto con los números de serie únicos de implantes médicos.»',
        clinicalAdaptationSpain:
          'Integrado íntegramente en el Real Decreto 32/2009 español. Los registros hospitalarios y de enfermería sobre prótesis articulares, marcapasos, stents y cicatrices quirúrgicas son clave en los equipos Ante-Mortem.',
      },
    ],
  },

  // ============================================================================
  // NIVEL 4 · MÓDULO 402
  // ============================================================================
  {
    id: 'mod-402',
    code: 'MOD-402',
    levelId: LearningLevelId.LEVEL_4,
    levelNumber: 4,
    title: 'El Dictamen Pericial Enfermero (Norma UNE 197001) y Ratificación en Juicio Oral',
    subtitle: 'Estructura completa del informe pericial, análisis de la Lex Artis ad hoc, nexo causal y defensa ante el Juez',
    estimatedHours: 18,
    originSources: [RegionSource.SPAIN, RegionSource.USA_IAFN],
    clinicalCompetencies: [
      'Redactar un Dictamen Pericial Enfermero completo siguiendo todos los epígrafes de la Norma UNE 197001',
      'Formular correctamente el juramento o promesa de objetividad exigido por el Artículo 335.2 de la LEC',
      'Defender y ratificar el dictamen en sala judicial ante el interrogatorio de magistrados, fiscales y letrados',
    ],
    subTopics: [
      {
        id: 'st-402-1',
        title: 'Estructura del Informe Pericial Enfermero según la Norma UNE 197001 y Art. 335 LEC',
        clinicalProtocolSummary:
          'Plantilla completa y metodología para auditar la praxis de enfermería (Lex Artis ad hoc), valorar cuidados y establecer o descartar el nexo de causalidad.',
        legalFrameworkNote:
          'Artículos 335 a 352 de la Ley 1/2000 de Enjuiciamiento Civil (LEC), Norma UNE 197001 de Criterios Generales para la Elaboración de Informes y Dictámenes Periciales y Resolución CGE 10/2021.',
        theoreticalContent: [
          'El Dictamen Pericial Enfermero es el documento técnico-científico mediante el cual una enfermera colegiada aporta al Juez o Tribunal los conocimientos especializados sobre cuidados de enfermería necesarios para valorar hechos relevantes en un litigio penal, civil, contencioso-administrativo o social (ej. responsabilidad patrimonial por úlceras por presión nosocomiales, caídas intrahospitalarias, errores de medicación, extravasación de citostáticos, quemaduras en quirófano, fallo en vigilancia de contenciones o valoración de dependencia y secuelas de cuidados).',
          'Para gozar de plena validez formal en los tribunales españoles, todo dictamen pericial debe incluir de forma inexcusable el Juramento o Promesa del Artículo 335.2 de la Ley de Enjuiciamiento Civil: «Manifiesto bajo juramento o promesa de decir verdad, que he actuado y, en su caso, actuaré con la mayor objetividad posible, tomando en consideración tanto lo que pueda favorecer como lo que sea susceptible de causar perjuicio a cualquiera de las partes, y que conozco las sanciones penales en las que podría incurrir si incumpliere mi deber como perito (Arts. 459 y 460 del Código Penal)». Omitir este párrafo puede invalidar la admisión del informe.',
          'El estándar de calidad en España lo marca la Norma UNE 197001, que estructura el dictamen en 8 bloques perfectamente diferenciados: 0) Portada e identificación del expediente; 1) Identificación del perito y del solicitante; 2) Objeto y alcance de la pericia; 3) Juramento o promesa (Art. 335.2 LEC); 4) Documentación y fuentes examinadas (historia clínica foliada, gráficas de constantes, registros de enfermería, protocolos del centro vigentes en la fecha del suceso); 5) Antecedentes y cronología fáctica objetiva de los hechos; 6) Consideraciones técnicas de enfermería y análisis de la Lex Artis ad hoc; 7) Conclusiones médico-legales numeradas, claras y directas; y 8) Lugar, fecha y firma.',
        ],
        stepByStepProtocol: [
          {
            step: '1. Estudio cronológico de la Historia Clínica y Protocolos vigentes en la fecha del hecho',
            detail:
              'La actuación de enfermería se evalúa según la "Lex Artis ad hoc" (el estándar de cuidados y medios exigibles en ese servicio concreto y en esa fecha exacta), evitando el sesgo retrospectivo.',
          },
          {
            step: '2. Evaluación de los 3 requisitos de la Responsabilidad Sanitaria (Daño, Infracción de Lex Artis y Nexo Causal)',
            detail:
              'En derecho sanitario no basta con que exista una complicación (ej. aparición de una UPP en un paciente en shock séptico con fármacos vasoactivos a altas dosis): el perito enfermero debe analizar si se aplicaron las escalas de riesgo (Braden/Norton), los cambios posturales posibles según su estabilidad hemodinámica y las superficies especiales de manejo de presión (SEMP). Si se cumplieron todos los protocolos posibles para su estado crítico, la lesión fue inevitable y no existe mala praxis.',
          },
          {
            step: '3. Redacción de Conclusiones breves, categóricas y comprensibles para juristas',
            detail:
              'Las conclusiones deben responder una a una a las preguntas del objeto de la pericia, sin tecnicismos oscuros ni ambigüedades, ya que muchos jueces leen en primer lugar el apartado de Conclusiones.',
          },
          {
            step: '4. Ratificación y defensa en el acto del Juicio Oral',
            detail:
              'Acudir a la sala con dominio absoluto de las fechas y folios de la historia clínica, dirigirse siempre a Su Señoría con tono pedagógico, sereno e imparcial, y no entrar en provocaciones dialécticas de los abogados de las partes.',
          },
        ],
        clinicalTables: [
          {
            title: 'Plantilla Estructural del Dictamen Pericial Enfermero conforme a la Norma UNE 197001',
            headers: ['Sección UNE 197001', 'Contenido Técnico Obligatorio', 'Errores Frecuentes que Invalidan o Debilitan la Pericia'],
            rows: [
              [
                '1–3. Encabezado, Objeto y Declaración Art. 335.2 LEC',
                'Datos colegiales de la enfermera perito, juzgado y nº de autos, definición exacta de las cuestiones a responder y fórmula literal del Art. 335.2 LEC',
                'Olvidar la promesa/juramento del Art. 335.2 LEC o extralimitarse opinando sobre actos quirúrgicos puramente médicos fuera de la competencia enfermera',
              ],
              [
                '4–5. Fuentes Documentales y Relato Cronológico',
                'Listado exhaustivo de documentos revisados y línea temporal minuto a minuto de las anotaciones de enfermería, constantes y escalas (Glasgow, Braden, Downton, EVA)',
                'Dar por sentado que "lo que no está registrado sí se hizo" (en sede judicial rige el principio de que lo no registrado en la historia clínica se presume no realizado)',
              ],
              [
                '6. Consideraciones Técnicas y Análisis de la Lex Artis',
                'Contraste entre los cuidados prestados y las Guías de Práctica Clínica (GNEAUPP, SEMICYUC, SEMES, taxonomía NANDA-NIC-NOC) con bibliografía indexada',
                'Emitir opiniones subjetivas sin citar guías clínicas ni protocolos oficiales vigentes en el año del suceso',
              ],
              [
                '7. Conclusiones Periciales',
                'Conclusiones numeradas (Primera, Segunda, Tercera...) que sintetizan el resultado del análisis sin añadir datos nuevos no explicados en el cuerpo',
                'Redactar conclusiones de varias páginas o incluir juicios de culpabilidad penal que competen exclusivamente al Magistrado',
              ],
            ],
          },
        ],
        practicalChecklist: [
          'Conozco de memoria los 8 apartados de la Norma UNE 197001 y la fórmula legal del artículo 335.2 de la LEC.',
          'Sé analizar el cumplimiento de la Lex Artis ad hoc utilizando escalas validadas (Braden, Norton, Downton, Glasgow) y guías clínicas oficiales.',
          'Comprendo el valor jurídico del registro enfermero: en los tribunales, el cuidado o vigilancia no registrado en la historia clínica carece de respaldo probatorio.',
        ],
      },
    ],
    resources: [
      {
        id: 'res-402-1',
        title: 'Manual Práctico de Peritaje Enfermero y Norma UNE 197001 (Guía Completa de Redacción)',
        type: 'Manual Clínico',
        origin: RegionSource.SPAIN,
        estimatedMinutes: 65,
        summary:
          'Modelo íntegro de dictamen pericial de enfermería y pautas de oratoria forense para la ratificación en el juicio oral.',
        keyTakeaways: [
          'El perito enfermero no es el abogado de ninguna de las partes: su credibilidad ante el Juez reside en su rigor científico y su neutralidad técnica.',
        ],
        fullDocumentSections: [
          {
            sectionTitle: '1. Modelo Literal de Juramento / Promesa (Art. 335.2 LEC)',
            body: '«Dña. [Nombre y Apellidos], Graduada en Enfermería, colegiada en el Ilustre Colegio Oficial de Enfermería de [Provincia] con el número [XXXXX], en cumplimiento de lo dispuesto en el artículo 335.2 de la Ley 1/2000 de Enjuiciamiento Civil, PROMETE / JURA decir verdad y manifiesta que ha actuado y, en su caso, actuará con la mayor objetividad posible, tomando en consideración tanto lo que pueda favorecer como lo que sea susceptible de causar perjuicio a cualquiera de las partes, y que conoce las sanciones penales en las que podría incurrir si incumpliere su deber como perito.»',
          },
          {
            sectionTitle: '2. Decálogo para la Ratificación en el Juicio Oral',
            body: '1º Escuchar la pregunta completa del abogado o del Juez antes de responder. 2º Si una pregunta es confusa o capciosa, pedir amablemente que se reformule. 3º Dirigir la mirada y la explicación hacia el Magistrado aunque pregunte el letrado de parte. 4º Apoyarse siempre en los folios exactos de la historia clínica («como consta en la gráfica de enfermería de UCI al folio 42...»). 5º No especular sobre extremos no acreditados documentalmente.',
          },
        ],
      },
    ],
    translatedExcerpts: [
      {
        id: 'tr-402-1',
        originalTitle: 'American Association of Legal Nurse Consultants (AALNC) — Principles of Practice',
        originalLanguage: 'Inglés (EE.UU. - IAFN/NIJ)',
        sourceInstitution: 'AALNC & IAFN',
        originalText:
          '"The Legal Nurse Consultant evaluates the standard of nursing care by comparing documented clinical interventions against evidence-based protocols in effect at the exact time of the event, avoiding hindsight bias."',
        translatedText:
          '«La Enfermera Consultora Legal evalúa el estándar de cuidados de enfermería comparando las intervenciones clínicas documentadas con los protocolos basados en la evidencia vigentes en el momento exacto del suceso, evitando el sesgo retrospectivo.»',
        clinicalAdaptationSpain:
          'Equivale en el derecho sanitario español al concepto jurisprudencial de "Lex Artis ad hoc": juzgar la actuación enfermera según los medios, protocolos y circunstancias reales del servicio en ese instante, no por el resultado final.',
      },
    ],
  },
];
