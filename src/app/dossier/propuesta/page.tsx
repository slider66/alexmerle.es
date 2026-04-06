import type { Metadata } from "next";
import { DossierPrintButton } from "@/components/DossierPrintButton";
import { DossierNav } from "@/components/DossierNav";

const NAV_SECTIONS = [
  { id: "quien",     label: "Quién soy"       },
  { id: "problema",  label: "El problema"      },
  { id: "cambio",    label: "Antes / Después"  },
  { id: "etapas",    label: "Las 3 etapas"     },
  { id: "proyectos", label: "Proyectos"        },
  { id: "precios",        label: "Precios"          },
  { id: "presupuestador", label: "Presupuestador"   },
  { id: "contacto",       label: "Contacto"         },
];
import {
  TrendingUp,
  Smartphone,
  Globe,
  Truck,
  Lock,
  Plane,
  Check,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { DossierPresupuestador } from "@/components/DossierPresupuestador";

export const metadata: Metadata = {
  title: "Propuesta Comercial — Alex Merle",
  description: "Servicios de consultoría digital para negocios locales: presencia online, agenda, automatización y captación de clientes. Norte de Madrid.",
  robots: { index: true, follow: true },
};

// ── Datos ────────────────────────────────────────────────────────────────────

const beforeAfter = [
  {
    before: "No apareces en Google cuando alguien te busca",
    after: "Tus clientes potenciales te encuentran antes que a la competencia",
  },
  {
    before: "El teléfono suena con las mismas preguntas de siempre",
    after: "Un sistema responde por ti fuera de horario y en festivos",
  },
  {
    before: "Las citas y reservas son un caos de llamadas y WhatsApps",
    after: "Una agenda online que el cliente reserva solo, sin que intervengas",
  },
  {
    before: "Tu web es una tarjeta de visita que nadie lee",
    after: "Una herramienta que capta contactos y genera encargos",
  },
  {
    before: "Cada semana se te escapa algún cliente por no contestar a tiempo",
    after: "Un buzón centralizado donde no se pierde nada",
  },
  {
    before: "Crecer te da miedo porque ya no puedes con lo que tienes",
    after: "Con los procesos en orden, crecer es cuestión de decidirlo",
  },
];

const stages = [
  {
    num: "01",
    title: "Diagnóstico",
    sub: "Ver dónde se escapa el dinero",
    body: "Antes de mover nada, miramos juntos cómo está el negocio hoy. Cómo te encuentran los clientes (o cómo no te encuentran), qué procesos te roban más tiempo y dónde hay oportunidades claras sin explotar. Sin papeles, sin presentaciones.",
    result: "En la primera semana ya tienes un mapa claro de por qué no crece lo que debería.",
    color: "brand-blue",
  },
  {
    num: "02",
    title: "Ejecución",
    sub: "Montamos lo que hace falta",
    body: "Según lo que hayamos detectado: optimizamos tu ficha de Google, montamos la agenda online, ordenamos el buzón, mejoramos lo que tienes o construimos lo que falta. Nada genérico. Solo lo que tiene sentido para tu negocio.",
    result: "En las primeras semanas el teléfono empieza a sonar más. Las consultas entran más ordenadas.",
    color: "brand-teal",
  },
  {
    num: "03",
    title: "Crecimiento",
    sub: "Ahora sí, a por más",
    body: "Con la base puesta, tiene sentido ir a por más. Más visibilidad, más canales, más automatización. Esta etapa es la que más gusta porque los resultados se ven directamente en la cuenta.",
    result: "Tomas decisiones de crecimiento sin vértigo porque tienes la estructura para responder.",
    color: "brand-blue",
  },
];

const projects = [
  {
    icon: TrendingUp,
    name: "Hierros Merle",
    sector: "Sector Industrial",
    metric: "+1.500",
    metricLabel: "Visitas orgánicas / mes",
    badge: "En 6 días",
    desc: "Empresa familiar desde 1993 sin presencia digital útil. Renovación completa de la web orientada a SEO local. Resultado: más de 1.500 visitas orgánicas al mes en 6 días desde el lanzamiento.",
    quote: "Llevamos treinta años sin necesitar internet. Ahora nos llaman clientes que ni sabíamos que existían.",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/20",
  },
  {
    icon: Smartphone,
    name: "Café & Tortilla Montes",
    sector: "Hostelería Local",
    metric: "100%",
    metricLabel: "Digitalización funcional",
    badge: "En 7 días",
    desc: "Sustitución de la web de presentación por una herramienta real: carta digital + sistema de encargos automatizado vía WhatsApp. Digitalización completa en 7 días.",
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    border: "border-brand-teal/20",
  },
  {
    icon: Truck,
    name: "Lolo Transportes",
    sector: "Logística",
    metric: "−40%",
    metricLabel: "Coste por envío",
    badge: "Plataforma activa",
    desc: "Plataforma de transporte de carga con comparación de precios en tiempo real. Ahorro de hasta un 40% aprovechando rutas de retorno.",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/20",
  },
  {
    icon: Plane,
    name: "Fotografía Aérea Madrid",
    sector: "Drones / AESA",
    metric: "Top 3",
    metricLabel: "Google local",
    badge: "Posicionado",
    desc: "Web posicionada en búsquedas locales de fotografía aérea profesional HDR y 4K en Madrid. Certificación AESA integrada como diferencial de confianza.",
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    border: "border-brand-teal/20",
  },
  {
    icon: Globe,
    name: "Metal Line",
    sector: "Ingeniería de Precisión",
    metric: "✓",
    metricLabel: "Presencia digital activa",
    badge: "En producción",
    desc: "Plataforma corporativa para empresa de transformación metálica. Enfoque en credibilidad industrial y posicionamiento SEO sectorial.",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/20",
  },
  {
    icon: Lock,
    name: "iJornada",
    sector: "SaaS · Gestión Laboral",
    metric: "SaaS",
    metricLabel: "Plataforma privada",
    badge: "Confidencial",
    desc: "Plataforma SaaS de gestión de asistencia y cumplimiento normativo laboral con panel de control avanzado. Proyecto privado.",
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    border: "border-brand-teal/20",
  },
];

const plans = [
  {
    name: "Módulo individual",
    price: "150 € / módulo",
    desc: "Cada módulo es independiente y tiene precio fijo. Elige solo lo que necesitas.",
    items: [
      "Google Business optimizado",
      "Buzón centralizado",
      "Agenda online",
      "Landing de captación",
      "Auditoría SEO con informe",
    ],
    highlight: false,
  },
  {
    name: "Web completa",
    price: "Desde 449 €",
    desc: "Web profesional con SEO local, carta digital, Google Maps y contacto directo.",
    items: [
      "Diseño responsive",
      "SEO local optimizado",
      "Google Maps integrado",
      "WhatsApp + llamada directa",
    ],
    highlight: true,
  },
  {
    name: "Web + Reservas",
    price: "Desde 599 €",
    desc: "Todo lo anterior más sistema de encargos o reservas con confirmación automática.",
    items: [
      "Sistema de citas online",
      "Confirmación automática",
      "Selección de fecha y hora",
      "Activable cuando quieras",
    ],
    highlight: false,
  },
];

// ── Componente ───────────────────────────────────────────────────────────────

export default function DossierPage() {
  return (
    <>
      {/* Print styles: convierte a A4 blanco, oculta nav/footer/botón */}
      <style>{`
        @media print {
          nav, footer, [data-backtotop], [data-scrollprogress], [data-cookiebanner] { display: none !important; }
          body { background: #fff !important; color: #111 !important; }
          .glass-card { background: #f8f8f8 !important; border-color: #e0e0e0 !important; box-shadow: none !important; backdrop-filter: none !important; }
          .gradient-text { background: none !important; -webkit-text-fill-color: #1a56db !important; }
          .print-hide { display: none !important; }
          .print-white { color: #111 !important; }
          .print-muted { color: #555 !important; }
          @page {
            margin: 18mm 15mm 22mm 15mm;
            size: A4;
            @bottom-center {
              content: "Alex Merle  ·  alex@merle.es  ·  +34 600 367 217  ·  alexmerle.es";
              font-family: ui-sans-serif, system-ui, sans-serif;
              font-size: 8px;
              font-weight: 700;
              letter-spacing: 0.08em;
              color: #aaa;
              border-top: 0.5px solid #e0e0e0;
              padding-top: 6px;
              width: 100%;
              text-align: center;
            }
            @bottom-right {
              content: "p. " counter(page) " / " counter(pages);
              font-family: ui-sans-serif, system-ui, sans-serif;
              font-size: 8px;
              font-weight: 700;
              color: #aaa;
              padding-top: 6px;
            }
          }
          .print-break { page-break-before: always; }
          .print-cover { page-break-after: always; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; }
          section { page-break-inside: avoid; }
        }
      `}</style>

      <main className="min-h-screen pb-32">

        {/* ── HERO / PORTADA ────────────────────────────────────────────── */}
        <section className="print-cover relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-blue/8 rounded-full blur-[150px] -z-10" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-teal/6 rounded-full blur-[150px] -z-10" />

          <div className="max-w-4xl mx-auto">
            <div className="flex items-start justify-between gap-6 mb-12">
              <span className="shiny-badge print-hide">Propuesta comercial · Uso privado</span>
              <DossierPrintButton />
            </div>

            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-teal mb-4 block print-white">
              Alex Merle · Consultor IT Norte de Madrid
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[1.05]">
              Tu negocio visible,{" "}
              <span className="gradient-text">ordenado y creciendo.</span>
            </h1>
            <p className="text-white/55 text-xl max-w-2xl font-medium leading-relaxed print-muted">
              Detecto dónde pierdes clientes y facturación, y lo resuelvo con herramientas concretas.
              Sin agencias, sin proyectos eternos, sin letra pequeña.
            </p>
          </div>
        </section>

        <DossierNav sections={NAV_SECTIONS} title="Propuesta Comercial · Alex Merle" />

        {/* ── SOBRE ALEX ────────────────────────────────────────────────── */}
        <section id="quien" className="py-16 px-6 print-break scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-10 bg-[#080808]/40 flex flex-col md:flex-row gap-10 items-start">
              <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0">
                <span className="text-2xl font-black text-brand-blue">AM</span>
              </div>
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block mb-1 print-muted">
                    Quién hay detrás
                  </span>
                  <h2 className="text-2xl font-black tracking-tight">Alejandro Merle</h2>
                </div>
                <p className="text-white/55 text-sm leading-relaxed font-medium print-muted">
                  Tengo formación en Informática, Telecomunicaciones y un máster en Inteligencia
                  Artificial. Trabajo en Telefónica Tech en el área de Protección del Riesgo
                  Digital (DRP), lo que me da una visión técnica poco habitual sobre cómo los
                  negocios están expuestos en internet y dónde pierden oportunidades sin saberlo.
                </p>
                <p className="text-white/55 text-sm leading-relaxed font-medium print-muted">
                  Trabajo como autónomo. Sin intermediarios. Quien te hace la propuesta es quien
                  ejecuta el trabajo. Y porque no tengo la estructura de costes de una agencia,
                  puedo ofrecer soluciones que antes solo estaban al alcance de quien podía pagar
                  equipos enteros —a precios que tienen sentido para un negocio local.
                </p>
                <div className="flex flex-wrap gap-4 pt-2 text-[11px] text-white/40 font-medium print-muted">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={12} className="text-brand-blue" />
                    Norte de Madrid · San Agustín de Guadalix y alrededores
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Mail size={12} className="text-brand-teal" />
                    alex@merle.es
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Phone size={12} className="text-brand-blue" />
                    +34 600 367 217
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── EL PROBLEMA ───────────────────────────────────────────────── */}
        <section id="problema" className="py-16 px-6 print-break scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-4 block print-muted">
              El problema
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
              El Dueño <span className="gradient-text">Orquesta.</span>
            </h2>
            <p className="text-white/55 text-lg font-medium leading-relaxed mb-4 print-muted">
              Tienes un negocio que funciona, pero tú llevas todo: atiendes el teléfono, gestionas
              los pedidos, respondes WhatsApps a las once de la noche y encima tienes que pensar en
              cómo conseguir más clientes. Eres el director, el músico y el afinador a la vez.
            </p>
            <p className="text-white/70 text-lg font-bold leading-relaxed print-white">
              Trabajas más horas que nadie, pero el negocio no crece al ritmo que debería.
              No porque trabajes mal, sino porque nadie puede crecer mientras apaga fuegos todo el día.
            </p>
            <div className="mt-6 p-5 rounded-xl border border-white/8 bg-white/[0.03]">
              <p className="text-white/45 text-sm font-medium leading-relaxed print-muted">
                Si pierdes 3 o 4 consultas a la semana por no contestar a tiempo —o porque no apareces cuando alguien te busca en Google— eso son entre{" "}
                <span className="text-white/70 font-bold">300 y 600 € al mes que no llegan</span>.
                No de golpe. Sin que nadie te avise. Simplemente, van a otro.
              </p>
            </div>
          </div>
        </section>

        {/* ── ANTES / DESPUÉS ───────────────────────────────────────────── */}
        <section id="cambio" className="py-16 px-6 print-break scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-4 block print-muted">
              El cambio
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-10">
              Antes y después. <span className="gradient-text">Así de claro.</span>
            </h2>
            <div className="space-y-3">
              {beforeAfter.map((row, i) => (
                <div
                  key={i}
                  className="glass-card bg-[#080808]/40 grid grid-cols-1 md:grid-cols-2 overflow-hidden"
                  style={{ borderRadius: "1rem" }}
                >
                  <div className="p-5 md:border-r border-white/5 flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 shrink-0 mt-2" />
                    <p className="text-white/40 text-sm font-medium leading-relaxed print-muted">
                      {row.before}
                    </p>
                  </div>
                  <div className="p-5 flex items-start gap-3 bg-brand-teal/[0.03]">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0 mt-2" />
                    <p className="text-white/75 text-sm font-semibold leading-relaxed print-white">
                      {row.after}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3 ETAPAS ──────────────────────────────────────────────────── */}
        <section id="etapas" className="py-16 px-6 print-break scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-4 block print-muted">
              Cómo trabajamos
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-10">
              Las 3 etapas <span className="gradient-text">del trabajo.</span>
            </h2>
            <div className="space-y-6">
              {stages.map((s) => (
                <div key={s.num} className="glass-card p-8 bg-[#080808]/40">
                  <div className="flex items-start gap-6">
                    <span
                      className={`text-5xl font-black leading-none shrink-0 ${
                        s.color === "brand-blue" ? "text-brand-blue/20" : "text-brand-teal/20"
                      }`}
                    >
                      {s.num}
                    </span>
                    <div className="space-y-3 flex-1">
                      <div>
                        <span
                          className={`text-[10px] font-black uppercase tracking-widest block mb-1 ${
                            s.color === "brand-blue" ? "text-brand-blue" : "text-brand-teal"
                          }`}
                        >
                          {s.sub}
                        </span>
                        <h3 className="text-xl font-black tracking-tight">{s.title}</h3>
                      </div>
                      <p className="text-white/50 text-sm leading-relaxed font-medium print-muted">
                        {s.body}
                      </p>
                      <div className="flex items-center gap-2 pt-1">
                        <Check size={13} className="text-brand-teal shrink-0" />
                        <p className="text-white/65 text-[13px] font-semibold print-white">
                          {s.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROYECTOS ─────────────────────────────────────────────────── */}
        <section id="proyectos" className="py-16 px-6 print-break scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-4 block print-muted">
              Proyectos realizados
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-10">
              Resultados que <span className="gradient-text">hablan por sí solos.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((p) => (
                <div key={p.name} className="glass-card p-7 bg-[#080808]/40 flex flex-col gap-5">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${p.bg} border ${p.border}`}
                    >
                      <p.icon size={18} className={p.color} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/35 block print-muted">
                        {p.sector}
                      </span>
                      <h3 className="text-lg font-black tracking-tight leading-tight">{p.name}</h3>
                    </div>
                  </div>
                  <div>
                    <span className={`text-4xl font-black tracking-tighter leading-none ${p.color}`}>
                      {p.metric}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block mt-1 print-muted">
                      {p.metricLabel}
                    </span>
                    <span className="inline-flex items-center gap-1.5 mt-2 text-[10px] font-black uppercase tracking-widest text-emerald-400/70 border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-1 rounded-full">
                      <span className="w-1 h-1 rounded-full bg-emerald-400" />
                      {p.badge}
                    </span>
                  </div>
                  <p className="text-white/45 text-xs leading-relaxed font-medium mt-auto border-t border-white/5 pt-4 print-muted">
                    {p.desc}
                  </p>
                  {"quote" in p && p.quote && (
                    <blockquote className="border-l-2 border-white/10 pl-3 mt-3">
                      <p className="text-white/35 text-[11px] italic leading-relaxed font-medium print-muted">
                        &ldquo;{p.quote}&rdquo;
                      </p>
                    </blockquote>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PLANES ────────────────────────────────────────────────────── */}
        <section id="precios" className="py-16 px-6 print-break scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-4 block print-muted">
              Precios orientativos
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
              Sin letra pequeña, <span className="gradient-text">sin sorpresas.</span>
            </h2>
            <p className="text-white/50 text-base font-medium mb-10 print-muted">
              Pago dividido: 50% al arrancar, 50% a la entrega. Sin cuotas mensuales. El código es tuyo desde el primer día.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`glass-card p-7 bg-[#080808]/40 flex flex-col gap-5 ${
                    plan.highlight ? "border-brand-blue/30" : ""
                  }`}
                >
                  {plan.highlight && (
                    <span className="inline-block w-fit text-[9px] font-black uppercase tracking-widest text-brand-blue border border-brand-blue/30 bg-brand-blue/10 px-2.5 py-1 rounded-full -mt-1">
                      Más popular
                    </span>
                  )}
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/35 block mb-1 print-muted">
                      {plan.name}
                    </span>
                    <p className="text-3xl font-black tracking-tighter text-white">{plan.price}</p>
                    <p className="text-[11px] text-brand-teal font-bold mt-0.5">+ IVA</p>
                  </div>
                  <p className="text-white/45 text-xs leading-relaxed font-medium print-muted">
                    {plan.desc}
                  </p>
                  <ul className="space-y-2 mt-auto">
                    {plan.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[11px] text-white/50 print-muted">
                        <Check size={11} className="text-brand-teal shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-white/35 text-xs mt-6 font-medium print-muted">
              Los módulos individuales (Google Business, buzón, agenda) parten de 150 € + IVA. Los packs combinados se negocian a medida.
            </p>
          </div>
        </section>

        {/* ── PRESUPUESTADOR ────────────────────────────────────────────── */}
        <section id="presupuestador" className="py-16 px-6 print-break scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-4 block">
              Calcula tu presupuesto
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-3">
              ¿Qué necesita <span className="gradient-text">tu negocio?</span>
            </h2>
            <p className="text-white/45 text-base font-medium mb-10">
              Marca lo que te falta. El presupuesto se calcula solo.
            </p>
            <DossierPresupuestador />
          </div>
        </section>

        {/* ── CTA FINAL ─────────────────────────────────────────────────── */}
        <section id="contacto" className="py-16 px-6 print-break scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-10 bg-[#080808]/40 text-center space-y-6">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-teal block print-white">
                El siguiente paso
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
                30 minutos.{" "}
                <span className="gradient-text">Sin compromiso.</span>
              </h2>
              <p className="text-white/50 max-w-xl mx-auto text-base font-medium leading-relaxed print-muted">
                En media hora identificamos exactamente dónde se te escapan clientes y cuánto te
                está costando. Si no hay nada que hacer, te lo digo sin rodeos. Sin presión,
                sin letra pequeña.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <a
                  href="mailto:alex@merle.es"
                  className="btn-primary px-7 py-3 print-hide"
                >
                  Escribir a alex@merle.es
                </a>
                <a
                  href="https://wa.me/34600367217"
                  className="print-hide inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-white hover:border-white/20 transition-all text-[11px] font-black uppercase tracking-widest"
                >
                  WhatsApp directo
                </a>
              </div>
              <div className="pt-4 print-white">
                <p className="text-white/30 text-[11px] font-medium print-muted">
                  alex@merle.es · +34 600 367 217 · alexmerle.es
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Botón PDF inferior */}
        <div className="flex justify-center pb-8 print-hide">
          <DossierPrintButton />
        </div>

      </main>
    </>
  );
}
