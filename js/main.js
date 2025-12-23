document.addEventListener('DOMContentLoaded', () => {
    console.log('Alex Merle Portfolio Loaded');
    loadProjects();
});

async function loadProjects() {
    const grid = document.getElementById('project-grid');
    if (!grid) return;

    try {
        const response = await fetch('includes/github-api.php');
        if (!response.ok) throw new Error('API Error');

        const repos = await response.json();

        if (repos.error) {
            grid.innerHTML = '<p class="error">No se pudieron cargar los proyectos.</p>';
            return;
        }

        // Custom overrides for specific projects
        const projectOverrides = {
            'Autodesk-Full-Cleaner': {
                description: 'Script automatizado en PowerShell para limpieza profunda de software Autodesk en Windows. Elimina claves de registro y residuos persistentes para permitir reinstalaciones limpias.',
                highlight: true
            },
            'ijornada': {
                description: 'Gestión de asistencia moderna con Next.js y Prisma. Panel de administración y modo Kiosk para cumplimiento normativo laboral con experiencia de usuario optimizada.',
                highlight: true
            },
            'SM': {
                description: 'Sitio web corporativo de Suministros Merle (merle.es). Desarrollado con Next.js 15, React 19 y Tailwind CSS 4 para máximo rendimiento y SEO.',
                highlight: true
            },
            'Riot_force_uninstall': {
                description: 'Herramienta avanzada para la eliminación total de juegos de Riot (Valorant, LoL). Limpia drivers de kernel y entradas ocultas del registro.',
                highlight: false
            },
            'menu_contextual_W11_to_W10': {
                description: 'Utilidad en Python para restaurar el menú contextual clásico en Windows 11, eliminando pasos extra y mejorando la productividad.',
                highlight: false
            },
            'Full_clean_adesk': {
                description: 'Alternativa en Python para la limpieza técnica de residuos de Autodesk tras desinstalaciones fallidas.',
                highlight: false
            }
        };

        grid.innerHTML = '';

        // Sort: Highlights first, then by stars
        repos.sort((a, b) => {
            const aActive = projectOverrides[a.name] ? 1 : 0;
            const bActive = projectOverrides[b.name] ? 1 : 0;
            return bActive - aActive || b.stargazers_count - a.stargazers_count;
        });

        repos.forEach(repo => {
            const overrides = projectOverrides[repo.name] || {};
            const description = overrides.description || repo.description || 'Sin descripción disponible.';
            const isHighlight = overrides.highlight ? 'highlight-card' : '';

            const card = document.createElement('div');
            card.className = `project-card ${isHighlight}`;

            card.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${description}</p>
                <div class="card-footer">
                    <span class="stars">★ ${repo.stargazers_count}</span>
                    <a href="${repo.html_url}" target="_blank" class="btn-small">Ver en GitHub</a>
                </div>
            `;
            grid.appendChild(card);
        });

    } catch (error) {
        console.error('Error loading projects:', error);
        grid.innerHTML = '<p class="error">Error al conectar con GitHub.</p>';
    }
}
