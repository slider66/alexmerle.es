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
            'alexmerle.es': {
                description: 'Portfolio personal, objetivo enseñar proyectos realizados por Alejandro Merle y conseguir contactos con personas y empresas interesadas en contratar servicios digitales. Desarrollado con PHP, Vanilla JS y Glassmorphism UI.',
                highlight: true
            },
            'merle.es': {
                description: 'Plataforma web de Suministros Merle, S.L. Empresa dedicada a la ferralla desde 1993. Desarrollado con WordPress.',
                highlight: true
            },
            'metal-line.es': {
                description: 'Proyecto web para la marca Metal Line, propiedad de Suministos Merle, S.L, para la venta de productos metálicos creados con corte laser y soldadura. Desarrollado con WordPress y WooCommerce.',
                highlight: true
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
