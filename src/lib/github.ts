import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  commits_count: number;
  topics: string[];
  updated_at: string;
  previewImage?: string;
  hideLink?: boolean;
  highlight?: boolean;
  order?: number;
  type?: "web" | "tool";
}

const EXCLUDED_REPOS = new Set(["webpc.es"]);

const projectOverrides: Record<string, Partial<Repository> & { extraTopics?: string[] }> = {
  "fotografia-aerea-madrid": {
    id: 999997,
    description:
      "Web de servicios de drones certificados AESA en Madrid. Posicionada en búsquedas locales de fotografía aérea profesional HDR y 4K.",
    html_url: "https://fotografiaaereamadrid.vercel.app/",
    highlight: true,
    previewImage: "/previews/fotografia_aerea_madrid.webp",
    order: 0,
    extraTopics: ["Next.js", "Vercel", "Drones", "AESA Certified", "Photography"],
  },
  "merle.es": {
    id: 999998,
    description:
      "Suministros Merle — Ferralla elaborada y acero estructural en Madrid. Fabricación y suministro a obra: perfiles, tubos, chapas, armaduras y corte láser/plasma. Desde 1993. Posicionado orgánicamente en Madrid, Toledo y Guadalajara.",
    html_url: "https://merle.es",
    highlight: true,
    previewImage: "/previews/merle_es_v3.webp",
    order: 1,
    extraTopics: ["Next.js 15", "React 19", "Tailwind CSS 4", "SEO Strategy", "Industrial UI"],
  },
  "metal-line.es": {
    id: 999999,
    description:
      "Plataforma corporativa para Metal Line. Enfoque en ingeniería de precisión y transformación metálica.",
    html_url: "https://metal-line.es",
    highlight: true,
    previewImage: "/previews/metal_line_es_v2.webp",
    order: 2,
    extraTopics: ["WordPress", "Custom CSS", "Industrial Design", "SEO"],
  },
  ijornada: {
    description:
      "Plataforma SaaS de gestión de asistencia y cumplimiento normativo laboral con panel de control avanzado.",
    highlight: true,
    previewImage: "/previews/ijornada.webp",
    hideLink: true,
    order: 3,
    extraTopics: ["Next.js", "Prisma", "PostgreSQL", "SaaS", "Digital Risk"],
  },
  "Autodesk-Full-Cleaner": {
    html_url: "https://github.com/slider66/Autodesk-Full-Cleaner",
    description:
      "Desinstalador sistemático para productos Autodesk. Elimina programas, claves de registro residuales y licencias corruptas que bloquean reinstalaciones.",
    highlight: true,
    type: "tool",
    extraTopics: ["PowerShell", "Automation", "Windows Registry", "System Admin"],
  },
  OrdenaFotos: {
    html_url: "https://github.com/slider66/OrdenaFotos",
    description:
      "Organiza automáticamente colecciones de fotos caóticas en carpetas ordenadas por fecha, cámara o evento. Sin tocar los archivos originales.",
    highlight: true,
    type: "tool",
    extraTopics: ["Python", "EXIF", "Automation", "CLI"],
  },
  Riot_force_uninstall: {
    html_url: "https://github.com/slider66/Riot_force_uninstall",
    description:
      "Elimina completamente Riot Games, Valorant, League of Legends y el anticheat Vanguard (drivers a nivel de kernel) de Windows 10/11.",
    highlight: true,
    type: "tool",
    extraTopics: ["Batch", "PowerShell", "Windows", "Kernel", "Uninstaller"],
  },
  myCAD: {
    html_url: "https://github.com/slider66/myCAD",
    description:
      "Convierte fotos de piezas planas en archivos DXF listos para corte láser y CNC. Modo IA con Gemini Pro o modo rápido con OpenCV. Calibración de medidas real.",
    highlight: true,
    type: "tool",
    extraTopics: ["Python", "FastAPI", "React", "OpenCV", "Gemini AI", "DXF", "CNC"],
  },
  FECU: {
    html_url: "https://github.com/slider66/FECU",
    description:
      "App web para recopilación compartida de fotos en eventos. Subida con compresión cliente, galería con lazy-load y panel de admin protegido.",
    highlight: true,
    type: "tool",
    extraTopics: ["Next.js 15", "Prisma", "Supabase", "TypeScript", "Event App"],
  },
  "wp-underconstruction": {
    html_url: "https://github.com/slider66/wp-underconstruction",
    description:
      "Plugin WordPress que muestra una página de mantenimiento personalizable (HTML/CSS libre) mientras el admin trabaja. Envía 503 + Retry-After para no penalizar el SEO.",
    highlight: true,
    type: "tool",
    extraTopics: ["PHP", "WordPress", "SEO", "Plugin"],
  },
  menu_contextual_W11_to_W10: {
    html_url: "https://github.com/slider66/menu_contextual_W11_to_W10",
    description:
      "Restaura el menú contextual clásico de Windows 10 en Windows 11 con un clic. Modifica el registro y reinicia el Explorador al instante. Totalmente reversible.",
    highlight: true,
    type: "tool",
    extraTopics: ["Python", "Windows Registry", "Windows 11", "UX Fix"],
  },
  Full_clean_adesk: {
    html_url: "https://github.com/slider66/Full_clean_adesk",
    description:
      "Versión Python de la limpieza profunda para Autodesk. Borra archivos residuales, entradas de registro y datos de licencia que impiden reinstalar productos.",
    highlight: true,
    type: "tool",
    extraTopics: ["Python", "Automation", "Windows", "Autodesk"],
  },
  montes: {
    id: 999996,
    description:
      "Demo para Café & Tortilla Montes. Carta digital, sistema de encargos online y acceso directo a WhatsApp y ubicación.",
    html_url: "https://montes.vercel.app/",
    highlight: true,
    previewImage: "/previews/montes_v2.webp",
    order: 5,
    extraTopics: ["Next.js", "Tailwind CSS", "Vercel", "Demo", "Hospitality"],
  },
  "lolo-transportes": {
    id: 999995,
    description:
      "Plataforma de logística inteligente para transporte de carga. Comparación de precios en tiempo real con ahorro de hasta un 40% aprovechando rutas de retorno.",
    html_url: "https://lt-wheat.vercel.app/",
    highlight: true,
    previewImage: "/previews/lolo-transportes.webp",
    order: 6,
    extraTopics: ["Next.js", "Tailwind CSS", "Vercel", "Logistics", "Transport"],
  },
};

