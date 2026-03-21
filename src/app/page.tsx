export const dynamic = "force-dynamic";

import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";
import { ContactForm } from "@/components/ContactForm";
import { BlurReveal } from "@/components/ui/BlurReveal";
import { ContactLinks } from "@/components/ContactLinks";
import { FAQ } from "@/components/FAQ";
import {
  Linkedin,
  Shield,
  Globe,
  Cpu,
  MapPin,
  Navigation,
  Layers,
  Check,
} from "lucide-react";

// ─── Datos estáticos ─────────────────────────────────────────────────────────

const skills = [
  { icon: Globe, label: "Web & SEO Local", color: "text-brand-blue" },
  { icon: Cpu, label: "IA Aplicada", color: "text-brand-teal" },
  { icon: Shield, label: "Ciberseguridad", color: "text-brand-blue" },
  { icon: Navigation, label: "Drones AESA", color: "text-brand-teal" },
  { icon: Layers, label: "CNC / Láser", color: "text-brand-blue" },
];

const services = [
  {
    icon: Globe,
    title: "Presencia Online",
    subtitle: "Desde 390€",
    description:
      "Tu negocio visible en Google. Web profesional con carta digital, lista de precios, galería, ubicación y acceso directo a WhatsApp. SEO local para que te encuentren los clientes de tu zona.",
    items: ["Diseño responsive", "SEO local", "Google Maps integrado", "WhatsApp + Llamada directa"],
  },
  {
    icon: Cpu,
    title: "Encargos y Reservas",
    subtitle: "Desde 490€",
    description:
      "Sistema online para gestionar pedidos o citas sin depender del teléfono. Menos llamadas, menos errores, más encargos fuera de tu horario habitual.",
    items: ["Wizard de pedidos paso a paso", "Selección de fecha y hora", "Validación automática", "Activación sin redeploy"],
  },
  {
    icon: Shield,
    title: "Consultoría IT",
    subtitle: "Presupuesto a medida",
    description:
      "Asesoría técnica para negocios que quieren ir más allá. Automatización con IA, emails automáticos, hardening de seguridad y procesos que funcionan solos.",
    items: ["Automatización con IA", "Emails automáticos", "Seguridad y honeypots", "Procesos sin intervención"],
  },
];

const planBasico = [
  "Hero animado + carta o servicios",
  "Google Maps integrado",
  "CTA WhatsApp y llamada directa",
  "SEO local optimizado",
  "Diseño responsive",
  "Velocidad < 1 segundo",
];

const planAvanzado = [
  "Todo lo del Plan Básico",
  "Wizard de encargos en 4 pasos",
  "Selección de fecha y hora de recogida",
  "Validación de 48h de antelación",
  "Activación sin redeploy",
];

const planCompleto = [
  "Todo lo del Plan Avanzado",
  "Email automático al cliente y al negocio",
  "Descarga de evento al calendario (.ics)",
  "Enlace WhatsApp con pedido redactado",
];

const included = [
  "30 días de prueba sin compromiso",
  "2 sesiones de ajustes gratuitas",
  "Código completo al cliente (Git)",
  "Publicación incluida (Vercel)",
  "Hosting anual desde 5€/año",
];

