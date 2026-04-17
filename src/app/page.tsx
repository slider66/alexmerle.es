import { Suspense } from "react";
import { ShineCard } from "@/components/ShineCard";
import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";
import { ContactForm } from "@/components/ContactForm";
import { BlurReveal } from "@/components/ui/BlurReveal";
import { SuccessStories } from "@/components/SuccessStories";
import { ContactLinks } from "@/components/ContactLinks";
import { FAQ } from "@/components/FAQ";
import Image from "next/image";
import { Linkedin, Shield, Globe, Cpu, Layers, Check, Zap } from "lucide-react";

// ─── Datos estáticos ─────────────────────────────────────────────────────────

const services = [
  {
    icon: Globe,
    title: "Nivel 1: El Rescate",
    subtitle: "Desde 449€",
    description:
      "Para negocios invisibles o con webs 'fósiles'. Diagnóstico de rendimiento, limpieza técnica y SEO Local agresivo para recuperar el control de tu zona.",
    items: ["Diagnóstico de rendimiento real", "SEO Local de alto impacto", "WPO: Cargas en <1s"],
  },
  {
    icon: Cpu,
    title: "Nivel 2: La Evolución",
    subtitle: "Desde 699€",
    description:
      "Digitalización de procesos. Sistemas de reserva y pedidos que eliminan la dependencia del teléfono y actúan mientras el negocio descansa.",
    items: [
      "Automatización de reservas/pedidos",
      "Seguridad Hardened anti-spam",
      "Arquitectura Serverless eficiente",
    ],
  },
  {
    icon: Zap,
    title: "Nivel 3: El Club",
    subtitle: "Desde 1.199€",
    description:
      "Integración total 4.0. Conectamos tu web con CRM, pagos e IA operativa para maximizar la rentabilidad y eliminar cuellos de botella.",
    items: [
      "Fase de Análisis Previo ROI",
      "Agentes de IA y LLMs operativos",
      "Webhooks proactivos y automatización",
    ],
  },
];

const planBasico = [
  "Diagnóstico de rendimiento y salud técnica",
  "Rescate de identidad local en Google Maps",
  "Arquitectura optimizada para Core Web Vitals",
  "Diseño directo a conversión (Sin rellenos)",
  "Mantenimiento básico de seguridad incluido",
];

const planAvanzado = [
  "Todo lo de 'El Rescate' incluido",
  "Sistema de evolución: Reservas y pedidos 24/7",
  "Automatización de comunicación automatizada",
  "CMS ligero para gestión de disponibilidad",
  "Protección avanzada contra ataques y bots",
];

const planCompleto = [
  "Auditoría técnica de procesos e Ingeniería",
  "Integración de Agentes de IA y LLMs (GPT/Claude)",
  "Webhooks proactivos y automatizaciones Web 4.0",
  "Pasarelas de pago y lógica de negocio ad-hoc",
  "Consultoría estratégica y escalabilidad garantizada",
];

const included = [
  "Sin permanencia ni contratos obligatorios",
  "2 rondas de ajustes incluidas",
  "La web es tuya desde el primer día",
  "Publicación en internet incluida",
  "Hosting gratuito hasta ~10k visitas/mes",
];

