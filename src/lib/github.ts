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
}

const projectOverrides: Record<string, Partial<Repository> & { extraTopics?: string[] }> = {
  'fotografia-aerea-madrid': {
    id: 999997,
    description: 'Web de servicios de drones certificados AESA en Madrid. Posicionada en búsquedas locales de fotografía aérea profesional HDR y 4K.',
    html_url: 'https://fotografiaaereamadrid.vercel.app/',
    highlight: true,
    previewImage: '/previews/fotografia_aerea_madrid.png',
    order: 0,
    extraTopics: ['Next.js', 'Vercel', 'Drones', 'AESA Certified', 'Photography']
  },
  'merle.es': {
    id: 999998,
    description: 'Web corporativa de Hierros Merle. Optimizada para conversión y SEO local. Referente del sector en su zona con presencia orgánica en Google.',
    html_url: 'https://merle.es',
    highlight: true,
    previewImage: '/previews/merle_es.png',
    order: 1,
    extraTopics: ['Next.js 15', 'React 19', 'Tailwind CSS 4', 'SEO Strategy', 'Industrial UI']
  },
  'metal-line.es': {
    id: 999999,
    description: 'Plataforma corporativa para Metal Line. Enfoque en ingeniería de precisión y transformación metálica.',
    html_url: 'https://metal-line.es',
    highlight: true,
    previewImage: '/previews/metal_line_es.png',
    order: 2,
    extraTopics: ['WordPress', 'Custom CSS', 'Industrial Design', 'SEO']
  },
  'ijornada': {
    description: 'Plataforma SaaS de gestión de asistencia y cumplimiento normativo laboral con panel de control avanzado.',
    highlight: true,
    previewImage: '/previews/ijornada.png',
    hideLink: true,
    order: 3,
    extraTopics: ['Next.js', 'Prisma', 'PostgreSQL', 'SaaS', 'Digital Risk']
  },
  'Autodesk-Full-Cleaner': {
    description: 'Utilidad de limpieza profunda para software Autodesk, automatizando la eliminación de claves de registro y residuos.',
    highlight: true,
    order: 4,
    extraTopics: ['PowerShell', 'Automation', 'Windows API', 'System Admin']
  },
  'montes-cafeteria': {
    id: 999996,
    description: 'Demo para Café & Tortilla Montes. Carta digital, sistema de encargos online y acceso directo a WhatsApp y ubicación.',
    html_url: 'https://montes.vercel.app/',
    highlight: true,
    previewImage: '/previews/montes.png',
    order: 5,
    extraTopics: ['Next.js', 'Tailwind CSS', 'Vercel', 'Demo', 'Hospitality']
  }
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
    const response = await octokit.request('GET /users/{username}/repos', {
      username,
      sort: 'pushed',
      per_page: 30,
      headers: { 'X-GitHub-Api-Version': '2022-11-28' },
      request: { signal: controller.signal },
    });

    return response.data.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      stargazers_count: repo.stargazers_count,
      commits_count: new Date(repo.pushed_at).getTime(),
      topics: repo.topics || [],
      updated_at: repo.updated_at,
    }));
  } finally {
    clearTimeout(timer);
  }
}

function buildFinalList(repos: Repository[]): Repository[] {
  const map = new Map<string, Repository>();

  repos.forEach(repo => map.set(repo.name, repo));

  Object.entries(projectOverrides).forEach(([name, override]) => {
    const existing = map.get(name);
    map.set(name, {
      id: existing?.id ?? override.id ?? Math.floor(Math.random() * 100000),
      name,
      description: override.description ?? existing?.description ?? null,
      html_url: override.html_url ?? existing?.html_url ?? '#',
      stargazers_count: existing?.stargazers_count ?? 0,
      commits_count: existing?.commits_count ?? 0,
      topics: [...new Set([...(existing?.topics || []), ...(override.extraTopics || [])])],
      updated_at: existing?.updated_at ?? new Date().toISOString(),
      highlight: override.highlight ?? false,
      previewImage: override.previewImage,
      hideLink: override.hideLink,
      order: override.order ?? 99,
    });
  });

  return Array.from(map.values())
    .sort((a, b) => (a.order! - b.order!) || (b.commits_count - a.commits_count));
}

export async function getRepositories(username: string = 'slider66'): Promise<Repository[]> {
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