// ─── Componente ───────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />

      {/* ── SOBRE MÍ ───────────────────────────────────────────────────────── */}
      <section id="sobre-mi" className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <BlurReveal>
            <div className="space-y-10">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-blue mb-4 block">
                  Quién hay detrás
                </span>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
                  Hola, soy <span className="gradient-text">Alejandro.</span>
                </h2>
              </div>

              <div className="space-y-5 text-lg text-white/50 leading-relaxed font-medium">
                <p>
                  Consultor IT independiente con base en el norte de Madrid. Trabajo con negocios locales —
                  cafeterías, talleres, clínicas, inmobiliarias, tiendas— y con cualquier negocio que tenga un problema
                  tecnológico que no sabe muy bien cómo atajar: estar en Google, automatizar procesos, recibir
                  encargos online o simplemente tener una imagen profesional{" "}
                  <strong className="text-white/80">sin pagar lo que cobra una agencia</strong>.
                </p>
                <p>
                  Formación en electrónica, telecomunicaciones e informática. Certificado CompTIA. Trabajo
                  como analista de ciberseguridad en{" "}
                  <strong className="text-white/80">Telefónica</strong> y llevo más de un año usando IA para
                  construir soluciones reales. Todo lo que construyo lo dejo bien securizado: honeypots,
                  accesos restringidos, sin puertas traseras.
                </p>
                <p className="flex items-center gap-2 text-white/40 text-sm">
                  <MapPin size={14} className="text-brand-teal shrink-0" />
                  San Agustín de Guadalix · SSReyes · Las Tablas · Paracuellos · El Molar
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                {skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 group hover:border-brand-blue/30 transition-colors"
                  >
                    <skill.icon className={`${skill.color} shrink-0`} size={16} />
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/50 group-hover:text-white/80 transition-colors">
                      {skill.label}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="https://es.linkedin.com/in/alejandromerle"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-10 py-5 bg-[#0077b5] text-white font-black uppercase text-xs tracking-[0.2em] rounded-full hover:shadow-[0_20px_40px_rgba(0,119,181,0.3)] transition-all hover:-translate-y-1 active:scale-95"
              >
                <Linkedin size={16} />
                Ver perfil en LinkedIn
              </a>
            </div>
          </BlurReveal>

          {/* Visual decorativo */}
          <BlurReveal delay={0.15}>
            <div className="relative aspect-square max-w-lg mx-auto lg:ml-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-teal/20 rounded-full blur-[100px] animate-pulse" />
              <div className="relative h-full w-full glass-card flex items-center justify-center p-16 overflow-hidden border-white/10">
                <div className="grid grid-cols-4 gap-6 opacity-10">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-16 h-16 border border-white/40 rounded-2xl rotate-45" />
                  ))}
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-black text-white/5 select-none tracking-tighter">
                  AM
                </div>
              </div>
            </div>
          </BlurReveal>
        </div>
      </section>

      {/* ── SERVICIOS ──────────────────────────────────────────────────────── */}
      <section id="servicios" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-teal/5 rounded-full blur-[150px] -z-10" />

        <div className="max-w-7xl mx-auto">
          <BlurReveal className="text-center mb-20">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-teal mb-4 block">
              Servicios
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
              ¿Qué puedo hacer <br />
              <span className="gradient-text">por tu negocio?</span>
            </h2>
            <p className="text-white/40 text-xl max-w-2xl mx-auto font-medium">
              Sin tecnicismos. Sin letra pequeña. Solo resultados.
            </p>
          </BlurReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <BlurReveal key={i} delay={i * 0.1}>
                <div className="glass-card p-10 h-full flex flex-col gap-6 bg-[#080808]/40 hover:border-brand-blue/30 transition-colors duration-500">
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center">
                    <service.icon size={20} className="text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-brand-blue mb-1">
                      {service.subtitle}
                    </p>
                    <h3 className="text-2xl font-black tracking-tight">{service.title}</h3>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed font-medium flex-1">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[11px] text-white/50">
                        <Check size={12} className="text-brand-teal shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </BlurReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRECIOS ────────────────────────────────────────────────────────── */}
      <section id="precios" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[150px] -z-10" />

        <div className="max-w-7xl mx-auto">
          <BlurReveal className="text-center mb-20">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-blue mb-4 block">
              Precios
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
              Propuesta clara. <br />
              <span className="gradient-text">Sin letra pequeña.</span>
            </h2>
            <p className="text-white/40 text-xl max-w-2xl mx-auto font-medium">
              Precios de lanzamiento activos ahora mismo. La propuesta completa está basada en el proyecto real de{" "}
              <a
                href="https://montes.vercel.app/propuesta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-teal hover:underline"
              >
                Café & Tortilla Montes
              </a>
              .
            </p>
          </BlurReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Plan Básico */}
            <BlurReveal delay={0}>
              <div className="glass-card p-10 flex flex-col gap-6 bg-[#080808]/40 h-full">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                    Plan Básico
                  </p>
                  <div className="flex items-end gap-2 mb-1">
                    <span className="text-5xl font-black tracking-tighter">390€</span>
                  </div>
                  <p className="text-sm text-white/30 line-through">antes 450€</p>
                </div>
                <p className="text-white/40 text-sm leading-relaxed">
                  Tu negocio online con todo lo esencial para aparecer en Google y convertir visitas en clientes.
                </p>
                <ul className="space-y-3 flex-1">
                  {planBasico.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[11px] text-white/60">
                      <Check size={12} className="text-brand-teal shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className="text-center px-6 py-3 border border-white/10 text-white font-black uppercase text-[10px] tracking-widest rounded-full hover:border-brand-blue/50 hover:bg-brand-blue/5 transition-all"
                >
                  Empezar
                </a>
              </div>
            </BlurReveal>

            {/* Plan Avanzado — destacado */}
            <BlurReveal delay={0.1}>
              <div className="glass-card p-10 flex flex-col gap-6 border-brand-blue/40 bg-brand-blue/5 h-full relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-brand-blue text-white text-[9px] font-black uppercase tracking-widest rounded-full">
                    Más popular
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-brand-blue mb-2">
                    Plan Avanzado
                  </p>
                  <div className="flex items-end gap-2 mb-1">
                    <span className="text-5xl font-black tracking-tighter">490€</span>
                  </div>
                  <p className="text-sm text-white/30 line-through">antes 600€</p>
                </div>
                <p className="text-white/40 text-sm leading-relaxed">
                  Añade un sistema de encargos o reservas online. Menos llamadas, más pedidos fuera de horario.
                </p>
                <ul className="space-y-3 flex-1">
                  {planAvanzado.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[11px] text-white/60">
                      <Check size={12} className="text-brand-teal shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className="text-center px-6 py-3 bg-brand-blue text-white font-black uppercase text-[10px] tracking-widest rounded-full hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)] transition-all hover:-translate-y-0.5"
                >
                  Empezar
                </a>
              </div>
            </BlurReveal>

            {/* Plan Completo */}
            <BlurReveal delay={0.2}>
              <div className="glass-card p-10 flex flex-col gap-6 bg-[#080808]/40 h-full">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-brand-teal mb-2">
                    Plan Completo
                  </p>
                  <div className="flex items-end gap-2 mb-1">
                    <span className="text-5xl font-black tracking-tighter">570€</span>
                  </div>
                  <p className="text-sm text-white/30 line-through">antes 700€</p>
                </div>
                <p className="text-white/40 text-sm leading-relaxed">
                  La solución más completa: emails automáticos al cliente y al negocio, y descarga del evento al calendario.
                </p>
                <ul className="space-y-3 flex-1">
                  {planCompleto.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[11px] text-white/60">
                      <Check size={12} className="text-brand-teal shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className="text-center px-6 py-3 border border-white/10 text-white font-black uppercase text-[10px] tracking-widest rounded-full hover:border-brand-teal/50 hover:bg-brand-teal/5 transition-all"
                >
                  Empezar
                </a>
              </div>
            </BlurReveal>
          </div>

          {/* Incluido en todos los planes */}
          <BlurReveal delay={0.3}>
            <div className="glass-card p-8 bg-[#080808]/40">
              <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-6 text-center">
                Incluido en todos los planes
              </p>
              <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
                {included.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-[11px] text-white/50">
                    <Check size={11} className="text-brand-teal shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </BlurReveal>
        </div>
      </section>

      {/* ── PORTFOLIO ──────────────────────────────────────────────────────── */}
      <PortfolioGrid />

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <FAQ />

      {/* ── CONTACTO ───────────────────────────────────────────────────────── */}
      <section id="contacto" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[150px] -z-10" />

        <div className="max-w-5xl mx-auto">
          <BlurReveal className="text-center mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-blue mb-4 block">
              Contacto
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[0.9]">
              ¿Tu negocio <br />
              <span className="gradient-text">podría estar aquí?</span>
            </h2>
            <p className="text-white/40 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              Cuéntame qué tienes entre manos. Reviso tu caso y te respondo en menos de 24h para ver si encajamos.
            </p>
          </BlurReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Formulario */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Contacto directo */}
            <div className="lg:col-span-2">
              <ContactLinks />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
