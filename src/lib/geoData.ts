export interface GeoMunicipality {
  slug: string;
  name: string;
  population: number; // INE 2025 — usado para CTA de pérdida diaria
  heroContext: string;
  localContext: string;
  highlights: string[];
  faqExtras?: { q: string; a: string }[];
}

// Estimación conservadora para el CTA:
// ~70% de penetración de internet en adultos en España (INE 2024)
// ~1 búsqueda local por persona cada 2 semanas de media
// → population * 0.70 / 14 ≈ búsquedas locales diarias en el municipio
// Se muestra en el componente LocalContextSection como potencial alcance perdido.

export const geoMunicipalities: GeoMunicipality[] = [
  {
    slug: "san-agustin-de-guadalix",
    name: "San Agustín de Guadalix",
    population: 9800,
    heroContext:
      "Diseño web y SEO local para pymes e industrias de San Agustín. Destaca en Google Maps frente a la competencia del polígono y el núcleo urbano.",
    localContext:
      "San Agustín de Guadalix vive un momento de transformación industrial sin precedentes. El Polígono Industrial Sur acoge el campus MAD2 de Data4 — una inversión de 530 millones de euros en el mayor centro de datos de la zona norte de Madrid, con 70-80 MW de capacidad en cuatro edificios. Junto a él, el Polígono Industrial Norte concentra talleres, servicios industriales y empresas de logística que atienden a un núcleo residencial en crecimiento. El problema es que muchos de estos negocios todavía no tienen web: sus clientes potenciales buscan en Google y no los encuentran.",
    highlights: [
      "Municipio en expansión tecnológica con el campus de Data4 como referencia del norte de Madrid",
      "Polígonos Industrial Norte y Sur con centenares de empresas sin presencia digital",
      "Conexión directa por la A-1 — acceso rápido desde Madrid capital",
      "Alta demanda de servicios locales de proximidad sin cubrir digitalmente",
    ],
  },
  {
    slug: "alcobendas",
    name: "Alcobendas",
    population: 120000,
    heroContext:
      "Páginas web profesionales para negocios en Alcobendas. Atrae más clientes de La Moraleja, Valdelasfuentes y el centro con SEO local.",
    localContext:
      "Alcobendas es uno de los municipios con mayor densidad empresarial del norte de Madrid, con sedes de multinacionales como Indra, Pfizer y decenas de empresas tecnológicas en La Moraleja. La exigencia del cliente en esta zona es alta: una web desactualizada o inexistente genera desconfianza inmediata. Los negocios locales — comercios, clínicas, servicios profesionales — compiten en un entorno donde la imagen digital es tan importante como la presencia física.",
    highlights: [
      "Perfil de cliente exigente en La Moraleja y Valdelasfuentes — la web tiene que estar a la altura",
      "Alta densidad empresarial: la competencia online es real y activa",
      "Sedes de multinacionales como Indra y Pfizer marcan el estándar digital del entorno",
      "Integración con Google Maps para captar clientes del municipio y alrededores",
    ],
  },
  {
    slug: "san-sebastian-de-los-reyes",
    name: "San Sebastián de los Reyes",
    population: 97000,
    heroContext:
      "Sistemas de encargos, webs corporativas y presencia digital para comercios de Sanse. Haz que te encuentren los vecinos de tu zona.",
    localContext:
      "San Sebastián de los Reyes tiene casi 100.000 habitantes y uno de los parques comerciales más grandes de España: MegaPark concentra IKEA, Leroy Merlin, Carrefour, MediaMarkt y Plaza Norte 2 con más de 200 tiendas. Esa concentración comercial es el mayor problema del pequeño comercio local: la gente va directo al gran centro porque no sabe que existe una alternativa de proximidad. Una web con SEO local es la única forma de aparecer antes de que el cliente decida ir al macro-centro. Empresas como Atresmedia y Schneider Electric tienen aquí sus sedes — el nivel digital del entorno es alto.",
    highlights: [
      "MegaPark y Plaza Norte 2 concentran la demanda — el comercio local necesita visibilidad digital para competir",
      "Sedes de Atresmedia y Schneider Electric elevan el estándar digital del municipio",
      "97.000 habitantes: enorme base de clientes potenciales sin cubrir digitalmente",
      "SEO local para aparecer antes de que el vecino decida ir al gran centro comercial",
    ],
  },
  {
    slug: "las-tablas",
    name: "Las Tablas",
    population: 48000,
    heroContext:
      "Webs modernas y automatización para negocios locales en Las Tablas. Capta clientes de un barrio joven y digital con una imagen profesional.",
    localContext:
      "Las Tablas es uno de los barrios más jóvenes de Madrid norte, con una población de perfil profesional acostumbrada a buscar y contratar servicios desde el móvil. La penetración digital aquí es especialmente alta: los vecinos filtran proveedores por internet antes de llamar. Un negocio sin web o con una web descuidada directamente no existe para este perfil de cliente. La competencia entre negocios locales es también alta — el que tiene mejor presencia online capta la mayor parte de la demanda.",
    highlights: [
      "Perfil digital-first: los clientes buscan, comparan y contratan desde el móvil",
      "~48.000 habitantes con alta renta y alto nivel de exigencia digital",
      "Diseño responsive optimizado para smartphone — el 80% del tráfico es móvil",
      "Automatización de encargos para un cliente que no quiere llamar por teléfono",
    ],
  },
  {
    slug: "paracuellos-de-jarama",
    name: "Paracuellos de Jarama",
    population: 25000,
    heroContext:
      "Agencia web local cerca de Paracuellos de Jarama. Ayudo a tu negocio a ser la primera opción en Google para los vecinos de Paracuellos y Miramadrid.",
    localContext:
      "Paracuellos de Jarama y la urbanización Miramadrid concentran una población en crecimiento constante, impulsada por la proximidad al aeropuerto de Barajas y las nuevas áreas logísticas del corredor nordeste. Muchas familias que trabajan en el aeropuerto o en empresas logísticas de la zona han elegido Paracuellos como municipio de residencia, generando una demanda de servicios locales que crece más rápido que la oferta digital disponible.",
    highlights: [
      "Municipio en crecimiento demográfico activo — la demanda de servicios supera la oferta digital",
      "Perfil de residente vinculado al aeropuerto y la logística — poder adquisitivo estable",
      "SEO local para captar vecinos de Paracuellos y la urbanización Miramadrid",
      "Proximidad real: trabajo contigo en persona si lo necesitas",
    ],
  },
  {
    slug: "algete",
    name: "Algete",
    population: 21000,
    heroContext:
      "Consultoría web especializada en posicionar negocios locales de Algete. Haz que tu comercio o empresa llegue a más clientes del municipio.",
    localContext:
      "Algete tiene cuatro polígonos industriales activos — Río de Janeiro, Los Nogales, Los Malatones y La Garza — con empresas de electrónica, logística, cerámica y distribución. La industrialización del municipio arrancó en los años 60 y la actividad no ha parado desde entonces. El problema es que muchas de estas empresas y los comercios del casco urbano operan sin web o con una presencia digital mínima. Con 21.000 habitantes y conexión directa a Madrid por la A-1 y la M-50, el potencial de captación es alto para quien esté visible en Google.",
    highlights: [
      "Cuatro polígonos industriales activos con empresas sin presencia digital suficiente",
      "21.000 habitantes con acceso directo a Madrid por A-1 y M-50",
      "Logística y manufactura como sectores predominantes con alta demanda de servicios auxiliares",
      "SEO local para posicionarse frente a negocios de municipios vecinos más grandes",
    ],
  },
  {
    slug: "cobena",
    name: "Cobeña",
    population: 7700,
    heroContext:
      "Páginas web profesionales y fáciles de usar para negocios en Cobeña. Convierte más visitas en web en clientes sin complicaciones técnicas.",
    localContext:
      "Cobeña figura entre los 20 municipios de mayor renta per cápita de la Comunidad de Madrid, con una alta presencia de profesionales vinculados al aeropuerto de Barajas — pilotos, tripulaciones y personal de tierra que viven aquí por la proximidad. El municipio tiene perfil claramente residencial, con el pequeño Polígono Industrial Campo Nuevo como único foco de actividad empresarial. Este perfil de residente exigente y con poder adquisitivo alto busca proveedores de confianza en internet antes de contratar nada.",
    highlights: [
      "Top 20 de la Comunidad de Madrid por renta per cápita — cliente con alto poder adquisitivo",
      "Alta presencia de personal del aeropuerto de Barajas con perfil digital",
      "Municipio residencial en expansión — tres nuevas urbanizaciones en desarrollo",
      "El cliente de Cobeña decide online: sin web, no entras en su lista de candidatos",
    ],
  },
  {
    slug: "daganzo-de-arriba",
    name: "Daganzo de Arriba",
    population: 10800,
    heroContext:
      "Diseño web moderno y efectivo para impulsar el comercio local y los servicios en Daganzo de Arriba con estrategias de visibilidad en Google.",
    localContext:
      "Daganzo de Arriba tiene tres polígonos industriales — Gitesa, Los Frailes y El Globo — con más de 70 empresas de metalurgia, logística, distribución alimentaria y servicios industriales. El Polígono Los Frailes, sobre la M-118, concentra la mayor actividad. A 30 minutos de Madrid por la M-118 conectando con la A-2, muchos residentes trabajan fuera pero consumen servicios en Daganzo. Ese tejido industrial y residencial mixto genera una demanda constante de servicios locales que los negocios sin web no pueden capturar.",
    highlights: [
      "Tres polígonos industriales con más de 70 empresas — muchas sin presencia web suficiente",
      "Conexión a Madrid por M-118 / A-2 — municipio bien comunicado en la Campiña del Henares",
      "Perfil mixto industrial-residencial con demanda estable de servicios de proximidad",
      "SEO local para captar tanto a residentes como a empresas de los polígonos vecinos",
    ],
  },
  {
    slug: "talamanca-de-jarama",
    name: "Talamanca de Jarama",
    population: 4600,
    heroContext:
      "Webs corporativas y sistemas de contactos para negocios en Talamanca de Jarama. Una presencia digital fuerte que inspira confianza local.",
    localContext:
      "Talamanca de Jarama es uno de los municipios medievales mejor conservados de la Comunidad de Madrid: muralla del siglo XII con 1.300 metros de perímetro declarada BIC, iglesia románica, puente medieval sobre el Jarama y un casco histórico que ha atraído más de 130 rodajes cinematográficos. Ese patrimonio genera un flujo constante de visitantes culturales y de turismo rural que buscan en Google dónde comer, dónde dormir y qué hacer antes de llegar. Los negocios locales que no están en internet no existen para esos visitantes.",
    highlights: [
      "Muralla medieval declarada BIC — uno de los conjuntos históricos mejor conservados de Madrid",
      "Más de 130 rodajes cinematográficos — turismo cultural activo que busca en Google",
      "Visitantes de fin de semana desde Madrid que deciden el destino online",
      "Web con carta digital y localización para no perder clientes que ya están buscando",
    ],
  },
  {
    slug: "fuente-el-saz-de-jarama",
    name: "Fuente el Saz de Jarama",
    population: 7400,
    heroContext:
      "Transformación digital y diseño de páginas web orientadas a resultados para las pymes de Fuente el Saz de Jarama y alrededores.",
    localContext:
      "Fuente el Saz de Jarama tiene unos 7.400 habitantes y una economía de base agrícola transformada con el tiempo: vega fértil del Jarama con cultivos de fresas y frutos rojos, Lácteas del Jarama como referencia industrial del municipio, y un pequeño polígono industrial en las afueras del casco. La M-103 conecta con San Sebastián de los Reyes y desde allí con la A-1. Es precisamente su escala pequeña la razón por la que la presencia digital importa más: con pocos negocios, el primero en aparecer en Google se lleva casi toda la demanda local.",
    highlights: [
      "Municipio pequeño donde el primero en aparecer en Google capta casi toda la demanda",
      "Lácteas del Jarama como referencia industrial — tejido de pymes y negocios familiares",
      "Acceso a Madrid y Sanse por la M-103 — bien comunicado pese a su escala",
      "Cultivos de vega y turismo de ribera del Jarama como actividad complementaria",
    ],
  },
  {
    slug: "el-molar",
    name: "El Molar",
    population: 10000,
    heroContext:
      "Servicio de diseño web y SEO local para empresarios de El Molar. Destaca en los buscadores y atrae a los vecinos de la zona norte.",
    localContext:
      "El Molar es el único municipio de esta zona con subzona propia en la Denominación de Origen Vinos de Madrid: 300 hectáreas de viñedo en 600 parcelas, dos bodegas operativas y cuevas vinícolas de origen árabe. El enoturismo es una oportunidad real aquí. Además, el municipio fue incorporado en 2024 a la Aceleradora de Inversiones de la Comunidad de Madrid, con el Polígono Industrial El Rodeo activo en servicios y construcción. Está en el corredor de la A-1, a menos de 40 km de Madrid capital.",
    highlights: [
      "Única subzona propia de la D.O. Vinos de Madrid — enoturismo con potencial real",
      "Incorporado en 2024 a la Aceleradora de Inversiones de la Comunidad de Madrid",
      "Polígono Industrial El Rodeo con empresas de carpintería metálica e instalaciones",
      "Corredor de la A-1 — buena conectividad con Madrid y municipios del norte",
    ],
  },
  {
    slug: "colmenar-viejo",
    name: "Colmenar Viejo",
    population: 50000,
    heroContext:
      "Diseño web y SEO para negocios en Colmenar Viejo. Mejora tu visibilidad en la Sierra Norte y atrae a más clientes locales con una web profesional.",
    localContext:
      "Colmenar Viejo es el centro de referencia de servicios de la Sierra Norte madrileña. Con 50.000 habitantes es el municipio más grande de la comarca y concentra comercios, clínicas, talleres y servicios profesionales que atienden tanto a residentes como a personas de los municipios de montaña que bajan a gestionar sus necesidades. La competencia digital en Colmenar empieza a ser real: los negocios que no aparecen en Google pierden clientes frente a los que sí están bien posicionados.",
    highlights: [
      "Centro de referencia de la Sierra Norte — 50.000 habitantes propios más clientes de toda la comarca",
      "Alta diversidad de negocios: clínicas, talleres, comercios y servicios profesionales",
      "SEO orientado a búsquedas de toda la comarca, no solo del municipio",
      "La competencia digital en Colmenar ya es alta — posicionarse ahora tiene más valor",
    ],
  },
  {
    slug: "tres-cantos",
    name: "Tres Cantos",
    population: 47000,
    heroContext:
      "Sistemas de reserva y páginas web para empresas en Tres Cantos. Posiciona tu negocio en el motor tecnológico del norte de Madrid.",
    localContext:
      "Tres Cantos es una ciudad planificada desde los años 80 con un perfil tecnológico e industrial diferenciado: sede de empresas como Indra, Air Liquide y numerosas ingenierías y consultoras. Su población, con alta proporción de ingenieros y directivos, tiene una exigencia digital por encima de la media. Una web anticuada o inexistente genera desconfianza automática en este entorno. Los servicios de proximidad — restaurantes, clínicas, gimnasios, talleres — necesitan una imagen digital a la altura del municipio.",
    highlights: [
      "Ciudad planificada con perfil tecnológico — cliente con alta exigencia digital",
      "Sede de Indra, Air Liquide y decenas de ingenierías y consultoras",
      "47.000 habitantes con renta y formación por encima de la media de Madrid",
      "Servicios de proximidad que necesitan imagen digital acorde al entorno",
    ],
  },
  {
    slug: "guadalix-de-la- sierra",
    name: "Guadalix de la Sierra",
    population: 7000,
    heroContext:
      "Presencia digital y SEO local en Guadalix de la Sierra. Soluciones web a medida para pequeños negocios y servicios de la zona.",
    localContext:
      "Guadalix de la Sierra está a 49 km de Madrid a 832 metros de altitud, en la cuenca alta del Jarama, con vistas al pico San Pedro. Su economía es principalmente de segunda residencia y turismo: el sector servicios y hostelería representa casi el 57% de la actividad. El municipio ha crecido de forma continua como destino de verano y fin de semana. Los visitantes de Madrid buscan en Google antes de salir — restaurantes, alojamientos, actividades — y el negocio que no aparece simplemente no existe para ellos.",
    highlights: [
      "Destino de segunda residencia y fin de semana — los visitantes deciden en Google antes de salir de Madrid",
      "Sector servicios y hostelería representa el 57% de la actividad económica",
      "Embalse de Pedrezuela compartido — turismo acuático y de naturaleza activo",
      "Municipio en crecimiento residencial con demanda de servicios de proximidad sin cubrir",
    ],
  },
  {
    slug: "soto-del-real",
    name: "Soto del Real",
    population: 9500,
    heroContext:
      "Webs modernas para comercios de Soto del Real. Destaca en Google y facilita que los vecinos encuentren tus servicios fácilmente.",
    localContext:
      "Soto del Real es uno de los destinos de sierra más buscados del norte de Madrid, con el embalse de Santillana como atractivo principal y un acceso fácil por la M-608 desde la capital. Su perfil es mixto: residentes permanentes que demandan servicios de proximidad y madrileños de fin de semana que buscan restaurantes, actividades y comercios antes de llegar. Los negocios locales que aparecen bien posicionados en Google captan ambos perfiles; los que no, dependen exclusivamente del boca a boca.",
    highlights: [
      "Embalse de Santillana y entorno serrano — destino de escapada muy buscado en Google",
      "Perfil doble: residente habitual + visitante de fin de semana desde Madrid",
      "Acceso directo por la M-608 — bien conectado y fácil de alcanzar",
      "El negocio que aparece primero en Google se lleva la mayor parte de la demanda turística",
    ],
  },
  {
    slug: "pedrezuela",
    name: "Pedrezuela",
    population: 6600,
    heroContext:
      "Impulsa tu negocio en Pedrezuela con una web optimizada. SEO local para hostelería y servicios en la entrada de la Sierra Norte.",
    localContext:
      "Pedrezuela tiene dos activos económicos muy concretos: el embalse del Vellón (393 hectáreas, deportes náuticos, pesca, senderismo litoral) y el cabrito asado como especialidad gastronómica de referencia que atrae visitantes de toda la Comunidad de Madrid. Varios asadores del municipio son destino específico de excursiones gastronómicas. El visitante que viene a comer cabrito o a pasar el día en el embalse busca opciones en Google antes de salir. Si tu negocio no aparece, va al que sí está.",
    highlights: [
      "Cabrito asado de Pedrezuela — especialidad gastronómica con demanda activa de toda la Comunidad",
      "Embalse del Vellón (393 ha) — deportes náuticos y senderismo que generan flujo de visitantes",
      "Turistas gastronómicos que buscan restaurantes en Google antes de salir de casa",
      "Municipio pequeño donde una web bien posicionada capta casi toda la demanda del sector",
    ],
  },
];

export function getGeoMunicipality(slug: string): GeoMunicipality | undefined {
  return geoMunicipalities.find((m) => m.slug === slug);
}

/**
 * Estimación de personas que buscan servicios locales en el municipio cada día.
 * Fórmula: population × 0.72 (penetración internet adultos España, INE 2024)
 *          × 0.45 (porcentaje que busca negocios locales online, Google/IPSOS 2023)
 *          / 30 (días del mes)
 * Resultado redondeado al 10 más cercano para no aparentar precisión falsa.
 */
export function dailyLocalSearches(population: number): number {
  return Math.round((population * 0.72 * 0.45) / 30 / 10) * 10;
}
