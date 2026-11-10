import {
  InteractiveExercise,
  LearningLevelId,
  RegionSource,
} from '../types/forensic';

export const INTERACTIVE_EXERCISES: InteractiveExercise[] = [
  // ============================================================================
  // NIVEL 1 · FUNDAMENTOS MÉDICO-LEGALES Y TANATOLOGÍA (4 CASOS)
  // ============================================================================
  {
    id: 'ex-01',
    code: 'CASO-101',
    levelId: LearningLevelId.LEVEL_1,
    origin: RegionSource.SPAIN,
    category: 'Marco Legal',
    difficulty: 'Base',
    clinicalVignette:
      'En el Servicio de Urgencias de un hospital público de Madrid, atiendes a una mujer de 29 años con contusiones perioculares bilaterales y una herida inciso-contusa en labio superior. La paciente refiere haber sido golpeada por su expareja, pero te ruega expresamente que no des parte al juzgado porque teme represalias y apela al secreto profesional sanitario.',
    question:
      '¿Cuál es la actuación legal y deontológicamente correcta de la enfermera y el equipo asistencial según la legislación española?',
    options: [
      {
        id: 'a',
        text: 'Respetar la autonomía de la paciente y omitir el parte judicial de lesiones, anotándolo únicamente en las observaciones privadas de enfermería.',
      },
      {
        id: 'b',
        text: 'Emitir obligatoriamente el parte judicial de lesiones al Juzgado de Guardia (Art. 262 LECrim), informando previamente con empatía a la paciente y activando los recursos de protección social.',
      },
      {
        id: 'c',
        text: 'Retener el parte de lesiones durante 72 horas hasta que la paciente decida si desea interponer denuncia policial en comisaría.',
      },
      {
        id: 'd',
        text: 'Notificar únicamente al Colegio Oficial de Enfermería sin remitir documentación al Juzgado.',
      },
    ],
    correctOptionId: 'b',
    clinicalRationale:
      'En España, el deber de denuncia de delitos públicos conocidos por razón del cargo o profesión sanitaria (Art. 262 de la Ley de Enjuiciamiento Criminal) prevalece sobre el secreto profesional. La violencia de género y las lesiones dolosas son delitos perseguibles de oficio. Se debe informar siempre a la paciente con sensibilidad informada en el trauma, nunca a sus espaldas, y evaluar el riesgo vital inmediato.',
    legalReference:
      'Artículo 262 de la Ley de Enjuiciamiento Criminal (LECrim) y Protocolo Común del SNS ante la Violencia de Género.',
  },
  {
    id: 'ex-02',
    code: 'CASO-102',
    levelId: LearningLevelId.LEVEL_1,
    origin: RegionSource.SPAIN,
    category: 'Tanatología',
    difficulty: 'Intermedio',
    clinicalVignette:
      'Un paciente de 44 años ingresa en el box de reanimación por parada cardiorrespiratoria extrahospitalaria de origen desconocido con sospecha de intoxicación aguda. Tras 40 minutos de RCP avanzada (intubación endotraqueal, canalización de vía venosa central subclavia y 2 vías periféricas), se certifica el fallecimiento y se comunica al Juzgado de Guardia para autopsia judicial.',
    question:
      '¿Cómo debe proceder la enfermera en el acondicionamiento post-mortem del cuerpo antes de su traslado al Instituto de Medicina Legal (IMLCF)?',
    options: [
      {
        id: 'a',
        text: 'Retirar el tubo endotraqueal y todos los catéteres venosos para entregar el cuerpo limpio, anotando en la gráfica qué dispositivos portaba.',
      },
      {
        id: 'b',
        text: 'Mantener in situ el tubo endotraqueal, sondas y catéteres venosos (pinzados u obturados), y documentar todas las punciones y maniobras de RCP realizadas.',
      },
      {
        id: 'c',
        text: 'Lavar íntegramente el cuerpo con antiséptico jabonoso y retirar las manos de cualquier envoltorio.',
      },
      {
        id: 'd',
        text: 'Emitir el Certificado Médico de Defunción ordinario para agilizar la entrega a la funeraria.',
      },
    ],
    correctOptionId: 'b',
    clinicalRationale:
      'En toda muerte sujeta a investigación judicial (violenta o sospechosa de criminalidad, Art. 340 LECrim), está prohibido emitir el certificado de defunción ordinario y los dispositivos invasivos NUNCA deben retirarse tras el éxitus. El médico forense debe comprobar en la autopsia su correcta ubicación (ej. descartar intubación esofágica accidental o neumotórax yatrogénico) y distinguir las punciones terapéuticas de posibles venopunciones previas.',
    legalReference:
      'Artículo 340 LECrim, Protocolos de Patología Forense de los IMLCF y Resolución COFEN 556/2017.',
  },
  {
    id: 'ex-03',
    code: 'CASO-103',
    levelId: LearningLevelId.LEVEL_1,
    origin: RegionSource.SPAIN,
    category: 'Marco Legal',
    difficulty: 'Base',
    clinicalVignette:
      'Al redactar la nota de evolución de enfermería y el anexo del parte de lesiones de un paciente atendido tras una pelea en la vía pública, observas una lesión en el antebrazo izquierdo y escuchas el relato del paciente sobre cómo ocurrió.',
    question:
      '¿Cuál de las siguientes redacciones cumple con el estándar técnico-forense de objetividad descriptiva y validez probatoria?',
    options: [
      {
        id: 'a',
        text: '«El paciente ha sido víctima de un delito de lesiones dolosas con alevosía presentando un moratón grande en el brazo por un puñetazo.»',
      },
      {
        id: 'b',
        text: '«El paciente refiere literalmente: "me sujetaron con fuerza del brazo para quitarme el móvil". A la exploración presenta cuatro equimosis ovaladas violáceas de 14 × 10 mm alineadas en cara anteromedial del tercio medio de antebrazo izquierdo.»',
      },
      {
        id: 'c',
        text: '«Se observa lesión intencionada de agresión en antebrazo izquierdo; el paciente dice la verdad y está muy nervioso.»',
      },
      {
        id: 'd',
        text: '«Presenta hematomas varios en miembro superior izquierdo sin importancia clínica.»',
      },
    ],
    correctOptionId: 'b',
    clinicalRationale:
      'El profesional sanitario no debe realizar calificaciones jurídicas ("delito", "alevosía", "lesión intencionada") ni juicios de veracidad moral. Debe transcribir las palabras del paciente entrecomilladas en estilo directo y describir la lesión con sus 6 parámetros objetivos: tipo semiológico (equimosis), forma (ovaladas), dimensiones en milímetros (14 × 10 mm), coloración (violáceas), localización topográfica y lateralidad.',
    legalReference:
      'Guía de Documentación Forense IAFN y Protocolo Común de Actuación Sanitaria ante la Violencia (SNS).',
  },
  {
    id: 'ex-04',
    code: 'CASO-104',
    levelId: LearningLevelId.LEVEL_1,
    origin: RegionSource.LATAM,
    category: 'Tanatología',
    difficulty: 'Avanzado',
    clinicalVignette:
      'Acudes con el equipo de emergencias extrahospitalarias (112/SAMU) a un domicilio en invierno donde se halla el cuerpo sin vida de un varón de 58 años en decúbito supino junto a un brasero de combustión incompleta. Al explorar el cadáver observas livideces cadavéricas de una llamativa coloración rojo-cereza brillante ( acaramelada ) en toda la espalda que NO desaparecen ni palidecen al aplicar vitropresión firme, pero al mismo tiempo observas otra serie de livideces en el plano anterior del tórax.',
    question:
      '¿Qué información médico-legal aportan la coloración rojo-cereza de las livideces y su presencia simultánea en el plano dorsal y ventral?',
    options: [
      {
        id: 'a',
        text: 'Coloración normal post-mortem con un intervalo post-mortem inferior a 1 hora.',
      },
      {
        id: 'b',
        text: 'Orientan a intoxicación por monóxido de carbono (carboxihemoglobina) o cianuro, y la coexistencia de livideces en dos planos opuestos indica "transposición de livideces" (el cadáver estuvo en decúbito prono y fue girado a supino entre las 8 y 12 horas post-mortem).',
      },
      {
        id: 'c',
        text: 'Indican muerte por hemorragia aguda masiva sin movilización del cadáver.',
      },
      {
        id: 'd',
        text: 'Son manchas de putrefacción bacteriana (mancha verde abdominal) propias de más de 72 horas.',
      },
    ],
    correctOptionId: 'b',
    clinicalRationale:
      'La carboxihemoglobina (intoxicación por monóxido de carbono) y el cianuro confieren a la sangre y a las livideces cadavéricas una característica tonalidad rojo-cereza vivo. Además, el fenómeno de "transposición de livideces" demuestra científicamente que el cadáver fue cambiado de posición horas después del fallecimiento (cuando parte de las livideces primitivas ya se estaban fijando pero aún quedaba sangre líquida capaz de desplazarse al nuevo plano declive).',
    legalReference:
      'Tratado de Medicina Legal y Ciencias Forenses (Gisbert Calabuig) — Tanatología Forense.',
  },

  // ============================================================================
  // NIVEL 2 · CRIMINALÍSTICA, CADENA DE CUSTODIA Y SUMISIÓN QUÍMICA (6 CASOS)
  // ============================================================================
  {
    id: 'ex-05',
    code: 'CASO-201',
    levelId: LearningLevelId.LEVEL_2,
    origin: RegionSource.USA_IAFN,
    category: 'Cadena de Custodia',
    difficulty: 'Base',
    clinicalVignette:
      'Durante la atención a una víctima de agresión física y sexual ocurrida hace 3 horas, se recogen dos hisopos con muestra biológica húmeda de una lesión por mordedura en el hombro derecho y una camiseta interior con manchas hemáticas aún húmedas.',
    question:
      'Según los estándares de la IAFN y la Orden JUS/1291/2010 del INTCF, ¿cuál es el procedimiento correcto de secado y embalaje de estos indicios?',
    options: [
      {
        id: 'a',
        text: 'Introducir inmediatamente los hisopos húmedos y la camiseta en bolsas de plástico con cierre hermético tipo zip para que no se evapore el fluido.',
      },
      {
        id: 'b',
        text: 'Secar la camiseta con un secador de aire caliente a máxima potencia y guardarla junto con los hisopos en un mismo sobre.',
      },
      {
        id: 'c',
        text: 'Dejar secar los hisopos y la prenda a temperatura ambiente en zona limpia y controlada, y embalar cada indicio por separado en envases/sobres de papel transpirable precintados.',
      },
      {
        id: 'd',
        text: 'Introducir los hisopos en tubos con gel de transporte microbiológico (medio de Stuart/Amies) para conservar las células.',
      },
    ],
    correctOptionId: 'c',
    clinicalRationale:
      'El embalaje en plástico cerrado o en medios de transporte bacteriológico (Stuart/Amies) de muestras biológicas húmedas genera proliferación bacteriana y fúngica que degrada rápidamente el ADN nuclear. Todo indicio biológico para genética forense debe recogerse en hisopos secos sin medio de cultivo, dejarse secar a temperatura ambiente e introducirse de forma individual en sobres o bolsas de papel transpirable con su precinto y firma.',
    legalReference:
      'Orden JUS/1291/2010 (Art. 14 y Anexos) y U.S. DOJ / IAFN National Protocol for Sexual Assault Medical Forensic Examinations.',
  },
  {
    id: 'ex-06',
    code: 'CASO-202',
    levelId: LearningLevelId.LEVEL_2,
    origin: RegionSource.SPAIN,
    category: 'Toxicología y Sumisión',
    difficulty: 'Intermedio',
    clinicalVignette:
      'Acude a Urgencias a las 06:30 h una joven de 22 años que refiere haber perdido el recuerdo de lo sucedido desde la 01:00 h tras tomar una consumición en un local de ocio. Se despierta desorientada, con ataxia residual y sospecha de agresión bajo sumisión química (posible GHB o hipnótico de acción ultracorta). En el box de triaje pide ir al baño a orinar.',
    question:
      '¿Cuál es la intervención prioritaria de la enfermera de triaje respecto a la recogida de muestras toxicológicas?',
    options: [
      {
        id: 'a',
        text: 'Permitir que orine libremente en el aseo y esperar 4 horas a que llegue el médico forense para recoger la segunda o tercera micción.',
      },
      {
        id: 'b',
        text: 'Canalizar primero una vía periférica y administrar 1.000 mL de suero fisiológico rápido para forzar la diuresis antes de recoger la muestra.',
      },
      {
        id: 'c',
        text: 'Recoger inmediatamente esa primera micción en envases estériles precintables bajo cadena de custodia antes de que se pierda, ya que el GHB se elimina de la orina en menos de 12 horas.',
      },
      {
        id: 'd',
        text: 'Realizar únicamente un test rápido de tira reactiva en orina de Urgencias y, si sale negativo, descartar sumisión química y desechar la orina.',
      },
    ],
    correctOptionId: 'c',
    clinicalRationale:
      'En sospecha de sumisión química aguda (<12–24 h), la primera micción al llegar al hospital constituye una verdadera emergencia forense. Sustancias como el GHB tienen una semivida de eliminación ultracorta (indetectables en sangre tras 6–8 h y en orina tras 10–12 h). Además, los test rápidos hospitalarios de inmunoensayo NO detectan GHB, zolpidem, ketamina ni escopolamina, por lo que la muestra íntegra debe conservarse refrigerada (2–8 °C) para su envío al INTCF.',
    legalReference:
      'Instrucción y Guía Metodológica de Sumisión Química del INTCF y Consejo Médico Forense.',
  },
  {
    id: 'ex-07',
    code: 'CASO-203',
    levelId: LearningLevelId.LEVEL_2,
    origin: RegionSource.SPAIN,
    category: 'Cadena de Custodia',
    difficulty: 'Base',
    clinicalVignette:
      'El Juzgado de Instrucción ordena la extracción sanguínea para determinación de alcoholemia y drogas de abuso con fines judiciales a un conductor implicado en un accidente mortal ingresado en el Servicio de Urgencias.',
    question:
      'Conforme a la Orden JUS/1291/2010 del Ministerio de Justicia, ¿cómo debe realizar la enfermera la desinfección cutánea y en qué tubos debe recoger la muestra?',
    options: [
      {
        id: 'a',
        text: 'Desinfectar con alcohol etílico de 70° y extraer 1 tubo de bioquímica con gel separador (tapón amarillo) dejando la mitad vacía.',
      },
      {
        id: 'b',
        text: 'Desinfectar la piel con solución acuosa sin alcohol (clorhexidina acuosa o suero fisiológico) y extraer 2 tubos de 5 mL con fluoruro sódico y oxalato potásico (tapón gris), llenándolos completamente sin dejar cámara de aire.',
      },
      {
        id: 'c',
        text: 'Desinfectar con alcohol iodado y extraer 1 tubo de citrato sódico para coagulación (tapón azul), conservándolo en estufa a 37 °C.',
      },
      {
        id: 'd',
        text: 'Extraer sangre capilar del pulpejo del dedo e impregnar una gasa guardada en bolsa de plástico.',
      },
    ],
    correctOptionId: 'b',
    clinicalRationale:
      'En toda extracción de alcoholemia judicial es obligatorio: 1º Limpiar la zona de venopunción con un antiséptico acuoso exento de etanol o volátiles (para impedir la impugnación legal por contaminación de la aguja); 2º Utilizar tubos con fluoruro sódico (que inhibe la enolasa bacteriana/eritrocitaria evitando la neoformación o consumo de etanol in vitro) y oxalato potásico (anticoagulante); y 3º Llenar el tubo al 100% para evitar que el alcohol se volatilice hacia la cámara de aire.',
    legalReference:
      'Orden JUS/1291/2010 (Artículos 21 y 22 — Estudios Toxicológicos de Alcohol Etílico en Sangre).',
  },
  {
    id: 'ex-08',
    code: 'CASO-204',
    levelId: LearningLevelId.LEVEL_2,
    origin: RegionSource.LATAM,
    category: 'Cadena de Custodia',
    difficulty: 'Intermedio',
    clinicalVignette:
      'Ingresa en el box de críticos un paciente hemodinámicamente inestable con dos heridas penetrantes por arma blanca en hemitórax izquierdo. Es necesario retirar con urgencia la camisa ensangrentada para colocar un drenaje torácico y monitorizar.',
    question:
      '¿Cómo debe cortar y custodiar la enfermera la vestimenta del paciente para no invalidar la pericia criminalística posterior?',
    options: [
      {
        id: 'a',
        text: 'Introducir la punta de las tijeras corta-ropas por los propios agujeros de las puñaladas para abrir rápidamente el delantero de la camisa.',
      },
      {
        id: 'b',
        text: 'Cortar exclusivamente por las costuras laterales de mangas y costados manteniendo un margen amplio respecto a los desgarros del arma, dejar secar al aire y embalar en bolsa de papel precintada.',
      },
      {
        id: 'c',
        text: 'Arrancar la prenda tirando de los bordes de los cortes y entregarla húmeda en una bolsa de plástico cerrada a la familia.',
      },
      {
        id: 'd',
        text: 'Lavar la prenda con suero fisiológico para ver mejor el tamaño de los cortes en la tela.',
      },
    ],
    correctOptionId: 'b',
    clinicalRationale:
      'Los desgarros textiles producidos por armas blancas o proyectiles de arma de fuego permiten al laboratorio de criminalística determinar la anchura de la hoja, si tenía uno o dos filos, y analizar residuos químicos depositados en los bordes. Por ello, las tijeras de urgencias deben seguir siempre las costuras de confección lejos de las perforaciones traumáticas.',
    legalReference:
      'Manuales de Criminalística y Preservación de Indicios en Centros Hospitalarios (Policía Científica / IAFN).',
  },
  {
    id: 'ex-09',
    code: 'CASO-205',
    levelId: LearningLevelId.LEVEL_2,
    origin: RegionSource.USA_IAFN,
    category: 'Cadena de Custodia',
    difficulty: 'Intermedio',
    clinicalVignette:
      'Vas a realizar la documentación fotográfica forense de una equimosis figurada que reproduce la hebilla de un cinturón en la región escapular derecha de un adolescente atendido por maltrato físico.',
    question:
      '¿Cuál es la secuencia técnica correcta de disparos fotográficos según los estándares internacionales de Fotografía Forense Clínica?',
    options: [
      {
        id: 'a',
        text: 'Tomar una única fotografía muy cercana colocando una moneda de 1 euro encima del centro del hematoma.',
      },
      {
        id: 'b',
        text: 'Realizar plano de orientación anatómica regional, seguido de un plano de detalle SIN testigo métrico y otro plano de detalle CON testigo métrico milimetrado (ABFO) en el mismo plano focal y con la cámara perpendicular a 90°.',
      },
      {
        id: 'c',
        text: 'Pintar primero toda la lesión con povidona yodada y fotografiar desde un ángulo oblicuo de 30° con flash directo.',
      },
      {
        id: 'd',
        text: 'Fotografiar únicamente el rostro del paciente junto a su DNI.',
      },
    ],
    correctOptionId: 'b',
    clinicalRationale:
      'La secuencia fotográfica forense exige: 1º Plano medio o regional que permita ubicar inequívocamente en qué parte de la anatomía se asienta la lesión; 2º Plano corto sin escala métrica (para acreditar que la regleta no tapa ninguna parte de la herida); y 3º Plano corto con testigo métrico milimetrado (tipo ABFO nº 2) coplanario con la piel y con el eje óptico a 90° para evitar distorsión geométrica.',
    legalReference:
      'IAFN Forensic Photography Guidelines y Protocolos de Clínica Médico-Forense.',
  },
  {
    id: 'ex-10',
    code: 'CASO-206',
    levelId: LearningLevelId.LEVEL_2,
    origin: RegionSource.SPAIN,
    category: 'Toxicología y Sumisión',
    difficulty: 'Avanzado',
    clinicalVignette:
      'Acude a consulta una paciente que relata haber sufrido una agresión sexual bajo sospecha de sumisión química hace exactamente 9 días. Debido al bloqueo emocional y la amnesia parcial no consultó antes. Solicita que se le realice un análisis para demostrar qué sustancia le administraron.',
    question:
      'Habiendo transcurrido 9 días (más de 120 horas) desde la administración de una dosis única, ¿cuál es la directriz toxicológica correcta según el protocolo del INTCF?',
    options: [
      {
        id: 'a',
        text: 'Extraer únicamente sangre venosa hoy, ya que el GHB y el zolpidem permanecen en plasma durante 30 días.',
      },
      {
        id: 'b',
        text: 'Informar y registrar en el parte judicial la necesidad de tomar una muestra de cabello del vértex posterior (coronilla) cortada a ras del cuero cabelludo pasadas 4 a 6 semanas del suceso.',
      },
      {
        id: 'c',
        text: 'Arrancar hoy mismo 5 pelos de las cejas con pinzas de depilar.',
      },
      {
        id: 'd',
        text: 'Desestimar el caso porque pasadas 48 horas no existe ninguna técnica forense capaz de detectar fármacos sedantes.',
      },
    ],
    correctOptionId: 'b',
    clinicalRationale:
      'Pasados 5 días del suceso, los fármacos en dosis única ya han sido eliminados de la sangre y de la orina. Sin embargo, el fármaco circulante el día del delito se incorpora al bulbo piloso y queda atrapado en la queratina del tallo capilar. Como el cabello crece a razón de ~1 cm al mes y tarda 3–4 semanas en emerger sobre la superficie de la epidermis, el corte de dos mechones en el vértex posterior a las 4–6 semanas permite demostrar por cromatografía segmentaria (LC-MS/MS) el consumo en la fecha exacta.',
    legalReference:
      'Guía Metodológica de Sumisión Química (INTCF / Ministerio de Justicia) y Recomendaciones de la Society of Hair Testing (SoHT).',
  },

  // ============================================================================
  // NIVEL 3 · ESPECIALIZACIÓN SANE, VIOLENCIA SEXUAL Y MALTRATO (5 CASOS)
  // ============================================================================
  {
    id: 'ex-11',
    code: 'CASO-301',
    levelId: LearningLevelId.LEVEL_3,
    origin: RegionSource.USA_IAFN,
    category: 'Valoración SANE',
    difficulty: 'Intermedio',
    clinicalVignette:
      'Durante la exploración conjunta SANE / Médico-Forense a una paciente víctima de agresión sexual ocurrida hace 5 horas, se observa en la región supraclavicular izquierda una marca ovalada eritematosa sugestiva de mordedura o succión sin sangrado activo.',
    question:
      '¿Cómo debe aplicarse la técnica del doble hisopo (Double-Swab Technique de Sweet et al.) para maximizar la recuperación de ADN salival del agresor sobre la piel intacta?',
    options: [
      {
        id: 'a',
        text: 'Desinfectar primero la piel con alcohol de 70° y luego pasar dos hisopos secos simultáneamente.',
      },
      {
        id: 'b',
        text: 'Frotar primero la zona con un hisopo humedecido con agua destilada estéril o suero estéril aplicando rotación circular, y seguidamente pasar un segundo hisopo completamente seco para absorber la humedad y las células suspendidas.',
      },
      {
        id: 'c',
        text: 'Aplicar azul de toluidina al 1% sobre la mordedura antes de pasar los hisopos de ADN.',
      },
      {
        id: 'd',
        text: 'Raspar la epidermis con hoja de bisturí hasta obtener sangrado capilar de la víctima.',
      },
    ],
    correctOptionId: 'b',
    clinicalRationale:
      'La técnica del doble hisopo (estándar IAFN y CNUFADN) maximiza la recuperación de células epiteliales bucales y amilasa salival depositadas en la piel: el primer hisopo ligeramente humedecido con agua estéril rehidrata y desprende el material celular seco, y el segundo hisopo seco actúa como esponja recogiendo las células en suspensión.',
    legalReference:
      'IAFN SANE Education Guidelines & Recomendaciones de la Comisión Nacional para el Uso Forense del ADN (CNUFADN - España).',
  },
  {
    id: 'ex-12',
    code: 'CASO-302',
    levelId: LearningLevelId.LEVEL_3,
    origin: RegionSource.USA_IAFN,
    category: 'Valoración SANE',
    difficulty: 'Avanzado',
    clinicalVignette:
      'En una exploración ginecológica-forense aguda tras agresión sexual con penetración vaginal, el equipo valora utilizar tinción con solución acuosa de Azul de Toluidina al 1% en la horquilla vulvar posterior (entre las 5 y las 7 horas del reloj) para evidenciar microlaceraciones mucosas.',
    question:
      '¿En qué momento exacto de la secuencia exploratoria debe aplicarse el Azul de Toluidina al 1% y cómo debe lubricarse el espéculo vaginal?',
    options: [
      {
        id: 'a',
        text: 'Aplicar el azul de toluidina al inicio de la exploración antes de recoger los hisopos vulvares, y lubricar el espéculo con gel anestésico de lidocaína.',
      },
      {
        id: 'b',
        text: 'Recoger PRIMERO todos los hisopos para estudio de ADN (humedeciendo el espéculo únicamente con agua tibia o suero estéril si fuera preciso) y aplicar el Azul de Toluidina al 1% DESPUÉS de haber finalizado la toma genética.',
      },
      {
        id: 'c',
        text: 'Mezclar el azul de toluidina directamente dentro del tubo de los hisopos de ADN.',
      },
      {
        id: 'd',
        text: 'El azul de toluidina solo tiñe la piel queratinizada intacta y nunca capta los desgarros.',
      },
    ],
    correctOptionId: 'b',
    clinicalRationale:
      'El azul de toluidina al 1% es un colorante acidófilo con afinidad por los núcleos celulares expuestos en erosiones y microlaceraciones profundas, pero puede interferir e inhibir la reacción en cadena de la polimerasa (PCR) en el laboratorio de genética forense. Asimismo, los geles lubricantes comerciales suelen contener agentes espermicidas o bacteriostáticos que alteran la muestra. Por ello, los hisopos de ADN se toman siempre antes de aplicar colorantes o lubricantes.',
    legalReference:
      'IAFN SANE-A Clinical Standards y Protocolo Nacional de Actuación Médico-Forense en Delitos contra la Libertad Sexual.',
  },
  {
    id: 'ex-13',
    code: 'CASO-303',
    levelId: LearningLevelId.LEVEL_3,
    origin: RegionSource.SPAIN,
    category: 'Valoración SANE',
    difficulty: 'Base',
    clinicalVignette:
      'Tras explorar a una joven de 19 años que sufrió una agresión sexual con penetración vaginal hace 14 horas bajo intimidación ambiental (en la que la víctima describe haberse quedado completamente paralizada sin poder gritar ni moverse), la inspección anogenital macroscópica no muestra desgarros himeneales ni hematomas visibles.',
    question:
      '¿Cómo debe interpretarse y documentarse este hallazgo en el informe clínico-forense?',
    options: [
      {
        id: 'a',
        text: 'Hacer constar que al no existir desgarros genitales ni heridas defensivas queda descartada clínicamente la agresión sexual.',
      },
      {
        id: 'b',
        text: 'Recoger igualmente todas las muestras de hisopos de ADN endocervicales/vaginales y documentar que la ausencia de lesiones anogenitales visibles y la respuesta neurobiológica de inmovilidad tónica ("freezing") son plenamente compatibles con una agresión sexual.',
      },
      {
        id: 'c',
        text: 'No tomar hisopos vaginales puesto que no hay sangrado activo.',
      },
      {
        id: 'd',
        text: 'Dar el alta sin profilaxis de ITS ni anticoncepción de urgencia.',
      },
    ],
    correctOptionId: 'b',
    clinicalRationale:
      'Más del 60–70% de las víctimas de agresión sexual con penetración no presentan lesiones anogenitales macroscópicas debido a la elasticidad del tejido mucoso estrogenizado y a la respuesta neurobiológica involuntaria de inmovilidad tónica ("freezing") mediada por la amígdala ante una amenaza vital. Además, los espermatozoides y el ADN seminal persisten en cavidad vaginal y endocérvix hasta 72–96 horas con independencia de que existan o no lesiones tisulares.',
    legalReference:
      'Ley Orgánica 10/2022, Jurisprudencia del Tribunal Supremo y Guías Clínicas IAFN.',
  },
  {
    id: 'ex-14',
    code: 'CASO-304',
    levelId: LearningLevelId.LEVEL_3,
    origin: RegionSource.USA_IAFN,
    category: 'Valoración SANE',
    difficulty: 'Avanzado',
    clinicalVignette:
      'Traen a Urgencias de Pediatría a un niño de 20 meses con quemaduras de segundo grado profundo en ambos pies y tobillos. Los cuidadores refieren que el niño estaba jugando en la cocina y se le cayó encima una taza de agua caliente. A la exploración observas que las quemaduras afectan de forma bilateral y simétrica a ambos pies hasta 4 cm por encima de los maléolos, con un borde superior circular completamente nítido y horizontal, sin ninguna gota de salpicadura satélite en piernas ni muslos. Además, detectas dos pequeñas equimosis violáceas en el pabellón auricular izquierdo.',
    question:
      'Aplicando la semiología forense pediátrica y la regla clínica TEN-4-FACESp, ¿cuál es la valoración e intervención obligatoria?',
    options: [
      {
        id: 'a',
        text: 'El patrón es compatible con el derrame accidental de una taza; curar con sulfadiazina argéntica y dar el alta a domicilio.',
      },
      {
        id: 'b',
        text: 'Patrón clásico de quemadura no accidental por inmersión forzada ("en calcetín") asociado a equimosis centinela en oreja (Ears en TEN-4-FACESp); requiere ingreso hospitalario protector, serie ósea radiológica y emisión inmediata de Parte Judicial y Hoja de Notificación de Maltrato Infantil (LOPIVI).',
      },
      {
        id: 'c',
        text: 'Citar en consulta de enfermería de Atención Primaria en 15 días para reevaluar sin avisar a Trabajo Social.',
      },
      {
        id: 'd',
        text: 'Las equimosis en el pabellón auricular son habituales en caídas al empezar a caminar.',
      },
    ],
    correctOptionId: 'b',
    clinicalRationale:
      'Los derrames accidentales producen quemaduras asimétricas de bordes irregulares con múltiples salpicaduras satélite. Una quemadura bilateral simétrica "en calcetín" o "en guante" con borde superior horizontal nítido y sin salpicaduras es patognomónica de inmersión forzada en líquido caliente. Sumada a la equimosis en pabellón auricular (región "Ears" de la regla TEN-4-FACESp), obliga a proteger al menor mediante ingreso y notificación inmediata al Juzgado y Fiscalía de Menores.',
    legalReference:
      'Ley Orgánica 8/2021 (LOPIVI), Protocolo de Maltrato Infantil del SNS y Regla TEN-4-FACESp (Pierce et al. / IAFN SANE-P).',
  },
  {
    id: 'ex-15',
    code: 'CASO-305',
    levelId: LearningLevelId.LEVEL_3,
    origin: RegionSource.SPAIN,
    category: 'Valoración SANE',
    difficulty: 'Intermedio',
    clinicalVignette:
      'Ingresa en el Servicio de Urgencias un paciente de 84 años con deterioro cognitivo moderado procedente de su domicilio, donde convive con un familiar cuidador que percibe su pensión. Presenta obnubilación, sodio plasmático de 164 mEq/L, caquexia marcada, tres úlceras por presión grado IV en sacro y ambos trocánteres con tejido necrótico sin apósitos previos, y surcos equimóticos circunferenciales recientes en ambas muñecas.',
    question:
      '¿Qué actuación forense debe realizar la enfermera al ingreso de este paciente vulnerable?',
    options: [
      {
        id: 'a',
        text: 'Limitarse a curar las úlceras sin medirlas ni fotografiarlas para que no parezca que se han producido dentro del hospital.',
      },
      {
        id: 'b',
        text: 'Documentar al minuto cero del ingreso (con medidas en milímetros, estadio y fotografía con testigo métrico) tanto las UPP grado IV como los surcos de sujeción en muñecas, solicitar cribado toxicológico de sedantes y activar el Parte Judicial y a Trabajo Social por sospecha de negligencia grave y maltrato al adulto mayor.',
      },
      {
        id: 'c',
        text: 'Dar el alta al mismo domicilio en cuanto se corrija la hipernatremia con suero hiposalino.',
      },
      {
        id: 'd',
        text: 'No dejar constancia en la historia clínica de las marcas en las muñecas.',
      },
    ],
    correctOptionId: 'b',
    clinicalRationale:
      'La combinación de deshidratación hipernatrémica severa, múltiples UPP estadio IV no tratadas y marcas de atadura o contención mecánica impropia en muñecas constituye un cuadro grave de maltrato y abandono de persona vulnerable (Arts. 173 y 229 CP). Documentar y fotografiar las lesiones al minuto cero del ingreso acredita la preexistencia extrahospitalaria del daño y fundamenta la intervención judicial protectora.',
    legalReference:
      'Artículos 173 y 229 del Código Penal, Instrucción 1/2022 de la Fiscalía General del Estado y Guías de Enfermería Geriátrica Forense.',
  },

  // ============================================================================
  // NIVEL 4 · PATOLOGÍA FORENSE, BALÍSTICA Y PERITAJE ENFERMERO (3 CASOS)
  // ============================================================================
  {
    id: 'ex-16',
    code: 'CASO-401',
    levelId: LearningLevelId.LEVEL_4,
    origin: RegionSource.LATAM,
    category: 'Traumatología Forense',
    difficulty: 'Avanzado',
    clinicalVignette:
      'Ingresa en urgencias un paciente con una herida en hemitórax anterior. Al retirar la camisa (cortando por las costuras laterales lejos del desgarro), observas una lesión circular de 9 mm con bordes invertidos, rodeada de un anillo concéntrico apergaminado (cintilla erosivo-contusiva de Fisch) y un punteado negruzco incrustado en la dermis que no desaparece al lavado suave con suero fisiológico.',
    question:
      'Desde la perspectiva de la balística de las heridas, ¿qué indica ese punteado dérmico persistente ("tatuaje verdadero") y cómo debe manipularse el proyectil si se extrae en quirófano?',
    options: [
      {
        id: 'a',
        text: 'Indica un disparo a larga distancia (>10 metros); el proyectil debe extraerse sujetándolo con fuerza con una pinza metálica dentada de Kocher.',
      },
      {
        id: 'b',
        text: 'Corresponde a un orificio de salida típico por proyectil de alta velocidad.',
      },
      {
        id: 'c',
        text: 'Es un signo clásico de orificio de entrada por disparo a corta distancia (granos de pólvora incombusta incrustados en dermis); debe fotografiarse con testigo métrico antes de desbridar y extraer el proyectil con los dedos o pinzas protegidas con goma para no rayar sus estrías balísticas.',
      },
      {
        id: 'd',
        text: 'El proyectil extraído debe sumergirse en formol al 10% o alcohol para desinfectarlo antes de entregarlo a la policía.',
      },
    ],
    correctOptionId: 'c',
    clinicalRationale:
      'El tatuaje verdadero está formado por granos de pólvora incombusta que se incrustan en la dermis y NO desaparecen con el lavado (a diferencia del ahumamiento o falso tatuaje). Acredita un orificio de entrada por disparo a corta distancia (<50–70 cm). En quirófano, jamás se debe sujetar la bala con pinzas metálicas desnudas para no alterar las microestrías del ánima del cañón.',
    legalReference:
      'Tratado de Medicina Legal (Gisbert Calabuig) y Manual de Balística Forense.',
  },
  {
    id: 'ex-17',
    code: 'CASO-402',
    levelId: LearningLevelId.LEVEL_4,
    origin: RegionSource.SPAIN,
    category: 'Traumatología Forense',
    difficulty: 'Intermedio',
    clinicalVignette:
      'Atiendes a un paciente que presenta una herida en región superciliar (ceja) derecha producida durante una agresión, además de tres cortes transversales limpios en el borde cubital (posterointerno) del antebrazo izquierdo y en los pliegues palmares de los dedos de la mano derecha. Al separar suavemente los bordes de la herida de la ceja, observas pequeños puentes de tejido conjuntivo y vasos sanguíneos íntegros que unen ambas paredes en el fondo de la lesión.',
    question:
      '¿Qué indican la presencia de "puentes de tejido" en la herida de la ceja y los cortes en el borde cubital del antebrazo y palma de la mano?',
    options: [
      {
        id: 'a',
        text: 'Que la herida de la ceja fue causada por un bisturí muy afilado y los cortes de las manos son autolesiones simuladas.',
      },
      {
        id: 'b',
        text: 'Los puentes tisulares en el fondo de la herida ciliar demuestran que es una "herida contusa" (producida por un objeto romo que estalló la piel contra el hueso frontal), mientras que los cortes limpios sin puentes en borde cubital del antebrazo y palma de la mano son "heridas incisas de defensa" frente a un arma blanca.',
      },
      {
        id: 'c',
        text: 'Ambas lesiones fueron producidas por arma de fuego a larga distancia.',
      },
      {
        id: 'd',
        text: 'Las heridas incisas por cuchillo siempre dejan puentes de tejido intacto en su fondo.',
      },
    ],
    correctOptionId: 'b',
    clinicalRationale:
      'Sobre crestas óseas como la ceja o el cráneo, el impacto de un objeto romo (puño, barra, botella) produce heridas contusas que imitan un corte lineal pero conservan "puentes de tejido" en el fondo porque el objeto aplasta y desgarra sin seccionar limpiamente. En cambio, una hoja afilada (arma blanca) corta todos los planos sin dejar ningún puente tisular, y su localización en el borde cubital del antebrazo y cara palmar de los dedos es el patrón clásico de defensa activa de la víctima.',
    legalReference:
      'Patología Forense de las Lesiones por Arma Blanca y Contusas — Institutos de Medicina Legal (IMLCF).',
  },
  {
    id: 'ex-18',
    code: 'CASO-403',
    levelId: LearningLevelId.LEVEL_4,
    origin: RegionSource.SPAIN,
    category: 'Peritaje Enfermero',
    difficulty: 'Avanzado',
    clinicalVignette:
      'Como enfermera colegiada, un despacho de abogados te encarga elaborar un Dictamen Pericial Enfermero sobre la aparición de una lesión nerviosa por compresión e isquemia tisular tras una contención mecánica prolongada sin registros de vigilancia horaria en una unidad hospitalaria.',
    question:
      'Según el Artículo 335 de la Ley de Enjuiciamiento Civil (LEC) y la Norma UNE 197001, ¿qué requisito formal es indispensable en el dictamen y qué principio rige respecto a los cuidados que NO constan anotados en la historia clínica?',
    options: [
      {
        id: 'a',
        text: 'No hace falta incluir ningún juramento si eres perito de parte, y debe presumirse siempre que la enfermera vigiló al paciente cada 15 minutos aunque la hoja de registro esté completamente en blanco.',
      },
      {
        id: 'b',
        text: 'Es obligatorio incluir el juramento o promesa de objetividad del Art. 335.2 LEC (tomando en consideración tanto lo que favorezca como lo que perjudique a cualquiera de las partes), y en sede judicial rige el principio probatorio de que toda vigilancia o cuidado obligatorio que no consta registrado en la historia clínica no queda acreditado ("lo no escrito no existe procesalmente").',
      },
      {
        id: 'c',
        text: 'El dictamen pericial enfermero debe redactar la sentencia penal condenatoria indicando los años de prisión que corresponden.',
      },
      {
        id: 'd',
        text: 'Para firmar un dictamen pericial sobre cuidados de enfermería en España es obligatorio poseer un carnet del FBI o de la IAFN.',
      },
    ],
    correctOptionId: 'b',
    clinicalRationale:
      'El artículo 335.2 de la LEC exige bajo sanción penal (Arts. 459 y 460 CP) que todo perito manifieste bajo juramento o promesa que actúa con total objetividad considerando tanto lo favorable como lo perjudicial. Asimismo, la jurisprudencia consolidada del Tribunal Supremo sobre historia clínica (Ley 41/2002) establece que la ausencia de registros de vigilancia obligatoria (como la revisión periódica de pulsos distales, coloración y liberación rotatoria en contenciones mecánicas) invierte la carga probatoria e impide acreditar que se cumplió la Lex Artis ad hoc.',
    legalReference:
      'Artículo 335 de la Ley 1/2000 de Enjuiciamiento Civil (LEC), Ley 41/2002 y Norma UNE 197001.',
  },
];

