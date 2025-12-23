<!-- Clean Sync Attempt: 2025-12-23 21:08 -->
<!DOCTYPE html>

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
                <h1>Especialista en <span class="gradient-text">Digital Risk Protection</span> y Soluciones Digitales.</h1>
                <p>Ayudo a empresas a mitigar riesgos tecnológicos y a transformar ideas complejas en realidades digitales seguras y eficientes.</p>
                <div class="cta-group">
                    <a href="#portfolio" class="btn-primary">Ver mi trabajo</a>
                    <a href="#contacto" class="btn-secondary">Contactar ahora</a>
                </div>
            </div>
        </section>

        <section id="sobre-mi" class="about-me">
            <div class="container">
                <div class="about-content">
                    <div class="about-text">
                        <h2>Sobre <span class="gradient-text">Mí</span></h2>
                        <p>Soy <strong>Alejandro Merle</strong>, profesional especializado en <strong>Digital Risk Protection</strong> con trayectoria en ciberseguridad y análisis de riesgos tecnológicos.</p>
                        <p>Mi formación y experiencia en entornos como Telefónica me permiten combinar una sólida base técnica en seguridad con una visión estratégica de consultoría IT.</p>
                        <p>Acompaño a empresas en la automatización de procesos y el escalado de su presencia digital, siempre priorizando la integridad y la eficiencia de sus infraestructuras.</p>
                        <a href="https://es.linkedin.com/in/alejandromerle" target="_blank" class="btn-linkedin">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="currentColor">
                                <path
                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                            Conectar en LinkedIn
                        </a>
                    </div>
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
        <section id="contacto" class="contact">
            <div class="container">
                <h2>¿Tienes un <span class="gradient-text">Proyecto</span> en mente?</h2>
                <p class="subtitle">Hablemos sobre cómo puedo ayudarte a alcanzar tus objetivos.</p>
                <div class="contact-container">
                    <div class="contact-info">
                        <div class="info-item">
                            <div class="icon">✉️</div>
                            <div>
                                <h4>Email</h4>
                                <p><a href="mailto:hola@alexmerle.es">hola@alexmerle.es</a></p>
                            </div>
                        </div>
                        <div class="info-item">
                            <div class="icon">📱</div>
                            <div>
                                <h4>LinkedIn</h4>
                                <p><a href="https://es.linkedin.com/in/alejandromerle"
                                        target="_blank">linkedin.com/in/alejandromerle</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="logo">AM<span>.</span></div>
                <p>&copy; 2024 Alex Merle. Todos los derechos reservados.</p>
                <div class="footer-links">
                    <a href="#portfolio">Proyectos</a>
                    <a href="#sobre-mi">Sobre Mí</a>
                    <a href="#contacto">Contacto</a>
                </div>
            </div>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>

</html>