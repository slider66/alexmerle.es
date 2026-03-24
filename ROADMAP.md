# Hoja de Ruta — alexmerle.es

> Revisión: marzo 2026
> Estado actual: web publicada, funcional, con SEO local básico.

---

## Prioridad Alta — Quick wins de conversión

### 1. Formulario de contacto con envío real (✅ Completado)
- **Problema:** el formulario abre el cliente de email del usuario. En móvil suele no estar configurado y el lead se pierde.
- **Solución:** Integrado Server Action en Next.js con la API de Resend para envío directo y validación.
- **Impacto:** alto. Es el punto de conversión principal.

### 2. Testimonios / prueba social
- **Problema:** no hay ninguna reseña, nombre de cliente real ni Google Rating visible.
- **Solución:** añadir sección con 2-3 testimonios reales (texto + nombre + negocio). Aunque sea con capturas de WhatsApp en un primer momento.
- **Bonus:** widget o badge de Google Business Profile con estrellas.
- **Impacto:** alto. Es lo primero que busca un cliente local antes de contactar.

### 3. WhatsApp CTA en el Hero
- **Problema:** el cliente local prefiere WhatsApp a rellenar formularios.
- **Solución:** añadir botón de WhatsApp directo en la sección Hero, junto a "Ver propuesta" y "Cuéntame tu idea".
- **Impacto:** alto. Reduce fricción en el primer punto de contacto.

### 4. Badge de urgencia real
- **Problema:** "Aceptando proyectos" no genera urgencia.
- **Solución:** cambiar a algo dinámico como "Solo 2 plazas disponibles en abril" (actualizar mensualmente).
- **Impacto:** medio. Mejora la tasa de acción inmediata.

---

## Prioridad Media — Contenido y confianza

### 5. Casos de éxito reales
- **Problema:** el portfolio son demos y proyectos personales.
- **Solución:** documentar cada cliente real con: nombre del negocio, problema inicial, solución aplicada, resultado medible (ej. "X visitas/mes en Google", "Y pedidos online en el primer mes").
- **Formato sugerido:** tarjeta con foto del negocio + métrica destacada.

### 6. Sección de resultados / métricas
- Añadir una sección tipo "Números que importan":
  - Negocios publicados
  - Tiempo medio de entrega
  - Municipios cubiertos
  - Años de experiencia

### 7. Aclarar proceso de pago en FAQ
- **Problema:** muchos clientes no contactan por no saber si hay que pagar todo por adelantado.
- **Solución:** añadir FAQ: "¿Cómo se gestiona el pago?" → explicar si hay señal inicial + resto a la entrega.

### 8. Destacar demos visualmente
- "Hierros Merle" y "Café & Tortilla Montes" solo aparecen en FAQ.
- Subirlos al portfolio grid con imagen real, enlace y contexto del proyecto.

---

## Prioridad Media — Técnico

### 9. Analytics
- **Problema:** sin datos de visitas, no se puede medir nada.
- **Solución:** instalar [Plausible](https://plausible.io) (ligero, sin cookies, GDPR) o Google Analytics 4.
- **Mínimo:** saber cuántas visitas, de dónde vienen y qué sección visitan más.

### 10. Fallback del portfolio
- **Problema:** el portfolio carga desde la API de GitHub. Si falla, la sección queda vacía.
- **Solución:** hardcodear los proyectos clave como fallback estático e implementar ISR (`revalidate: 3600`) para cachear la respuesta de la API y evitar latencia o fallos de red.

### 11. Metatags Open Graph para compartir
- Verificar que og:image, og:title y og:description se renderizan correctamente al compartir en WhatsApp y LinkedIn (son los canales principales del perfil de cliente).

### 12. Atributos Alt Enriquecidos (Portfolio)
- **Problema:** Las imágenes servidas dinámicamente (`github.ts`) carecen de descripciones SEO óptimas.
- **Solución:** Añadir un campo enriquecido (manual o IA) para el atributo `alt` de los mockups procesados. Mejora el ranking en Google Images.

### 13. Rich Snippets de Reseñas (Schema)
- **Oportunidad:** Mostrar estrellas orgánicas de valoración en las búsquedas de Google.
- **Solución:** Inyectar esquema `@type: "Review"` o `@type: "AggregateRating"` dentro del JSON-LD (`ProfessionalService`) en cuanto se publiquen los testimonios de clientes reales. ¡Impacto brutal en el CTR!

---

## Prioridad Baja — Negocio recurrente

### 12. Plan de mantenimiento mensual
- **Oportunidad:** actualmente no hay ingresos recurrentes.
- **Propuesta:** plan de 29-49€/mes que incluya:
  - Hosting gestionado
  - Actualizaciones de contenido (carta, precios, horarios)
  - Soporte técnico básico
  - Backup mensual
- **Impacto:** transforma un cliente puntual en ingreso fijo.

### 13. Página de aterrizaje por municipio (✅ Completado Fase 1)
- **Oportunidad:** el SEO local se fragmenta al mencionar 6 municipios en una sola página.
- **Solución:** Creado sistema estático dinámico en `/[municipio]` y sitemap generado automáticamente con los pueblos de la A1 (Alcobendas, Sanse, Algete, etc.).
- **Prioridad:** Empezado con 10 municipios clave del norte.

### 14. Google Business Profile activo
- Verificar que el perfil esté completo, con fotos, horario y respuestas a reseñas.
- Añadir enlace o widget en la web para redirigir a reseñas de Google.

### 15. Blog / contenido SEO
- Artículos orientados a búsquedas de clientes locales:
  - "¿Cuánto cuesta una página web para un bar en Madrid?"
  - "SEO local para talleres mecánicos en el norte de Madrid"
- No es urgente, pero construye autoridad a largo plazo.

---

## Resumen por fases

| Fase | Qué hacer | Cuándo |
|------|-----------|--------|
| **1** | Formulario real + WhatsApp en hero + testimonios | Inmediato |
| **2** | Analytics + casos de éxito + FAQ de pagos | Próximo mes |
| **3** | Plan de mantenimiento + portfolio mejorado | Mes 2-3 |
| **4** | Landing pages por municipio + blog SEO | Mes 4-6 |

---

*Actualizar este documento tras cada sprint o cambio relevante.*
