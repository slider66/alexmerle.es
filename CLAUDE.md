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

El deploy es **exclusivamente via Hostinger CI/CD**. No hay FTP manual ni GitHub Actions que suban archivos.

### Flujo completo

```
git push main → Hostinger detecta el push → pnpm install && pnpm run build → sirve ./out/
```

### Configuración en Hostinger ("Ajustes y reimplementación")

| Campo                  | Valor                                              |
| ---------------------- | -------------------------------------------------- |
| Preajuste del marco    | Next.js                                            |
| Rama                   | main                                               |
| Versión del nodo       | 22.x                                               |
| Directorio raíz        | ./                                                 |
| Comando de compilación | `pnpm install --frozen-lockfile && pnpm run build` |
| Directorio de salida   | `out`                                              |

Variables de entorno necesarias en Hostinger:

| Variable                    | Descripción                                                 |
| --------------------------- | ----------------------------------------------------------- |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | API key pública de Web3Forms                                |
| `GITHUB_TOKEN`              | Token de GitHub (opcional, para cargar portfolio desde API) |

### GitHub Actions (`deploy.yml`)

El workflow de GitHub Actions **no hace deploy** — solo actúa como CI: lint + typecheck + build check. Sirve para detectar errores antes de que lleguen a producción. El deploy real lo hace Hostinger.

### ⚠️ No reactivar FTP

No volver a añadir pasos FTP al workflow de GitHub Actions. Tener dos mecanismos de deploy activos (FTP + Hostinger CI/CD) causa conflictos: uno puede sobrescribir al otro y dejar la web sin CSS o con JS roto.

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
