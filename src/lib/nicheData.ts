export interface NicheData {
  slug: string;
  name: string;
  heroContext: string;
  painPoints: string[]; // problemas específicos del sector — contenido único por página
  features: string[]; // funcionalidades clave que resuelven esos problemas
}

export const nichesData: NicheData[] = [
  {
    slug: "cafeterias",
    name: "Cafeterías",
    heroContext:
      "Llena tu barra a desayuno y tarde. Posiciónate en Google Maps y web local para captar clientes que buscan 'desayuno bueno cerca' en tu zona.",
    painPoints: [
      "8 de cada 10 clientes potenciales buscan desayuno en Google Maps pero ven a cadenas o competencia mejor posicionada",
      "Sin carta digital ni fotos de tus especialidades, los clientes preguntan por WhatsApp con dudas que podrías resolver online",
      "Google Maps muestra horarios desactualizados o no los muestra — pierdes gente que busca a las 7am si no ven que abres",
      "Las cadenas tienen profesionales de marketing; tú compites contra ellas con boca a boca y eso no escala",
    ],
    features: [
      "Carta visual con fotos apetitosas de desayunos, sandwiches y especialidades — actualizable sin tocar código",
      "Google Maps perfectamente rellenado: horarios exactos, fotos del local, teléfono directo desde móvil",
      "Integración con WhatsApp en la web para que clientes hagan pedidos o reserven mesa sin llamar",
      "Galería de fotos que comunican ambiente — desayunos, vistas, gente disfrutando — la experiencia que venden",
      "Feed de Instagram embebido: tus fotos de desayunos y ambiente se muestran en la web automáticamente",
    ],
  },
  {
    slug: "restaurantes",
    name: "Restaurantes",
    heroContext:
      "Llena tus mesas sin depender de TheFork o Yelp. Sistema de reservas propio + carta digital + SEO local que posiciona tu restaurante primero en Google.",
    painPoints: [
      "TheFork, Yelp y Google Reviews se quedan 5-10% de cada reserva — 50 reservas/mes = pierdes 2-5 mesas completas",
      "Los clientes no pueden ver el menú completo online — Google no mostrará tus especiales si solo están en papel",
      "Cuando buscan 'restaurante bueno en [zona]' ven competencia mejor posicionada — no apareces en búsquedas locales",
      "Pierdes reservas de fin de semana porque el cliente quiere reservar a las 10pm y estás cerrado — sin web se va a otro",
    ],
    features: [
      "Sistema de reserva propio integrado en tu web — el 100% de cada reserva es tuya, sin comisiones de plataformas",
      "Carta digital actualizable en minutos: menú clásico + platos del día + temporada — Google indexa todo",
      "Fotos apetitosas de cada plato para que vean calidad antes de venir y no comparen con restaurante de al lado",
      "Formulario de reserva activo 24/7 — captura reservas de fin de semana cuando tú no contestas teléfono",
      "Integración Instagram → galería de platos automática: subes foto del especial del día y aparece en la web sin tocar código",
    ],
  },
  {
    slug: "peluquerias",
    name: "Peluquerías y Centros de Estética",
    heroContext:
      "Gestiona citas sin parar el trabajo. Sistema de agendamiento online + fotos de trabajos para atraer el cliente que buscas sin llamadas de información.",
    painPoints: [
      "Pierdes 1-2 horas al día atendiendo llamadas para consultas de precio y disponibilidad que podrías automatizar",
      "Clientes que quieren cita a las 8pm (cuando cierras) se van a salón competidor que sí tiene web disponible",
      "Sin fotos de trabajos, los clientes nuevos no saben tu estilo y llaman a 5 salones antes de elegir — tienes desventaja informativa",
      "Google busca 'peluquería cerca' y ven a competencia — tú no apareces o apareces en posición 3-4 porque no tienes web SEO optimizada",
    ],
    features: [
      "Sistema de citas automático: el cliente elige día/hora/servicio/precio y confirma en la web, sin que desuelgues teléfono",
      "Catálogo de servicios con precios transparentes: corte, color, alisado, permanente — elimina el 70% de llamadas",
      "Galería de antes-y-después profesional para mostrar estilo, calidad de color y acabados — atrae el cliente correcto",
      "SEO local que posiciona en búsquedas de 'peluquería' + zona — apareces primero cuando alguien busca en tu barrio",
      "Galería automática desde Instagram: cada trabajo que subes a RRSS se refleja en tu portfolio web al instante",
    ],
  },
  {
    slug: "talleres",
    name: "Talleres Mecánicos",
    heroContext:
      "Cuando alguien busca taller urgente, sé la primera opción en Google. Posiciónate local para captar diagnósticos, revisiones y reparaciones de la zona.",
    painPoints: [
      "60% de búsquedas de 'taller mecánico' las hace gente en urgencia que coge el PRIMER resultado de Google — si no eres tú, pierdes ese cliente",
      "Sin fotos de equipos (diagnosis por ordenador, elevador, etc.) pierdes la confianza inicial — parecen todos iguales",
      "Los clientes no saben si haces ITV, frenos, suspensión, y llaman a 5 talleres antes — pierdes clientes antes de que te conozcan",
      "Formularios offline: cliente llama a las 6pm para presupuesto, estás cerrado, se va a otro — sin web pierdes presupuestos de urgencia",
    ],
    features: [
      "Posicionamiento SEO para búsquedas urgentes: 'taller mecánico cerca', 'reparar coche hoy', 'diagnosis mecánico'",
      "Página de servicios detallada: ITV, diagnosis computarizada, frenos, suspensión, neumáticos, electricidad — cada servicio con descripción",
      "Formulario de solicitud de presupuesto disponible 24/7 — captura clientes que buscan a las 6pm o domingo",
      "Galería de equipos y instalaciones profesionales + testimonios de clientes para generar confianza de entrada",
    ],
  },
  {
    slug: "clinicas",
    name: "Clínicas y Consultas",
    heroContext:
      "Gana confianza de entrada. Diseño profesional que canaliza consultas online y reduce llamadas innecesarias — especialidades, equipo, horarios claros.",
    painPoints: [
      "El paciente potencial entra a tu web y ve información incompleta — no sabe si haces la especialidad que busca y llama a otro",
      "Tu consulta es profesional pero la web parece un proyecto de 2010 — pierdes credibilidad en los primeros 3 segundos",
      "El teléfono explota con llamadas de gente preguntando qué haces, precios, horarios — información que debería estar online",
      "Sin formulario de solicitud de cita, cada nuevo paciente requiere una llamada — pierdes gente que prefiere escribir",
    ],
    features: [
      "Diseño moderno y profesional que transmite que tu consulta es seria — fotos de equipo, diplomas, equipo médico",
      "Página detallada de especialidades: en qué te especializas, qué tratamientos ofreces, qué problemas resuelves",
      "Formulario de solicitud de cita con consentimiento RGPD integrado — capturas consultas sin que llamen",
      "FAQ con respuestas a preguntas comunes (LOPD/RGPD está cumplida, fotos de privacidad) para generar confianza inicial",
    ],
  },
  {
    slug: "gimnasios",
    name: "Gimnasios y Centros Deportivos",
    heroContext:
      "Llena tu gimnasio de socios. Horarios visuales, tarifas claras, galería de instalaciones + reserva de prueba online sin llamadas.",
    painPoints: [
      "Los posibles socios buscan en Google 'gimnasio cerca' y ven a Anytime, Gold o cadenas low-cost — tú no apareces",
      "Comunicas horarios solo por WhatsApp — pierdes clientes que quieren información completa antes de llamar",
      "Sin fotos de equipamiento real, los clientes comparan con cadenas que tienen fotos profesionales — pierdes por presentación",
      "Cada visita de prueba requiere una llamada que coordina — muchos no la hacen, se inscriben en otro con proceso online",
    ],
    features: [
      "Horarios visuales por actividad: spinning, funcional, yoga, boxeo — actualizable sin tocar código, visible inmediatamente",
      "Galería profesional de instalaciones: máquinas de cardio, pesas, estudio de yoga, vestuarios limpios — muestra diferencial vs cadenas",
      "Tarifas completamente transparentes: plan básico, full, familia, con promoción para primer mes — elimina dudas",
      "Formulario de reserva de sesión de prueba gratuita — el socio potencial se compromete viniendo a probar",
      "Horarios y actividades gestionados desde Google Sheets — sin entrar a ningún panel, sin ERP",
    ],
  },
  {
    slug: "artesanos",
    name: "Pequeños Artesanos",
    heroContext:
      "Vende encargos sin ferias. Web que funciona 24/7 mostrando tu portfolio, proceso de creación y sistema de encargos personalizados directos.",
    painPoints: [
      "Tu arte es único pero solo 100-200 personas/año te ven en ferias — con web podrían verte potenciales clientes en todo el país",
      "Instagram muestra fotos pero no permite cerrar encargos: sin precio, proceso de pago confuso, nadie sabe plazo",
      "No tienes donde explicar tu historia — por qué tu trabajo es diferente, qué hace único tu proceso creativo",
      "Cada encargo requiere conversación larga por WhatsApp — pierdes clientes que quieren información clara e inmediata",
    ],
    features: [
      "Portfolio visual profesional categorizado: piezas destacadas con historia, proceso de creación, y precio base",
      "Formulario de encargo personalizado: cliente describe lo que quiere, plazo, presupuesto — tus respuestas en 24h",
      "Sección 'sobre el artesano': historia personal, proceso de creación documentado, valores — conexión emocional con comprador",
      "SEO para búsquedas de 'artesanía [especialidad]', '[especialidad] personalizado', 'encargo artesanal' en tu zona",
      "Sincronización Instagram → portfolio: tus publicaciones de nuevas piezas aparecen en la web sin duplicar trabajo",
    ],
  },
  {
    slug: "tiendas",
    name: "Tiendas Tradicionales",
    heroContext:
      "Compite con Amazon desde tu barrio. Web + SEO local que posiciona tu tienda en búsquedas de proximidad y comunica disponibilidad sin que cierren.",
    painPoints: [
      "Amazon y El Corte Inglés aparecen en búsquedas de 'comprar [producto]' — tú no estás en la conversación inicial del cliente",
      "Los vecinos no saben qué tienes en stock sin venir personalmente — sin catalogo online pierdes compra por información incompleta",
      "Google Maps no muestra tu horario completo o está desactualizado — clientes van a otra tienda que SÍ aparece actualizada",
      "No comunicas ofertas ni novedades más allá de quien ya entra a tu tienda — nuevos clientes no saben que existes",
    ],
    features: [
      "Catálogo de productos fotografiado profesionalmente: ropa, libros, deportes — mostrando disponibilidad en tiempo real",
      "Google My Business optimizado: horarios exactos, fotos del local, categoría correcta para búsquedas locales",
      "Botón de WhatsApp para preguntas de disponibilidad, cambios de horario, ofertas especiales — info directa sin teléfono",
      "SEO local que posiciona en búsquedas de '[producto] tienda [zona]' — captas clientes que prefieren local a Amazon",
      "Gestión de catálogo vía Google Sheets: actualizas stock o precios en una hoja y la web lo refleja en minutos",
    ],
  },
  {
    slug: "inmobiliarias",
    name: "Inmobiliarias",
    heroContext:
      "Capta compradores y vendedores directos. Web profesional + Idealista sync + formulario de valoración que posiciona tu inmobiliaria como referente local.",
    painPoints: [
      "Los compradores usan Idealista, Fotocasa y Vivanuncios pero nunca ven tu agencia — eres invisible en la búsqueda inicial",
      "Los vendedores no saben que existes — dependes de referencias cuando podrías captar vendedores activamente buscando agencia",
      "Sin fotos 3D / virtual tour o descripción detallada, pierdes al comprador antes de contactarte — se va a agencia con mejor presentación",
      "El sector inmobiliario tiene mala reputación — sin web profesional que transmita confianza, pierdes compradores en segundo 1",
    ],
    features: [
      "Diseño premium que transmite seriedad, experiencia y solidez — colores profesionales, arquitectura clara, portfolio de propiedades",
      "Integración con Idealista / Fotocasa: tus propiedades sincronizadas en portal + tu web, no pierde leads a portales",
      "Formulario de valoración gratuita para propietarios: 'quiero vender', capturas lead de vendedor potencial en tu web",
      "Sección de propiedades destacadas con fotos 360º, descripción profesional y virtual tour — diferencia vs presentación portal",
    ],
  },
  {
    slug: "reformas",
    name: "Empresas de Reformas",
    heroContext:
      "Tus obras te hablan. Galería de antes-después profesional + presupuestos online 24/7 para aparecer primero cuando alguien busca reformista en Google.",
    painPoints: [
      "Solo te conocen por boca a boca — podrías tener 5x más clientes si aparecieran tus obras en búsquedas de 'reforma' en tu zona",
      "Sin fotos de antes-después profesionales, los clientes dudan de calidad — se van a reformista que SÍ muestre trabajos completos",
      "El cliente pide presupuesto a 5 reformistas y se va al que aparece primero en Google porque asume que es mejor — sin SEO pierdes",
      "Formularios offline: cliente busca presupuesto a las 8pm, encuentran tu web sin formulario, se van a competencia que SÍ ofrece",
    ],
    features: [
      "Galería de antes-después profesional categorizada: cocinas, baños, integral, fachada — cada reforma con descripción de trabajos",
      "Formulario de solicitud de presupuesto disponible 24/7 — el cliente sube fotos, describe proyecto, establece presupuesto aproximado",
      "Página de servicios detallada: reforma integral, cocina, baño, azulejos, pintura — cliente ve exactamente qué haces",
      "SEO para búsquedas urgentes: 'empresa de reformas [zona]', 'albañil urgente', 'reforma cocina' — apareces primero en urgencia",
    ],
  },
  {
    slug: "abogados",
    name: "Abogados y Asesorías",
    heroContext:
      "Gana clientes cualificados sin depender de referencias. Web profesional que posiciona tu especialización en Google + formulario de consulta que captura interés.",
    painPoints: [
      "El 70% de clientes potenciales buscan 'abogado [especialidad] [zona]' en Google pero ven bufetes competidores con mejor presencia",
      "Sin página de especialidades, el cliente no sabe si eres abogado de familia, penal, laboral — se confunde y llama a otro",
      "El primer contacto por teléfono para consulta es barrera — clientes que preferirían escribir primero se van a abogado con formulario online",
      "Sin casos de éxito o testimonios visibles, clientes potenciales no saben si tienes experiencia en su problema específico",
    ],
    features: [
      "Diseño profesional sobrio que transmite autoridad, experiencia y solidez — foto profesional, diplomas visibles, valores del despacho",
      "Página detallada de áreas de práctica: familia, penal, laboral, mercantil — cliente sabe EXACTAMENTE si eres el abogado que busca",
      "Formulario de consulta inicial: cliente describe caso, urgencia, presupuesto — reduce fricción del primer contacto telefónico",
      "SEO especializado en búsquedas de 'abogado [especialidad] [zona]' — apareces cuando cliente necesita especialista, no abogado genérico",
    ],
  },
  {
    slug: "academias",
    name: "Academias y Autoescuelas",
    heroContext:
      "Llena tus aulas con alumnos cualificados. Catálogo de cursos online, preinscripción digital y SEO local que posiciona tu academia en búsquedas de zona.",
    painPoints: [
      "90% de padres buscan 'academia inglés [zona]' en Google — si no apareces, pierdes cliente antes de conocerte",
      "Sin calendario de horarios visible, alumnos potenciales no saben si hay plazas en turno que les interesa — se inscriben en otro",
      "Cada matrícula requiere cita o llamada — proceso lento que pierde clientes que quieren inscribirse digitalmente en 5 minutos",
      "Las academias online y franquicias tienen presencia profesional — tú compites sin herramientas visibles, sin web de calidad",
    ],
    features: [
      "Catálogo de cursos completo: inglés, matemáticas, selectividad, carnet conducir — cada curso con nivel, horario, profesor, precio",
      "Calendario visual de próximas convocatorias y plazas disponibles — alumno ve si hay hueco en martes a las 6pm",
      "Preinscripción online: el alumno elige curso, horario, forma de pago — capturas datos sin llamada de matrícula",
      "Página de metodología y profesores: quién enseña, qué sistema usáis, tasa de aprobados — diferencia vs otras academias",
      "Calendario de cursos actualizable desde Notion o Sheets — añades convocatoria y aparece en la web al momento",
    ],
  },
  {
    slug: "concesionarios",
    name: "Concesionarios y Compra-Venta",
    heroContext:
      "Stock visible 24/7 online. Fichas de vehículos sincronizadas con Coches.net + financiación clara + contacto directo = visitas cualificadas a exposición.",
    painPoints: [
      "Coches.net, Wallapop y Milanuncios aparecen primero en búsquedas — tu concesionario no está en la conversación inicial del comprador",
      "Actualizas fichas manualmente — mientras eso, comprador encuentra vehículo mejor posicionado en portal y se lo lleva otro",
      "Sin información clara de financiación, opciones de cambio o garantía, clientes pierden confianza — comparan con 3 concesionarios",
      "Tu exposición física es grande pero web parece pequeña — no comunica amplitud, variedad, calidad de stock",
    ],
    features: [
      "Sync bidireccional con Coches.net / Wallapop: subes vehículo una vez, aparece en tu web + portales automáticamente",
      "Fichas completas por vehículo: fotos 360º, especificaciones, precio, km, combustible, historial, revisiones — sin omitir datos",
      "Página de financiación clara: opciones de crédito, cambio de vehículo, garantías mecánicas — reduce dudas antes de visita",
      "Formulario de contacto por vehículo: cliente interesado en Ford Focus 2019 expresa interés directo — lead cualificado",
    ],
  },
  {
    slug: "chapa-y-pintura",
    name: "Talleres de Chapa y Pintura",
    heroContext:
      "Capta clientes de seguros. Posiciónate en búsquedas urgentes de 'taller chapa pintura' + muestra trabajos antes-después + gestión de partes online.",
    painPoints: [
      "Accidente = cliente busca urgente 'taller chapa [zona]' — si no eres los primeros 3 resultados, pierdes ese cliente",
      "Sin galería de trabajos, cliente no sabe calidad de tu pintura — ve a taller que SÍ muestra antes-después profesional",
      "Cliente no sabe si trabajas con su aseguradora — llama a 3 talleres en lugar de venir directo al que aparezca confiable",
      "Gestión de partes es compleja — sin formulario online, clientes evitan ir porque requiere papeleo complicado",
    ],
    features: [
      "Galería de antes-después profesional: coches con daño total, resultado final impecable — demuestra maestría en restauración",
      "Información clara sobre aseguradoras que trabajáis: Seguros Generales, Mapfre, Axa, Mutua — cliente sabe si cubre suyo",
      "Formulario de solicitud de presupuesto: cliente sube fotos del daño, placa, datos seguro — presupuesto sin visita inicial",
      "SEO para búsquedas urgentes: 'taller chapa [zona]', 'pintura urgente', 'gestoría partes accidente' — apareces en urgencia",
    ],
  },
  {
    slug: "reparaciones-domicilio",
    name: "Servicios a Domicilio y Urgencias",
    heroContext:
      "Sé el primer resultado en urgencias. Posición Google Maps + llamada prominente + tarifas transparentes = cliente que LLAMA cuando pipa revienta a las 2am.",
    painPoints: [
      "Urgencia las 2am: cliente búsqueda 'fontanero urgente' en Google, ve primeros 3 resultados, elige uno y te pierden — tú estás en posición 5",
      "Sin zona de cobertura visible, cliente duda si vienes a su barrio — llama a otro fontanero que SÍ muestra cobertura clara",
      "Sin tarifa de desplazamiento visible, cliente no llama porque teme sorpresas de precio — preferencia: otro que SÍ muestra tarifas",
      "Intermediarios (Urbano, Reparalia) cobran 20-30% por cada urgencia — podrías tener 30% más ingresos sin comisiones",
    ],
    features: [
      "Número de teléfono GIGANTE en la web + botón de llamada directo desde móvil — urgencia = llama inmediatamente, sin buscar",
      "Mapa interactivo de zona de cobertura: mostrando barrios que cubres, tiempo de respuesta por zona (15min centro, 30min periférico)",
      "Tarifa orientativa transparente: 'desplazamiento 40€, hora mano de obra 50€, mínimo urgencia 100€' — cliente sabe qué esperar",
      "SEO urgencia optimizado: 'fontanero urgente [zona]', 'electricista 24h [zona]', 'cerrajero urgente' — apareces cuando más necesitan",
    ],
  },
  {
    slug: "trasteros",
    name: "Alquiler de Trasteros",
    heroContext:
      "Alquila tus trasteros online. Calculadora automática de presupuestos, reservas 24/7 y catálogo con disponibilidad en tiempo real.",
    painPoints: [
      "70% de los clientes que buscan trastero en Google no encuentran tu disponibilidad y llaman a la competencia",
      "El 40% de llamadas son para preguntar tamaños y precios — tiempo perdido que podrías automatizar",
      "Sin fotos y especificaciones online, los clientes dudan de la calidad y capacidad real de tus unidades",
      "Pierdes ingresos potencial cada fin de semana: clientes que buscan pero no pueden llamar fuera de horario",
    ],
    features: [
      "Catálogo completo con m² exactos, alturas, clima controlado, seguridad y precio por m² transparente",
      "Calculadora de precio en tiempo real — el cliente elige m² y ve coste inmediato sin sospechas",
      "Reservas online funcionan 24/7 — captura de leads incluso cuando duermes, sin depender del teléfono",
      "Planos interactivos y galería 360º de cada trastero para que vean iluminación, estado y acceso",
    ],
  },
  {
    slug: "alimentacion-especializada",
    name: "Carnicerías, Charcuterías, Fruterías, Pescaderías",
    heroContext:
      "Tu tienda de alimentación especializada con presencia online y servicio a domicilio. Compite con supermercados manteniendo tu diferencial de proximidad y calidad.",
    painPoints: [
      "Amazon Fresh y Carrefour online se llevan clientes porque tienen web pero tú eres invisible en Google",
      "Los vecinos no pueden preguntar por teléfono si tienes producto fresco hoy sin entrar a la tienda",
      "Sin fotos de calidad online no comunicas que tu jamón es diferente al del supermercado de esquina",
      "Si tienes repartidor de domicilio, el 80% de tu zona no sabe que existe — solo llama quien ya te conoce",
    ],
    features: [
      "Catálogo de productos actualizable diariamente con fotos que demuestran frescura y diferencial de calidad",
      "Sistema de reserva + WhatsApp para que el cliente pida hoy el producto que quiere recibir mañana",
      "Página de domicilios con zonas de cobertura, mínimo de compra y horarios de reparto visibles",
      "Sección de ofertas semanales y productos de temporada para comunicar rotación de stock en tiempo real",
    ],
  },
  {
    slug: "alojamientos-rurales",
    name: "Airbnb, Casas Rurales y Alojamientos Vacacionales",
    heroContext:
      "Vende tus noches directamente. Posiciónate en Google como alternativa a Airbnb y Booking sin pagar comisiones del 15-25% por cada reserva.",
    painPoints: [
      "Airbnb y Booking se quedan 15-25% de cada reserva — si tienes 20 reservas/mes, pierdes 3-5 por darles comisión",
      "El 90% de búsquedas de 'casa rural en [comarca]' no muestran tu web, solo plataformas que explotan tu contenido",
      "Tu galería en plataformas tiene 10-15 fotos planas — no comunican la magia de atardecer, piscina o vistas reales",
      "Clientes que podrían reservar directamente en enero se van a plataformas porque no te encuentran en Google",
    ],
    features: [
      "Galería 360º inmersiva con fotos de las 4 estaciones — comunica experiencia emocional, no solo datos",
      "Calendario automático sincronizado y reserva directa sin intermediarios — el 100% de cada reserva es tuyo",
      "Descripción SEO profesional: servicios, capacidad, ubicación exacta, atractivos cercanos y rutas de senderismo",
      "Sistema de reseñas y testimonios en tu web para generar confianza sin depender de ratings de plataformas externas",
      "Feed de Instagram con momentos del alojamiento: cada foto que subes a RRSS alimenta la galería de la web automáticamente",
    ],
  },
];

export function getNicheData(slug: string): NicheData | undefined {
  return nichesData.find((n) => n.slug === slug);
}
