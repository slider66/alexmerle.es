<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alex Merle | Desarrollador & Consultor Tecnológico</title>
    <link rel="stylesheet" href="css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;800&display=swap" rel="stylesheet">
</head>

<body>
    <header>
        <nav>
            <div class="logo">AM<span>.</span></div>
            <div class="links">
                <a href="#portfolio">Proyectos</a>
                <a href="#contacto" class="btn-small">Hablemos</a>
            </div>
        </nav>
    </header>

    <main>
        <section class="hero">
            <div class="hero-content">
                <h1>Transformo ideas en <span class="gradient-text">soluciones digitales</span> de alto impacto.</h1>
                <p>Especialista en desarrollo web y automatización. Ayudo a marcas y empresas a escalar su presencia
                    online.</p>
                <div class="cta-group">
                    <a href="#portfolio" class="btn-primary">Ver mi trabajo</a>
                    <a href="#contacto" class="btn-secondary">Contactar ahora</a>
                </div>
            </div>
        </section>

        <section id="portfolio" class="portfolio">
            <div class="container">
                <h2>Mis Proyectos <span class="gradient-text">Destacados</span></h2>
                <p class="subtitle">Explorando código y creando soluciones.</p>
                <div class="project-grid" id="project-grid">
                    <!-- Projects will be loaded here via JS -->
                    <div class="loading">Cargando proyectos desde GitHub...</div>
                </div>
            </div>
        </section>
    </main>

    <script src="js/main.js"></script>
</body>

</html>