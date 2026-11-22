export interface Doctrina {
  numero: number;
  numeroFormatted: string;
  titulo: string;
  resumen: string;
  descripcionCompleta: string;
  versiculosReferencia: string[];
  isCardinal: boolean;
  categoria: string;
}

export const DOCTRINAS_LADP: Doctrina[] = [
  {
    numero: 1,
    numeroFormatted: "01",
    titulo: "La Inspiración de las Sagradas Escrituras",
    resumen:
      "Creemos que la Biblia, comprendida por el Antiguo y Nuevo Testamento con 66 libros, es plenaria y dinámicamente inspirada por Dios. Es Su Palabra infalible y la única fuente de autoridad, fe, doctrina y conducta cristiana.",
    descripcionCompleta:
      "Creemos que La Biblia, las Sagradas Escrituras, comprendida por el Antiguo y Nuevo Testamento, con un total de 66 libros, es sobrenatural, plenaria y dinámicamente inspirada por Dios. Por lo tanto, es Palabra infalible de Dios y la Revelación completa para la Salvación del hombre, y la única fuente normativa en cuanto a autoridad, fe, doctrina, conducta y práctica cristiana.",
    versiculosReferencia: [
      "2 Timoteo 3:15-16",
      "2 Pedro 3:15-16",
      "Juan 3:16",
      "2 Pedro 1:21",
      "1 Tesalonicenses 2:13",
    ],
    isCardinal: false,
    categoria: "Las Escrituras",
  },
  {
    numero: 2,
    numeroFormatted: "02",
    titulo: "El Único Dios Verdadero",
    resumen:
      "Creemos en un solo Dios vivo, único y verdadero: Creador, preservador y sustentador de todas las cosas. Es Espíritu, amor, santo, eterno, justo y misericordioso, manifestado en la Trinidad: Padre, Hijo y Espíritu Santo.",
    descripcionCompleta:
      "Creemos en la existencia de un solo Dios Vivo, Único y Verdadero, Creador, Preservador y Sustentador de todas las cosas, sean estas visibles e invisibles. Dios es Espíritu, es Amor, Santo, Eterno, Justo y Misericordioso. Creemos en la doctrina de la Trinidad: Dios Padre, Dios Hijo y Dios Espíritu Santo, que son tres personas y uno en esencia divina que obran en consejo perfecto y en unidad para la Redención del hombre y la humanidad.",
    versiculosReferencia: [
      "Deuteronomio 6:4",
      "1 Tesalonicenses 1:9",
      "Juan 17:3",
      "Nehemías 9:6",
      "Colosenses 1:17",
      "Hebreos 1:3",
      "Juan 4:24",
      "1 Juan 4:8",
      "Isaías 6:3",
      "Isaías 40:28",
      "Isaías 45:21",
      "Éxodo 34:6-7",
      "Mateo 28:19",
      "Juan 14:16, 26",
    ],
    isCardinal: false,
    categoria: "Teología Propia",
  },
  {
    numero: 3,
    numeroFormatted: "03",
    titulo: "El Señor Jesucristo",
    resumen:
      "Creemos que Jesucristo es verdadero Dios y verdadero hombre, nacido por obra sobrenatural del Espíritu Santo. Murió en la cruz, resucitó al tercer día, ascendió a los cielos como mediador y salvador, y vendrá a reinar.",
    descripcionCompleta:
      "Creemos que Jesucristo es verdadero Dios y verdadero Hombre, nacido por obra sobrenatural del Espíritu Santo. Que durante su ministerio terrenal vivió sin pecado, murió en la cruz, fue sepultado, resucitó al tercer día y ascendió corporalmente a los cielos. Está a la diestra de Dios como nuestro Único Mediador, Señor y Salvador. Vendrá otra vez para establecer su Reino. Creemos en su sacrificio expiatorio por la humanidad, y que mediante la sola fe en Él somos reconciliados con Dios.",
    versiculosReferencia: [
      "1 Timoteo 2:5",
      "Mateo 1:23",
      "1 Timoteo 3:16",
      "Filipenses 2:5-11",
      "Hechos 1:11",
      "Apocalipsis 1:7",
      "Romanos 5:10",
    ],
    isCardinal: false,
    categoria: "Cristología",
  },
  {
    numero: 4,
    numeroFormatted: "04",
    titulo: "El Espíritu Santo",
    resumen:
      "Creemos que el Espíritu Santo es una persona divina que convence al mundo de pecado, justicia y juicio. Habita en el corazón de los creyentes para santificarlos, renovarlos y perfeccionarlos para la obra del ministerio.",
    descripcionCompleta:
      "Creemos que el Espíritu Santo es una persona divina. Como persona posee inteligencia, voluntad y afecto. La Obra del Espíritu Santo en el hombre es la de producir convicción de pecado, justicia y juicio, y habita en el corazón de los creyentes, santificándolos y perfeccionándolos para la obra del ministerio.",
    versiculosReferencia: [
      "Juan 14:26",
      "1 Corintios 2:10-11",
      "Hechos 13:2",
      "Hechos 16:7",
      "Romanos 15:30",
      "Juan 16:8-11",
      "Efesios 4:12",
    ],
    isCardinal: false,
    categoria: "Neumatología",
  },
  {
    numero: 5,
    numeroFormatted: "05",
    titulo: "El Bautismo en el Espíritu Santo",
    resumen:
      "Creemos en el bautismo en el Espíritu Santo como experiencia subsiguiente a la conversión, evidenciada por el hablar en otras lenguas y el revestimiento de poder para el testimonio eficaz y una vida de plenitud.",
    descripcionCompleta:
      "Creemos en el bautismo del Espíritu Santo. Jesucristo nos bautiza en el Espíritu Santo como una experiencia subsiguiente a la conversión, cuya evidencia inicial es el hablar en otras lenguas, según el Espíritu Santo nos da, revistiéndonos con su poder para la predicación eficaz del evangelio y una vida plena.",
    versiculosReferencia: [
      "Lucas 24:49",
      "Hechos 1:5",
      "Hechos 2:4",
      "Marcos 1:8",
      "Hechos 2:38",
      "Hechos 1:8",
    ],
    isCardinal: true,
    categoria: "Doctrina Cardinal LADP",
  },
  {
    numero: 6,
    numeroFormatted: "06",
    titulo: "Los Dones y el Fruto del Espíritu",
    resumen:
      "Creemos en los dones espirituales otorgados soberanamente para edificar y guardar la unidad de la iglesia, y en el fruto del Espíritu que implanta el carácter santo de Cristo en la vida diaria de cada creyente.",
    descripcionCompleta:
      "Creemos en los dones espirituales: capacidades sobrenaturales otorgadas soberanamente por el Espíritu Santo a los miembros del Cuerpo de Cristo para edificar y guardar la unidad de la Iglesia. Creemos también en el fruto del Espíritu Santo: la implantación de la naturaleza de Cristo en la persona del cristiano (amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre, templanza). El fruto tiene que ver con lo que somos (carácter) y los dones con lo que hacemos (ministerio).",
    versiculosReferencia: [
      "1 Corintios 12:1-11",
      "Gálatas 5:22-23",
      "1 Timoteo 6:11",
      "2 Pedro 1:3-15",
    ],
    isCardinal: false,
    categoria: "Vida Cristiana",
  },
  {
    numero: 7,
    numeroFormatted: "07",
    titulo: "El Hombre y su Condición",
    resumen:
      "Creemos que el hombre fue creado a imagen y semejanza de Dios, pero por su libre desobediencia cayó en pecado, afectando todas sus facultades, perdiendo la comunión con su Creador y necesitando la redención divina.",
    descripcionCompleta:
      "Creemos que el hombre fue creado a imagen y semejanza de Dios. Por su desobediencia libre y voluntaria a Dios, su caída afectó todas las facultades del ser humano, perdiendo así la recta comunión con Dios, consigo mismo, con el prójimo y con toda la creación. Como consecuencia, todas las generaciones nacen con una naturaleza inclinada al pecado, requiriendo el rescate soberano de la gracia divina.",
    versiculosReferencia: [
      "Génesis 1:26-27",
      "Romanos 1:20-23",
      "Romanos 5:12",
      "Romanos 6:23",
    ],
    isCardinal: false,
    categoria: "Antropología Bíblica",
  },
  {
    numero: 8,
    numeroFormatted: "08",
    titulo: "La Salvación del Hombre",
    resumen:
      "Creemos que la salvación es otorgada por la pura gracia de Dios mediante la sola fe en Jesucristo, sin méritos humanos. Nos libra de la condenación, nos adopta como hijos de Dios y nos encamina en continua santificación.",
    descripcionCompleta:
      "Creemos que la Salvación del hombre es por Gracia de Dios. La Gracia salvadora se obtiene por la sola fe en Jesucristo, sin mérito alguno por parte del hombre. La salvación nos libra de la muerte espiritual y nos redime de la esclavitud del pecado. Como resultado de la obra expiatoria en la cruz, Dios nos ha adoptado como hijos suyos. Creemos en la Santificación como obra del Espíritu Santo iniciada en la conversión y desarrollada a lo largo de toda la vida cristiana.",
    versiculosReferencia: [
      "Efesios 2:7-8",
      "Romanos 8:1-2",
      "Juan 1:12",
      "Romanos 8:14-15",
      "Gálatas 3:6-7",
      "1 Tesalonicenses 5:23",
      "1 Corintios 6:11",
      "Filipenses 1:6",
      "Efesios 4:13",
    ],
    isCardinal: true,
    categoria: "Doctrina Cardinal LADP",
  },
  {
    numero: 9,
    numeroFormatted: "09",
    titulo: "Las Ordenanzas de Cristo",
    resumen:
      "Creemos y practicamos las dos ordenanzas instituidas por Jesús: el bautismo en agua por inmersión como testimonio público de fe, y la Santa Cena con pan y vino en memoria de Su sacrificio hasta que Él vuelva.",
    descripcionCompleta:
      "Creemos que Jesucristo instituyó dos ordenanzas: el Bautismo en Agua y la Santa Cena. El bautismo se ministra por inmersión en el nombre del Padre, del Hijo y del Espíritu Santo a quienes han profesado su fe en Jesucristo. La Santa Cena se celebra en plena comunión con los elementos del pan y del vino, símbolos del cuerpo y de la sangre de Cristo, conmemorando Su muerte y esperando Su segunda venida.",
    versiculosReferencia: [
      "Mateo 28:19-20",
      "Romanos 6:3-4",
      "1 Corintios 11:23-26",
    ],
    isCardinal: false,
    categoria: "Práctica Eclesial",
  },
  {
    numero: 10,
    numeroFormatted: "10",
    titulo: "La Iglesia y la Gran Comisión",
    resumen:
      "Creemos que la Iglesia es el cuerpo de Cristo conformado por todos los redimidos en la fe. Congregada en comunidades locales visibles, ha sido comisionada para proclamar el evangelio y hacer discípulos en todas las naciones.",
    descripcionCompleta:
      "Creemos que La Iglesia es el cuerpo místico de Cristo, conformada por todas las personas renacidas por la obra del Espíritu Santo y la Palabra de Dios en base a la fe en Jesucristo, de todos los tiempos y lugares. La Iglesia congregada en locales visibles ha sido comisionada para hacer discípulos en todas las naciones, bautizándoles y enseñándoles a guardar los mandamientos de Cristo.",
    versiculosReferencia: [
      "Efesios 5:23",
      "Juan 3:5",
      "Mateo 28:18-20",
    ],
    isCardinal: false,
    categoria: "Eclesiología",
  },
  {
    numero: 11,
    numeroFormatted: "11",
    titulo: "Los Ministros de la Palabra",
    resumen:
      "Creemos que Dios llama divinamente a ministros y pastores para la edificación y cuidado espiritual del cuerpo de Cristo. Es una vocación bíblica reconocida por la iglesia, con funciones específicas y sin jerarquías.",
    descripcionCompleta:
      "Creemos que Dios por medio del Espíritu Santo ha constituido ministros de la Palabra. El ministerio no se adquiere por herencia o encargo humano, sino por llamamiento divino con signos visibles reconocidos por la Iglesia. El Señor ha provisto estos ministerios para la edificación y perfeccionamiento del Cuerpo de Cristo, ejerciendo funciones diferenciadas con mutuo respeto y servicio sin jerarquías entre sí.",
    versiculosReferencia: [
      "Efesios 4:11-12",
      "Hebreos 5:4",
    ],
    isCardinal: false,
    categoria: "Ministerio Cristiano",
  },
  {
    numero: 12,
    numeroFormatted: "12",
    titulo: "La Sanidad Divina",
    resumen:
      "Creemos que la sanidad divina es provista a través del sacrificio expiatorio de Cristo en la cruz. Es un privilegio accesible a todos los creyentes mediante la oración de fe, según la soberana voluntad de Dios.",
    descripcionCompleta:
      "Creemos que la sanidad divina es resultado de la obra expiatoria de Cristo en la cruz del Calvario. Es un privilegio para todos los creyentes que se obtiene por la fe en los méritos de Cristo, según la soberanía, compasión y beneplácito de Dios para con Sus hijos.",
    versiculosReferencia: [
      "Isaías 53:4-5",
      "Mateo 10:1, 7-8",
      "Santiago 5:14-16",
    ],
    isCardinal: true,
    categoria: "Doctrina Cardinal LADP",
  },
  {
    numero: 13,
    numeroFormatted: "13",
    titulo: "La Segunda Venida de Cristo",
    resumen:
      "Creemos en la bendita esperanza del retorno de Cristo: primero para reunir a Su iglesia redimida antes del juicio, y luego en gloria visible con Sus santos para reinar con justicia y soberanía universal.",
    descripcionCompleta:
      "Creemos que Cristo retornará para llevar a Su Iglesia antes de la Gran Tribulación. Asimismo, vendrá por segunda vez de forma visible, triunfante y gloriosa como Señor y Juez junto a todos los santos para establecer Su reinado milenial de paz y justicia.",
    versiculosReferencia: [
      "1 Tesalonicenses 1:9-10",
      "Apocalipsis 3:10",
      "Apocalipsis 1:7",
      "Apocalipsis 19:11-14",
      "Apocalipsis 20:1-7",
    ],
    isCardinal: true,
    categoria: "Doctrina Cardinal LADP",
  },
  {
    numero: 14,
    numeroFormatted: "14",
    titulo: "El Reino Milenial de Cristo",
    resumen:
      "Creemos en el reino milenial visible y terrenal de Jesucristo tras Su venida. Este acontecimiento cumplirá la salvación prometida a Israel y establecerá un período universal de paz, equidad y justicia en la tierra.",
    descripcionCompleta:
      "Creemos en el reino Milenial de Cristo sobre la tierra. Este acontecimiento universal se cumplirá después de la Segunda venida visible de Jesucristo, trayendo la salvación y restauración de Israel como nación y el establecimiento de una era de justicia, paz duradera y bendición entre las naciones.",
    versiculosReferencia: [
      "Apocalipsis 20:1-7",
      "Mateo 24:27-30",
      "Apocalipsis 1:7",
      "Ezequiel 37:21-22",
      "Romanos 11:26-27",
      "Miqueas 4:3-4",
      "Salmos 72:3-8",
    ],
    isCardinal: false,
    categoria: "Escatología Bíblica",
  },
  {
    numero: 15,
    numeroFormatted: "15",
    titulo: "El Juicio Final",
    resumen:
      "Creemos en la comparecencia ante el tribunal solemne de Dios, donde todas las personas serán juzgadas con justicia conforme a la verdad de Cristo. Quienes hayan rechazado Su gracia recibirán la justa retribución eterna.",
    descripcionCompleta:
      "Creemos que habrá un Juicio Final. Dios ha establecido un Día en el cual juzgará a toda la humanidad en base a la justicia de Jesucristo. Aquel cuyo nombre no se halle inscrito en el Libro de la Vida sufrirá el castigo eterno de la muerte segunda, mientras que los redimidos heredarán la vida perdurable.",
    versiculosReferencia: [
      "Apocalipsis 20:11-15",
      "Mateo 25:46",
      "Apocalipsis 19:20",
      "Apocalipsis 21:8",
    ],
    isCardinal: false,
    categoria: "Escatología Bíblica",
  },
  {
    numero: 16,
    numeroFormatted: "16",
    titulo: "Cielos Nuevos y Tierra Nueva",
    resumen:
      "Creemos en la creación prometida de cielos nuevos y tierra nueva, donde la Iglesia redimida gozará de comunión plena con Dios, habitando en perfecta justicia, gozo eterno y sirviendo al Señor para siempre.",
    descripcionCompleta:
      "Creemos en un cielo nuevo y tierra nueva creados por Dios para Su pueblo. En este nuevo hogar glorioso, la Iglesia de Jesucristo gozará de la presencia visible de Dios y de comunión eterna, sin dolor ni llanto, sirviendo a Dios y al Cordero y reinando con Él por los siglos de los siglos.",
    versiculosReferencia: [
      "Apocalipsis 21:1-5",
      "2 Pedro 3:7, 10-13",
      "Apocalipsis 21:3-4",
      "Apocalipsis 22:3-5",
      "Daniel 7:18",
    ],
    isCardinal: false,
    categoria: "Esperanza Eterna",
  },
];