// ─── Componente ───────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />

      {/* ── SERVICIOS ──────────────────────────────────────────────────────── */}
      <section
        id="servicios"
        className="py-32 px-6 relative overflow-hidden snap-start scroll-mt-16"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-teal/5 rounded-full blur-[150px] -z-10" />

        <div className="max-w-7xl mx-auto">
          <BlurReveal className="text-center mb-20">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-teal mb-4 block">
              Web Performance Club
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
              Rescatamos negocios <br />
              <span className="gradient-text">de la obsolescencia.</span>
            </h2>
            <p className="text-white/55 text-xl max-w-2xl mx-auto font-medium">
              No diseñamos webs &ldquo;bonitas&rdquo;. Construimos rendimiento operativo y captación
              de clientes real.
            </p>
          </BlurReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                  <p className="text-white/55 text-sm leading-relaxed font-medium flex-1">
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

          {/* Advisory SEO */}
          <BlurReveal delay={0.2} className="mt-12 max-w-4xl mx-auto">
            <div className="flex gap-4 items-start px-7 py-5 rounded-2xl border border-amber-500/15 bg-amber-500/5">
              <span className="text-amber-400/70 text-lg leading-none mt-0.5 shrink-0">⚠</span>
              <div className="space-y-1">
                <p className="text-[11px] font-black uppercase tracking-widest text-amber-400/60">
                  Sobre el posicionamiento SEO
                </p>
                <p className="text-sm text-white/45 leading-relaxed">
                  Aparecer en los primeros resultados de Google lleva tiempo — entre 3 y 6 meses
                  para keywords con algo de competencia. Lo que construimos desde el primer día está
                  optimizado para SEO local, y te doy pautas concretas para adelantar el proceso.
                  Pero los resultados orgánicos no se consiguen de la noche a la mañana: cualquiera
                  que te diga lo contrario te está mintiendo.
                </p>
              </div>
            </div>
          </BlurReveal>
        </div>
      </section>

      {/* ── VS AGENCIA ─────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <BlurReveal className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
              WebPC vs <span className="gradient-text">Agencias Estándar</span>
            </h2>
          </BlurReveal>

          <BlurReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  agencia: "Intervención de comerciales que venden humo y plantillas genéricas.",
                  yo: "Interlocución directa con los dos socios especialistas que pican el código.",
                },
                {
                  agencia: "Responsabilidad diluida. El código suele ser 'rehén' de una cuota.",
                  yo: "Responsabilidad total. El código es tuyo al 100% desde el primer día.",
                },
                {
                  agencia:
                    "Arquitectura obsoleta. Plantillas de 2018 parcheadas que frenan tu SEO.",
                  yo: "Arquitectura Web 4.0. Lista para integraciones de IA y automatización proactiva.",
                },
                {
                  agencia: "Soporte basado en tickets (Ticket #4521) y esperas de 48h.",
                  yo: "Canal Premium. WhatsApp directo con los socios, sin intermediarios.",
                },
              ].map((item, i) => (
                <div key={i} className="glass-card p-7 bg-[#080808]/40 flex flex-col gap-5">
                  <div className="flex gap-3 items-start">
                    <span className="text-red-400/60 text-lg leading-none mt-0.5">✕</span>
                    <p className="text-sm text-white/35 leading-relaxed">{item.agencia}</p>
                  </div>
                  <div className="flex gap-3 items-start border-t border-white/5 pt-5">
                    <span className="text-brand-teal text-lg leading-none mt-0.5">✓</span>
                    <p className="text-sm text-white/70 leading-relaxed font-medium">{item.yo}</p>
                  </div>
                </div>
              ))}
            </div>
          </BlurReveal>
        </div>
      </section>

      {/* ── PROCESO ────────────────────────────────────────────────────────── */}
      <section id="proceso" className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <BlurReveal className="text-center mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-blue mb-4 block">
              Cómo trabajamos
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
              De idea a web publicada, <span className="gradient-text">sin complicaciones.</span>
            </h2>
          </BlurReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Hablamos",
                time: "Día 1",
                desc: "Llamada de 15-20 minutos sin compromiso. Me cuentas qué tienes y qué necesitas — en esa misma llamada sé lo que tu negocio necesita.",
              },
              {
                step: "02",
                title: "Propuesta",
                time: "En 24h",
                desc: "Te mando propuesta con precio cerrado antes de que acabe el día siguiente. Sin presupuestos abiertos ni sorpresas al final.",
              },
              {
                step: "03",
                title: "Construimos",
                time: "Rápido",
                desc: "Diseño y desarrollo. Te voy enseñando el avance para que puedas pedir ajustes antes de que esté terminado.",
              },
              {
                step: "04",
                title: "Publicamos",
                time: "Sin demoras",
                desc: "Tu web en marcha. Tienes dos sesiones de ajustes gratuitas para afinar lo que haga falta — sin esperar turno.",
              },
            ].map((item, i) => (
              <BlurReveal key={i} delay={i * 0.1}>
                <ShineCard className="p-7 rounded-2xl bg-white/[0.05] border border-white/10 h-full flex flex-col gap-4 hover:border-brand-blue/40 hover:bg-white/[0.07] transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <span className="text-6xl font-black leading-none select-none gradient-text opacity-50">
                      {item.step}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-teal/70 border border-brand-teal/20 bg-brand-teal/5 px-3 py-1 rounded-full mt-1">
                      {item.time}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-white">{item.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                  {i < 3 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-white/30 text-xl z-10">
                      →
                    </div>
                  )}
                </ShineCard>
              </BlurReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRECIOS ────────────────────────────────────────────────────────── */}
      <section id="precios" className="py-32 px-6 relative overflow-hidden snap-start scroll-mt-16">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[150px] -z-10" />

        <div className="max-w-7xl mx-auto">
          <BlurReveal className="text-center mb-20">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-blue mb-4 block">
              Inversión en Rendimiento
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
              Sin cuotas ocultas. <br />
              <span className="gradient-text">Sin letra pequeña.</span>
            </h2>
            <p className="text-white/55 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              Propuestas reales basadas en el ROI de tu negocio. No pagas por &ldquo;diseño&rdquo;,
              pagas por eficiencia técnica y captación de clientes.
            </p>
            <p className="text-white/50 text-sm max-w-xl mx-auto mt-3 leading-relaxed">
              Cada proyecto requiere una auditoría técnica previa para identificar cuellos de
              botella. El objetivo no es que tu web se vea bien, es que tu negocio funcione mejor.
            </p>
          </BlurReveal>

          <BlurReveal delay={0.15}>
            <div className="max-w-2xl mx-auto mb-12 glass-card p-7 bg-[#080808]/40 border-white/5 text-center space-y-2">
              <p className="text-white/60 text-sm leading-relaxed">
                Cada mes sin web son clientes que van a tu competencia que sí aparece en Google.
              </p>
              <p className="text-white/40 text-sm">
                Con una agencia: 2–3 meses de espera + 2.000€.
              </p>
              <p className="text-white font-black text-sm">
                Inversión:{" "}
                <span className="gradient-text">resultados en una semana, desde 449€</span>, y el
                código es tuyo.
              </p>
            </div>
          </BlurReveal>

          <div className="flex items-center gap-3 justify-center mb-8 text-[10px] font-black uppercase tracking-widest text-white/50">
            <span className="w-8 h-px bg-white/30" />
            Precios orientativos · cada proyecto es diferente
            <span className="w-8 h-px bg-white/30" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Plan Básico */}
            <BlurReveal delay={0}>
              <div className="glass-card p-10 flex flex-col gap-6 bg-[#080808]/40 h-full">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                    Nivel 1 — Existencia Digital Profesional
                  </p>
                  <div className="flex items-end gap-2 mb-1">
                    <span className="text-5xl font-black tracking-tighter">449€</span>
                  </div>
                  <p className="text-[10px] text-white/20 font-medium">+ IVA</p>
                </div>
                <p className="text-white/55 text-sm leading-relaxed">
                  Deja de ser invisible. Una imagen profesional que domina tu zona: apareces en
                  Google, generas confianza inmediata y recibes contactos directos.
                </p>
                <ul className="space-y-3 flex-1">
                  {planBasico.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[11px] text-white/60">
                      <Check size={12} className="text-brand-teal shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#contacto" className="btn-primary text-center px-6 py-3 text-[10px]">
                  Empezar con este plan
                </a>
              </div>
            </BlurReveal>

            {/* Plan Avanzado — destacado */}
            <BlurReveal delay={0.1}>
              <div className="relative pt-5 h-full flex flex-col">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-4 py-1.5 bg-brand-blue text-white text-[9px] font-black uppercase tracking-widest rounded-full whitespace-nowrap">
                    Más popular
                  </span>
                </div>
                <div className="glass-card p-10 flex flex-col gap-6 border-brand-blue/40 bg-brand-blue/5 flex-1">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-brand-blue mb-2">
                      Nivel 2 — Productividad y Automatización
                    </p>
                    <div className="flex items-end gap-2 mb-1">
                      <span className="text-5xl font-black tracking-tighter">699€</span>
                    </div>
                    <p className="text-[10px] text-white/20 font-medium">+ IVA</p>
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed">
                    Recupera tu tiempo. El negocio funciona mientras duermes: reservas o pedidos
                    autogestionados y confirmaciones automáticas sin errores.
                  </p>
                  <ul className="space-y-3 flex-1">
                    {planAvanzado.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[11px] text-white/60">
                        <Check size={12} className="text-brand-teal shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="#contacto" className="btn-primary text-center px-6 py-3 text-[10px]">
                    Empezar con este plan
                  </a>
                </div>
              </div>
            </BlurReveal>

            {/* Plan Completo */}
            <BlurReveal delay={0.2}>
              <div className="glass-card p-10 flex flex-col gap-6 bg-[#080808]/40 h-full">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-brand-teal mb-2">
                    Nivel 3 — Digitalización e Ingeniería
                  </p>
                  <div className="flex items-end gap-2 mb-1">
                    <span className="text-4xl font-black tracking-tighter">Desde 1.199€</span>
                  </div>
                  <p className="text-[10px] text-white/20 font-medium">
                    + IVA · Requiere Fase de Análisis Previo
                  </p>
                </div>
                <p className="text-white/55 text-sm leading-relaxed">
                  Escala tu modelo de negocio. Soluciones ad-hoc integradas con tus herramientas
                  para eliminar cuellos de botella y maximizar el ROI.
                </p>
                <ul className="space-y-3 flex-1">
                  {planCompleto.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[11px] text-white/60">
                      <Check size={12} className="text-brand-teal shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#contacto" className="btn-primary text-center px-6 py-3 text-[10px]">
                  Pedir presupuesto
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

          {/* Mantenimiento y soporte */}
          <BlurReveal delay={0.4}>
            <div className="mt-8 space-y-4">
              <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-8">
                ¿Ya tienes tu web? Así no me llamas solo cuando algo falla.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* SAR - Suscripción Alto Rendimiento */}
                <div className="glass-card p-8 bg-[#080808]/40 flex flex-col gap-4 border-brand-teal/20">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-brand-teal mb-2">
                      Suscripción Alto Rendimiento (SAR)
                    </p>
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-black tracking-tighter">150€</span>
                      <span className="text-white/30 text-sm mb-1">/mes</span>
                    </div>
                    <p className="text-[10px] text-white/25 mt-0.5">
                      + IVA · Tranquilidad total y optimización constante
                    </p>
                    <p className="text-[11px] text-brand-teal/70 font-black mt-1">
                      Revisión trimestral de seguridad y velocidad incluida.
                    </p>
                  </div>
                  <ul className="space-y-2 flex-1">
                    {[
                      "3 sesiones de ajustes al mes incluidas",
                      "Optimización constante de Core Web Vitals",
                      "Revisión trimestral de seguridad y velocidad",
                      "Monitorización proactiva 24/7 de caídas",
                      "Soporte prioritario por WhatsApp directo",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[11px] text-white/50">
                        <Check size={11} className="text-brand-teal shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contacto"
                    className="text-center px-6 py-3 border border-brand-teal/30 text-brand-teal font-black uppercase text-[10px] tracking-widest rounded-full hover:bg-brand-teal/5 transition-all"
                  >
                    Contratar
                  </a>
                </div>

                {/* Ad-hoc */}
                <div className="glass-card p-8 bg-[#080808]/40 flex flex-col gap-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                      Intervención ad-hoc
                    </p>
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-black tracking-tighter">50€</span>
                      <span className="text-white/30 text-sm mb-1">/modificación</span>
                    </div>
                    <p className="text-[10px] text-white/25 mt-1">
                      + IVA · Sin suscripción, cuando lo necesites
                    </p>
                    <p className="text-[10px] text-brand-teal/60 font-black">
                      Con mantenimiento activo: incluido en las 2 sesiones
                    </p>
                  </div>
                  <ul className="space-y-2 flex-1">
                    {[
                      "Cambio o actualización puntual",
                      "Corrección de incidencias",
                      "Cualquier ajuste fuera de plan",
                      "Presupuesto cerrado antes de empezar",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[11px] text-white/50">
                        <Check size={11} className="text-brand-teal shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contacto"
                    className="text-center px-6 py-3 border border-white/10 text-white font-black uppercase text-[10px] tracking-widest rounded-full hover:border-white/30 transition-all"
                  >
                    Solicitar
                  </a>
                </div>

                {/* Proyecto de terceros */}
                <div className="glass-card p-8 bg-[#080808]/40 flex flex-col gap-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                      Proyecto de terceros
                    </p>
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-black tracking-tighter">150€</span>
                      <span className="text-white/30 text-sm mb-1">auditoría</span>
                    </div>
                    <p className="text-[10px] text-white/25 mt-1">
                      + IVA · presupuesto a medida según el alcance
                    </p>
                  </div>
                  <ul className="space-y-2 flex-1">
                    {[
                      "Análisis del código y arquitectura existente",
                      "Detección de problemas y mejoras posibles",
                      "Propuesta de cambios u optimización",
                      "Presupuesto detallado antes de tocar nada",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[11px] text-white/50">
                        <Check size={11} className="text-brand-teal shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contacto"
                    className="text-center px-6 py-3 border border-white/10 text-white font-black uppercase text-[10px] tracking-widest rounded-full hover:border-white/30 transition-all"
                  >
                    Consultar
                  </a>
                </div>
              </div>
            </div>
          </BlurReveal>
        </div>
      </section>

      {/* ── EL EQUIPO ──────────────────────────────────────────────────────── */}
      <section
        id="sobre-mi"
        className="py-32 px-6 relative overflow-hidden snap-start scroll-mt-16"
      >
        <div className="max-w-5xl mx-auto space-y-20">
          {/* Intro */}
          <BlurReveal className="text-center space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-blue block">
              Resistencia Técnica
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
              Doce años diagnosticando <br />
              <span className="gradient-text">y reparando sistemas.</span>
            </h2>
            <p className="text-lg text-white/50 leading-relaxed font-medium max-w-2xl mx-auto">
              La mayoría de las agencias rotan a su personal cada 6 meses. Nosotros llevamos
              colaborando desde los <strong className="text-white/80">16 años</strong>. Venimos de
              la electrónica y la reparación de equipos: sabemos lo que falla por dentro antes de
              tocar una sola línea de código. Eso es lo que diferencia un diagnóstico real de un
              presupuesto de agencia.
            </p>
          </BlurReveal>

          {/* Cards del equipo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Alejandro */}
            <BlurReveal>
              <div className="glass-card overflow-hidden rounded-3xl flex flex-col">
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src="/alex.webp"
                    alt="Alejandro Merle — Co-fundador WebPC"
                    fill
                    className="object-cover object-top grayscale"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5">
                    <p className="text-sm font-black uppercase tracking-widest text-white">
                      Alejandro Merle
                    </p>
                    <p className="text-[10px] text-white/50 uppercase tracking-widest">
                      Web · SEO · Seguridad · IA
                    </p>
                  </div>
                </div>
                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <p className="text-sm text-white/50 leading-relaxed">
                    Analista de ciberseguridad en entorno corporativo. Arquitectura web, SEO técnico
                    y automatización con IA operativa.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/30">
                      <Image
                        src="/telefonica-tech.png"
                        alt="Telefónica Tech"
                        width={120}
                        height={28}
                        className="h-5 w-auto brightness-0 invert opacity-80"
                      />
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-[10px] font-black uppercase tracking-widest text-brand-teal">
                      <Zap size={10} /> CompTIA Certified
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-[10px] font-black uppercase tracking-widest text-brand-teal">
                      <Cpu size={10} /> Máster IA · Univ. Isabel I
                    </div>
                    <a
                      href="https://es.linkedin.com/in/alejandromerle"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0077b5]/20 border border-[#0077b5]/40 text-[10px] font-black uppercase tracking-widest text-[#0077b5] hover:bg-[#0077b5]/30 transition-all active:scale-95"
                    >
                      <Linkedin size={10} /> LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </BlurReveal>

            {/* Victor */}
            <BlurReveal delay={0.15}>
              <div className="glass-card overflow-hidden rounded-3xl flex flex-col">
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src="/victor.webp"
                    alt="Victor Perlado — Co-fundador WebPC"
                    fill
                    className="object-cover scale-150 object-[50%_35%]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5">
                    <p className="text-sm font-black uppercase tracking-widest text-white">
                      Victor Perlado
                    </p>
                    <p className="text-[10px] text-white/50 uppercase tracking-widest">
                      Electrónica · Hardware · Sistemas
                    </p>
                  </div>
                </div>
                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <p className="text-sm text-white/50 leading-relaxed">
                    Técnico especialista en electrónica y mantenimiento de sistemas. La capa física
                    que garantiza que nada falla en producción.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-[10px] font-black uppercase tracking-widest text-brand-blue">
                      <Cpu size={10} /> Hardware Specialist
                    </div>
                    <a
                      href="https://www.linkedin.com/in/victor-perlado-09481554/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0077b5]/20 border border-[#0077b5]/40 text-[10px] font-black uppercase tracking-widest text-[#0077b5] hover:bg-[#0077b5]/30 transition-all active:scale-95"
                    >
                      <Linkedin size={10} /> LinkedIn
                    </a>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-[10px] font-black uppercase tracking-widest text-brand-teal">
                      <Cpu size={10} /> Máster IA · Univ. Isabel I
                    </div>
                  </div>
                </div>
              </div>
            </BlurReveal>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ──────────────────────────────────────────────────────── */}
      <Suspense
        fallback={
          <section className="py-32 px-6">
            <div className="max-w-7xl mx-auto text-center">
              <p className="text-white/20 text-sm font-medium uppercase tracking-widest">
                Cargando proyectos…
              </p>
            </div>
          </section>
        }
      >
        <PortfolioGrid />
      </Suspense>

      {/* ── CASOS DE ÉXITO ─────────────────────────────────────────────────── */}
      <SuccessStories />

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <FAQ />

      {/* ── CONTACTO ───────────────────────────────────────────────────────── */}
      <section
        id="contacto"
        className="py-32 px-6 relative overflow-hidden snap-start scroll-mt-16"
      >
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[150px] -z-10" />

        <div className="max-w-5xl mx-auto">
          <BlurReveal className="text-center mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-blue mb-4 block">
              Contacto
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[0.9]">
              ¿Para cuándo <br />
              <span className="gradient-text">necesitas tu web?</span>
            </h2>
            <p className="text-white/55 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              Escríbeme hoy. Propuesta en 24h, sin esperas. Acepto 3–4 proyectos al mes — comprueba
              si hay hueco.
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
