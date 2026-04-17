# webpc.es

Portfolio y web de servicios de **Alejandro Merle**, consultor IT independiente en el norte de Madrid. Webs profesionales, SEO local y sistemas de encargos online para negocios locales.

🌐 [webpc.es](https://webpc.es)

---

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** — animaciones
- **Octokit** — integración con GitHub API (portfolio dinámico)
- **Vercel** — hosting y despliegue continuo

---

## Estructura

```
src/
├── app/
│   ├── layout.tsx        # Metadata, JSON-LD, Google Analytics
│   ├── page.tsx          # Home: hero, servicios, precios, portfolio, FAQ, contacto
│   ├── icon.svg          # Favicon AM + punto azul
│   └── ...
├── components/
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── PortfolioGrid.tsx  # Separa webs y herramientas
│   ├── PortfolioCards.tsx # Cards de proyectos web
│   ├── ToolCards.tsx      # Cards de herramientas/utilidades
│   ├── ContactForm.tsx
│   ├── FAQ.tsx
│   └── ui/
│       ├── BlurReveal.tsx
│       └── SplitText.tsx
└── lib/
    └── github.ts          # Fetch de repos + projectOverrides + buildFinalList
```

---

## Portfolio

El portfolio se construye dinámicamente desde la **GitHub API** (`slider66`) combinado con `projectOverrides` en `src/lib/github.ts`.

Cada proyecto puede tener:

- `type: 'web'` → sección _Trabajos recientes_
- `type: 'tool'` → sección _Herramientas_

Las webs se ordenan por `order` manual. Las herramientas por `updated_at` descendente (más reciente primero).

### Proyectos web destacados

| Proyecto                 | URL                              |
| ------------------------ | -------------------------------- |
| Fotografía Aérea Madrid  | fotografiaaereamadrid.vercel.app |
| Hierros Merle            | merle.es                         |
| Metal Line               | metal-line.es                    |
| iJornada (SaaS, privado) | —                                |
| Café & Tortilla Montes   | montes.vercel.app                |
| Lolo Transportes         | lt-wheat.vercel.app              |

### Herramientas open source

`Autodesk-Full-Cleaner` · `OrdenaFotos` · `Riot_force_uninstall` · `myCAD` · `FECU` · `wp-underconstruction` · `menu_contextual_W11_to_W10` · `Full_clean_adesk`

---

## Variables de entorno

Copia `.env.example` como `.env.local` y rellena los valores. Consulta el archivo para ver qué permisos mínimos necesita cada token.

Sin `GITHUB_TOKEN` el portfolio funciona igualmente con los proyectos definidos en `projectOverrides`.

---

## Desarrollo local

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

> Las imágenes se sirven sin optimización en desarrollo (`unoptimized: true`) para que los cambios se vean al instante sin caché.

---

## Despliegue

El proyecto se despliega automáticamente en **Vercel** al hacer push a `main`.

Para forzar la actualización de imágenes cacheadas en producción, renombra el archivo (ej. `imagen_v2.png`) y actualiza la ruta en `github.ts`.
