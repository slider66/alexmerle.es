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
  }
];

export function getNicheData(slug: string): NicheData | undefined {
  return nichesData.find((n) => n.slug === slug);
}
