import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN, // Optional: for higher rate limits
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

const projectOverrides: Record<string, { description: string; highlight: boolean; previewImage?: string; hideLink?: boolean; order?: number; extraTopics?: string[] }> = {
  'merle.es': {
    description: 'Sitio web corporativo de Hierros Merle. Mi proyecto más ambicioso hasta la fecha, optimizado para conversión y SEO.',
    highlight: true,
    previewImage: '/previews/merle_es.png',
    order: 1,
    extraTopics: ['Next.js 15', 'React 19', 'Tailwind CSS 4', 'SEO Strategy', 'Industrial UI']
  },
  'metal-line.es': {
    description: 'Plataforma corporativa para Metal Line. Enfoque en ingeniería de precisión y transformación metálica.',
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
  try {
    const response = await octokit.request('GET /users/{username}/repos', {
      username,
      sort: 'updated',
      per_page: 20,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });

    const repos: Repository[] = (response.data as Array<{
      id: number;
      name: string;
      description: string | null;
      html_url: string;
      stargazers_count: number;
      topics?: string[];
      updated_at: string;
    }>).map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      stargazers_count: repo.stargazers_count,
      topics: repo.topics || [],
      updated_at: repo.updated_at
    }));

    // Inject metal-line.es if not found in GitHub
    if (!repos.find(r => r.name === 'metal-line.es')) {
      repos.push({
        id: 999999,
        name: 'metal-line.es',
        description: null,
        html_url: 'https://metal-line.es',
        stargazers_count: 0,
        topics: ['web', 'nextjs', 'industrial'],
        updated_at: new Date().toISOString()
      });
    }

    // Inject merle.es if not found in GitHub
    if (!repos.find(r => r.name === 'merle.es')) {
      repos.push({
        id: 999998,
        name: 'merle.es',
        description: null,
        html_url: 'https://merle.es',
        stargazers_count: 0,
        topics: ['nextjs', 'react', 'tailwind', 'industrial'],
        updated_at: new Date().toISOString()
      });
    }

    // Apply overrides and sorting
    return repos.map(repo => {
      const override = projectOverrides[repo.name];
      if (override) {
        return {
          ...repo,
          description: override.description,
          highlight: override.highlight,
          previewImage: override.previewImage,
          hideLink: override.hideLink,
          order: override.order || 99,
          topics: [...new Set([...repo.topics, ...(override.extraTopics || [])])]
        };
      }
      return { ...repo, highlight: false, order: 99 };
    }).sort((a: Repository, b: Repository) => {
      return ((a.order || 99) - (b.order || 99)) || (b.stargazers_count - a.stargazers_count);
    });

  } catch (error) {
    console.error("Error fetching repositories:", error);
    return [];
  }
}
