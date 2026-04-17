import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Cookies · WebPC",
  description:
    "Información sobre el uso de cookies en alexmerle.es conforme a la normativa española y europea.",
  robots: { index: false, follow: false },
};

export default function Cookies() {
  return (
    <main className="min-h-screen py-32 px-6">
      <div className="max-w-3xl mx-auto prose prose-invert prose-sm">
        <Link
          href="/"
          className="text-brand-blue text-xs font-black uppercase tracking-widest hover:underline mb-12 block"
        >
          ← Volver
        </Link>

        <h1 className="text-4xl font-black tracking-tighter mb-2">Política de Cookies</h1>
        <p className="text-white/30 text-sm mb-12">Última actualización: marzo de 2026</p>

        <section className="mb-10 space-y-3">
          <h2 className="text-lg font-black text-white/80">1. ¿Qué son las cookies?</h2>
          <p className="text-white/50 leading-relaxed">
            Las cookies son pequeños archivos de texto que los sitios web almacenan en el
            dispositivo del usuario para recordar preferencias, analizar el comportamiento de
            navegación o habilitar ciertas funcionalidades. Se rigen por el artículo 22.2 de la Ley
            34/2002 (LSSI-CE) y el Reglamento (UE) 2016/679 (RGPD).
          </p>
        </section>

        <section className="mb-10 space-y-3">
          <h2 className="text-lg font-black text-white/80">2. Cookies utilizadas en este sitio</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-white/50 border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-2 pr-4 text-white/30 font-black uppercase tracking-widest">
                    Cookie
                  </th>
                  <th className="text-left py-2 pr-4 text-white/30 font-black uppercase tracking-widest">
                    Proveedor
                  </th>
                  <th className="text-left py-2 pr-4 text-white/30 font-black uppercase tracking-widest">
                    Finalidad
                  </th>
                  <th className="text-left py-2 text-white/30 font-black uppercase tracking-widest">
                    Duración
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-2 pr-4 font-mono">_ga</td>
                  <td className="py-2 pr-4">Google Analytics</td>
                  <td className="py-2 pr-4">Distingue usuarios únicos</td>
                  <td className="py-2">2 años</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 pr-4 font-mono">_ga_*</td>
                  <td className="py-2 pr-4">Google Analytics</td>
                  <td className="py-2 pr-4">Mantiene el estado de sesión</td>
                  <td className="py-2">2 años</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-white/40 text-xs">
            No se utilizan cookies de publicidad, retargeting ni redes sociales de terceros.
          </p>
        </section>

        <section className="mb-10 space-y-3">
          <h2 className="text-lg font-black text-white/80">3. Base jurídica</h2>
          <p className="text-white/50 leading-relaxed">
            Las cookies de Google Analytics se utilizan bajo la base de{" "}
            <strong className="text-white/70">interés legítimo</strong> (art. 6.1.f RGPD) para medir
            el rendimiento del sitio con datos estadísticos anonimizados, sin permitir la
            identificación individual de los usuarios. La dirección IP se anonimiza antes de ser
            procesada por Google.
          </p>
        </section>

        <section className="mb-10 space-y-3">
          <h2 className="text-lg font-black text-white/80">
            4. Cómo desactivar o eliminar las cookies
          </h2>
          <p className="text-white/50 leading-relaxed">
            Puedes configurar tu navegador para rechazar o eliminar cookies en cualquier momento.
            Ten en cuenta que desactivarlas puede afectar a la funcionalidad del sitio.
          </p>
          <ul className="text-white/50 space-y-1 pl-4 list-disc">
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue hover:underline"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue hover:underline"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue hover:underline"
              >
                Safari
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue hover:underline"
              >
                Microsoft Edge
              </a>
            </li>
          </ul>
          <p className="text-white/50 leading-relaxed">
            También puedes optar por excluirte del seguimiento de Google Analytics instalando el{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-blue hover:underline"
            >
              complemento de inhabilitación para navegadores de Google Analytics
            </a>
            .
          </p>
        </section>

        <section className="mb-10 space-y-3">
          <h2 className="text-lg font-black text-white/80">5. Actualizaciones de esta política</h2>
          <p className="text-white/50 leading-relaxed">
            Esta política puede actualizarse cuando se modifiquen las cookies utilizadas o la
            normativa aplicable. Se recomienda revisarla periódicamente.
          </p>
        </section>

        <div className="border-t border-white/5 pt-8 mt-12 flex flex-wrap gap-6 text-[10px] font-black uppercase tracking-widest text-white/20">
          <Link href="/aviso-legal" className="hover:text-brand-blue transition-colors">
            Aviso Legal
          </Link>
          <Link href="/privacidad" className="hover:text-brand-blue transition-colors">
            Política de Privacidad
          </Link>
          <Link href="/" className="hover:text-brand-blue transition-colors">
            Inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