export interface CustodyStepChallenge {
  id: string;
  order: number;
  title: string;
  clinicalAction: string;
  commonMistakeToAvoid: string;
}

export const CHAIN_OF_CUSTODY_STEPS: CustodyStepChallenge[] = [
  {
    id: 'cc-1',
    order: 1,
    title: 'Identificación inequívoca y consentimiento informado',
    clinicalAction:
      'Verificar identidad del paciente (o código de urgencia), explicar el procedimiento con enfoque informado en el trauma y recabar consentimiento firmado para toma de muestras con fines clínico-judiciales.',
    commonMistakeToAvoid:
      'Iniciar la recogida de hisopos sin colocar antes doble guante limpio sin talco ni explicar cada paso a la víctima.',
  },
  {
    id: 'cc-2',
    order: 2,
    title: 'Documentación fotográfica y anatómica previa',
    clinicalAction:
      'Registrar en el mapa corporal y fotografiar las lesiones (plano general, medio y detalle con testigo métrico ABFO) ANTES de limpiar, suturar o aplicar antisépticos coloreados.',
    commonMistakeToAvoid:
      'Aplicar povidona yodada o suturar una herida inciso-contusa antes de medirla y tomar los hisopos biológicos.',
  },
  {
    id: 'cc-3',
    order: 3,
    title: 'Toma secuencial y secado al aire a temperatura ambiente',
    clinicalAction:
      'Recoger las muestras cambiando de guantes entre regiones anatómicas distintas. Dejar secar al aire los hisopos y vestimenta húmeda en área limpia y vigilada.',
    commonMistakeToAvoid:
      'Utilizar el mismo par de guantes para tomar muestras bucales y anogenitales (contaminación cruzada de ADN).',
  },
  {
    id: 'cc-4',
    order: 4,
    title: 'Embalaje individual en papel, rotulado y precintado',
    clinicalAction:
      'Introducir cada muestra seca en su sobre de papel individual, rotular código, zona anatómica, fecha, hora y firma, y sellar la solapa con cinta de seguridad firmando mitad sobre cinta y mitad sobre papel.',
    commonMistakeToAvoid:
      'Guardar indicios biológicos húmedos en bolsas de plástico herméticas o agrupar muestras de distintas zonas en un solo sobre.',
  },
  {
    id: 'cc-5',
    order: 5,
    title: 'Registro de entrega y custodia refrigerada (Orden JUS/1291/2010)',
    clinicalAction:
      'Cumplimentar el formulario de Cadena de Custodia consignando identidad, número de colegiado/TIP, fecha y hora exacta de cada eslabón (Enfermera -> Médico Forense / Policía Científica) y conservar en frigorífico con cerradura (2-8 °C).',
    commonMistakeToAvoid:
      'Dejar las muestras sobre el mostrador de enfermería sin custodia directa ni registro horario de traspaso.',
  },
];