interface GraphQLRepo {
  name: string;
  description: string | null;
  url: string;
  stargazerCount: number;
  repositoryTopics: { nodes: Array<{ topic: { name: string } }> };
  pushedAt: string;
  defaultBranchRef: { target: { history: { totalCount: number } } } | null;
}

interface GraphQLResponse {
  user: { repositories: { nodes: GraphQLRepo[] } };
}

async function fetchViaGraphQL(username: string): Promise<Repository[]> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);

  try {
    const data = await octokit.graphql<GraphQLResponse>(
      `query {
        user(login: "${username}") {
          repositories(first: 30, orderBy: {field: PUSHED_AT, direction: DESC}, isFork: false) {
            nodes {
              name
              description
              url
              stargazerCount
              repositoryTopics(first: 10) {
                nodes { topic { name } }
              }
              pushedAt
              defaultBranchRef {
                target {
                  ... on Commit {
                    history { totalCount }
                  }
                }
              }
            }
          }
        }
      }`,
      { request: { signal: controller.signal } }
    );

    return data.user.repositories.nodes.map((repo) => ({
      id: Math.floor(Math.random() * 1000000),
      name: repo.name,
      description: repo.description,
      html_url: repo.url,
      stargazers_count: repo.stargazerCount,
      commits_count: repo.defaultBranchRef?.target?.history?.totalCount ?? 0,
      topics: repo.repositoryTopics.nodes.map((n) => n.topic.name),
      updated_at: repo.pushedAt,
    }));
  } finally {
    clearTimeout(timer);
  }
}

async function fetchViaREST(username: string): Promise<Repository[]> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await octokit.request("GET /users/{username}/repos", {
      username,
      sort: "pushed",
      per_page: 30,
      headers: { "X-GitHub-Api-Version": "2022-11-28" },
      request: { signal: controller.signal },
    });

    return response.data.map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description ?? null,
      html_url: repo.html_url,
      stargazers_count: repo.stargazers_count ?? 0,
      commits_count: 0,
      topics: repo.topics || [],
      updated_at: repo.updated_at ?? "",
    }));
  } finally {
    clearTimeout(timer);
  }
}

function buildFinalList(repos: Repository[]): Repository[] {
  const map = new Map<string, Repository>();

  repos.forEach((repo) => {
    if (!EXCLUDED_REPOS.has(repo.name)) map.set(repo.name, repo);
  });

  Object.entries(projectOverrides).forEach(([name, override]) => {
    const existing = map.get(name);
    map.set(name, {
      id: existing?.id ?? override.id ?? Math.floor(Math.random() * 100000),
      name,
      description: override.description ?? existing?.description ?? null,
      html_url: override.html_url ?? existing?.html_url ?? "#",
      stargazers_count: existing?.stargazers_count ?? 0,
      commits_count: existing?.commits_count ?? 0,
      topics: [...new Set([...(existing?.topics || []), ...(override.extraTopics || [])])],
      updated_at: existing?.updated_at ?? new Date().toISOString(),
      highlight: override.highlight ?? false,
      previewImage: override.previewImage,
      hideLink: override.hideLink,
      order: override.order ?? 99,
      type: override.type ?? "web",
    });
  });

  return Array.from(map.values()).sort(
    (a, b) => a.order! - b.order! || b.commits_count - a.commits_count
  );
}

export async function getRepositories(username: string = "slider66"): Promise<Repository[]> {
  // Sin token no hacemos llamadas a la API (evita esperas en local sin .env.local)
  if (!process.env.GITHUB_TOKEN) {
    console.warn("GITHUB_TOKEN not set — using manual project entries only.");
    return buildFinalList([]);
  }

  try {
    const repos = await fetchViaGraphQL(username);
    return buildFinalList(repos);
  } catch {
    try {
      const repos = await fetchViaREST(username);
      return buildFinalList(repos);
    } catch (error) {
      console.error("Error fetching GitHub repos:", error);
      return buildFinalList([]);
    }
  }
}
