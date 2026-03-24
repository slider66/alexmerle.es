export interface NicheData {
  slug: string;
  name: string;
  heroContext: string;
  benefits?: string[];
}

export const nichesData: NicheData[] = [
  {
    slug: "cafeterias",
    name: "Cafeterías",
    heroContext: "Atrae a más clientes a tu cafetería. Destaca tus desayunos, especialidades y ubicación en Google para que te encuentren fácilmente.",
  },
  {
    slug: "restaurantes",
    name: "Restaurantes",
    heroContext: "Sistemas de reservas sin comisiones y cartas digitales para tu restaurante. Mejora tu visibilidad online y llena tus mesas.",
  },
  {
    slug: "peluquerias",
    name: "Peluquerías y Centros de Estética",
    heroContext: "Digitaliza tu salón de belleza. Muestra tus servicios, recibe citas anticipadas y haz que los vecinos de la zona te elijan a ti.",
  },
  {
    slug: "talleres",
    name: "Talleres Mecánicos",
    heroContext: "Que los conductores de tu zona te encuentren cuando te necesiten. Páginas web que inspiran confianza y destacan tus servicios de motor.",
  },
  {
    slug: "clinicas",
    name: "Clínicas y Consultas",
    heroContext: "Transmite profesionalidad y cercanía. Diseñamos webs claras y ordenadas para clínicas dentales, fisioterapia o psicología.",
  },
  {
    slug: "gimnasios",
    name: "Gimnasios y Centros Deportivos",
    heroContext: "Aumenta tus socios con una web que motive. Facilita los horarios, tarifas e instalaciones a los deportistas de tu barrio.",
  },
  {
    slug: "artesanos",
    name: "Pequeños Artesanos",
    heroContext: "Dale valor a tus creaciones manuales. Un escaparate digital profesional para mostrar tu trabajo artesanal y recibir encargos directos.",
  },
  {
    slug: "tiendas",
    name: "Tiendas Tradicionales",
    heroContext: "No dejes que las grandes superficies se lleven a tu clientela. Moderniza la presencia de tu comercio local en internet sin perder tu esencia.",
  },
  {
    slug: "inmobiliarias",
    name: "Inmobiliarias",
    heroContext: "Muestra tus propiedades con elegancia. Páginas web para agencias inmobiliarias que generan confianza y captan más clientes compradores y vendedores.",
  },
  {
    slug: "reformas",
    name: "Empresas de Reformas",
    heroContext: "Que tus obras hablen por ti. Posiciona tu empresa de albañilería o reformas integrales en Google y consigue solicitudes de presupuesto cualificadas.",
  },
  {
    slug: "abogados",
    name: "Abogados y Asesorías",
    heroContext: "Transmite prestigio y profesionalidad online. Mejora la captación de tu despacho o asesoría con un diseño claro que facilite el primer contacto.",
  },
  {
    slug: "academias",
    name: "Academias y Autoescuelas",
    heroContext: "Llena tus aulas. Haz que los vecinos de tu zona encuentren rápidamente tu centro de estudios, horarios, cursos ofertados y tarifas.",
  },
  {
    slug: "concesionarios",
    name: "Concesionarios y Compra-Venta",
    heroContext: "Muestra tu stock de vehículos 24/7. Páginas web rápidas y visuales para concesionarios que quieren generar más contactos locales y visitas a la exposición.",
  },
  {
    slug: "chapa-y-pintura",
    name: "Talleres de Chapa y Pintura",
    heroContext: "Atrae a los conductores que necesitan reparar su coche o dar un parte al seguro. Destaca por tu profesionalidad en Google con una web moderna.",
  },
  {
    slug: "reparaciones-domicilio",
    name: "Servicios a Domicilio y Urgencias",
    heroContext: "Fontaneros, electricistas, cerrajeros y técnicos. Cuando hay una urgencia, la gente busca en Google. Sé la primera opción en tu zona.",
  }
];

export function getNicheData(slug: string): NicheData | undefined {
  return nichesData.find((n) => n.slug === slug);
}
