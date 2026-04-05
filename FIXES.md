# FIXES — alexmerle.es

> Generado: 2026-04-05
> Scope: issues técnicos accionables detectados en auditoría de código

---

## CRÍTICO

### FIX-01 — favicon.ico pesa 314KB (debería ser <20KB)

**Problema:** `public/favicon.ico` es un PNG 640×640 renombrado como `.ico`. Los navegadores descargan el favicon en cada visita — 314KB es 15× más de lo necesario.

**Cómo arreglarlo:**
1. Ir a [favicon.io/favicon-converter](https://favicon.io/favicon-converter) y subir `alex.webp` o el logo SVG
2. Descargar el `.ico` generado (multi-tamaño: 16×16, 32×32, 48×48)
3. Reemplazar `public/favicon.ico`

**Resultado esperado:** <20KB, sin cambios en código.

---

### ~~FIX-02~~ ✅ — Portfolio: 2 imágenes servidas como PNG en lugar de WebP

**Problema:** `src/lib/github.ts` referencia `.png` para dos proyectos cuando ya existen los `.webp` equivalentes:

```
/previews/montes_v2.png     → 7.4MB  (existe montes_v2.webp  = 33KB  ✅)
/previews/lolo-transportes.png → 121KB  (existe lolo-transportes.webp = 19KB ✅)
```

**Archivo:** [src/lib/github.ts](src/lib/github.ts), líneas 135 y 145.

**Fix:**
```ts
// línea 135
previewImage: "/previews/montes_v2.webp",

// línea 145
previewImage: "/previews/lolo-transportes.webp",
```

---

### FIX-03 — PNGs originales sin usar en `public/previews/` (34MB en servidor)

**Problema:** Tras generar los `.webp`, los archivos `.png` originales de alta resolución no se eliminaron. Ocupan 23MB en el repo y se suben íntegramente por FTP en cada deploy.

**Archivos huérfanos (ninguno se usa en código):**
| Archivo | Tamaño |
|---|---|
| `merle_es.png` | 5.1MB |
| `merle_es_v2.png` | 5.1MB |
| `metal_line_es.png` | 3.0MB |
| `metal_line_es_v2.png` | 3.0MB |
| `montes.png` | 7.4MB |
| `montes_v2.png` | 7.4MB (*) |
| `fotografia_aerea_madrid.png` | 2.2MB |
| `ijornada.png` | 455KB |

(*) `montes_v2.png` se usa actualmente (ver FIX-02), eliminar solo tras aplicar FIX-02.

**Fix:** eliminar todos los `.png` listados de `public/previews/` salvo que se quieran conservar como fuente de edición (en ese caso, moverlos fuera de `public/`).

---

## ALTO

### ~~FIX-04~~ ✅ — JSON-LD y OG usan `alex.png` (174KB) en lugar de `alex.webp` (9.5KB)

**Problema:** En `src/app/layout.tsx` las meta de Open Graph y el JSON-LD referencian `alex.png`:

```ts
// layout.tsx líneas ~54, 65, 87
url: "/alex.png"
images: ["/alex.png"]
image: "https://alexmerle.es/alex.png"
```

WhatsApp y LinkedIn descargan esta imagen al generar la preview del enlace. `alex.webp` es 18× más ligero y ya existe.

**Fix:** cambiar las tres referencias a `alex.webp`. Nota: LinkedIn no soporta WebP para OG — mantener `alex.png` solo para OG (`og:image`) y usar `alex.webp` en JSON-LD.

---

### FIX-05 — Sin tests: cualquier refactor puede romper funcionalidad silenciosamente

**Problema:** No existe ningún test (unitario, integración ni E2E). El smoke test del CI/CD solo verifica HTTP 200, no que el formulario funcione, las rutas dinámicas carguen o el JSON-LD sea válido.

**Mínimo recomendado:** 1 test E2E con Playwright que cubra:
- [ ] Home carga sin errores de consola
- [ ] Formulario de contacto envía y muestra confirmación
- [ ] Una ruta `/[municipio]` (ej. `/alcobendas`) carga con H1 correcto
- [ ] Una ruta `/para/[nicho]` (ej. `/para/restaurantes`) carga con H1 correcto

**Instalación:**
```bash
pnpm add -D @playwright/test
npx playwright install chromium
```

---

### ~~FIX-06~~ ✅ — WhatsApp CTA ausente en Hero (pérdida de leads móvil)

**Problema:** El cliente local de pymes prefiere WhatsApp antes que rellenar un formulario. Actualmente no hay ningún botón de WhatsApp directo en el Hero — el lead llega al formulario o abandona.

**Referencia:** ROADMAP.md ítem 3 (Prioridad Alta, pendiente).

**Fix:** añadir botón WhatsApp en Hero junto a los CTA existentes:
```tsx
<a
  href="https://wa.me/34XXXXXXXXX?text=Hola%20Alex%2C%20me%20interesa%20tu%20servicio"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-whatsapp"
>
  WhatsApp directo
</a>
```

---

## MEDIO

### ~~FIX-07~~ ✅ — Badge "Aceptando proyectos" es estático y no genera urgencia

**Problema:** el badge del Hero no se actualiza. "Aceptando proyectos" es neutro y no incita a la acción inmediata.

**Referencia:** ROADMAP.md ítem 4.

**Fix:** texto dinámico basado en el mes actual:
```tsx
const badge = `Solo 2 plazas disponibles en ${new Intl.DateTimeFormat("es", { month: "long" }).format(new Date())}`;
```

---

### FIX-08 — Testimonios reales ausentes

**Problema:** La sección `SuccessStories` existe pero usa contenido genérico/placeholder. Sin prueba social real, el visitante tiene dificultad para confiar en el servicio. Es el bloqueador de conversión más habitual en servicios freelance locales.

**Referencia:** ROADMAP.md ítem 2 (Prioridad Alta, pendiente).

**Fix:** añadir mínimo 2-3 testimonios reales: nombre, negocio, texto corto. Aunque sea desde capturas de WhatsApp como punto de partida.

---

### FIX-09 — Sección de métricas / números clave ausente

**Referencia:** ROADMAP.md ítem 6.

**Propuesta de datos:**
- Negocios publicados: N
- Municipios cubiertos: 16
- Tiempo medio de entrega: X semanas
- Años de experiencia: N

---

### ~~FIX-10~~ ✅ — FAQ sin respuesta sobre modelo de pago

**Problema:** muchos clientes no contactan por no saber si deben pagar todo por adelantado. La FAQ actual (9 preguntas) no lo cubre.

**Referencia:** ROADMAP.md ítem 7.

**Fix:** añadir pregunta en el array de FAQs de `page.tsx` y en el JSON-LD de `layout.tsx`:
```
Q: ¿Cómo se gestiona el pago?
A: Se divide en dos partes: 50% al inicio del proyecto y 50% a la entrega. Sin sorpresas.
```

---

### FIX-11 — Imágenes del portfolio sin `alt` descriptivo (SEO)

**Problema:** las imágenes de `PortfolioCards` usan el nombre del proyecto como `alt`. Google Images valora descripciones más ricas con contexto de servicio y ubicación.

**Fix:** añadir campo `altText` en `projectOverrides` de [src/lib/github.ts](src/lib/github.ts):
```ts
altText: "Web profesional para empresa de fotografía aérea en Madrid con dron DJI, imágenes HDR 4K"
```

---

### FIX-12 — Schema `AggregateRating` ausente (impacto en CTR de Google)

**Problema:** el JSON-LD de `ProfessionalService` no incluye valoraciones. Las estrellas en los resultados de búsqueda aumentan el CTR de forma significativa.

**Referencia:** ROADMAP.md ítem 13 (Rich Snippets).

**Fix:** añadir al bloque JSON-LD en `layout.tsx` cuando se tengan testimonios reales:
```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "5",
  "reviewCount": "3"
}
```

---

## BAJO

### FIX-13 — PNGs de origen fuera de control de versiones

Los archivos `merle_es.png`, `montes.png` etc. (23MB) están en el repo git. Esto infla el `.git/` y ralentiza los clones. Si se necesitan como fuente de edición, moverlos a un drive externo y excluirlos con `.gitignore`.

---

### FIX-14 — Google Business Profile sin verificar como vinculado a la web

**Referencia:** ROADMAP.md ítem 14.

Verificar que el perfil de Google Business tenga la URL `https://alexmerle.es` configurada correctamente y que las reseñas sean visibles. Sin esto, el rich snippet de estrellas (FIX-12) no tiene base.

---

## RESUMEN EJECUTIVO

| Fix | Área | Esfuerzo | Impacto |
|---|---|---|---|
| FIX-01 | Performance | Bajo | Alto |
| FIX-02 | Performance | Bajo | Alto |
| FIX-03 | Limpieza repo | Bajo | Medio |
| FIX-04 | Performance/SEO | Bajo | Medio |
| FIX-05 | Calidad código | Alto | Alto |
| FIX-06 | Conversión | Bajo | Alto |
| FIX-07 | Conversión | Bajo | Medio |
| FIX-08 | Conversión | Medio | Alto |
| FIX-09 | Contenido | Bajo | Medio |
| FIX-10 | Conversión | Bajo | Medio |
| FIX-11 | SEO | Bajo | Bajo |
| FIX-12 | SEO | Bajo | Alto (*) |
| FIX-13 | Mantenimiento | Bajo | Bajo |
| FIX-14 | SEO/Negocio | Bajo | Alto |

(*) FIX-12 requiere FIX-08 como prerequisito (necesita testimonios reales).

---

**Quick wins inmediatos (< 1h en total):** FIX-01, FIX-02, FIX-03, FIX-07, FIX-10

---

## DEUDA TÉCNICA — detectada en segunda revisión (2026-04-05)

### ~~DT-01~~ ✅ — Bug: `commits_count` en fallback REST devuelve timestamp (millones)

**Archivo:** [src/lib/github.ts](src/lib/github.ts) línea 231
**Problema:** cuando la API GraphQL falla y se usa el fallback REST, `commits_count` se calculaba como `new Date(repo.pushed_at).getTime()` — un timestamp Unix en ms (~1.700.000.000). El badge de commits en el portfolio mostraría "1.742.000.000 commits".
**Fix aplicado:** `commits_count: 0` en el fallback REST (los proyectos con REST no muestran badge).

---

### ~~DT-02~~ ✅ — Bug: clase Tailwind dinámica inválida en SuccessStories

**Archivo:** [src/components/SuccessStories.tsx](src/components/SuccessStories.tsx) línea 69
**Problema:** `hover:${story.border}` no funciona — Tailwind necesita strings completos en tiempo de build, no interpolaciones. El hover border de las cards de casos de éxito no se aplicaba.
**Fix aplicado:** condicional explícito con las dos clases completas.

---

### DT-03 — Deuda: rutas dinámicas duplican estructura del hero

**Archivos:** [src/app/[municipio]/page.tsx](src/app/[municipio]/page.tsx) y [src/app/para/[nicho]/page.tsx](src/app/para/[nicho]/page.tsx)
**Problema:** ambas páginas tienen un bloque hero (~40 líneas) prácticamente idéntico: mismo `pt-40 pb-20`, mismo blur de fondo, mismo patrón de CTA. Si se cambia el diseño del hero, hay que modificarlo en dos sitios.
**Impacto futuro:** bajo por ahora (31 páginas, pero todas generadas desde 2 templates). Se vuelve problemático si se añaden más tipos de rutas dinámicas.
**Recomendación:** extraer a `<DynamicPageHero>` cuando se toque cualquiera de los dos archivos.

---

### DT-04 — Deuda: nichos hardcodeados en página de municipio

**Archivo:** [src/app/[municipio]/page.tsx](src/app/[municipio]/page.tsx)
**Problema:** la sección "Sectores frecuentes" lista links a `/para/cafeterias`, `/para/restaurantes`, etc. con URLs hardcodeadas. Si se añade o elimina un nicho de `nicheData.ts`, esta lista no se actualiza automáticamente.
**Fix cuando proceda:**
```ts
import { nichesData } from "@/lib/nicheData";
nichesData.slice(0, 6).map(n => ({ label: n.name, href: `/para/${n.slug}` }))
```

---

### DT-05 — Deuda: imports no usados en page.tsx

**Archivo:** [src/app/page.tsx](src/app/page.tsx) líneas 2 y 11
**Problema:** `ShineCard` se importa pero no se usa directamente (se usa dentro de la página como JSX, no hay import huérfano real). `Linkedin` de lucide-react sí está importado pero no aparece en el JSX de page.tsx.
**Fix:** eliminar `Linkedin` del import de lucide-react en page.tsx.

---

### DT-06 — Deuda: clases CSS sin usar en globals.css

**Archivo:** [src/app/globals.css](src/app/globals.css)
**Problema:** `.section-container`, `.premium-heading` y `.sub-heading` están definidas pero no se usan en ningún componente (probablemente legacy de una refactorización anterior).
**Riesgo:** bajo (CSS muerto no rompe nada), pero infla el bundle.

---

### DT-07 — Deuda: smoke test del CI/CD no valida contenido

**Archivo:** [.github/workflows/deploy.yml](.github/workflows/deploy.yml)
**Problema:** el smoke test solo verifica HTTP 200. Una página de error personalizada también devuelve 200. Además `sleep 20` puede no ser suficiente si el FTP tarda.
**Mejora sugerida:**
```yaml
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://alexmerle.es)
CONTENT=$(curl -s https://alexmerle.es | grep -c "Consultor IT")
if [ "$HTTP_STATUS" != "200" ] || [ "$CONTENT" -eq "0" ]; then
  echo "⚠️ Deploy puede estar roto"
fi
```

---

### DT-08 — Deuda: sin `focus-visible` en links del Navbar

**Archivo:** [src/components/Navbar.tsx](src/components/Navbar.tsx)
**Problema:** los links del nav tienen estilos `hover:` pero no `focus-visible:`. Un usuario navegando por teclado no ve indicación visual de foco.
**Fix:** añadir `focus-visible:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30` a los links de nav.

---

## RESUMEN ACTUALIZADO

| ID | Área | Estado | Esfuerzo | Impacto |
|---|---|---|---|---|
| FIX-01 | Performance (favicon) | ⬜ Pendiente manual | Bajo | Alto |
| FIX-02 | Performance (WebP) | ✅ Hecho | — | — |
| FIX-03 | Limpieza repo (PNGs) | ⬜ Pendiente manual | Bajo | Medio |
| FIX-04 | OG/JSON-LD WebP | ✅ Hecho | — | — |
| FIX-05 | Tests E2E | ⬜ Pendiente | Alto | Alto |
| FIX-06 | WhatsApp Hero | ✅ Hecho | — | — |
| FIX-07 | Badge dinámico | ✅ Hecho | — | — |
| FIX-08 | Testimonios reales | ⬜ Pendiente (contenido) | Medio | Alto |
| FIX-09 | Sección métricas | ⬜ Pendiente (contenido) | Bajo | Medio |
| FIX-10 | FAQ modelo pago | ✅ Hecho | — | — |
| FIX-11 | Alt enriquecidos | ⬜ Pendiente | Bajo | Bajo |
| FIX-12 | AggregateRating | ⬜ Bloqueado por FIX-08 | Bajo | Alto |
| FIX-13 | PNGs en git | ⬜ Pendiente manual | Bajo | Bajo |
| FIX-14 | Google Business | ⬜ Pendiente manual | Bajo | Alto |
| DT-01 | Bug commits REST | ✅ Hecho | — | — |
| DT-02 | Bug Tailwind hover | ✅ Hecho | — | — |
| DT-03 | Hero duplicado | ⬜ Deuda futura | Medio | Bajo |
| DT-04 | Nichos hardcoded | ⬜ Deuda futura | Bajo | Bajo |
| DT-05 | Import Linkedin | ⬜ Pendiente | Bajo | Bajo |
| DT-06 | CSS muerto | ⬜ Pendiente | Bajo | Bajo |
| DT-07 | Smoke test débil | ⬜ Deuda futura | Bajo | Medio |
| DT-08 | focus-visible nav | ⬜ Deuda futura | Bajo | Bajo |
