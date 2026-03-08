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
  topics: string[];
  updated_at: string;
  previewImage?: string;
  hideLink?: boolean;
  highlight?: boolean;
  order?: number;
}

// Configuración de proyectos manuales o con overrides
const projectOverrides: Record<string, Partial<Repository> & { extraTopics?: string[] }> = {
  'fotografia-aerea-madrid': {
    id: 999997,
    description: 'Servicios de drones certificados AESA en Madrid. Especializado en fotografía y videografía aérea profesional HDR y 4K vertical.',
    html_url: 'https://fotografiaaereamadrid.vercel.app/',
    highlight: true,
    previewImage: '/previews/fotografia_aerea_madrid.png',
    order: 0,
    extraTopics: ['Next.js', 'Vercel', 'Drones', 'AESA Certified', 'Photography']
  },
  'merle.es': {
    id: 999998,
    description: 'Sitio web corporativo de Hierros Merle. Mi proyecto más ambicioso hasta la fecha, optimizado para conversión y SEO.',
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
  }
};

export async function getRepositories(username: string = 'slider66'): Promise<Repository[]> {
  let repos: Repository[] = [];

  try {
    const response = await octokit.request('GET /users/{username}/repos', {
      username,
      sort: 'updated',
      per_page: 30, // Aumentado ligeramente para dar margen al filtrado
      headers: { 'X-GitHub-Api-Version': '2022-11-28' }
    });

    repos = response.data.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      stargazers_count: repo.stargazers_count,
      topics: repo.topics || [],
      updated_at: repo.updated_at
    }));
  } catch (error) {
    console.error("Error fetching GitHub repos, proceeding with manual entries:", error);
    // No retornamos [] aquí para permitir que los overrides manuales se muestren
  }

  // Mezclar datos de GitHub con Overrides y Proyectos Manuales
  const finalReposMap = new Map<string, Repository>();

  // Primero añadimos lo que vino de GitHub
  repos.forEach(repo => finalReposMap.set(repo.name, repo));

  // Luego aplicamos overrides e insertamos los que falten
  Object.entries(projectOverrides).forEach(([name, override]) => {
    const existing = finalReposMap.get(name);
    
    finalReposMap.set(name, {
      id: existing?.id ?? override.id ?? Math.floor(Math.random() * 100000),
      name: name,
      description: override.description ?? existing?.description ?? null,
      html_url: override.html_url ?? existing?.html_url ?? '#',
      stargazers_count: existing?.stargazers_count ?? 0,
      topics: [...new Set([...(existing?.topics || []), ...(override.extraTopics || [])])],
      updated_at: existing?.updated_at ?? new Date().toISOString(),
      highlight: override.highlight ?? false,
      previewImage: override.previewImage,
      hideLink: override.hideLink,
      order: override.order ?? 99
    });
  });

  return Array.from(finalReposMap.values())
    .sort((a, b) => (a.order! - b.order!) || (b.stargazers_count - a.stargazers_count));
}