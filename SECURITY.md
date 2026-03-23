# Política de Seguridad

## Divulgación responsable

Si encuentras una vulnerabilidad en este proyecto, por favor **no la publiques en Issues ni en redes sociales**. Contacta directamente:

- **Email:** alex@merle.es
- **Asunto:** `[SECURITY] <descripción breve>`

Respondo en un plazo máximo de **72 horas**. Una vez confirmada y corregida la vulnerabilidad, se publicará en el historial de cambios con crédito si lo deseas.

---

## Superficie de ataque y controles aplicados

### Formulario de contacto
- Validación de tipos y longitud en cliente y servidor.
- Las claves de API del proveedor de email (Resend) viven únicamente en variables de entorno de servidor — nunca se exponen al cliente.
- Sin almacenamiento de datos del formulario en base de datos propia.

### GitHub API
- El token de acceso tiene permisos de **solo lectura sobre repositorios públicos** (`public_repo`).
- El token vive en variables de entorno de servidor (Next.js `process.env`), nunca en el bundle del cliente.
- Si el token no está presente, la aplicación degrada gracefully sin errores visibles.

### Secretos y variables de entorno
- Ningún secreto se sube al repositorio. El `.gitignore` excluye todos los archivos `.env*` salvo `.env.example`.
- `.env.example` contiene solo nombres de variables con valores vacíos — nunca valores reales.
- En producción los secretos se gestionan desde el panel de Vercel (cifrados en reposo).

### Dependencias
- Las dependencias se actualizan regularmente y se parchean cuando hay CVEs activos.
- Se recomienda revisar `pnpm audit` antes de cada despliegue a producción.

### Headers de seguridad
Vercel aplica por defecto:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`

Para proyectos derivados de este, se recomienda añadir en `next.config.ts`:

```ts
headers: async () => [
  {
    source: '/(.*)',
    headers: [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      {
        key: 'Content-Security-Policy',
        value: [
          "default-src 'self'",
          "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' data: https:",
          "connect-src 'self' https://api.github.com https://www.google-analytics.com",
          "frame-ancestors 'none'",
        ].join('; '),
      },
    ],
  },
],
```

### Textura de ruido externa
El overlay de grano (`grainy-gradients.vercel.app/noise.svg`) se carga desde un dominio de terceros. Si se requiere máxima integridad, se recomienda descargar el SVG y servirlo desde `/public`.

### Analytics
- Se usa Google Analytics 4 (`gtag.js`) cargado con `strategy="afterInteractive"` para no bloquear el renderizado.
- No se recogen datos personales más allá de los que GA4 procesa por defecto.
- Compatible con la política de cookies básica de la UE para analytics de medición agregada.

---

## Versiones soportadas

Este es un proyecto personal en desarrollo activo. Solo la rama `main` desplegada en producción recibe correcciones de seguridad.

| Rama | Soporte |
|---|---|
| `main` (producción) | ✅ Activo |
| Ramas de feature | ❌ Sin soporte |
