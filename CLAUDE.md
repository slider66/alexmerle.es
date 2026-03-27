# alexmerle.es — Guía para Claude Code

## ⚠️ REGLA DE ORO: Todo cambio se despliega vía GitHub Actions + FTP a Hostinger

**CUALQUIER modificación que hagas debe ser compatible con el pipeline de deploy:**

```
código → git push main → GitHub Actions → pnpm build → out/ → FTP → Hostinger
```

Hostinger **solo sirve archivos estáticos**. No hay Node.js, no hay servidor. Si un cambio requiere servidor, **no es implementable en este proyecto tal y como está**.

Antes de tocar cualquier fichero, pregúntate: _¿esto funciona en un export estático de Next.js que se sube por FTP?_

---

## Hosting: Hostinger (FTP, archivos estáticos)

### Restricción crítica: `output: "export"` es obligatorio

`next.config.ts` **debe** tener siempre:

```ts
output: "export",
```

Sin esto, `next build` no genera la carpeta `./out/` y el workflow de GitHub Actions falla. Este fue el error del deploy de marzo 2025 — se eliminó al añadir rutas dinámicas.

### Lo que NO funciona en Hostinger (static export)

| Feature                                 | Estado | Por qué                                 |
| --------------------------------------- | ------ | --------------------------------------- |
| Server Actions (`"use server"`)         | ❌     | Requiere Node.js en servidor            |
| Route Handlers (`/api/...`)             | ❌     | Requiere Node.js en servidor            |
| SSR / `getServerSideProps`              | ❌     | Requiere Node.js en servidor            |
| `revalidate` / ISR                      | ❌     | Requiere Node.js en servidor            |
| Variables de entorno sin `NEXT_PUBLIC_` | ❌     | No llegan al cliente en export estático |
| Middleware de Next.js                   | ❌     | Requiere Edge Runtime / Node.js         |

### Lo que SÍ funciona

| Feature                                                      | Estado | Notas                                      |
| ------------------------------------------------------------ | ------ | ------------------------------------------ |
| Rutas dinámicas con `generateStaticParams()`                 | ✅     | Obligatorio en cada `[param]/page.tsx`     |
| Client components (`"use client"`) con fetch a APIs externas | ✅     | La API debe ser pública o con CORS abierto |
| Variables de entorno `NEXT_PUBLIC_*`                         | ✅     | Se embeben en el bundle en build time      |
| Imágenes con `unoptimized: true`                             | ✅     | Configurado en next.config.ts              |
| Framer Motion / animaciones client-side                      | ✅     | Sin restricciones                          |

---

## CSS y assets: regla del hash

Next.js genera CSS con hash en el nombre (`_next/static/chunks/abc123.css`). **Si modificas cualquier fichero que afecte al CSS**, el hash cambia y se genera un archivo nuevo.

**Problema conocido**: si el archivo CSS con el nuevo hash no se sube al servidor pero el HTML sí (que referencia el nuevo hash), la web queda sin estilos.

**Cómo evitarlo**: el workflow actual sube todo en un solo paso FTP. No dividir en múltiples pasos FTP — si un paso falla a medias y el estado `.ftp-deploy-sync-state.json` registra el archivo como subido sin haberlo subido realmente, el siguiente deploy no lo re-sube.

**Si la web se queda sin CSS**: no debería ocurrir con Hostinger CI/CD (siempre hace build completo). Si ocurre, forzar un redeploy desde el panel de Hostinger.

---

## Formulario de contacto: Web3Forms

El formulario usa **Web3Forms** (API pública, sin servidor). La clave se inyecta como variable de entorno pública:

- Variable: `NEXT_PUBLIC_WEB3FORMS_KEY`
- En local: añadir a `.env.local`
- En GitHub Actions: secret llamado `WEB3FORMS_KEY` (ver workflow)

Para cambiar el email destinatario, cambiarlo en el dashboard de Web3Forms, no en el código.

---

## Deploy

El deploy es via **GitHub Actions + FTP a Hostinger**. La autoimplementación de Hostinger debe estar **DESACTIVADA**.

### Flujo completo

```
git push main → GitHub Actions → pnpm build → ./out/ → FTP → public_html/ de Hostinger
```

### ⚠️ Hostinger CI/CD debe estar DESACTIVADO

> Panel de Hostinger → alexmerle.es → Deployments → "Ajustes y reimplementación" → desactiva "La autoimplementación"

Si Hostinger CI/CD está activo a la vez que GitHub Actions FTP, se pisan mutuamente y dejan la web sin CSS o con JS roto.

**Por qué no funciona el CI/CD de Hostinger**: su sistema para Next.js busca `.next/` (apps con servidor). Este proyecto usa `output: "export"` que genera `./out/` — falla con "No output directory found".

### Secrets necesarios en GitHub

| Secret          | Descripción                  |
| --------------- | ---------------------------- |
| `FTP_SERVER`    | Servidor FTP de Hostinger    |
| `FTP_USERNAME`  | Usuario FTP                  |
| `FTP_PASSWORD`  | Contraseña FTP               |
| `WEB3FORMS_KEY` | API key pública de Web3Forms |

### Si vuelve a aparecer el problema de CSS faltante

Incrementar la versión del `state-name` en `deploy.yml` (v2 → v3). Esto fuerza re-subida completa.

---

## Caché en navegador

`public/.htaccess` gestiona los headers de caché:

- HTML: `no-cache` (siempre pide versión fresca)
- JS/CSS (con hash): `immutable, 1 año`
- Imágenes/fuentes: `1 semana`

Esto evita que los usuarios vean páginas en blanco o versiones antiguas tras un deploy.

---

## Animaciones (Framer Motion)

El proyecto usa Framer Motion para animaciones en Hero, secciones y cards. Todas son client-side y compatibles con el export estático. **Al modificar componentes animados, verificar que las animaciones siguen funcionando** — especialmente las `whileInView` que se disparan al hacer scroll.
