export interface NicheData {
  slug: string;
  name: string;
  heroContext: string;
  painPoints: string[]; // problemas específicos del sector — contenido único por página
  features: string[];  // funcionalidades clave que resuelven esos problemas
}

export const nichesData: NicheData[] = [
  {
    slug: "cafeterias",
    name: "Cafeterías",
    heroContext:
      "Atrae a más clientes a tu cafetería. Destaca tus desayunos, especialidades y ubicación en Google para que te encuentren fácilmente.",
    painPoints: [
      "Los clientes no te encuentran en Google Maps cuando buscan 'desayunos cerca'",
      "No tienes carta digital y los clientes preguntan por WhatsApp antes de venir",
      "Los horarios y precios que aparecen en internet están desactualizados",
      "La competencia de cadenas como Starbucks o panaderías de franquicia te come terreno",
    ],
    features: [
      "Carta digital con fotos y precios siempre actualizados",
      "Horarios y dirección visibles en Google Maps desde el primer día",
      "Botón de WhatsApp para consultas rápidas sin llamar",
      "Galería de especialidades para atraer clientes antes de que lleguen",
    ],
  },
  {
    slug: "restaurantes",
    name: "Restaurantes",
    heroContext:
      "Sistemas de reservas sin comisiones y cartas digitales para tu restaurante. Mejora tu visibilidad online y llena tus mesas.",
    painPoints: [
      "Pagas comisiones a plataformas de reservas que se quedan con parte de tu margen",
      "Tu carta en papel no se puede actualizar sin imprimir nuevos menús",
      "No tienes forma de mostrar tus platos del día ni los menús especiales online",
      "Los clientes no pueden reservar fuera de tu horario de atención",
    ],
    features: [
      "Sistema de reservas propio sin comisiones externas",
      "Carta digital con menú del día y platos especiales actualizables en minutos",
      "Galería de platos con fotos que abren el apetito antes de llegar",
      "Formulario de reserva activo las 24 horas, también cuando está cerrado",
    ],
  },
  {
    slug: "peluquerias",
    name: "Peluquerías y Centros de Estética",
    heroContext:
      "Digitaliza tu salón de belleza. Muestra tus servicios, recibe citas anticipadas y haz que los vecinos de la zona te elijan a ti.",
    painPoints: [
      "Pierdes tiempo al teléfono gestionando citas que podrían hacerse solas",
      "Los clientes no saben tus precios y llamadas antes de venir a preguntar",
      "No tienes galería de trabajos y los clientes no pueden ver tu estilo antes de venir",
      "Dependes del boca a boca y no llegas a clientes nuevos de la zona",
    ],
    features: [
      "Sistema de citas online que funciona mientras atiendes a otro cliente",
      "Lista de servicios con precios orientativos para eliminar llamadas de consulta",
      "Galería de trabajos para mostrar tu estilo y atraer al cliente adecuado",
      "SEO local para aparecer cuando alguien busca peluquería cerca",
    ],
  },
  {
    slug: "talleres",
    name: "Talleres Mecánicos",
    heroContext:
      "Que los conductores de tu zona te encuentren cuando te necesiten. Páginas web que inspiran confianza y destacan tus servicios de motor.",
    painPoints: [
      "Cuando alguien busca 'taller mecánico cerca' en Google, no apareces tú",
      "No tienes forma de mostrar tu experiencia y especialidades antes del primer contacto",
      "Los clientes nuevos no saben si eres de confianza y van a un taller de cadena",
      "No capturas solicitudes de presupuesto fuera de tu horario de trabajo",
    ],
    features: [
      "Página de servicios detallada: ITV, frenos, diagnosis, neumáticos, etc.",
      "Formulario de solicitud de presupuesto disponible las 24 horas",
      "Sección de confianza con años de experiencia y especialidades",
      "SEO para aparecer cuando alguien busca taller en tu zona en una urgencia",
    ],
  },
  {
    slug: "clinicas",
    name: "Clínicas y Consultas",
    heroContext:
      "Transmite profesionalidad y cercanía. Diseñamos webs claras y ordenadas para clínicas dentales, fisioterapia o psicología.",
    painPoints: [
      "Los pacientes no encuentran información clara sobre tus especialidades antes de llamar",
      "Tu web actual no transmite el nivel de profesionalidad que sí tienes en consulta",
      "No puedes gestionar primeras consultas online y el teléfono colapsa con llamadas",
      "Cumplir con RGPD y LOPD en la web parece complicado y no sabes por dónde empezar",
    ],
    features: [
      "Diseño limpio y ordenado que transmite confianza desde el primer momento",
      "Página de especialidades y equipo para resolver dudas antes de llamar",
      "Formulario de solicitud de primera cita con aviso legal y consentimiento RGPD",
      "Textos claros en lenguaje accesible para el paciente, no para el médico",
    ],
  },
  {
    slug: "gimnasios",
    name: "Gimnasios y Centros Deportivos",
    heroContext:
      "Aumenta tus socios con una web que motive. Facilita los horarios, tarifas e instalaciones a los deportistas de tu barrio.",
    painPoints: [
      "Los horarios de clases y actividades se comunican solo por WhatsApp o papel",
      "Los posibles socios no pueden ver las instalaciones ni las tarifas antes de venir",
      "Pierdes posibles altas porque el proceso de información es lento y por teléfono",
      "La competencia de cadenas low-cost tiene una presencia digital mucho más potente",
    ],
    features: [
      "Página de horarios de actividades actualizable sin tocar código",
      "Galería de instalaciones para que el socio potencial se enamore antes de venir",
      "Tarifas y tipos de membresía explicados con claridad para reducir llamadas",
      "Formulario de contacto para solicitar información o reservar visita",
    ],
  },
  {
    slug: "artesanos",
    name: "Pequeños Artesanos",
    heroContext:
      "Dale valor a tus creaciones manuales. Un escaparate digital profesional para mostrar tu trabajo artesanal y recibir encargos directos.",
    painPoints: [
      "Tu trabajo es único pero solo lo ven quienes ya te conocen en persona",
      "Dependes de ferias y mercados para vender y eso limita mucho tu alcance",
      "No tienes una manera fácil de recibir encargos personalizados a distancia",
      "Instagram solo muestra fotos y no permite cerrar encargos con facilidad",
    ],
    features: [
      "Portfolio visual de trabajos realizados para mostrar tu estilo y calidad",
      "Formulario de encargo personalizado con descripción, plazos y contacto",
      "Historia y proceso de creación para conectar emocionalmente con el comprador",
      "SEO para aparecer en búsquedas de artesanía de tu especialidad",
    ],
  },
  {
    slug: "tiendas",
    name: "Tiendas Tradicionales",
    heroContext:
      "No dejes que las grandes superficies se lleven a tu clientela. Moderniza la presencia de tu comercio local en internet sin perder tu esencia.",
    painPoints: [
      "Los vecinos no saben qué productos tienes disponibles sin venir a la tienda",
      "No apareces en Google cuando alguien busca tu tipo de producto en la zona",
      "Amazon y las grandes superficies tienen presencia digital que tú no tienes",
      "No tienes forma de comunicar novedades u ofertas puntuales a tus clientes",
    ],
    features: [
      "Catálogo de productos o servicios con fotos y descripción clara",
      "Horarios, dirección y teléfono perfectamente visibles en Google",
      "Botón de WhatsApp para consultas de disponibilidad sin salir de la web",
      "SEO local para captar clientes del barrio que buscan antes de desplazarse",
    ],
  },
  {
    slug: "inmobiliarias",
    name: "Inmobiliarias",
    heroContext:
      "Muestra tus propiedades con elegancia. Páginas web para agencias inmobiliarias que generan confianza y captan más clientes compradores y vendedores.",
    painPoints: [
      "Tu web actual no hace justicia a la calidad de las propiedades que gestionas",
      "Los compradores buscan en Idealista y Fotocasa pero no saben que existes tú",
      "No tienes una forma clara de captar propietarios que quieren vender o alquilar",
      "Transmitir confianza en internet es difícil en un sector con mala reputación general",
    ],
    features: [
      "Diseño elegante y profesional que transmite seriedad y solidez",
      "Página de captación para propietarios con formulario de valoración gratuita",
      "Sección de propiedades destacadas con fotos de calidad y descripción completa",
      "SEO local para aparecer en búsquedas de compraventa e alquiler en la zona",
    ],
  },
  {
    slug: "reformas",
    name: "Empresas de Reformas",
    heroContext:
      "Que tus obras hablen por ti. Posiciona tu empresa de albañilería o reformas integrales en Google y consigue solicitudes de presupuesto cualificadas.",
    painPoints: [
      "No tienes donde mostrar las obras que has hecho y solo te contratan por recomendación",
      "Los clientes no te llaman porque no saben si eres de fiar sin ver trabajos anteriores",
      "Piden presupuesto y luego comparan con cualquiera que aparezca primero en Google",
      "No capturas solicitudes fuera de horario y pierdes clientes que buscan por la tarde",
    ],
    features: [
      "Galería de antes y después para demostrar la calidad de tu trabajo",
      "Formulario de solicitud de presupuesto disponible las 24 horas",
      "Sección de tipos de reforma con descripción de lo que incluye cada servicio",
      "SEO para aparecer cuando alguien busca empresa de reformas en tu zona",
    ],
  },
  {
    slug: "abogados",
    name: "Abogados y Asesorías",
    heroContext:
      "Transmite prestigio y profesionalidad online. Mejora la captación de tu despacho o asesoría con un diseño claro que facilite el primer contacto.",
    painPoints: [
      "Captar nuevos clientes fuera del círculo de referencias es difícil sin presencia online",
      "Tu web actual no transmite el nivel de especialización que tienes",
      "Los clientes potenciales no saben en qué áreas trabajas antes de llamar",
      "El primer contacto por teléfono es una barrera que mucha gente evita",
    ],
    features: [
      "Diseño sobrio y profesional que proyecta autoridad y confianza",
      "Página de áreas de práctica para que el cliente sepa si eres el abogado adecuado",
      "Formulario de consulta inicial que reduce la fricción del primer contacto",
      "SEO para aparecer en búsquedas de abogado especialista en tu zona",
    ],
  },
  {
    slug: "academias",
    name: "Academias y Autoescuelas",
    heroContext:
      "Llena tus aulas. Haz que los vecinos de tu zona encuentren rápidamente tu centro de estudios, horarios, cursos ofertados y tarifas.",
    painPoints: [
      "Los alumnos potenciales comparan precios en Google y tú no apareces en los resultados",
      "No tienes una manera clara de mostrar tus cursos, horarios y plazas disponibles",
      "El proceso de matriculación requiere llamar o ir en persona y mucha gente se va",
      "Las academias online y las grandes franquicias tienen más visibilidad que tú",
    ],
    features: [
      "Catálogo de cursos con horarios, duración, precio y próximas convocatorias",
      "Formulario de preinscripción online para capturar el interés en el momento",
      "Página de profesores y metodología para diferenciarte de la competencia",
      "SEO local para aparecer en búsquedas de academia o autoescuela en tu zona",
    ],
  },
  {
    slug: "concesionarios",
    name: "Concesionarios y Compra-Venta",
    heroContext:
      "Muestra tu stock de vehículos 24/7. Páginas web rápidas y visuales para concesionarios que quieren generar más contactos locales y visitas a la exposición.",
    painPoints: [
      "Los compradores buscan vehículos en Coches.net y Wallapop pero no en tu web",
      "No puedes mostrar tu stock actual online sin actualizar manualmente cada ficha",
      "Los interesados no saben tus condiciones de financiación antes de visitar",
      "Tu exposición física es buena pero tu presencia digital no refleja esa calidad",
    ],
    features: [
      "Fichas de vehículos con fotos, características y precio de venta",
      "Formulario de contacto por vehículo para generar leads cualificados",
      "Página de información sobre financiación y proceso de compra",
      "SEO local para aparecer cuando alguien busca comprar coche en tu zona",
    ],
  },
  {
    slug: "chapa-y-pintura",
    name: "Talleres de Chapa y Pintura",
    heroContext:
      "Atrae a los conductores que necesitan reparar su coche o dar un parte al seguro. Destaca por tu profesionalidad en Google con una web moderna.",
    painPoints: [
      "Cuando hay un accidente la gente busca taller en Google y tú no apareces",
      "No tienes donde mostrar la calidad de tus trabajos de pintura y carrocería",
      "Los clientes no saben si trabajas con su seguro antes de venir a preguntar",
      "La competencia de talleres de cadena tiene más visibilidad digital que tú",
    ],
    features: [
      "Galería de trabajos de chapa y pintura con resultado final",
      "Información clara sobre colaboración con aseguradoras y gestión de partes",
      "Formulario de solicitud de presupuesto con fotos adjuntas",
      "SEO para aparecer en búsquedas urgentes de taller de chapa en tu zona",
    ],
  },
  {
    slug: "reparaciones-domicilio",
    name: "Servicios a Domicilio y Urgencias",
    heroContext:
      "Fontaneros, electricistas, cerrajeros y técnicos. Cuando hay una urgencia, la gente busca en Google. Sé la primera opción en tu zona.",
    painPoints: [
      "En una urgencia la gente coge el primer resultado de Google, no el mejor",
      "No tienes una forma de mostrar tu zona de cobertura y tiempo de respuesta",
      "Los clientes no saben tus tarifas aproximadas y muchos no llaman por eso",
      "Dependes de plataformas de intermediación que cobran comisión por cada contacto",
    ],
    features: [
      "Número de teléfono prominente y botón de llamada directa desde el móvil",
      "Página de zona de cobertura y tiempo de respuesta para gestionar expectativas",
      "Tarifa orientativa de desplazamiento para eliminar la duda antes de llamar",
      "SEO de urgencia para aparecer primero cuando más te necesitan",
    ],
  },
];

export function getNicheData(slug: string): NicheData | undefined {
  return nichesData.find((n) => n.slug === slug);
}
