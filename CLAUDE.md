# alexmerle.es — Guía para Claude Code

## Hosting: Hostinger (FTP, archivos estáticos)

Este proyecto se despliega en **Hostinger** mediante FTP. Hostinger **no ejecuta Node.js**, solo sirve archivos estáticos.

### Restricción crítica: `output: "export"` es obligatorio

`next.config.ts` **debe** tener siempre:

```ts
output: "export",
```

Sin esto, `next build` no genera la carpeta `./out/` y el workflow de GitHub Actions falla (o sube nada). Este fue el error del deploy de marzo 2025 — se eliminó al añadir rutas dinámicas y Resend.

### Lo que NO funciona en Hostinger (static export)

| Feature | Estado |
|---|---|
| Server Actions (`"use server"`) | ❌ No permitido |
| Route Handlers (`/api/...`) | ❌ No permitido |
| SSR / `getServerSideProps` | ❌ No permitido |
| `revalidate` / ISR | ❌ No permitido |
| Variables de entorno sin `NEXT_PUBLIC_` | ❌ No llegan al cliente |

### Lo que SÍ funciona

| Feature | Estado |
|---|---|
| Rutas dinámicas con `generateStaticParams()` | ✅ Obligatorio en cada `[param]/page.tsx` |
| Client components (`"use client"`) con fetch a APIs externas | ✅ |
| Variables de entorno `NEXT_PUBLIC_*` | ✅ |
| Imágenes con `unoptimized: true` | ✅ |

## Formulario de contacto: Web3Forms

El formulario usa **Web3Forms** (API pública, sin servidor). La clave se inyecta como variable de entorno pública:

- Variable: `NEXT_PUBLIC_WEB3FORMS_KEY`
- En local: añadir a `.env.local`
- En GitHub Actions: secret llamado `WEB3FORMS_KEY` (ver workflow)

Para cambiar el email destinatario, cambiarlo en el dashboard de Web3Forms, no en el código.

## Deploy

El deploy es automático al hacer push a `main` via `.github/workflows/deploy.yml`:

1. Instala dependencias (`pnpm install`)
2. Hace build (`pnpm build`) — genera `./out/`
3. **Verifica que `./out/` existe** (guardrail — falla el deploy si falta)
4. Sube por FTP a Hostinger con limpieza total (`dangerous-clean-slate: true`)

### Secrets necesarios en GitHub

| Secret | Descripción |
|---|---|
| `FTP_SERVER` | Servidor FTP de Hostinger |
| `FTP_USERNAME` | Usuario FTP |
| `FTP_PASSWORD` | Contraseña FTP |
| `WEB3FORMS_KEY` | API key pública de Web3Forms |

## Caché en navegador

`public/.htaccess` gestiona los headers de caché:
- HTML: `no-cache` (siempre pide versión fresca)
- JS/CSS (con hash): `immutable, 1 año`
- Imágenes/fuentes: `1 semana`

Esto evita que los usuarios vean páginas en blanco o versiones antiguas tras un deploy.
