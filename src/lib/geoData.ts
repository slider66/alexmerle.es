export interface GeoMunicipality {
  slug: string;
  name: string;
  heroContext: string;
  localContext: string; // párrafo único sobre la zona — diferencia el contenido para SEO
  highlights: string[]; // 3-4 puntos específicos del municipio
  faqExtras?: { q: string; a: string }[];
}

export const geoMunicipalities: GeoMunicipality[] = [
  {
    slug: "san-agustin-de-guadalix",
    name: "San Agustín de Guadalix",
    heroContext:
      "Diseño web y SEO local para pymes e industrias de San Agustín. Destaca en Google Maps frente a la competencia del polígono y el núcleo urbano.",
    localContext:
      "San Agustín de Guadalix combina un polígono industrial activo con un núcleo residencial en crecimiento. Los negocios locales — desde talleres y almacenes hasta comercios de proximidad — compiten con empresas de Madrid capital que tienen más presupuesto de marketing. Una web bien optimizada es la forma más directa de aparecer primero cuando alguien de San Agustín busca en Google lo que tú ofreces.",
    highlights: [
      "Visibilidad frente a negocios del polígono industrial",
      "Captación de clientes del núcleo residencial en expansión",
      "SEO local orientado a búsquedas de la zona norte de Madrid",
      "Web operativa en menos de dos semanas desde el primer contacto",
    ],
  },
  {
    slug: "alcobendas",
    name: "Alcobendas",
    heroContext:
      "Páginas web profesionales para negocios en Alcobendas. Atrae más clientes de La Moraleja, Valdelasfuentes y el centro con SEO local.",
    localContext:
      "Alcobendas es uno de los municipios con mayor densidad empresarial del norte de Madrid. La competencia entre negocios locales es alta, especialmente en zonas como La Moraleja o Valdelasfuentes donde el perfil del cliente es exigente. Tener una web que transmita profesionalidad desde el primer clic marca la diferencia entre que te llamen a ti o a la empresa de al lado.",
    highlights: [
      "Diseño que conecta con el perfil de cliente de La Moraleja y Valdelasfuentes",
      "SEO local para destacar en un municipio de alta densidad empresarial",
      "Webs rápidas y modernas acordes al nivel del entorno de Alcobendas",
      "Integración con Google Maps y llamada directa desde móvil",
    ],
  },
  {
    slug: "san-sebastian-de-los-reyes",
    name: "San Sebastián de los Reyes",
    heroContext:
      "Sistemas de encargos, webs corporativas y presencia digital para comercios de Sanse. Haz que te encuentren los vecinos de tu zona.",
    localContext:
      "San Sebastián de los Reyes tiene un comercio local muy vivo, pero la proximidad con el centro comercial H2O y las grandes superficies del corredor del Henares obliga a los negocios de barrio a diferenciarse. Una web con botón de WhatsApp directo, carta digital y posicionamiento en Google Maps es hoy la mejor herramienta para que los vecinos de Sanse te elijan a ti frente a las cadenas.",
    highlights: [
      "Diferenciación frente a grandes superficies del área comercial",
      "Botón de contacto directo por WhatsApp para clientes del barrio",
      "Posicionamiento en Google Maps para búsquedas locales de Sanse",
      "Sistemas de encargos y reservas sin necesidad de llamar por teléfono",
    ],
  },
  {
    slug: "las-tablas",
    name: "Las Tablas",
    heroContext:
      "Webs modernas y automatización para negocios locales en Las Tablas. Capta clientes de un barrio joven y digital con una imagen profesional.",
    localContext:
      "Las Tablas es uno de los barrios más jóvenes de Madrid norte, con una población acostumbrada a buscar y contratar servicios desde el móvil. Los negocios que no tienen presencia digital sencillamente no existen para este perfil de cliente. La web no es un lujo aquí: es el primer filtro que decide si te llaman o buscan a otro.",
    highlights: [
      "Barrio digital-first: los clientes buscan y contratan desde el móvil",
      "Diseño responsive optimizado para la experiencia desde smartphone",
      "Automatización de encargos para reducir llamadas y errores",
      "Imagen moderna acorde al perfil de cliente de Las Tablas",
    ],
  },
  {
    slug: "paracuellos-de-jarama",
    name: "Paracuellos de Jarama",
    heroContext:
      "Agencia web local cerca de Paracuellos de Jarama. Ayudo a tu negocio a ser la primera opción en Google para los vecinos de Paracuellos y Miramadrid.",
    localContext:
      "Paracuellos de Jarama y la urbanización Miramadrid concentran una población en crecimiento constante, en parte impulsada por la proximidad al aeropuerto y las nuevas áreas logísticas. Los negocios de hostelería, servicios y comercio tienen una base de clientes potencial muy sólida que todavía no está bien capturada digitalmente en la zona.",
    highlights: [
      "Zona en crecimiento demográfico con demanda digital sin cubrir",
      "SEO local para captar vecinos de Paracuellos y Miramadrid",
      "Proximidad real: trabajo contigo en persona si es necesario",
      "Webs preparadas para crecer junto con el municipio",
    ],
  },
  {
    slug: "algete",
    name: "Algete",
    heroContext:
      "Consultoría web especializada en posicionar negocios locales de Algete. Haz que tu comercio o empresa llegue a más clientes del municipio.",
    localContext:
      "Algete mantiene un comercio de proximidad activo, pero cada vez más vecinos buscan proveedores en Google antes de acudir al local. Los negocios que aparecen en los primeros resultados tienen una ventaja enorme sobre los que dependen solo del boca a boca. SEO local bien ejecutado puede posicionar un negocio de Algete en los primeros resultados de la zona en pocas semanas.",
    highlights: [
      "Posicionamiento frente a negocios de municipios vecinos más grandes",
      "Captación de clientes que buscan en Google antes de desplazarse",
      "Web rápida que carga en menos de 2 segundos en móvil",
      "Presupuesto cerrado y sin sorpresas, sin cuotas mensuales",
    ],
  },
  {
    slug: "cobena",
    name: "Cobeña",
    heroContext:
      "Páginas web profesionales y fáciles de usar para negocios en Cobeña. Convierte más visitas en web en clientes sin complicaciones técnicas.",
    localContext:
      "Cobeña es un municipio pequeño pero con actividad empresarial ligada al sector logístico y los servicios de proximidad. Para un negocio local, aparecer en Google Maps cuando alguien busca desde el móvil es directamente más clientes. Sin complicaciones técnicas ni contratos de mantenimiento forzados, solo una web que funciona.",
    highlights: [
      "Solución sencilla y sin burocracia para negocios de municipio pequeño",
      "Alta visibilidad en Google Maps para búsquedas de proximidad",
      "Sin cuotas mensuales obligatorias, el código es tuyo",
      "Trato directo con el consultor, sin intermediarios",
    ],
  },
  {
    slug: "daganzo-de-arriba",
    name: "Daganzo de Arriba",
    heroContext:
      "Diseño web moderno y efectivo para impulsar el comercio local y los servicios en Daganzo de Arriba con estrategias de visibilidad en Google.",
    localContext:
      "Daganzo de Arriba tiene un tejido comercial y de servicios que compite directamente con municipios vecinos más grandes. Para los negocios locales, la visibilidad digital es la manera más rentable de captar clientes que ya están buscando lo que ofrecen pero no saben que están en Daganzo. Una web bien estructurada y posicionada cambia eso.",
    highlights: [
      "SEO local para competir con negocios de municipios más grandes",
      "Diseño que transmite seriedad y cercanía a la vez",
      "Google Maps integrado para facilitar que te visiten",
      "Primeros resultados en búsquedas locales en pocas semanas",
    ],
  },
  {
    slug: "talamanca-de-jarama",
    name: "Talamanca de Jarama",
    heroContext:
      "Webs corporativas y sistemas de contactos para negocios en Talamanca de Jarama. Una presencia digital fuerte que inspira confianza local.",
    localContext:
      "Talamanca de Jarama tiene un perfil de municipio tranquilo con negocios de hostelería y servicios que dependen en gran medida del cliente local y del turismo de fin de semana. Una web bien posicionada es especialmente valiosa aquí porque la búsqueda en Google es el primer paso de muchos visitantes de fuera que buscan dónde comer o qué hacer en la zona.",
    highlights: [
      "Captación de turistas de fin de semana que buscan en Google",
      "Web que inspira confianza para cliente local y visitante externo",
      "Carta digital y menú visible sin necesidad de llamar",
      "Posicionamiento en buscadores para búsquedas de la zona del Jarama",
    ],
  },
  {
    slug: "fuente-el-saz-de-jarama",
    name: "Fuente el Saz de Jarama",
    heroContext:
      "Transformación digital y diseño de páginas web orientadas a resultados para las pymes de Fuente el Saz de Jarama y alrededores.",
    localContext:
      "Fuente el Saz de Jarama es un municipio con una economía local activa y una ubicación estratégica cerca de las principales vías del corredor del Henares. Los negocios de la zona tienen potencial de captar clientes de paso y de municipios vecinos, pero solo si son visibles en Google cuando alguien busca desde la carretera o desde casa.",
    highlights: [
      "Visibilidad para clientes de paso por el corredor del Henares",
      "SEO local que posiciona frente a negocios de municipios vecinos",
      "Web optimizada para carga rápida en conexiones móviles",
      "Presencia en Google Maps desde el primer día de publicación",
    ],
  },
  {
    slug: "el-molar",
    name: "El Molar",
    heroContext:
      "Servicio de diseño web y SEO local para empresarios de El Molar. Destaca en los buscadores y atrae a los vecinos de la zona norte.",
    localContext:
      "El Molar es uno de los municipios de la zona norte donde los negocios locales tienen una relación muy directa con su clientela de proximidad. Sin embargo, el boca a boca solo llega hasta donde llega. Una web optimizada para SEO local permite que los negocios de El Molar sean encontrados por personas que buscan en Google sin saber todavía a quién acudir.",
    highlights: [
      "Alcance más allá del boca a boca tradicional",
      "Posicionamiento en búsquedas de la zona norte de Madrid",
      "Web con llamada y WhatsApp directo para convertir visitas en clientes",
      "Entrega en 1-2 semanas para empezar a recibir contactos cuanto antes",
    ],
  },
  {
    slug: "colmenar-viejo",
    name: "Colmenar Viejo",
    heroContext:
      "Diseño web y SEO para negocios en Colmenar Viejo. Mejora tu visibilidad en la Sierra Norte y atrae a más clientes locales con una web profesional.",
    localContext:
      "Colmenar Viejo es el centro de servicios de referencia para buena parte de la Sierra Norte madrileña. Los negocios aquí atienden tanto a residentes habituales como a personas de municipios de montaña que bajan a hacer gestiones o compras. Una web bien posicionada en Google puede captar a todos ellos antes de que lleguen al pueblo.",
    highlights: [
      "Captación de clientes de toda la Sierra Norte que buscan en Colmenar",
      "Posicionamiento como referente de servicios en la zona serrana",
      "Web adaptada a perfiles de cliente local y turista de montaña",
      "SEO orientado a búsquedas de la comarca, no solo del municipio",
    ],
  },
  {
    slug: "tres-cantos",
    name: "Tres Cantos",
    heroContext:
      "Sistemas de reserva y páginas web para empresas en Tres Cantos. Posiciona tu negocio en el motor tecnológico del norte de Madrid.",
    localContext:
      "Tres Cantos es una ciudad planificada con un perfil profesional y tecnológico muy marcado. Su población, formada en gran parte por ingenieros y directivos, es especialmente exigente con la calidad digital de los negocios a los que acude. Una web antigua o mal diseñada aquí genera desconfianza inmediata: la imagen digital tiene que estar a la altura.",
    highlights: [
      "Diseño moderno para un cliente con alto nivel de exigencia digital",
      "Web que transmite profesionalidad desde el primer segundo",
      "Sistemas de reserva y encargos online para un perfil de cliente ocupado",
      "SEO local para destacar en un municipio con alta competencia de servicios",
    ],
  },
  {
    slug: "guadalix-de-la- sierra",
    name: "Guadalix de la Sierra",
    heroContext:
      "Presencia digital y SEO local en Guadalix de la Sierra. Soluciones web a medida para pequeños negocios y servicios de la zona.",
    localContext:
      "Guadalix de la Sierra combina actividad local de proximidad con un flujo de visitantes de fin de semana procedentes de Madrid. Los negocios de hostelería y servicios tienen una oportunidad real de captar este tráfico turístico si aparecen en Google cuando alguien busca opciones en la Sierra de Madrid.",
    highlights: [
      "Visibilidad para turistas de fin de semana que buscan en Google",
      "Carta digital accesible desde el móvil sin necesidad de descargarse nada",
      "SEO orientado a búsquedas de sierra y turismo rural del norte de Madrid",
      "Web simple y efectiva para negocios que no necesitan complicaciones",
    ],
  },
  {
    slug: "soto-del-real",
    name: "Soto del Real",
    heroContext:
      "Webs modernas para comercios de Soto del Real. Destaca en Google y facilita que los vecinos encuentren tus servicios fácilmente.",
    localContext:
      "Soto del Real es uno de los destinos de escapada más buscados del norte de Madrid, con un perfil mixto de residentes permanentes y madrileños que pasan los fines de semana. Los negocios locales que estén bien posicionados en Google captan a ambos perfiles: al vecino que busca desde casa y al visitante que llega buscando dónde comer o qué hacer.",
    highlights: [
      "Captación de turistas que buscan restaurantes y actividades en la sierra",
      "SEO local para aparecer en búsquedas de fin de semana en Madrid norte",
      "Web que funciona igual de bien para residente habitual y visitante ocasional",
      "Integración con Google Maps para que te encuentren con facilidad",
    ],
  },
  {
    slug: "pedrezuela",
    name: "Pedrezuela",
    heroContext:
      "Impulsa tu negocio en Pedrezuela con una web optimizada. SEO local para hostelería y servicios en la entrada de la Sierra Norte.",
    localContext:
      "Pedrezuela está en la entrada natural de la Sierra Norte madrileña, lo que la convierte en punto de paso para muchos excursionistas y ciclistas de fin de semana. Los negocios locales — bares, restaurantes, talleres y tiendas — tienen una oportunidad de captar a estas personas si están visibles en Google en el momento exacto en que buscan.",
    highlights: [
      "Posicionamiento para búsquedas de ciclistas y excursionistas de la sierra",
      "Web con localización clara y acceso rápido al menú o servicios",
      "SEO que aprovecha el tráfico de paso por la entrada a la Sierra Norte",
      "Diseño limpio y rápido para cargar bien incluso con cobertura justa",
    ],
  },
];

export function getGeoMunicipality(slug: string): GeoMunicipality | undefined {
  return geoMunicipalities.find((m) => m.slug === slug);
}
