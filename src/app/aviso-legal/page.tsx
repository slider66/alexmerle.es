import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso Legal · Alejandro Merle",
  description: "Información legal sobre el titular del sitio web alexmerle.es según la Ley 34/2002 LSSI.",
  robots: { index: false, follow: false },
};

export default function AvisoLegal() {
  return (
    <main className="min-h-screen py-32 px-6">
      <div className="max-w-3xl mx-auto prose prose-invert prose-sm">
        <Link href="/" className="text-brand-blue text-xs font-black uppercase tracking-widest hover:underline mb-12 block">
          ← Volver
        </Link>

        <h1 className="text-4xl font-black tracking-tighter mb-2">Aviso Legal</h1>
        <p className="text-white/30 text-sm mb-12">Última actualización: marzo de 2026</p>

        <section className="mb-10 space-y-3">
          <h2 className="text-lg font-black text-white/80">1. Titular del sitio web</h2>
          <p className="text-white/50 leading-relaxed">En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se informa:</p>
          <ul className="text-white/50 space-y-1 list-none pl-0">
            <li><span className="text-white/30 text-xs uppercase tracking-widest">Titular:</span> Alejandro Merle Sánchez</li>
            <li><span className="text-white/30 text-xs uppercase tracking-widest">Actividad:</span> Consultor IT independiente (autónomo)</li>
            <li><span className="text-white/30 text-xs uppercase tracking-widest">Domicilio:</span> San Agustín de Guadalix, Madrid (España)</li>
            <li><span className="text-white/30 text-xs uppercase tracking-widest">Email:</span> alex@merle.es</li>
            <li><span className="text-white/30 text-xs uppercase tracking-widest">Teléfono:</span> +34 600 367 217</li>
            <li><span className="text-white/30 text-xs uppercase tracking-widest">Web:</span> https://alexmerle.es</li>
          </ul>
        </section>

        <section className="mb-10 space-y-3">
          <h2 className="text-lg font-black text-white/80">2. Objeto y ámbito de aplicación</h2>
          <p className="text-white/50 leading-relaxed">El presente Aviso Legal regula el acceso, navegación y uso del sitio web <strong className="text-white/70">alexmerle.es</strong>. El acceso al sitio implica la aceptación plena y sin reservas de este aviso. El titular se reserva el derecho a modificar este texto en cualquier momento.</p>
        </section>

        <section className="mb-10 space-y-3">
          <h2 className="text-lg font-black text-white/80">3. Propiedad intelectual e industrial</h2>
          <p className="text-white/50 leading-relaxed">Todos los contenidos del sitio web (textos, imágenes, diseño, código fuente y demás elementos) son titularidad de Alejandro Merle Sánchez o de terceros que han autorizado su uso, y están protegidos por la legislación española e internacional en materia de propiedad intelectual e industrial.</p>
          <p className="text-white/50 leading-relaxed">Queda prohibida la reproducción, distribución, comunicación pública o transformación de cualquier contenido sin autorización expresa y por escrito del titular.</p>
        </section>

        <section className="mb-10 space-y-3">
          <h2 className="text-lg font-black text-white/80">4. Responsabilidad</h2>
          <p className="text-white/50 leading-relaxed">El titular no garantiza la ausencia de errores en los contenidos ni su actualización permanente. No se hace responsable de los daños derivados del uso del sitio, de la imposibilidad de acceso o de la presencia de virus u otros elementos lesivos.</p>
        </section>

        <section className="mb-10 space-y-3">
          <h2 className="text-lg font-black text-white/80">5. Legislación aplicable y jurisdicción</h2>
          <p className="text-white/50 leading-relaxed">Este aviso legal se rige por la legislación española. Para cualquier controversia derivada del uso del sitio, las partes se someten a los juzgados y tribunales del domicilio del titular, salvo que la normativa vigente establezca otro fuero imperativo.</p>
        </section>

        <div className="border-t border-white/5 pt-8 mt-12 flex flex-wrap gap-6 text-[10px] font-black uppercase tracking-widest text-white/20">
          <Link href="/privacidad" className="hover:text-brand-blue transition-colors">Política de Privacidad</Link>
          <Link href="/cookies" className="hover:text-brand-blue transition-colors">Política de Cookies</Link>
          <Link href="/" className="hover:text-brand-blue transition-colors">Inicio</Link>
        </div>
      </div>
    </main>
  );
}
