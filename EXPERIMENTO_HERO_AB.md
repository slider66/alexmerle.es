# Experimento A/B — Hero Headline alexmerle.es

> **Fecha de inicio:** 2026-04-02
> **Estado:** ⏸️ Pausado — retomar cuando tráfico orgánico supere ~500 visitas/mes

---

## Por qué se pausó

El A/B test con aleatorización en cliente tenía un problema crítico de SEO:
el `<h1>` se renderizaba en el navegador (useEffect), por lo que Google indexaba
un placeholder invisible en lugar del headline real. Con tráfico mayoritariamente
directo y bajo volumen, el experimento no tenía datos suficientes para ser válido.

**Decisión tomada (2026-04-02):** headline fijado estáticamente en server component.
Variante elegida por criterio de copywriting: `competencia`.

---

## Headline activo

```
"Tu competencia ya está en Google."
"Tú todavía no. Cada semana sin web es una semana que tus clientes
encuentran a otro antes que a ti."
```

**Razón:** ataca la amenaza concreta (competencia ya posicionada) en lugar de
prometer un beneficio abstracto. Es el hook de Loss Framing más directo
de las 4 variantes consideradas.

---

## Variantes descartadas (para referencia futura)

| variant_id | Headline | Por qué se descartó |
|---|---|---|
| `sin_esperas` | "Tu negocio online, sin esperas." | Demasiado neutro, no activa urgencia |
| `meses_paralizado` | "¿Llevas meses sin publicar nada?" | Bueno para empatía, débil para conversión directa |
| `propuesta_24h` | "Propuesta en 24h. Publicado cuanto antes." | Vende proceso, no consecuencia |

---

## Cuándo retomar el experimento

Condiciones necesarias para que el A/B test tenga sentido:

1. **Tráfico orgánico ≥ 500 visitas/mes** (verificar en GA4 → Adquisición → Tráfico → Orgánico)
2. **≥ 30 clics en CTA del hero por mes** (GA4 → Eventos → cta_click, filtro from=hero)

Cuando se cumplan ambas condiciones, el experimento se puede reimplementar
**correctamente** — con la variante servida desde el servidor usando cookies
o middleware (no useEffect), para que Google indexe siempre una versión real.

---

## Tracking activo actualmente

El evento `cta_click` sigue activo en `src/components/HeroCtas.tsx`:
- Parámetros: `from: "hero"`, `cta: "primary" | "secondary"`
- GA4: Informes → Engagement → Eventos → cta_click

Sirve para medir si los CTAs del hero generan interacción, independientemente del headline.

---

## Prompt para Claude — retomar el experimento en el futuro

Cuando el tráfico sea suficiente, copia y pega esto:

---

```
Lee el archivo EXPERIMENTO_HERO_AB.md. El experimento A/B del hero fue pausado
porque el tráfico orgánico era insuficiente y la implementación con useEffect
ocultaba el H1 a Google.

Ahora el tráfico orgánico supera las 500 visitas/mes y queremos retomar el experimento.

Necesito que plantees una implementación correcta del A/B test que:
1. Sirva el headline desde el servidor (no useEffect) para que Google indexe
   siempre contenido real — investiga si con Next.js static export es viable
   usar cookies de middleware o si necesitamos otro enfoque.
2. Mantenga el tracking GA4 con hero_variant_shown y cta_click por variant_id.
3. Sea compatible con output: "export" de Next.js (sin servidor, solo estático + FTP a Hostinger).

Las 4 variantes candidatas están documentadas en EXPERIMENTO_HERO_AB.md.
El headline activo es "competencia" — sigue siendo una de las opciones.

Antes de tocar código, propón el enfoque técnico y sus limitaciones.
```

---

---

## Acceso de Claude a GA4 — opciones disponibles

### Opción A — Gmail MCP ✅ ACTIVA (desde 2026-04-02)

GA4 envía informes semanales por email. El MCP de Gmail ya está configurado
en Claude Code, que puede leerlos directamente sin setup adicional.

**Informes configurados en GA4:**
- Informe semanal: usuarios, sesiones, tráfico orgánico vs directo
- Informe semanal: eventos (cta_click, hero_variant_shown cuando aplique)

**Cómo usar en una sesión futura:**
```
"Lee los últimos informes de GA4 que llegaron por email y dime
cómo está el tráfico de alexmerle.es"
```
Claude buscará en Gmail los emails de Google Analytics y extraerá los datos.

**Limitación:** solo contiene lo que GA4 incluye en el email, sin consultas custom.

---

### Opción B — GA4 Data API con Service Account (pendiente)

Acceso directo a GA4 mediante script. Permite consultas custom, segmentaciones
y cruces de datos que los emails no incluyen. Necesario cuando el tráfico crezca
y se retome el A/B test.

**Setup (cuando se necesite):**
1. Google Cloud Console → crear proyecto → activar "Google Analytics Data API"
2. IAM → crear Service Account → descargar credenciales JSON
3. GA4 → Admin → Gestión de acceso → añadir email de la service account como Viewer
4. Guardar JSON en `.env.local` (nunca commitear)
5. Claude crea el script de consulta en Node.js usando `@google-analytics/data`

**Prompt para implementarlo:**
```
Quiero implementar acceso directo a GA4 desde Claude Code mediante la
Data API. Lee EXPERIMENTO_HERO_AB.md para el contexto.
Tengo las credenciales JSON de una Service Account de Google Cloud.
Crea un script en el proyecto (scripts/ga4-report.ts o similar) que:
- Consulte eventos cta_click y hero_variant_shown de los últimos 30 días
- Muestre CTR por variant_id si el experimento A/B está activo
- Muestre sesiones orgánicas vs directas
- Sea ejecutable con: npx ts-node scripts/ga4-report.ts
Las credenciales están en .env.local como GA4_CREDENTIALS_JSON.
Verifica que el script no se incluye en el build de Next.js.
```

---

### Opción C — MCP comunitario de Google Analytics (descartada por ahora)

Servidor MCP no oficial para GA4. Más inestable que la API directa.
Retomar solo si Google publica un MCP oficial.

---

## Log

| Fecha | Acción |
|---|---|
| 2026-04-02 | Experimento planificado, 4 variantes definidas |
| 2026-04-02 | Pausado. H1 fijado como server component con variante `competencia` |
| 2026-04-02 | Opción A de monitorización GA4 activada (informes semanales por Gmail MCP) |
