import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad · WebPC",
  description:
    "Política de privacidad y tratamiento de datos personales conforme al RGPD y la LOPDGDD.",
  robots: { index: false, follow: false },
};

export default function Privacidad() {
  return (
    <main className="min-h-screen py-32 px-6">
      <div className="max-w-3xl mx-auto prose prose-invert prose-sm">
        <Link
          href="/"
          className="text-brand-blue text-xs font-black uppercase tracking-widest hover:underline mb-12 block"
        >
          ← Volver
        </Link>

        <h1 className="text-4xl font-black tracking-tighter mb-2">Política de Privacidad</h1>
        <p className="text-white/30 text-sm mb-12">Última actualización: marzo de 2026</p>

        <section className="mb-10 space-y-3">
          <h2 className="text-lg font-black text-white/80">1. Responsable del tratamiento</h2>
          <ul className="text-white/50 space-y-1 list-none pl-0">
            <li>
              <span className="text-white/30 text-xs uppercase tracking-widest">Responsable:</span>{" "}
              Alejandro Merle Sánchez
            </li>
            <li>
              <span className="text-white/30 text-xs uppercase tracking-widest">Actividad:</span>{" "}
              Consultor IT independiente (autónomo)
            </li>
            <li>
              <span className="text-white/30 text-xs uppercase tracking-widest">Domicilio:</span>{" "}
              San Agustín de Guadalix, Madrid (España)
            </li>
            <li>
              <span className="text-white/30 text-xs uppercase tracking-widest">Email:</span>{" "}
              hola@webpc.es
            </li>
          </ul>
        </section>

        <section className="mb-10 space-y-3">
          <h2 className="text-lg font-black text-white/80">2. Datos que se recogen</h2>
          <p className="text-white/50 leading-relaxed">
            A través del formulario de contacto se recogen los siguientes datos:
          </p>
          <ul className="text-white/50 space-y-1 pl-4 list-disc">
            <li>Nombre</li>
            <li>Nombre del negocio</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de teléfono</li>
            <li>Tipo de servicio solicitado y presupuesto aproximado</li>
            <li>Mensaje libre</li>
          </ul>
          <p className="text-white/50 leading-relaxed">
            Adicionalmente, mediante Google Analytics 4 se recogen datos de navegación de forma
            anonimizada (páginas visitadas, tiempo de sesión, dispositivo). No se utilizan cookies
            de rastreo publicitario.
          </p>
        </section>

        <section className="mb-10 space-y-3">
          <h2 className="text-lg font-black text-white/80">3. Finalidad del tratamiento</h2>
          <ul className="text-white/50 space-y-1 pl-4 list-disc">
            <li>
              <strong className="text-white/70">Gestión de consultas:</strong> atender y responder
              solicitudes enviadas a través del formulario de contacto.
            </li>
            <li>
              <strong className="text-white/70">Elaboración de presupuestos:</strong> preparar
              propuestas comerciales en respuesta a la solicitud del interesado.
            </li>
            <li>
              <strong className="text-white/70">Análisis de uso web:</strong> mejorar el rendimiento
              y contenidos del sitio mediante estadísticas de navegación anonimizadas (Google
              Analytics 4).
            </li>
          </ul>
        </section>

        <section className="mb-10 space-y-3">
          <h2 className="text-lg font-black text-white/80">4. Base jurídica del tratamiento</h2>
          <ul className="text-white/50 space-y-1 pl-4 list-disc">
            <li>
              <strong className="text-white/70">Formulario de contacto:</strong> ejecución de
              medidas precontractuales a petición del interesado (art. 6.1.b RGPD).
            </li>
            <li>
              <strong className="text-white/70">Analytics:</strong> interés legítimo en la mejora
              del servicio (art. 6.1.f RGPD), con datos anonimizados que no permiten identificar a
              los usuarios.
            </li>
          </ul>
        </section>

        <section className="mb-10 space-y-3">
          <h2 className="text-lg font-black text-white/80">5. Conservación de los datos</h2>
          <p className="text-white/50 leading-relaxed">
            Los datos del formulario se conservan exclusivamente en el buzón de correo del
            responsable durante el tiempo necesario para gestionar la consulta y, en caso de
            contratación, durante la vigencia de la relación contractual más los plazos legales de
            conservación (mínimo 5 años para obligaciones mercantiles).
          </p>
        </section>

        <section className="mb-10 space-y-3">
          <h2 className="text-lg font-black text-white/80">6. Destinatarios de los datos</h2>
          <p className="text-white/50 leading-relaxed">
            No se ceden datos a terceros salvo obligación legal. Los datos de navegación son
            procesados por <strong className="text-white/70">Google Ireland Limited</strong> como
            encargado del tratamiento para el servicio Google Analytics, con las garantías adecuadas
            conforme al RGPD.
          </p>
        </section>

        <section className="mb-10 space-y-3">
          <h2 className="text-lg font-black text-white/80">7. Derechos del interesado</h2>
          <p className="text-white/50 leading-relaxed">
            Puede ejercer los siguientes derechos dirigiéndose a{" "}
            <strong className="text-white/70">hola@webpc.es</strong> con copia de su documento de
            identidad:
          </p>
          <ul className="text-white/50 space-y-1 pl-4 list-disc">
            <li>
              <strong className="text-white/70">Acceso:</strong> conocer qué datos personales se
              tratan.
            </li>
            <li>
              <strong className="text-white/70">Rectificación:</strong> solicitar la corrección de
              datos inexactos.
            </li>
            <li>
              <strong className="text-white/70">Supresión:</strong> solicitar la eliminación de los
              datos.
            </li>
            <li>
              <strong className="text-white/70">Limitación:</strong> solicitar la restricción del
              tratamiento.
            </li>
            <li>
              <strong className="text-white/70">Portabilidad:</strong> recibir los datos en formato
              estructurado.
            </li>
            <li>
              <strong className="text-white/70">Oposición:</strong> oponerse al tratamiento basado
              en interés legítimo.
            </li>
          </ul>
          <p className="text-white/50 leading-relaxed">
            Tiene derecho a presentar una reclamación ante la{" "}
            <strong className="text-white/70">Agencia Española de Protección de Datos</strong>{" "}
            (www.aepd.es) si considera que el tratamiento no es conforme al RGPD.
          </p>
        </section>

        <section className="mb-10 space-y-3">
          <h2 className="text-lg font-black text-white/80">8. Seguridad</h2>
          <p className="text-white/50 leading-relaxed">
            Se aplican medidas técnicas y organizativas apropiadas para proteger los datos
            personales frente a acceso no autorizado, pérdida o destrucción accidental, conforme al
            artículo 32 del RGPD.
          </p>
        </section>

        <div className="border-t border-white/5 pt-8 mt-12 flex flex-wrap gap-6 text-[10px] font-black uppercase tracking-widest text-white/20">
          <Link href="/aviso-legal" className="hover:text-brand-blue transition-colors">
            Aviso Legal
          </Link>
          <Link href="/cookies" className="hover:text-brand-blue transition-colors">
            Política de Cookies
          </Link>
          <Link href="/" className="hover:text-brand-blue transition-colors">
            Inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
