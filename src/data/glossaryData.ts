export type GlossaryCategory =
  | 'Criminalística y Custodia'
  | 'Tanatología'
  | 'Victimología y Clínica SANE'
  | 'Toxicología Forense'
  | 'Traumatología y Balística'
  | 'Marco Legal y Peritaje';

export interface GlossaryTerm {
  id: string;
  term: string;
  englishEquivalent: string;
  category: GlossaryCategory;
  definition: string;
  clinicalApplication: string;
  legalOrTechnicalReference: string;
  relatedTerms: string[];
}

export const FORENSIC_GLOSSARY: GlossaryTerm[] = [
  {
    id: 'gl-01',
    term: 'Cadena de custodia',
    englishEquivalent: 'Chain of Custody',
    category: 'Criminalística y Custodia',
    definition:
      'Procedimiento documental y físico, continuo e ininterrumpido, que garantiza la identidad, integridad, trazabilidad y conservación ("principio de mismidad") de cualquier muestra biológica, vestimenta o indicio recogido desde el momento de su obtención en el paciente hasta su análisis en el laboratorio forense (INTCF) y su presentación en el juicio oral.',
    clinicalApplication:
      'La enfermera inicia la cadena de custodia al rotular cada muestra de forma individual, secar al aire los indicios biológicos, embalarlos en sobres de papel transpirable, precintarlos firmando mitad sobre el precinto y mitad sobre el sobre, y registrar en el formulario oficial la fecha, hora exacta, nombre completo, número de colegiada y firma de quien entrega y de quien recibe.',
    legalOrTechnicalReference:
      'Orden JUS/1291/2010 del Ministerio de Justicia e INTCF; Jurisprudencia del Tribunal Supremo (Sala 2ª).',
    relatedTerms: ['Principio de mismidad', 'Indicio dubitado', 'Precinto forense'],
  },
  {
    id: 'gl-02',
    term: 'Tanatología',
    englishEquivalent: 'Forensic Thanatology',
    category: 'Tanatología',
    definition:
      'Rama de la Medicina y Enfermería Forense que estudia el proceso de la muerte, los signos ciertos de fallecimiento y las transformaciones físicas, químicas y microbianas que experimenta el cadáver (fenómenos cadavéricos abióticos, bióticos y destructores/conservadores), así como sus implicaciones médico-legales.',
    clinicalApplication:
      'Permite a la enfermera de urgencias, UCI o emergencias extrahospitalarias distinguir entre muerte natural certificable y muerte judicial (Art. 340 LECrim), preservar in situ todos los dispositivos invasivos tras un éxitus judicializado y registrar los signos post-mortem tempranos.',
    legalOrTechnicalReference:
      'Artículos 340 y 343 de la Ley de Enjuiciamiento Criminal (LECrim); Resolución COFEN 556/2017.',
    relatedTerms: ['Cronotanatodiagnóstico', 'Algor mortis', 'Livor mortis', 'Rigor mortis'],
  },
  {
    id: 'gl-03',
    term: 'Victimología',
    englishEquivalent: 'Victimology & Trauma-Informed Care',
    category: 'Victimología y Clínica SANE',
    definition:
      'Disciplina científica que estudia a la víctima de un hecho delictivo o traumático en su dimensión biopsicosocial, analizando los factores de vulnerabilidad, las respuestas neurobiológicas ante la violencia aguda, los mecanismos de daño primario y la prevención de la victimización secundaria institucional.',
    clinicalApplication:
      'Fundamenta los cuidados de enfermería informados en el trauma (Trauma-Informed Care): entrevista en espacio seguro sin acompañantes sospechosos, escucha activa sin preguntas culpabilizadoras, respeto a la autonomía y coordinación de la exploración única conjunta entre Ginecología/Urgencias y el Médico Forense.',
    legalOrTechnicalReference:
      'Ley 4/2015 del Estatuto de la Víctima del Delito; Guías Clínicas SANE de la IAFN.',
    relatedTerms: ['Victimización secundaria', 'Inmovilidad tónica (Freezing)', 'SANE'],
  },
  {
    id: 'gl-04',
    term: 'Cronotanatodiagnóstico (Intervalo Post-Mortem)',
    englishEquivalent: 'Post-Mortem Interval (PMI) Estimation',
    category: 'Tanatología',
    definition:
      'Conjunto de métodos clínicos, térmicos, bioquímicos y tanatológicos empleados para estimar el tiempo transcurrido desde que se produjo el fallecimiento (data de la muerte) hasta el momento de la exploración del cadáver.',
    clinicalApplication:
      'Se basa en la correlación de la temperatura rectal profunda con la temperatura ambiental y el peso corporal (Nomograma de Henssge), la movilidad o fijación de las livideces cadavéricas a la vitropresión, el grado de rigidez articular (Ley de Nysten), los signos oculares (Stenon-Louis y Sommer-Larcher) y el potasio en humor vítreo.',
    legalOrTechnicalReference:
      'Nomograma de Henssge (1988); Tratado de Medicina Legal de Gisbert Calabuig.',
    relatedTerms: ['Algor mortis', 'Livor mortis', 'Rigor mortis', 'Signo de Stenon-Louis'],
  },
  {
    id: 'gl-05',
    term: 'Livor mortis (Livideces cadavéricas)',
    englishEquivalent: 'Livor Mortis / Post-Mortem Hypostasis',
    category: 'Tanatología',
    definition:
      'Manchas cutáneas de coloración generalmente rojo-violácea producidas por la sedimentación gravitatoria pasiva de la sangre dentro de los capilares y vénulas de las regiones declives del cadáver tras el cese del latido cardíaco, respetando las zonas de apoyo comprimidas.',
    clinicalApplication:
      'Inician a los 20–45 min en cara posterior del cuello, confluyen a las 3–5 h y son móviles hasta las 10–12 h (blanquean a la vitropresión). Pasadas 12–15 h quedan fijas. Su color rojo-cereza brillante orienta a intoxicación por monóxido de carbono (CO) o cianuro, y su presencia en dos caras opuestas indica que el cadáver fue movido ("transposición de livideces").',
    legalOrTechnicalReference:
      'Manuales de Patología Forense de los Institutos de Medicina Legal (IMLCF).',
    relatedTerms: ['Vitropresión', 'Transposición de livideces', 'Carboxihemoglobina'],
  },
  {
    id: 'gl-06',
    term: 'Rigor mortis (Rigidez cadavérica)',
    englishEquivalent: 'Rigor Mortis',
    category: 'Tanatología',
    definition:
      'Estado post-mortem de endurecimiento, retracción e inmovilidad de la musculatura estriada y lisa debido a la depleción irreversible del trifosfato de adenosina (ATP) sarcoplásmico, lo que impide la separación de los filamentos de actina y miosina.',
    clinicalApplication:
      'Sigue un orden descendente cráneo-caudal (Ley de Nysten): comienza en mandíbula y párpados (2–4 h), se extiende a cuello y brazos (4–6 h), alcanza su máxima intensidad entre las 12 y 24 h, y desaparece en el mismo orden a las 24–36 h cuando comienza la autólisis y putrefacción.',
    legalOrTechnicalReference:
      'Ley de Nysten; Tanatología Forense Clínica.',
    relatedTerms: ['Espasmo cadavérico', 'Algor mortis', 'Mancha verde abdominal'],
  },
  {
    id: 'gl-07',
    term: 'Algor mortis (Enfriamiento cadavérico)',
    englishEquivalent: 'Algor Mortis / Post-Mortem Cooling',
    category: 'Tanatología',
    definition:
      'Descenso progresivo de la temperatura corporal tras la muerte por cese de la termorregulación e igualación termodinámica con la temperatura del medio ambiente, siguiendo una curva sigmoidea con una meseta térmica inicial de 2 a 3 horas.',
    clinicalApplication:
      'La toma de temperatura rectal profunda con termómetro químico o sonda calibrada sólo debe realizarse tras haber inspeccionado y tomado primero los hisopos anorrectales de ADN si existe sospecha de delito sexual.',
    legalOrTechnicalReference:
      'Modelo exponencial doble de Marshall-Hoare y Nomograma de Henssge.',
    relatedTerms: ['Cronotanatodiagnóstico', 'Meseta térmica de Henssge'],
  },
  {
    id: 'gl-08',
    term: 'Victimización secundaria (Revictimización institucional)',
    englishEquivalent: 'Secondary Victimization',
    category: 'Victimología y Clínica SANE',
    definition:
      'Sufrimiento psicológico, moral o físico adicional infligido a una víctima de violencia por parte de las propias instituciones sanitarias, policiales o judiciales debido a interrogatorios reiterados, juicios de valor culpabilizadores, demoras injustificadas o exploraciones físicas duplicadas.',
    clinicalApplication:
      'Para evitarla, el protocolo español e internacional SANE establece la "Exploración Única Coordinada" (el Médico Forense y el ginecólogo/enfermera exploran y recogen muestras en un solo acto asistencial) y el uso de preguntas abiertas en un entorno privado.',
    legalOrTechnicalReference:
      'Ley Orgánica 10/2022; Protocolo Nacional de Actuación Médico-Forense en Delitos Sexuales.',
    relatedTerms: ['Victimología', 'Inmovilidad tónica (Freezing)', 'SANE'],
  },
  {
    id: 'gl-09',
    term: 'Inmovilidad tónica (Bloqueo o "Freezing")',
    englishEquivalent: 'Tonic Immobility / Peritraumatic Freezing',
    category: 'Victimología y Clínica SANE',
    definition:
      'Respuesta neurobiológica involuntaria y refleja de supervivencia mediada por el circuito amigdalino y el tronco encefálico ante una amenaza extrema e inescapable, caracterizada por parálisis motora aguda, inhibición vocal (incapacidad de gritar), temblor o anestesia disociativa.',
    clinicalApplication:
      'Explica por qué muchas víctimas de agresión sexual no pudieron oponer resistencia física activa ni presentar heridas defensivas. La enfermera debe educar a la paciente para aliviar el sentimiento de culpa y dejar constancia clínica de esta respuesta neurofisiológica.',
    legalOrTechnicalReference:
      'Neurobiología del Trauma (IAFN SANE Education Guidelines).',
    relatedTerms: ['Victimología', 'Heridas de defensa'],
  },
  {
    id: 'gl-10',
    term: 'Técnica del doble hisopo (Método de Sweet)',
    englishEquivalent: 'Double-Swab Technique (Sweet et al.)',
    category: 'Criminalística y Custodia',
    definition:
      'Procedimiento estandarizado para recuperar células epiteliales, saliva o semen desecado sobre la piel intacta (mordeduras, succiones en cuello o mamas, marcas de agarre) que maximiza el rendimiento de extracción de ADN.',
    clinicalApplication:
      'Consiste en frotar primero la lesión con un hisopo estéril ligeramente humedecido con 1–2 gotas de agua destilada estéril o suero fisiológico estéril con rotación circular durante 15–20 segundos (para rehidratar y despegar las células), y pasar inmediatamente un segundo hisopo completamente seco para recoger el líquido y las células suspendidas.',
    legalOrTechnicalReference:
      'Sweet et al. (Journal of Forensic Sciences, 1997); CNUFADN (España) e IAFN.',
    relatedTerms: ['Cadena de custodia', 'ADN de contacto', 'Orden JUS/1291/2010'],
  },
  {
    id: 'gl-11',
    term: 'Azul de toluidina al 1% (Tinción nuclear forense)',
    englishEquivalent: '1% Toluidine Blue Dye Application',
    category: 'Victimología y Clínica SANE',
    definition:
      'Colorante metacromático acidófilo en solución acuosa al 1% que posee afinidad selectiva por los ácidos nucleicos (ADN y ARN) de las células nucleadas de las capas basales de la epidermis o mucosa expuestas tras una microerosión o laceración traumática reciente.',
    clinicalApplication:
      'Se aplica en la horquilla vulvar posterior, fosa navicular y región perianal para hacer visibles microlaceraciones que no se ven a simple vista. REGLA DE ORO: Debe aplicarse SIEMPRE DESPUÉS de haber tomado todos los hisopos de ADN, nunca antes, para no inhibir la PCR.',
    legalOrTechnicalReference:
      'IAFN SANE-A Clinical Guidelines; Protocolos de Fotocolposcopia Forense.',
    relatedTerms: ['Método del reloj anogenital', 'Técnica del doble hisopo (Método de Sweet)'],
  },
  {
    id: 'gl-12',
    term: 'Sumisión química (DFSA)',
    englishEquivalent: 'Drug-Facilitated Sexual Assault (DFSA)',
    category: 'Toxicología Forense',
    definition:
      'Agresión o delito cometido contra una persona cuya capacidad volitiva, cognitiva o de defensa ha sido anulada o disminuida mediante la administración subrepticia de sustancias psicoactivas (sumisión proactiva), el aprovechamiento de una intoxicación voluntaria previa (sumisión oportunista) o la combinación de ambas (sumisión mixta).',
    clinicalApplication:
      'Constituye una emergencia metabólica en el triaje de enfermería: la primera micción debe recogerse de inmediato antes de que se eliminen fármacos de semivida ultracorta como el GHB (<12 h en orina) y antes de administrar sueroterapia intravenosa.',
    legalOrTechnicalReference:
      'Guía Metodológica de Sumisión Química del INTCF y Ministerio de Justicia; UNODC Guidelines.',
    relatedTerms: ['GHB (Ácido gamma-hidroxibutírico)', 'Análisis segmentario capilar'],
  },
  {
    id: 'gl-13',
    term: 'Anillo de Fisch (Cintilla erosiva + Halo de enjugamiento)',
    englishEquivalent: 'Abrasion Collar & Bullet Wipe Ring (Fisch Ring)',
    category: 'Traumatología y Balística',
    definition:
      'Signo patognomónico del orificio de entrada de un proyectil de arma de fuego en la piel, formado por la superposición concéntrica o semilunar de la "cintilla erosivo-contusiva" (desepidermización por estiramiento e invaginación cutánea) y el "halo de enjugamiento" (depósito de suciedad, lubricante y plomo que arrastra la bala del interior del cañón).',
    clinicalApplication:
      'Permite distinguir un orificio de entrada (que siempre posee anillo de Fisch y bordes invertidos) de un orificio de salida (bordes evertidos sin anillo de Fisch). La enfermera debe fotografiarlo con testigo métrico antes de limpiar o desbridar.',
    legalOrTechnicalReference:
      'Balística de las Heridas — Tratado de Medicina Legal (Gisbert Calabuig).',
    relatedTerms: ['Tatuaje verdadero balístico', 'Golpe de mina de Hofmann'],
  },
  {
    id: 'gl-14',
    term: 'Tatuaje verdadero balístico vs. Falso tatuaje (Ahumamiento)',
    englishEquivalent: 'Powder Tattooing (Stippling) vs. Soot Fouling',
    category: 'Traumatología y Balística',
    definition:
      'El tatuaje verdadero consiste en la incrustación intradérmica de granos de pólvora incombusta o semi-combusta alrededor del orificio de entrada en disparos a corta distancia (<50–70 cm), siendo indeleble al lavado. El falso tatuaje o ahumamiento es el depósito superficial de negro de humo (hollín) que desaparece al lavar la piel con suero.',
    clinicalApplication:
      'En el box de urgencias o quirófano se debe fotografiar la herida balística antes y después del lavado suave con suero fisiológico para documentar qué elementos desaparecen (hollín) y cuáles permanecen incrustados (tatuaje verdadero).',
    legalOrTechnicalReference:
      'Manuales de Criminalística y Patología Forense Balística.',
    relatedTerms: ['Anillo de Fisch (Cintilla erosiva + Halo de enjugamiento)', 'Residuos de disparo (GSR)'],
  },
  {
    id: 'gl-15',
    term: 'Puentes de tejido (Diagnóstico diferencial de herida contusa vs. incisa)',
    englishEquivalent: 'Tissue Bridging (Laceration vs. Incised Wound)',
    category: 'Traumatología y Balística',
    definition:
      'Hebras de tejido conjuntivo, fibras elásticas, pequeños vasos sanguíneos o filetes nerviosos que permanecen íntegros uniendo ambas paredes en el fondo de una herida producida por el impacto de un objeto romo (herida contusa) cuando aplasta la piel contra un plano óseo subyacente (ceja, cráneo, tibia).',
    clinicalApplication:
      'Su presencia descarta que la herida haya sido producida por el filo de un arma blanca (cuchillo, navaja, bisturí), ya que una hoja cortante secciona limpiamente todos los planos sin dejar puentes tisulares en el fondo.',
    legalOrTechnicalReference:
      'Semiología Traumatológica Forense — Institutos de Medicina Legal (IMLCF).',
    relatedTerms: ['Heridas de defensa', 'Colas de Lacassagne'],
  },
  {
    id: 'gl-16',
    term: 'Regla clínica TEN-4-FACESp',
    englishEquivalent: 'TEN-4-FACESp Bruising Clinical Decision Rule',
    category: 'Victimología y Clínica SANE',
    definition:
      'Herramienta clínica validada para la detección precoz de maltrato físico infantil basada en la localización anatómica de las equimosis: Torso, Ears (orejas) y Neck (cuello) en niños menores de 4 años; cualquier equimosis en lactantes menores de 4 meses; y lesiones en Frenulum (frenillo), Angle of jaw (mandíbula), Cheeks (mejillas), Eyelids (párpados), Subconjunctivae o lesiones figuradas (patterned).',
    clinicalApplication:
      'Obliga a la enfermera de pediatría o urgencias a realizar una inspección corporal desnuda completa (incluyendo región retroauricular y frenillo labial superior) y activar la notificación de protección infantil (LOPIVI) ante cualquier hallazgo positivo.',
    legalOrTechnicalReference:
      'Pierce et al. (JAMA Network Open); IAFN SANE-P y Ley Orgánica 8/2021 (LOPIVI).',
    relatedTerms: ['Quemadura en guante o calcetín', 'Síndrome del bebé zarandeado'],
  },
  {
    id: 'gl-17',
    term: 'Lex Artis ad hoc',
    englishEquivalent: 'Standard of Care (Lex Artis ad hoc)',
    category: 'Marco Legal y Peritaje',
    definition:
      'Criterio jurídico y deontológico que evalúa la corrección técnica de un acto sanitario o cuidado de enfermería en función de los protocolos basados en la evidencia, los medios disponibles y las circunstancias clínicas específicas del paciente en el momento y lugar exactos en que se prestó la asistencia.',
    clinicalApplication:
      'Es el eje central del Dictamen Pericial Enfermero: la enfermera perito compara las intervenciones registradas en la historia clínica con las guías de práctica clínica (GNEAUPP, SEMICYUC, SEMES, NANDA-NIC-NOC) vigentes en la fecha del suceso, evitando el sesgo retrospectivo.',
    legalOrTechnicalReference:
      'Jurisprudencia del Tribunal Supremo (Sala 1ª y 3ª); Norma UNE 197001 y Art. 335 LEC.',
    relatedTerms: ['Dictamen pericial enfermero (Norma UNE 197001)', 'Nexo de causalidad'],
  },
  {
    id: 'gl-18',
    term: 'Dictamen pericial enfermero (Norma UNE 197001)',
    englishEquivalent: 'Expert Nursing Witness Report',
    category: 'Marco Legal y Peritaje',
    definition:
      'Informe técnico-científico estructurado elaborado por una enfermera colegiada para auxiliar al Juez o Tribunal en la valoración de hechos relacionados con la praxis de enfermería, la gestión de cuidados o la valoración de secuelas y dependencia.',
    clinicalApplication:
      'Debe contener obligatoriamente la promesa o juramento de objetividad del Art. 335.2 de la Ley de Enjuiciamiento Civil y estructurarse según la Norma UNE 197001 (Objeto, Metodología, Documentación revisada, Antecedentes cronológicos, Análisis de la Lex Artis y Conclusiones numeradas).',
    legalOrTechnicalReference:
      'Artículos 335 a 352 de la Ley 1/2000 de Enjuiciamiento Civil (LEC) y Norma UNE 197001.',
    relatedTerms: ['Lex Artis ad hoc', 'Secreto profesional vs. Deber de denuncia'],
  },
  {
    id: 'gl-19',
    term: 'Testigo métrico forense (Escala ABFO nº 2)',
    englishEquivalent: 'ABFO No. 2 Photomacrographic Forensic Scale',
    category: 'Criminalística y Custodia',
    definition:
      'Regleta fotográfica rígida no reflectante en forma de escuadra ("L") diseñada por el American Board of Forensic Odontology, provista de divisiones milimétricas exactas en dos ejes perpendiculares, círculos de corrección de distorsión de perspectiva y referencias de gris neutro del 18%.',
    clinicalApplication:
      'Se coloca en el mismo plano de profundidad que la lesión cutánea (sin tapar sus bordes) en la cuarta toma de la secuencia fotográfica forense, disparando con la cámara en ángulo recto (90°).',
    legalOrTechnicalReference:
      'American Board of Forensic Odontology (ABFO) & IAFN Forensic Photography Standards.',
    relatedTerms: ['Cadena de custodia', 'Técnica del doble hisopo (Método de Sweet)'],
  },
  {
    id: 'gl-20',
    term: 'Indicio dubitado vs. Muestra indubitada',
    englishEquivalent: 'Questioned Evidence vs. Known Reference Sample',
    category: 'Criminalística y Custodia',
    definition:
      'El indicio dubitado es aquel vestigio biológico o traza de origen desconocido recogido en el cuerpo de la víctima o en la escena (ej. semen en fondo de saco vaginal o células bajo las uñas). La muestra indubitada (de referencia) es la tomada de forma fehaciente a una persona plenamente identificada (la propia víctima o el investigado, mediante frotis bucal o sangre con EDTA) para realizar el cotejo genético en el laboratorio.',
    clinicalApplication:
      'En toda agresión sexual, además de recoger los hisopos dubitados de las zonas de contacto, se debe tomar una muestra indubitada de referencia de la víctima (2 hisopos bucales secos de mucosa yugal o sangre con EDTA) para que el laboratorio pueda separar el perfil de ADN de la víctima del perfil del agresor en muestras mixtas.',
    legalOrTechnicalReference:
      'Orden JUS/1291/2010 y Comisión Nacional para el Uso Forense del ADN (CNUFADN).',
    relatedTerms: ['Cadena de custodia', 'Técnica del doble hisopo (Método de Sweet)'],
  },
];
