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
  {
    id: 'gl-21',
    term: 'Principio de intercambio de Locard',
    englishEquivalent: 'Locard’s Exchange Principle',
    category: 'Criminalística y Custodia',
    definition:
      'Postulado fundamental de la criminalística formulado por Edmond Locard según el cual "todo contacto deja un rastro": cuando dos cuerpos u objetos entran en contacto físico, siempre se produce una transferencia recíproca de material biológico, fibras, pelos, células epiteliales o partículas traza entre el agresor, la víctima y el escenario.',
    clinicalApplication:
      'Justifica por qué la enfermera debe evitar la contaminación cruzada usando guantes libres de polvo cambiados entre cada región anatómica y por qué la paciente debe desvestirse sobre dos sábanas superpuestas (sábana inferior de barrera y sábana superior de papel blanco para recoger pelos, fibras o tierra desprendida).',
    legalOrTechnicalReference:
      'Manual de Criminalística Clínica y Estándares IAFN / NIJ.',
    relatedTerms: ['Cadena de custodia', 'ADN de contacto (Touch DNA)', 'Preservación textil en papel Kraft'],
  },
  {
    id: 'gl-22',
    term: 'Luz forense de longitud de onda alterna (ALS / Luz de Wood)',
    englishEquivalent: 'Alternate Light Source (ALS) Examination',
    category: 'Criminalística y Custodia',
    definition:
      'Dispositivo óptico emisor de radiación monocromática filtrada (generalmente en el espectro azul de 450 nm con gafas filtro naranja, o ultravioleta de 365 nm) que induce fluorescencia en fluidos biológicos latentes (semen, saliva, sudor) y hace visibles equimosis subdérmicas incipientes no detectables con luz blanca.',
    clinicalApplication:
      'Durante la exploración SANE, se oscurece el box y se rastrea la superficie cutánea con ALS a 450 nm antes de tomar hisopos. Las manchas fluorescentes sospechosas se muestrean mediante la técnica del doble hisopo, recordando que cremas, lubricantes o jabones también pueden fluorescer (requieren confirmación en laboratorio).',
    legalOrTechnicalReference:
      'IAFN Sexual Assault Nurse Examiner Standards; Protocolos de Criminalística Biológica.',
    relatedTerms: ['Técnica del doble hisopo (Método de Sweet)', 'Cadena de custodia'],
  },
  {
    id: 'gl-23',
    term: 'ADN de contacto (Touch DNA / ADN epitelial en traza)',
    englishEquivalent: 'Touch DNA / Trace Epithelial DNA',
    category: 'Criminalística y Custodia',
    definition:
      'Material genético procedente de pequeñas cantidades de queratinocitos nucleados, células epiteliales descamadas o ADN libre acelular depositado junto con el sudor y sebo cutáneo cuando el agresor sujeta con fuerza el cuello, muñecas, tobillos o prendas de la víctima.',
    clinicalApplication:
      'En casos de estrangulamiento manual o sujeción violenta de extremidades, la enfermera debe muestrear la zona de presión con la técnica del doble hisopo antes de realizar cualquier limpieza cutánea o canalización venosa en esa extremidad.',
    legalOrTechnicalReference:
      'Recomendaciones de la CNUFADN y de la International Society for Forensic Genetics (ISFG).',
    relatedTerms: ['Técnica del doble hisopo (Método de Sweet)', 'Principio de intercambio de Locard'],
  },
  {
    id: 'gl-24',
    term: 'Precinto forense e integridad de sellado',
    englishEquivalent: 'Tamper-Evident Forensic Seal',
    category: 'Criminalística y Custodia',
    definition:
      'Sistema físico de cierre inviolable aplicado sobre el envase primario y secundario de una muestra médico-legal de modo que cualquier intento de apertura posterior deje una huella evidente de rotura o manipulación.',
    clinicalApplication:
      'Todo sobre de papel o caja de cartón con muestras debe cerrarse con cinta de seguridad y firmarse con bolígrafo indeleble cruzando la línea de unión (la mitad de la rúbrica y fecha sobre el precinto y la otra mitad sobre el papel del sobre). Nunca deben utilizarse grapas metálicas.',
    legalOrTechnicalReference:
      'Orden JUS/1291/2010, Capítulo II (Sellado y Precintado de Muestras).',
    relatedTerms: ['Cadena de custodia', 'Indicio dubitado vs. Muestra indubitada'],
  },
  {
    id: 'gl-25',
    term: 'Raspado y recorte subungueal (Lecho ungueal)',
    englishEquivalent: 'Subungual Swabbing and Nail Clipping',
    category: 'Criminalística y Custodia',
    definition:
      'Técnica de recogida de células epiteliales, sangre o fibras del agresor alojadas bajo el borde libre de las uñas de la víctima cuando ésta se ha defendido arañando o sujetando al atacante.',
    clinicalApplication:
      'Se emplea un hisopo fino humedecido en agua destilada estéril o espátula estéril de madera/plástico bajo las uñas de cada mano por separado, o bien el recorte del borde libre ungueal sobre papel limpio, embalando e identificando de forma independiente "Mano Derecha" y "Mano Izquierda".',
    legalOrTechnicalReference:
      'Protocolo de Actuación Médico-Forense ante Delitos contra la Libertad Sexual (Ministerio de Justicia).',
    relatedTerms: ['Heridas de defensa (Activas y pasivas)', 'ADN de contacto (Touch DNA)'],
  },
  {
    id: 'gl-26',
    term: 'Preservación textil en papel Kraft transpirable',
    englishEquivalent: 'Breathable Kraft Paper Packaging for Clothing Evidence',
    category: 'Criminalística y Custodia',
    definition:
      'Norma técnica universal de embalaje de prendas de vestir o lencería con manchas biológicas que prohíbe el uso de bolsas de plástico herméticas para evitar la condensación de humedad y la proliferación bacteriana/fúngica que destruye el ADN.',
    clinicalApplication:
      'Cada prenda (especialmente la ropa interior o la ropa llevada durante la agresión) debe secarse a temperatura ambiente, envolverse con hojas de papel limpio entre sus pliegues para evitar transferencia entre manchas y guardarse en bolsas individuales de papel Kraft transpirable.',
    legalOrTechnicalReference:
      'Orden JUS/1291/2010 (INTCF) y National Institute of Justice (NIJ) SAFER Act.',
    relatedTerms: ['Cadena de custodia', 'Principio de intercambio de Locard'],
  },
  {
    id: 'gl-27',
    term: 'Espasmo cadavérico (Signo de Puppe)',
    englishEquivalent: 'Cadaveric Spasm / Instantaneous Rigor (Puppe’s Sign)',
    category: 'Tanatología',
    definition:
      'Persistencia post-mortem instantánea de la actitud o contracción muscular voluntaria que tenía el sujeto en el momento exacto de la muerte, sin pasar por la fase previa de relajación muscular primaria que antecede al rigor mortis ordinario.',
    clinicalApplication:
      'Aparece en muertes súbitas con gran tensión emocional, lesiones del tronco encefálico o fulguración eléctrica/suicidio con arma de fuego (la mano del cadáver aferra fuertemente el arma o hierbas del suelo). No puede ser simulado por terceros tras la muerte y tiene un altísimo valor reconstructivo.',
    legalOrTechnicalReference:
      'Tanatología Forense — Signo de Puppe; Tratado de Medicina Legal.',
    relatedTerms: ['Rigor mortis (Rigidez cadavérica)', 'Cronotanatodiagnóstico (Intervalo Post-Mortem)'],
  },
  {
    id: 'gl-28',
    term: 'Signo de Stenon-Louis y Mancha negra esclerótica de Sommer-Larcher',
    englishEquivalent: 'Stenon-Louis Corneal Clouding & Sommer-Larcher Tache Noire',
    category: 'Tanatología',
    definition:
      'Fenómenos cadavéricos abióticos de deshidratación ocular: el signo de Stenon-Louis consiste en el hundimiento del globo ocular y el enturbiamiento opalescente de la córnea; la mancha de Sommer-Larcher es una coloración triangular negruzca o pardo-oscura en la esclerótica ecuatorial por desecación y transparencia del pigmento coroideo cuando los párpados quedan entreabiertos.',
    clinicalApplication:
      'Con los ojos abiertos tras el fallecimiento, el enturbiamiento corneal y la mancha de Sommer-Larcher aparecen muy precozmente (entre los 45 minutos y las 3 horas post-mortem), mientras que con los párpados cerrados el signo de Stenon-Louis tarda entre 12 y 24 horas.',
    legalOrTechnicalReference:
      'Semiología Tanatológica Ocular — Institutos de Medicina Legal (IMLCF).',
    relatedTerms: ['Tanatología', 'Cronotanatodiagnóstico (Intervalo Post-Mortem)'],
  },
  {
    id: 'gl-29',
    term: 'Mancha verde abdominal (Fosa ilíaca derecha)',
    englishEquivalent: 'Greenish Abdominal Discoloration (Putrefaction Onset)',
    category: 'Tanatología',
    definition:
      'Primer signo macroscópico externo de la fase cromática de la putrefacción cadavérica, consistente en una coloración verdosa cutánea localizada inicialmente en la fosa ilíaca derecha (región cecal) debida a la formación de sulfohemoglobina por acción del gas sulfhídrico bacteriano intestinal sobre la hemoglobina.',
    clinicalApplication:
      'Suele aparecer entre las 24 y 36 horas post-mortem (más precoz en verano o en pacientes fallecidos por sepsis abdominal, y más tardía en ambientes fríos). En muertes por sumersión (ahogados), la mancha verde suele iniciarse en el tórax superior y cuello en lugar de la fosa ilíaca derecha.',
    legalOrTechnicalReference:
      'Fases de la Putrefacción Cadavérica (Cromática, Enfisematosa, Colicuativa y Reducción Esquelética).',
    relatedTerms: ['Tanatología', 'Cronotanatodiagnóstico (Intervalo Post-Mortem)'],
  },
  {
    id: 'gl-30',
    term: 'Fenómenos conservadores del cadáver (Adipocira y Momificación)',
    englishEquivalent: 'Adipocere (Saponification) & Natural Mummification',
    category: 'Tanatología',
    definition:
      'Procesos naturales que detienen la putrefacción colicuativa: la adipocira o saponificación es la hidrólisis e hidrogenación de la grasa subcutánea en jabones cálcicos/magnésicos de aspecto céreo-grisáceo en ambientes húmedos y sin oxígeno; la momificación es la desecación extrema de los tejidos en ambientes secos, cálidos y ventilados.',
    clinicalApplication:
      'Ambos fenómenos preservan la morfología externa de heridas incisas, surcos de ahorcadura o impactos proyectiles meses o años después del fallecimiento, permitiendo el estudio traumatológico tardío.',
    legalOrTechnicalReference:
      'Antropología y Patología Forense de Restos Cadavéricos.',
    relatedTerms: ['Tanatología', 'Mancha verde abdominal (Fosa ilíaca derecha)'],
  },
  {
    id: 'gl-31',
    term: 'Humor vítreo y bioquímica tanatológica (Potasio vítreo)',
    englishEquivalent: 'Vitreous Humor Biochemistry (Post-Mortem Potassium)',
    category: 'Tanatología',
    definition:
      'Fluido gelatinoso intraocular cuya posición anatómica aislada en la cámara posterior del ojo lo protege de la contaminación bacteriana precoz y de la autólisis sanguínea rápida, convirtiéndolo en la matriz de elección para la bioquímica post-mortem.',
    clinicalApplication:
      'Tras la muerte, el potasio intracelular difunde de forma lineal hacia el humor vítreo a medida que transcurren las horas (fórmulas de Sturner y Madea), lo que permite estimar el intervalo post-mortem cuando la temperatura rectal ya se ha igualado con el ambiente (>24–36 h). También sirve para diagnosticar cetoacidosis diabética o deshidratación ante-mortem.',
    legalOrTechnicalReference:
      'Orden JUS/1291/2010 (Muestras de Humor Vítreo) y Bioquímica Tanatológica.',
    relatedTerms: ['Cronotanatodiagnóstico (Intervalo Post-Mortem)', 'Tanatología'],
  },
  {
    id: 'gl-32',
    term: 'Clasificación anogenital TEARS (Estándar IAFN)',
    englishEquivalent: 'TEARS Anogenital Injury Classification System',
    category: 'Victimología y Clínica SANE',
    definition:
      'Acrónimo estandarizado internacionalmente por la IAFN para describir con precisión morfométrica y sin ambigüedad subjetiva los hallazgos traumáticos en la exploración ginecológica y anorrectal: Tear (Laceración o desgarro), Ecchymosis (Equimosis), Abrasion (Abrasión/excoriación), Redness (Eritema) y Swelling (Edema/tumefacción).',
    clinicalApplication:
      'Sustituye expresiones subjetivas o improcedentes como "himen complaciente" o "aspecto desflorado" por la descripción exacta del tipo de lesión según TEARS, sus milímetros y su posición horaria.',
    legalOrTechnicalReference:
      'International Association of Forensic Nurses (IAFN) SANE-A Guidelines.',
    relatedTerms: ['Método del reloj anogenital', 'Azul de toluidina al 1% (Tinción nuclear forense)'],
  },
  {
    id: 'gl-33',
    term: 'Método del reloj anogenital (Localización horaria en litotomía)',
    englishEquivalent: 'Clock-Face Anogenital Localization Method',
    category: 'Victimología y Clínica SANE',
    definition:
      'Sistema topográfico estandarizado para referenciar la ubicación de lesiones en vulva, himen, vagina y ano imaginando una esfera de reloj con la paciente en posición de litotomía o supina: las 12 en punto corresponden a la sínfisis púbica/clítoris (anterior) y las 6 en punto a la horquilla vulvar posterior y rafe perineal.',
    clinicalApplication:
      'Las laceraciones y abrasiones por penetración vaginal forzada se localizan con mayor frecuencia estadística en el cuadrante inferior posterior (entre las 4 y las 8 en punto, especialmente a las 6 en punto en la horquilla vulvar posterior y fosa navicular).',
    legalOrTechnicalReference:
      'Protocolo Nacional de Actuación Médico-Forense en Delitos Sexuales e IAFN.',
    relatedTerms: ['Clasificación anogenital TEARS (Estándar IAFN)', 'Fotocolposcopia forense'],
  },
  {
    id: 'gl-34',
    term: 'Fotocolposcopia forense',
    englishEquivalent: 'Forensic Photocolposcopy',
    category: 'Victimología y Clínica SANE',
    definition:
      'Técnica de exploración óptica binocular con magnificación (entre 6x y 30x) e iluminación coaxial con cámara digital integrada que permite visualizar, medir y fotografiar microlaceraciones, equimosis submucosas y patrones vasculares en genitales externos, himen, cérvix y región anorrectal.',
    clinicalApplication:
      'Sus imágenes forman parte del registro pericial encriptado bajo cadena de custodia, evitando que la víctima tenga que ser sometida a nuevas exploraciones ginecológicas si otro perito necesita revisar los hallazgos meses después.',
    legalOrTechnicalReference:
      'Estándares de Documentación Fotográfica SANE (IAFN / DOJ).',
    relatedTerms: ['Victimización secundaria (Revictimización institucional)', 'Azul de toluidina al 1% (Tinción nuclear forense)'],
  },
  {
    id: 'gl-35',
    term: 'Estrangulamiento no letal y petequias por estasis venosa',
    englishEquivalent: 'Non-Fatal Strangulation & Venous Congestion Petechiae',
    category: 'Victimología y Clínica SANE',
    definition:
      'Compresión mecánica extrínseca del cuello (manual, por antebrazo/mataleón o por ligadura) que ocluye el retorno venoso yugular (a partir de solo 2 kg de presión) o el flujo arterial carotídeo (4,5–5 kg) sin llegar a causar la muerte inmediata, produciendo ruptura capilar por hiperpresión venosa craneal.',
    clinicalApplication:
      'Hasta el 50% de las víctimas no presentan marcas cutáneas visibles en el cuello al ingreso. La enfermera debe buscar activamente petequias puntiformes por encima del nivel de compresión (conjuntiva tarsal, esclerótica, mucosa oral, paladar blando, región retroauricular) y vigilar signos de alarma de disección carotídea o edema laríngeo tardío (disfonía, odinofagia, estridor, focalidad neurológica).',
    legalOrTechnicalReference:
      'Training Institute on Strangulation Prevention & IAFN Clinical Guidelines.',
    relatedTerms: ['ADN de contacto (Touch DNA / ADN epitelial en traza)', 'Surco de ahorcadura vs. Surco de estrangulación a lazo'],
  },
  {
    id: 'gl-36',
    term: 'Síndrome del niño zarandeado (Traumatismo craneal abusivo / AHT)',
    englishEquivalent: 'Abusive Head Trauma (AHT) / Shaken Baby Syndrome',
    category: 'Victimología y Clínica SANE',
    definition:
      'Forma grave de maltrato físico infantil en lactantes (<1–2 años) provocada por sacudidas violentas de aceleración-desaceleración rotacional de la cabeza, caracterizada por la tríada clásica: hematoma subdural multifocal, hemorragias retinianas bilaterales en múltiples capas y encefalopatía hipóxico-isquémica, frecuentemente sin fractura craneal ni signos externos de impacto.',
    clinicalApplication:
      'Ante un lactante que ingresa por pausa de apnea, convulsión, letargia o irritabilidad sin causa clara y con historia discordante, la enfermera debe explorar fontanelas, buscar marcas de presión costal por agarre torácico (fracturas costales posteriores) y activar el protocolo hospitalario de protección al menor.',
    legalOrTechnicalReference:
      'Ley Orgánica 8/2021 (LOPIVI) y Protocolo Pediátrico Forense.',
    relatedTerms: ['Regla clínica TEN-4-FACESp', 'Quemadura por inmersión forzada (Patrón en guante o calcetín)'],
  },
  {
    id: 'gl-37',
    term: 'GHB (Ácido gamma-hidroxibutírico) y ventana metabólica ultracorta',
    englishEquivalent: 'Gamma-Hydroxybutyrate (GHB) & Ultra-Short Detection Window',
    category: 'Toxicología Forense',
    definition:
      'Depresor del sistema nervioso central líquido, incoloro, inodoro y de sabor ligeramente salado ("éxtasis líquido"), metabolizado rápidamente a dióxido de carbono y agua a través del ciclo de Krebs sin dejar metabolitos exógenos persistentes.',
    clinicalApplication:
      'Presenta una ventana de detección extremadamente estrecha: solo 6 a 8 horas en sangre y de 10 a 12 horas en orina (por encima del punto de corte endógeno de 10 mg/L). Por ello, la recogida de la primera micción en el triaje de urgencias tiene prioridad absoluta.',
    legalOrTechnicalReference:
      'Instrucciones Técnicas del INTCF sobre Sumisión Química (Orden JUS/1291/2010).',
    relatedTerms: ['Sumisión química (DFSA)', 'Análisis segmentario capilar (Crecimiento 1 cm/mes)'],
  },
  {
    id: 'gl-38',
    term: 'Escopolamina (Burundanga) y síndrome anticolinérgico',
    englishEquivalent: 'Scopolamine & Central Anticholinergic Toxidrome',
    category: 'Toxicología Forense',
    definition:
      'Alcaloide tropánico antagonista competitivo de los receptores muscarínicos de acetilcolina que produce amnesia anterógrada profunda, pasividad y sumisión conductual acompañadas de un síndrome anticolinérgico periférico.',
    clinicalApplication:
      'La enfermera debe sospecharla ante una víctima con amnesia completa del episodio que presenta midriasis arreactiva, taquicardia sinusal, sequedad extrema de piel y mucosas, rubor facial y retención aguda de orina. Se elimina rápidamente en menos de 24 h en orina.',
    legalOrTechnicalReference:
      'Protocolos Clínicos de Sumisión Química en Servicios de Urgencias (SEMES / INTCF).',
    relatedTerms: ['Sumisión química (DFSA)', 'GHB (Ácido gamma-hidroxibutírico) y ventana metabólica ultracorta'],
  },
  {
    id: 'gl-39',
    term: 'Tubo con Fluoruro Sódico y Oxalato Potásico (Tapón gris)',
    englishEquivalent: 'Sodium Fluoride / Potassium Oxalate Gray-Top Blood Tube',
    category: 'Toxicología Forense',
    definition:
      'Envase primario de elección para la extracción de sangre periférica con fines de alcoholemia y toxicología forense: el oxalato potásico actúa como anticoagulante y el fluoruro sódico al 1–2% inhibe la enzima enolasa de la glucólisis e impide la fermentación microbiana in vitro.',
    clinicalApplication:
      'Evita la neoformación artificial de etanol dentro del tubo y la degradación por esterasas plasmáticas de fármacos lábiles como la cocaína o el 6-monoacetilmorfina. Debe llenarse por completo sin dejar cámara de aire tras desinfectar la piel con antiséptico sin alcohol (clorhexidina acuosa).',
    legalOrTechnicalReference:
      'Orden JUS/1291/2010 (Anexo de Muestras para Investigación Toxicológica).',
    relatedTerms: ['Etanol endógeno (Neoformación fermentativa post-mortem)', 'Cadena de custodia'],
  },
  {
    id: 'gl-40',
    term: 'Análisis segmentario capilar (Crecimiento 1 cm/mes)',
    englishEquivalent: 'Segmental Forensic Hair Analysis',
    category: 'Toxicología Forense',
    definition:
      'Técnica analítica mediante cromatografía líquida acoplada a espectrometría de masas en tándem (LC-MS/MS) que permite detectar sustancias psicoactivas incorporadas a la matriz queratínica del cabello desde el bulbo piloso a razón de un crecimiento medio de 1 centímetro por mes.',
    clinicalApplication:
      'Cuando han transcurrido más de 4–5 días desde una sospecha de sumisión química y la sangre/orina ya son negativas, se cita a la víctima a las 4–6 semanas para cortar a ras del cuero cabelludo (sin arrancar la raíz) dos mechones del grosor de un lápiz en la región del vértex occipital posterior, atando con hilo el extremo proximal.',
    legalOrTechnicalReference:
      'Society of Hair Testing (SoHT) Guidelines & Orden JUS/1291/2010.',
    relatedTerms: ['Sumisión química (DFSA)', 'GHB (Ácido gamma-hidroxibutírico) y ventana metabólica ultracorta'],
  },
  {
    id: 'gl-41',
    term: 'Carboxihemoglobina (COHb) y coloración rojo-cereza',
    englishEquivalent: 'Carboxyhemoglobin (COHb) & Cherry-Red Lividity',
    category: 'Toxicología Forense',
    definition:
      'Compuesto estable formado por la unión del monóxido de carbono (CO) al grupo hemo de la hemoglobina con una afinidad 210–250 veces superior a la del oxígeno, desplazando la curva de disociación de la oxihemoglobina e impidiendo la respiración celular.',
    clinicalApplication:
      'Confiere a la sangre, mucosas y livideces cadavéricas una característica coloración rojo-cereza brillante (cuando la COHb supera el 30%). En el paciente vivo, el pulsioxímetro convencional de dos longitudes de onda confunde la COHb con oxihemoglobina dando lecturas falsamente normales (98–100%), por lo que requiere cooximetría arterial o venosa.',
    legalOrTechnicalReference:
      'Toxicología Forense de los Gases Asfixiantes — INTCF.',
    relatedTerms: ['Livor mortis (Livideces cadavéricas)', 'Tubo con Fluoruro Sódico y Oxalato Potásico (Tapón gris)'],
  },
  {
    id: 'gl-42',
    term: 'Benzodiacepinas de diseño y Nuevas Sustancias Psicoactivas (NPS)',
    englishEquivalent: 'Designer Benzodiazepines & Novel Psychoactive Substances (NPS)',
    category: 'Toxicología Forense',
    definition:
      'Compuestos sintéticos no regulados o de reciente aparición (como bromazolam, etizolam, flubromazolam, clonazolam o catinonas sintéticas) diseñados para imitar o potenciar los efectos sedantes, hipnóticos o disociativos de las drogas clásicas eludiendo los controles habituales.',
    clinicalApplication:
      'No suelen ser detectados por las tiras reactivas de inmunoensayo rápido de orina en el hospital. Ante clínica de sedación profunda y amnesia con cribado rápido negativo, nunca se debe descartar la sumisión química: es obligatorio remitir sangre y orina al INTCF para espectrometría de masas de alta resolución (HRMS).',
    legalOrTechnicalReference:
      'Sistema Español de Alerta Temprana (SEAT) y UNODC Early Warning Advisory.',
    relatedTerms: ['Sumisión química (DFSA)', 'Falsos positivos y limitaciones del inmunoensayo de orina'],
  },
  {
    id: 'gl-43',
    term: 'Etanol endógeno (Neoformación fermentativa post-mortem)',
    englishEquivalent: 'Post-Mortem Endogenous Ethanol Production',
    category: 'Toxicología Forense',
    definition:
      'Producción artefactual de alcohol etílico en el cadáver o en un tubo de sangre sin conservante debido a la fermentación de la glucosa por bacterias (Escherichia coli, Clostridium) y levaduras (Candida albicans) tras la muerte.',
    clinicalApplication:
      'Para diferenciar la ingesta real de alcohol en vida de la fermentación post-mortem, en toxicología forense se coteja la alcoholemia en sangre femoral periférica (conservada con fluoruro sódico) con la concentración en humor vítreo y con los marcadores directos del metabolismo del etanol (etilglucurónido EtG y etilsulfato EtS).',
    legalOrTechnicalReference:
      'INTCF — Interpretación Forense de Alcoholemias Post-Mortem.',
    relatedTerms: ['Tubo con Fluoruro Sódico y Oxalato Potásico (Tapón gris)', 'Humor vítreo y bioquímica tanatológica (Potasio vítreo)'],
  },
  {
    id: 'gl-44',
    term: 'Cocaetileno (Transesterificación hepática cocaína-etanol)',
    englishEquivalent: 'Cocaethylene',
    category: 'Toxicología Forense',
    definition:
      'Metabolito farmacológicamente activo formado in vivo en el hígado por acción de las carboxilesterasas únicamente cuando existe consumo simultáneo de cocaína y alcohol etílico.',
    clinicalApplication:
      'Posee una semivida plasmática más larga que la cocaína y un potencial cardiotóxico y arritmogénico significativamente mayor, multiplicando por 18 a 25 veces el riesgo de muerte súbita cardíaca en comparación con el consumo aislado de cocaína.',
    legalOrTechnicalReference:
      'Manual de Toxicología Clínica y Forense.',
    relatedTerms: ['Tubo con Fluoruro Sódico y Oxalato Potásico (Tapón gris)', 'Sumisión química (DFSA)'],
  },
  {
    id: 'gl-45',
    term: 'Falsos positivos y limitaciones del inmunoensayo rápido de orina',
    englishEquivalent: 'Immunoassay Urine Drug Screen Limitations & Cross-Reactivity',
    category: 'Toxicología Forense',
    definition:
      'Los test rápidos inmunocromatográficos de urgencias son pruebas meramente orientativas (presuntivas) sujetas a reacciones cruzadas con fármacos comunes (ej. ibuprofeno, trazodona, sertralina, labetalol o ranitidina dando falsos positivos a cannabis, anfetaminas o benzodiacepinas) y a falsos negativos ante dosis bajas o análogos sintéticos.',
    clinicalApplication:
      'Un resultado de inmunoensayo rápido en el hospital carece de validez probatoria judicial por sí solo. Toda muestra con trascendencia penal requiere confirmación inequívoca mediante cromatografía de gases o líquida acoplada a espectrometría de masas (GC-MS / LC-MS/MS) bajo cadena de custodia.',
    legalOrTechnicalReference:
      'Estándares Analíticos Forenses del INTCF y SOFT / AAFS.',
    relatedTerms: ['Cadena de custodia', 'Benzodiacepinas de diseño y Nuevas Sustancias Psicoactivas (NPS)'],
  },
  {
    id: 'gl-46',
    term: 'Colas de Lacassagne (Cola de entrada y cola de salida)',
    englishEquivalent: 'Tailing of Incised Wounds (Lacassagne’s Sign)',
    category: 'Traumatología y Balística',
    definition:
      'Extremos angulados de una herida incisa producida por el deslizamiento de una hoja cortante: el extremo inicial ("cola de ataque o entrada") es más corto, profundo y de bordes abruptos, mientras que el extremo final ("cola de salida o cola de rata") se superficializa progresivamente hasta terminar en una fina excoriación epidérmica lineal.',
    clinicalApplication:
      'La observación y fotografía de la cola de salida permite a la enfermera y al médico forense determinar la dirección y el sentido del corte (por ejemplo, de izquierda a derecha en un degüello o en lesiones autoinfligidas de muñeca).',
    legalOrTechnicalReference:
      'Semiología de las Heridas por Arma Blanca — Ley de Lacassagne.',
    relatedTerms: ['Puentes de tejido (Diagnóstico diferencial de herida contusa vs. incisa)', 'Heridas de defensa (Activas y pasivas)'],
  },
  {
    id: 'gl-47',
    term: 'Golpe de mina de Hofmann y Signo de Benassi',
    englishEquivalent: 'Hofmann’s Stellate Contact Wound & Benassi’s Bone Soot Ring',
    category: 'Traumatología y Balística',
    definition:
      'Signos patognomónicos del disparo de arma de fuego a cañón tocante (contacto firme) sobre una región con plano óseo subyacente (como el cráneo): los gases de la deflagración penetran bajo la piel, chocan contra el hueso y refluyen haciendo estallar los bordes cutáneos hacia fuera en forma estrellada ("golpe de mina de Hofmann"), dejando además un anillo negruzco de humo sobre el periostio óseo ("signo de Benassi").',
    clinicalApplication:
      'Aunque su morfología estrellada y bordes evertidos pueden simular un orificio de salida a primera vista, el hallazgo de hollín y carboxihemoglobina en el fondo de la herida confirma que se trata de un orificio de entrada a cañón tocante.',
    legalOrTechnicalReference:
      'Balística Forense de las Heridas por Arma de Fuego.',
    relatedTerms: ['Anillo de Fisch (Cintilla erosiva + Halo de enjugamiento)', 'Tatuaje verdadero balístico vs. Falso tatuaje (Ahumamiento)'],
  },
  {
    id: 'gl-48',
    term: 'Heridas de defensa (Activas y pasivas)',
    englishEquivalent: 'Active and Passive Defense Wounds',
    category: 'Traumatología y Balística',
    definition:
      'Lesiones traumáticas localizadas en las manos y antebrazos producidas por el instinto reflejo de proteger la cabeza y el tórax frente a una agresión: las "activas" asientan en la palma de la mano y pliegues interdigitales flexores (al intentar sujetar la hoja del cuchillo del agresor), mientras que las "pasivas" se sitúan en el borde cubital del antebrazo y dorso de manos (al interponer los brazos como escudo).',
    clinicalApplication:
      'Su documentación topográfica y fotográfica demuestra que la víctima estaba consciente, en movimiento y tratando de repeler un ataque, descartando la hipótesis de autolesión.',
    legalOrTechnicalReference:
      'Traumatología Forense Reconstructiva — IMLCF.',
    relatedTerms: ['Puentes de tejido (Diagnóstico diferencial de herida contusa vs. incisa)', 'Colas de Lacassagne (Cola de entrada y cola de salida)'],
  },
  {
    id: 'gl-49',
    term: 'Equimosis figurada (Lesión patrón) y Espectro de Legrand du Saulle',
    englishEquivalent: 'Patterned Bruising / Tramline Contusion & Color Evolution',
    category: 'Traumatología y Balística',
    definition:
      'La equimosis figurada reproduce en la piel la silueta del objeto contundente (ej. "equimosis en doble riel o vía de tren" con centro pálido y dos líneas paralelas violáceas producida por el golpe de una vara, cable o cinturón). El espectro equimótico de Legrand du Saulle describe su viraje cromático por degradación de la hemoglobina (rojo-violáceo inicial -> azulado -> verdoso por biliverdina -> amarillento por bilirrubina).',
    clinicalApplication:
      'La presencia simultánea de equimosis en distintos estadios evolutivos (unas violáceas recientes y otras verdosas o amarillentas antiguas) en zonas no prominentes es un indicador clínico cardinal de maltrato físico crónico o reiterado.',
    legalOrTechnicalReference:
      'Valoración Forense del Daño Corporal y Maltrato Físico.',
    relatedTerms: ['Regla clínica TEN-4-FACESp', 'Testigo métrico forense (Escala ABFO nº 2)'],
  },
  {
    id: 'gl-50',
    term: 'Surco de ahorcadura vs. Surco de estrangulación a lazo',
    englishEquivalent: 'Hanging Ligature Furrow vs. Ligature Strangulation Furrow',
    category: 'Traumatología y Balística',
    definition:
      'Diagnóstico diferencial cervical clásico: el surco de ahorcadura (suspensión por el peso del cuerpo) suele ser único, supratiroideo, oblicuo ascendente hacia el nudo e incompleto (interrumpido en la zona del nudo); el surco de estrangulación a lazo (fuerza constrictora perpendicular activa, generalmente homicida) suele ser horizontal, completo alrededor de todo el cuello, situado a la altura o por debajo del cartílago tiroides y de profundidad uniforme.',
    clinicalApplication:
      'Si en urgencias o emergencias extrahospitalarias es preciso cortar un lazo cervical para reanimar al paciente, la enfermera debe seccionar la cuerda SIEMPRE lejos del nudo, preservando el nudo intacto para su estudio criminalístico.',
    legalOrTechnicalReference:
      'Asfixiología Forense — Manual de Actuación en el Levantamiento del Cadáver.',
    relatedTerms: ['Estrangulamiento no letal y petequias por estasis venosa', 'Cadena de custodia'],
  },
  {
    id: 'gl-51',
    term: 'Quemadura por inmersión forzada (Patrón en guante, calcetín o cebra)',
    englishEquivalent: 'Forced Immersion Scald Burn (Glove/Stocking & Zebra Striping)',
    category: 'Traumatología y Balística',
    definition:
      'Escaldadura no accidental producida al introducir y sujetar forzosamente las extremidades o las nalgas/periné de un niño o persona dependiente en agua muy caliente: se caracteriza por una profundidad uniforme, bordes netos circunferenciales ("en guante o calcetín"), ausencia total de quemaduras satélites por salpicadura y respeto de los pliegues de flexión ("signo de la cebra") o de la zona central glútea apoyada contra el fondo frío de la bañera ("signo del donut").',
    clinicalApplication:
      'Diferencia una escaldadura intencional por maltrato de un derrame accidental (que tiene bordes irregulares en cascada de mayor a menor profundidad y múltiples gotas de salpicadura).',
    legalOrTechnicalReference:
      'Protocolo de Atención al Maltrato Infantil en Urgencias Pediátricas y LOPIVI.',
    relatedTerms: ['Regla clínica TEN-4-FACESp', 'Síndrome del niño zarandeado (Traumatismo craneal abusivo / AHT)'],
  },
  {
    id: 'gl-52',
    term: 'Mordedura humana forense (Distancia intercanina y doble arco)',
    englishEquivalent: 'Forensic Human Bite Mark Analysis',
    category: 'Traumatología y Balística',
    definition:
      'Lesión contuso-incisa figurada compuesta por dos arcos opuestos (maxilar y mandibular) separados por un espacio libre, a menudo con equimosis central por succión negativa. En una dentición humana adulta o adolescente (>12 años), la distancia lineal entre las cúspides de los dos caninos de una misma arcada (distancia intercanina) mide entre 2,5 y 4,0 cm (si es menor de 2,5 cm corresponde a dentición temporal infantil).',
    clinicalApplication:
      'El orden de actuación de enfermería ante una mordedura humana es estricto: 1º Fotografiar con testigo métrico ABFO nº 2 a 90°; 2º Recoger saliva del agresor con la técnica del doble hisopo; 3º Sólo después limpiar y desinfectar la herida y administrar profilaxis.',
    legalOrTechnicalReference:
      'American Board of Forensic Odontology (ABFO) Guidelines.',
    relatedTerms: ['Testigo métrico forense (Escala ABFO nº 2)', 'Técnica del doble hisopo (Método de Sweet)'],
  },
  {
    id: 'gl-53',
    term: 'Parte judicial de lesiones (Art. 262 y 355 LECrim)',
    englishEquivalent: 'Mandatory Medico-Legal Injury Report',
    category: 'Marco Legal y Peritaje',
    definition:
      'Documento médico-legal oficial mediante el cual el personal sanitario comunica de forma inmediata al Juzgado de Guardia la asistencia prestada a cualquier paciente que presente lesiones traumáticas, intoxicaciones o signos sospechosos de etiología violenta o delictiva (agresiones, violencia de género, maltrato infantil o de mayores, accidentes de tráfico, autolesiones graves).',
    clinicalApplication:
      'La enfermera colabora en la descripción objetiva de las lesiones, el registro del estado emocional, la relación de muestras biológicas custodiadas y la activación del protocolo específico, entregando copia al paciente salvo que ello comprometa su seguridad (ej. si convive con el agresor).',
    legalOrTechnicalReference:
      'Artículos 262 y 355 de la Ley de Enjuiciamiento Criminal (LECrim).',
    relatedTerms: ['Secreto profesional vs. Deber legal de denuncia', 'Cadena de custodia'],
  },
  {
    id: 'gl-54',
    term: 'Levantamiento del cadáver y preservación clínica (Art. 340 LECrim)',
    englishEquivalent: 'Judicial Death Scene Preservation & In-Situ Device Retention',
    category: 'Marco Legal y Peritaje',
    definition:
      'Diligencia judicial practicada por la Comisión Judicial y el Médico Forense ante toda muerte violenta o sospechosa de criminalidad (incluyendo homicidios, suicidios, accidentes, intoxicaciones, muertes en custodia o fallecimientos súbitos inesperados en urgencias/quirófano).',
    clinicalApplication:
      'Cuando un fallecimiento es judicializado, está prohibido emitir el certificado médico de defunción ordinario y la enfermera NO debe retirar ningún dispositivo invasivo: el tubo endotraqueal, las vías venosas, sondas y drenajes se dejan exactamente in situ (clampeados/cerrados) para que el patólogo forense verifique su correcta ubicación durante la autopsia judicial.',
    legalOrTechnicalReference:
      'Artículos 340 y 343 de la Ley de Enjuiciamiento Criminal (LECrim).',
    relatedTerms: ['Tanatología', 'Cronotanatodiagnóstico (Intervalo Post-Mortem)'],
  },
  {
    id: 'gl-55',
    term: 'Secreto profesional vs. Deber legal de denuncia',
    englishEquivalent: 'Professional Confidentiality vs. Mandatory Reporting Duty',
    category: 'Marco Legal y Peritaje',
    definition:
      'Conflicto deontológico y jurídico entre la obligación de confidencialidad de los datos clínicos del paciente (Art. 199 del Código Penal y Ley 41/2002) y la obligación legal imperativa de denunciar los delitos públicos que se conozcan por razón del ejercicio profesional (Art. 262 LECrim).',
    clinicalApplication:
      'El deber de notificar al Juzgado prevalece siempre ante delitos contra la vida, lesiones graves, violencia de género, sumisión química y cualquier forma de maltrato a menores (LOPIVI) o personas discapacitadas/dependientes.',
    legalOrTechnicalReference:
      'Artículo 199 del Código Penal; Artículo 262 LECrim; Código Deontológico de la Enfermería Española.',
    relatedTerms: ['Parte judicial de lesiones (Art. 262 y 355 LECrim)', 'Victimología'],
  },
  {
    id: 'gl-56',
    term: 'Nexo de causalidad médico-legal (Criterios de Simonin / Bradford Hill)',
    englishEquivalent: 'Medico-Legal Causation Nexus',
    category: 'Marco Legal y Peritaje',
    definition:
      'Vínculo científico y lógico que demuestra que un determinado daño corporal, secuela o fallecimiento es consecuencia directa o indirecta de una acción u omisión previa (un traumatismo o una infracción de la Lex Artis sanitaria).',
    clinicalApplication:
      'En el informe pericial enfermero se analiza mediante los criterios clásicos de causalidad: realidad científica del mecanismo, suficiencia lesiva, cronología evolutiva coherente, continuidad sintomática, topografía concordante y exclusión de causas previas extrañas (estado anterior).',
    legalOrTechnicalReference:
      'Criterios de Imputabilidad Médico-Legal de Simonin; Ley 35/2015 de Valoración del Daño Corporal.',
    relatedTerms: ['Lex Artis ad hoc', 'Dictamen pericial enfermero (Norma UNE 197001)'],
  },
  {
    id: 'gl-57',
    term: 'Pérdida de oportunidad asistencial',
    englishEquivalent: 'Loss of Chance Doctrine in Healthcare Liability',
    category: 'Marco Legal y Peritaje',
    definition:
      'Figura jurisprudencial de responsabilidad patrimonial y civil sanitaria que se aplica cuando una demora diagnóstica, falta de vigilancia de enfermería o error asistencial priva al paciente de una probabilidad estadísticamente relevante de haber obtenido una curación o un mejor pronóstico neurológico/vital.',
    clinicalApplication:
      'Frecuentemente peritada en casos de retraso en la activación de códigos tiempo-dependientes (Código Sepsis, Código Ictus, Código Infarto) en el triaje de enfermería o falta de monitorización de signos de deterioro clínico temprano (escala NEWS2).',
    legalOrTechnicalReference:
      'Jurisprudencia de la Sala Contencioso-Administrativa y Sala Civil del Tribunal Supremo.',
    relatedTerms: ['Lex Artis ad hoc', 'Nexo de causalidad médico-legal (Criterios de Simonin / Bradford Hill)'],
  },
  {
    id: 'gl-58',
    term: 'Internamiento involuntario urgente por trastorno psíquico (Art. 763 LEC)',
    englishEquivalent: 'Urgent Involuntary Psychiatric Commitment (Art. 763 LEC)',
    category: 'Marco Legal y Peritaje',
    definition:
      'Medida restrictiva del derecho fundamental a la libertad (Art. 17 CE) adoptada por razones terapéuticas y de seguridad vital en un paciente con trastorno psíquico agudo que carece de capacidad de decidir por sí mismo en ese momento.',
    clinicalApplication:
      'Requiere autorización judicial previa salvo razones de urgencia inmediata, en cuyo caso el responsable asistencial debe comunicarlo al Juzgado competente lo antes posible y, en todo caso, dentro del plazo máximo improrrogable de 24 horas para su ratificación judicial (con examen del paciente por el Médico Forense en un máximo de 72 horas).',
    legalOrTechnicalReference:
      'Artículo 763 de la Ley 1/2000 de Enjuiciamiento Civil (LEC) y Doctrina del Tribunal Constitucional.',
    relatedTerms: ['Contención mecánica y vigilancia enfermera (Instrucción 1/2022 FGE)', 'Lex Artis ad hoc'],
  },
  {
    id: 'gl-59',
    term: 'Contención mecánica y vigilancia enfermera (Instrucción 1/2022 FGE)',
    englishEquivalent: 'Mechanical Restraint Protocol & Forensic Nursing Monitoring',
    category: 'Marco Legal y Peritaje',
    definition:
      'Medida excepcional, de último recurso y estrictamente temporal consistente en la limitación física de los movimientos de un paciente con agitación psicomotriz grave y riesgo inminente de auto o heteroagresión mediante dispositivos homologados.',
    clinicalApplication:
      'Exige haber agotado previamente la desescalada verbal y ambiental, prescripción facultativa motivada con hora de inicio, consentimiento o comunicación familiar y registro enfermero seriado cada 15–30 minutos de pulsos distales, relleno capilar, integridad cutánea, hidratación, eliminación y prevención de rabdomiólisis o trombosis venosa profunda.',
    legalOrTechnicalReference:
      'Instrucción 1/2022 de la Fiscalía General del Estado y Protocolos de Salud Mental.',
    relatedTerms: ['Internamiento involuntario urgente por trastorno psíquico (Art. 763 LEC)', 'Lex Artis ad hoc'],
  },
  {
    id: 'gl-60',
    term: 'Ratificación pericial en juicio oral (Contradicción e inmediación)',
    englishEquivalent: 'Oral Expert Witness Testimony & Cross-Examination',
    category: 'Marco Legal y Peritaje',
    definition:
      'Comparecencia personal de la enfermera perito o testigo-perito ante el Juez o Tribunal durante la vista oral para exponer las conclusiones de su dictamen y responder a las preguntas de las partes (Fiscalía, acusación particular y defensa) bajo los principios procesales de oralidad, inmediación y contradicción.',
    clinicalApplication:
      'La enfermera debe expresarse con claridad técnica accesible para juristas, ceñirse estrictamente a los datos objetivos registrados en la historia clínica y la evidencia científica, y distinguir siempre entre un hecho constatado ("lo que vi y medí") y una inferencia pericial.',
    legalOrTechnicalReference:
      'Artículos 346 y 347 de la Ley de Enjuiciamiento Civil (LEC) y Artículos 456–485 LECrim.',
    relatedTerms: ['Dictamen pericial enfermero (Norma UNE 197001)', 'Lex Artis ad hoc'],
  },
];

