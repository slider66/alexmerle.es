/**
 * Validación de variables de entorno requeridas.
 * Se llama en los formularios antes de hacer fetch a APIs externas.
 * Falla en build time si la variable no está definida.
 */

export function getWeb3FormsKey(): string {
  const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
  if (!key) {
    throw new Error(
      "[env] NEXT_PUBLIC_WEB3FORMS_KEY no está definida. " +
      "Añádela en .env.local (local) o en los secrets de GitHub Actions (producción)."
    );
  }
  return key;
}
