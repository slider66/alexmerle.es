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

        grid.innerHTML = '';

        repos.forEach(repo => {
            const card = document.createElement('div');
            card.className = 'project-card';

            card.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || 'Sin descripción disponible.'}</p>
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
