export interface GeoMunicipality {
  slug: string;
  name: string;
  heroContext: string;
  faqExtras?: { q: string; a: string }[];
}

export const geoMunicipalities: GeoMunicipality[] = [
  {
    slug: "san-agustin-de-guadalix",
    name: "San Agustín de Guadalix",
    heroContext:
      "Diseño web y SEO local para pymes e industrias de San Agustín. Destaca en Google Maps frente a la competencia del polígono y el núcleo urbano.",
  },
  {
    slug: "alcobendas",
    name: "Alcobendas",
    heroContext:
      "Páginas web profesionales para negocios en Alcobendas. Atrae más clientes de La Moraleja, Valdelasfuentes y el centro con SEO local.",
  },
  {
    slug: "san-sebastian-de-los-reyes",
    name: "San Sebastián de los Reyes",
    heroContext:
      "Sistemas de encargos, webs corporativas y presencia digital para comercios de Sanse. Haz que te encuentren los vecinos de tu zona.",
  },
  {
    slug: "las-tablas",
    name: "Las Tablas",
    heroContext:
      "Webs modernas y automatización para negocios locales en Las Tablas. Capta clientes de un barrio joven y digital con una imagen profesional.",
  },
  {
    slug: "paracuellos-de-jarama",
    name: "Paracuellos de Jarama",
    heroContext:
      "Agencia web local cerca de Paracuellos de Jarama. Ayudo a tu negocio a ser la primera opción en Google para los vecinos de Paracuellos y Miramadrid.",
  },
  {
    slug: "algete",
    name: "Algete",
    heroContext:
      "Consultoría web especializada en posicionar negocios locales de Algete. Haz que tu comercio o empresa llegue a más clientes del municipio.",
  },
  {
    slug: "cobena",
    name: "Cobeña",
    heroContext:
      "Páginas web profesionales y fáciles de usar para negocios en Cobeña. Convierte más visitas en web en clientes sin complicaciones técnicas.",
  },
  {
    slug: "daganzo-de-arriba",
    name: "Daganzo de Arriba",
    heroContext:
      "Diseño web moderno y efectivo para impulsar el comercio local y los servicios en Daganzo de Arriba con estrategias de visibilidad en Google.",
  },
  {
    slug: "talamanca-de-jarama",
    name: "Talamanca de Jarama",
    heroContext:
      "Webs corporativas y sistemas de contactos para negocios en Talamanca de Jarama. Una presencia digital fuerte que inspira confianza local.",
  },
  {
    slug: "fuente-el-saz-de-jarama",
    name: "Fuente el Saz de Jarama",
    heroContext:
      "Transformación digital y diseño de páginas web orientadas a resultados para las pymes de Fuente el Saz de Jarama y alrededores.",
  },
  {
    slug: "el-molar",
    name: "El Molar",
    heroContext:
      "Servicio de diseño web y SEO local para empresarios de El Molar. Destaca en los buscadores y atrae a los vecinos de la zona norte.",
  },
  {
    slug: "colmenar-viejo",
    name: "Colmenar Viejo",
    heroContext:
      "Diseño web y SEO para negocios en Colmenar Viejo. Mejora tu visibilidad en la Sierra Norte y atrae a más clientes locales con una web profesional.",
  },
  {
    slug: "tres-cantos",
    name: "Tres Cantos",
    heroContext:
      "Sistemas de reserva y páginas web para empresas en Tres Cantos. Posiciona tu negocio en el motor tecnológico del norte de Madrid.",
  },
  {
    slug: "guadalix-de-la- sierra",
    name: "Guadalix de la Sierra",
    heroContext:
      "Presencia digital y SEO local en Guadalix de la Sierra. Soluciones web a medida para pequeños negocios y servicios de la zona.",
  },
  {
    slug: "soto-del-real",
    name: "Soto del Real",
    heroContext:
      "Webs modernas para comercios de Soto del Real. Destaca en Google y facilita que los vecinos encuentren tus servicios fácilmente.",
  },
  {
    slug: "pedrezuela",
    name: "Pedrezuela",
    heroContext:
      "Impulsa tu negocio en Pedrezuela con una web optimizada. SEO local para hostelería y servicios en la entrada de la Sierra Norte.",
  },
];

export function getGeoMunicipality(slug: string): GeoMunicipality | undefined {
  return geoMunicipalities.find((m) => m.slug === slug);
}
