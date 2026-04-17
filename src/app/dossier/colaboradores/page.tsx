import type { Metadata } from "next";
import { DossierPrintButton } from "@/components/DossierPrintButton";
import { DossierNav } from "@/components/DossierNav";
import { Check, MapPin, Mail, Phone, Users, Wrench, TrendingUp } from "lucide-react";

const NAV_SECTIONS = [
  { id: "quien", label: "Sobre Alex" },
  { id: "roles", label: "Cómo funciona" },
  { id: "comisiones", label: "Comisiones" },
  { id: "pitches", label: "Tu pitch" },
  { id: "catalogo", label: "Catálogo" },
  { id: "cliente-ideal", label: "Cliente ideal" },
  { id: "empezar", label: "Empezar" },
];

export const metadata: Metadata = {
  title: "Dossier Colaboradores — Alex Merle",
  description: "Propuesta de colaboración comercial — Alex Merle.",
  robots: { index: false, follow: false },
};

// ── Datos ────────────────────────────────────────────────────────────────────

const pitches = [
  {
    profile: "Si trabajas o tienes conocimientos de SEO",
    color: "brand-blue",
    pitch:
      "Puedo auditarte la web y decirte exactamente por qué no apareces en Google. Y si necesitas que alguien lo implemente técnicamente a un precio que puedas pagar, tengo un colaborador que lo resuelve. Hacemos los dos juntos el diagnóstico y tú decides si quieres que tiremos.",
    you: "Análisis de palabras clave, estrategia de contenidos, informe de competencia.",
    me: "Implementación técnica, arquitectura web, meta etiquetas, schema, ficha de Google, redirects.",
    opener:
      "¿Sabes cuántas búsquedas hay en Google cada mes de gente buscando lo que tú ofreces en tu zona?",
  },
  {
    profile: "Si trabajas o tienes conocimientos de redes sociales",
    color: "brand-teal",
    pitch:
      "Las redes están bien para que te conozcan, pero si alguien busca tu negocio en Google y no apareces, o no puede reservar fácilmente, pierdes la venta. Yo me ocupo de la parte social y tengo un especialista que monta la parte técnica.",
    you: "Estrategia de contenido, gestión de perfiles, comunidad, publicidad social.",
    me: "La web que recibe el tráfico, la landing de captación, la agenda online, el buzón centralizado.",
    opener: "¿Cuánta gente que te sigue en Instagram acaba pidiendo cita o haciendo un encargo?",
  },
  {
    profile: "Si tienes red de contactos en hostelería",
    color: "brand-blue",
    pitch:
      "Tengo un servicio que monta en menos de una semana: carta digital en el móvil, sistema de encargos por WhatsApp con confirmación automática y ficha de Google actualizada. Sin cuotas mensuales, sin formación técnica. Lo usas desde el día uno.",
    you: "La relación, la confianza del sector, la capacidad de hablar su idioma.",
    me: "Carta digital, sistema de encargos automatizado, integración con WhatsApp, ficha de Google.",
    opener:
      "¿Cuántas veces al día coges el teléfono para confirmar reservas o encargos que podrían gestionarse solos?",
  },
  {
    profile: "Si tienes contactos en clínicas o consultas",
    color: "brand-teal",
    pitch:
      "¿Cuántos pacientes perdéis porque llaman fuera de horario y no hay nadie que atienda? Un sistema de reservas online con confirmación automática y recordatorio previo —todo dentro de la normativa española de protección de datos.",
    you: "La relación con la clínica, el conocimiento del sector, la gestión del proceso de adopción.",
    me: "Sistema de citas, automatización de confirmaciones y recordatorios, siempre dentro de la legislación española.",
    opener: "Si un paciente intenta pedir cita un sábado por la noche, ¿qué pasa?",
  },
  {
    profile: "Si eres consultor, asesor o gestor de empresas",
    color: "brand-blue",
    pitch:
      "Cuando detectas que un cliente pierde dinero por no tener presencia online o por procesos manuales que le roban horas, puedo hacer el diagnóstico técnico y la propuesta de solución. Tú sigues siendo su referente; yo soy el especialista que resuelve esa parte concreta.",
    you: "La confianza ya construida, el conocimiento del negocio, la capacidad de identificar dónde se escapa el dinero.",
    me: "Diagnóstico de presencia digital, propuesta técnica, ejecución y soporte.",
    opener:
      "¿Alguno de tus clientes te ha preguntado alguna vez por qué no le llegan más clientes?",
  },
  {
    profile: "Si no tienes perfil técnico pero sí red de contactos locales",
    color: "brand-teal",
    pitch:
      "Trabajo con alguien que ayuda a negocios locales a aparecer mejor en internet y a no perder clientes por no contestar a tiempo. Sin proyectos eternos ni presupuestos de agencia. ¿Quieres que os cuente en qué consiste?",
    you: "El acceso, la confianza local, la capacidad de abrir la puerta.",
    me: "Todo lo técnico: diagnóstico, propuesta y ejecución.",
    opener: "¿Sabes si este negocio aparece bien en Google cuando alguien busca lo que hacen?",
  },
];

const microservices = [
  {
    category: "Presencia online",
    color: "brand-blue",
    rows: [
      {
        has: "Nada en internet",
        offer: "Ficha de Google Business + web de aterrizaje",
        price: "Desde 449 €",
      },
      {
        has: "Google Business sin optimizar",
        offer: "Revisión y puesta a punto: fotos, categorías, reseñas",
        price: "Desde 150 €",
      },
      {
        has: "Google Business activo",
        offer: "Análisis de rendimiento + estrategia de reseñas",
        price: "Desde 150 €",
      },
      {
        has: "Web propia sin resultados",
        offer: "Auditoría SEO + informe de mejoras concretas",
        price: "Desde 150 €",
      },
      {
        has: "Redes activas pero sin web",
        offer: "Landing page de captación enlazada desde perfil",
        price: "Desde 150 €",
      },
    ],
  },
  {
    category: "Comunicación y captación",
    color: "brand-teal",
    rows: [
      {
        has: "Email caótico o sin estructura",
        offer: "Buzón centralizado con etiquetas y flujo de respuesta",
        price: "Desde 150 €",
      },
      {
        has: "Consultas repetidas por WhatsApp",
        offer: "Respuestas automáticas para las preguntas frecuentes",
        price: "Desde 150 €",
      },
      {
        has: "Reservas y citas por teléfono",
        offer: "Sistema de agenda online (el cliente reserva solo)",
        price: "Desde 150 €",
      },
      {
        has: "Clínica que gestiona citas en papel",
        offer: "Sistema de reservas online con confirmación automática",
        price: "Desde 299 €",
      },
    ],
  },
  {
    category: "Procesos internos",
    color: "brand-blue",
    rows: [
      {
        has: "Mucho tiempo en tareas repetitivas",
        offer: "Mapeo de los 3 procesos que más tiempo roban + automatización",
        price: "Desde 150 €",
      },
      {
        has: "Info dispersa entre WhatsApp, email y papel",
        offer: "Sistema centralizado básico",
        price: "Desde 150 €",
      },
    ],
  },
];

const commissions = [
  {
    level: "Nivel 1",
    title: "Tú traes el contacto, yo cierro y ejecuto",
    pct: "10–15%",
    pctLabel: "del total facturado",
    desc: "Identificas a alguien que encaje, abres la conversación y me lo presentas. Yo hago el diagnóstico, preparo la propuesta y llevo el proyecto.",
    color: "brand-blue",
  },
  {
    level: "Nivel 2",
    title: "Tú llevas al cliente de principio a fin",
    pct: "Hasta 50%",
    pctLabel: "del margen del proyecto",
    desc: "Conoces el negocio, detectas las necesidades, gestionas la relación. Yo soy el equipo técnico invisible. La comisión se calcula sobre el margen (ingresos − coste de producción), no sobre el total.",
    color: "brand-teal",
  },
];

const marginTable = [
  {
    type: "Auditoría, revisión Google Business, buzón, agenda",
    margin: "Alto — ejecución ligera",
    commission: "Hasta el 50% del margen",
  },
  {
    type: "Landing page o web sencilla",
    margin: "Medio — más horas de producción",
    commission: "25–35% del margen",
  },
  {
    type: "Web completa con integraciones",
    margin: "Bajo — proyecto intensivo",
    commission: "15–25% del margen",
  },
  { type: "Packs combinados", margin: "Variable", commission: "Se acuerda antes de arrancar" },
];

const idealClient = [
  {
    yes: "Negocio local: bar, restaurante, clínica, comercio",
    no: "Grandes empresas con marketing propio",
  },
  {
    yes: "El dueño gestiona él mismo su comunicación",
    no: "Negocios con todo externalizado y funcionando",
  },
  {
    yes: "No aparece en Google o aparece mal",
    no: "Quien busca soluciones mágicas sin cambiar nada",
  },
  {
    yes: "Usa papel o WhatsApp para gestionar citas",
    no: "El que ya tiene informático de confianza para todo",
  },
  {
    yes: "Factura pero sin presencia online consistente",
    no: "El que no tiene tiempo ni ganas de implicarse",
  },
];

// ── Componente ───────────────────────────────────────────────────────────────

export default function ColaboradoresPage() {
  return (
    <>
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
              content: "Alex Merle  ·  hola@webpc.es  ·  +34 600 367 217  ·  alexmerle.es";
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
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-teal/8 rounded-full blur-[150px] -z-10" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-blue/6 rounded-full blur-[150px] -z-10" />

          <div className="max-w-4xl mx-auto">
            <div className="flex items-start justify-between gap-6 mb-12">
              <span className="shiny-badge print-hide">Para colaboradores · Uso privado</span>
              <DossierPrintButton filename="Alex-Merle-Dossier-Colaboradores" />
            </div>

            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-teal mb-4 block print-white">
              Alex Merle · Propuesta de colaboración
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[1.05]">
              No eres un captador
              <br />
              <span className="gradient-text">de leads. Eres un socio.</span>
            </h1>
            <p className="text-white/55 text-xl max-w-2xl font-medium leading-relaxed print-muted">
              Tú llevas a tus propios clientes, a tu manera, con tu relación. Yo soy el apoyo
              técnico detrás. El que monta lo que hace falta y entrega resultados que tú puedes
              firmar con tu nombre.
            </p>
          </div>
        </section>

        <DossierNav sections={NAV_SECTIONS} title="Dossier Colaboradores · Alex Merle" />

        {/* ── SOBRE ALEX ────────────────────────────────────────────────── */}
        <section id="quien" className="py-16 px-6 print-break scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-10 bg-[#080808]/40 flex flex-col md:flex-row gap-10 items-start">
              <div className="w-16 h-16 rounded-2xl bg-brand-teal/10 border border-brand-teal/20 flex items-center justify-center shrink-0">
                <span className="text-2xl font-black text-brand-teal">AM</span>
              </div>
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block mb-1 print-muted">
                    El apoyo técnico
                  </span>
                  <h2 className="text-2xl font-black tracking-tight">Alejandro Merle</h2>
                </div>
                <p className="text-white/55 text-sm leading-relaxed font-medium print-muted">
                  Formación en Informática, Telecomunicaciones y máster en Inteligencia Artificial.
                  Trabajo en Telefónica Tech en el área de Protección del Riesgo Digital (DRP) — lo
                  que me da una perspectiva técnica sólida sobre cómo los negocios aparecen y se
                  exponen en internet. Sin estructura de agencia: misma calidad técnica, precios que
                  tienen sentido para un negocio local.
                </p>
                <p className="text-white/55 text-sm leading-relaxed font-medium print-muted">
                  Zona habitual: norte de Madrid. Si tú operas en otra zona, no es un problema: tú
                  llevas los clientes de tu área, gestionas la relación y me trasladas las
                  necesidades. Yo me encargo de la parte técnica. La geografía no es una barrera
                  siempre que haya alguien de confianza sobre el terreno.
                </p>
                <div className="flex flex-wrap gap-4 pt-2 text-[11px] text-white/40 font-medium print-muted">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={12} className="text-brand-teal" />
                    Norte de Madrid · flexible a distancia
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Mail size={12} className="text-brand-blue" />
                    hola@webpc.es
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Phone size={12} className="text-brand-teal" />
                    +34 600 367 217
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CÓMO FUNCIONA ─────────────────────────────────────────────── */}
        <section id="roles" className="py-16 px-6 print-break scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-4 block print-muted">
              Cómo funciona
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-10">
              División de roles. <span className="gradient-text">Clara desde el día uno.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  icon: Users,
                  label: "Tu rol",
                  desc: "Conoces al cliente, detectas la necesidad, abres la conversación y mantienes la relación.",
                  color: "brand-teal",
                },
                {
                  icon: Wrench,
                  label: "Mi rol",
                  desc: "Diagnóstico técnico, propuesta de solución, ejecución y soporte. Sin que tengas que entender cómo funciona.",
                  color: "brand-blue",
                },
                {
                  icon: TrendingUp,
                  label: "El resultado",
                  desc: "El cliente recibe resultados reales. Tú te llevas la comisión y la credibilidad. Yo ejecuto.",
                  color: "brand-teal",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glass-card p-7 bg-[#080808]/40 flex flex-col gap-4"
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center ${item.color === "brand-blue" ? "bg-brand-blue/10 border border-brand-blue/20" : "bg-brand-teal/10 border border-brand-teal/20"}`}
                  >
                    <item.icon
                      size={18}
                      className={
                        item.color === "brand-blue" ? "text-brand-blue" : "text-brand-teal"
                      }
                    />
                  </div>
                  <div>
                    <span
                      className={`text-[10px] font-black uppercase tracking-widest block mb-1 ${item.color === "brand-blue" ? "text-brand-blue" : "text-brand-teal"}`}
                    >
                      {item.label}
                    </span>
                    <p className="text-white/55 text-sm leading-relaxed font-medium print-muted">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-white/40 text-sm font-medium print-muted">
              No te pido que vendas un paquete cerrado. Te pido que escuches a tu cliente y me
              cuentes lo que has oído. El resto lo construimos a medida.
            </p>
            <div className="mt-6 p-5 rounded-xl border border-white/8 bg-white/[0.03] flex items-start gap-3">
              <span className="text-brand-teal text-lg leading-none shrink-0">→</span>
              <p className="text-white/40 text-sm font-medium leading-relaxed print-muted">
                <span className="text-white/60 font-bold">Sin exclusividad. Sin territorio.</span>{" "}
                Colaboramos cuando tiene sentido para los dos. Si operas en una zona distinta al
                norte de Madrid, no es un problema: tú llevas la relación sobre el terreno, yo la
                parte técnica desde donde esté.
              </p>
            </div>
          </div>
        </section>

        {/* ── COMISIONES ────────────────────────────────────────────────── */}
        <section id="comisiones" className="py-16 px-6 print-break scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-4 block print-muted">
              Comisiones
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-10">
              Lo que se acuerda <span className="gradient-text">es lo que se cobra.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {commissions.map((c) => (
                <div
                  key={c.level}
                  className={`glass-card p-8 bg-[#080808]/40 flex flex-col gap-4 ${c.color === "brand-teal" ? "border-brand-teal/20" : "border-brand-blue/20"}`}
                >
                  <span
                    className={`text-[10px] font-black uppercase tracking-widest ${c.color === "brand-teal" ? "text-brand-teal" : "text-brand-blue"}`}
                  >
                    {c.level}
                  </span>
                  <h3 className="text-xl font-black tracking-tight leading-snug">{c.title}</h3>
                  <div>
                    <span
                      className={`text-5xl font-black tracking-tighter leading-none ${c.color === "brand-teal" ? "text-brand-teal" : "text-brand-blue"}`}
                    >
                      {c.pct}
                    </span>
                    <span className="text-white/35 text-xs font-black uppercase tracking-widest block mt-1 print-muted">
                      {c.pctLabel}
                    </span>
                  </div>
                  <p className="text-white/45 text-sm leading-relaxed font-medium print-muted">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Tabla de márgenes */}
            <div
              className="glass-card bg-[#080808]/40 overflow-hidden"
              style={{ borderRadius: "1rem" }}
            >
              <div className="px-7 py-4 border-b border-white/5">
                <span className="text-[10px] font-black uppercase tracking-widest text-white/35 print-muted">
                  Desglose de comisión por tipo de proyecto (Nivel 2)
                </span>
              </div>
              <div className="divide-y divide-white/5">
                {marginTable.map((row) => (
                  <div key={row.type} className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    <div className="px-7 py-4 md:border-r border-white/5">
                      <p className="text-sm font-semibold text-white/75 print-white">{row.type}</p>
                    </div>
                    <div className="px-7 py-4 md:border-r border-white/5">
                      <p className="text-xs text-white/40 font-medium print-muted">{row.margin}</p>
                    </div>
                    <div className="px-7 py-4">
                      <p className="text-xs font-black text-brand-teal">{row.commission}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Tabla de ejemplos €€ */}
            <div
              className="mt-6 glass-card bg-[#080808]/40 overflow-hidden"
              style={{ borderRadius: "1rem" }}
            >
              <div className="px-7 py-4 border-b border-white/5">
                <span className="text-[10px] font-black uppercase tracking-widest text-white/35 print-muted">
                  Ejemplos reales — cuánto cobra el colaborador
                </span>
              </div>
              <div className="divide-y divide-white/5">
                {[
                  {
                    project: "Auditoría SEO (150 € + IVA)",
                    production: "~2 h producción",
                    margin: "~50 € margen",
                    commission: "Hasta 25 € (Nivel 2)",
                  },
                  {
                    project: "Google Business + buzón (150 € + IVA)",
                    production: "~3 h producción",
                    margin: "~35 € margen",
                    commission: "Hasta 17 € (Nivel 2) · 15–22 € (Nivel 1)",
                  },
                  {
                    project: "Web completa (449 € + IVA)",
                    production: "~8 h producción",
                    margin: "~49 € margen",
                    commission: "12–22 € (Nivel 2) · 45–67 € (Nivel 1)",
                  },
                  {
                    project: "Web + Reservas (599 € + IVA)",
                    production: "~10 h producción",
                    margin: "~99 € margen",
                    commission: "25–35 € (Nivel 2) · 60–90 € (Nivel 1)",
                  },
                ].map((row) => (
                  <div key={row.project} className="grid grid-cols-1 md:grid-cols-4 gap-0">
                    <div className="px-7 py-3 md:border-r border-white/5">
                      <p className="text-sm font-semibold text-white/75 print-white">
                        {row.project}
                      </p>
                    </div>
                    <div className="px-7 py-3 md:border-r border-white/5">
                      <p className="text-xs text-white/35 font-medium print-muted">
                        {row.production}
                      </p>
                    </div>
                    <div className="px-7 py-3 md:border-r border-white/5">
                      <p className="text-xs text-white/40 font-medium print-muted">{row.margin}</p>
                    </div>
                    <div className="px-7 py-3">
                      <p className="text-xs font-black text-brand-teal">{row.commission}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-white/25 text-xs mt-3 font-medium print-muted">
              Tarifa base de producción: 50 €/h + IVA. El acuerdo concreto se cierra antes de cada
              proyecto. Sin sorpresas.
            </p>
          </div>
        </section>

        {/* ── PITCHES ───────────────────────────────────────────────────── */}
        <section id="pitches" className="py-16 px-6 print-break scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-4 block print-muted">
              Argumentos de venta
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
              Tu pitch, según <span className="gradient-text">tu perfil.</span>
            </h2>
            <p className="text-white/45 text-base font-medium mb-10 print-muted">
              No hay un único guion. Cada colaborador tiene su punto de partida. Aquí tienes los
              argumentos adaptados.
            </p>
            <div className="space-y-6">
              {pitches.map((p, i) => (
                <div key={i} className="glass-card p-8 bg-[#080808]/40">
                  <span
                    className={`text-[10px] font-black uppercase tracking-widest block mb-3 ${i % 2 === 0 ? "text-brand-blue" : "text-brand-teal"}`}
                  >
                    {p.profile}
                  </span>
                  <blockquote className="border-l-2 border-white/10 pl-5 mb-6">
                    <p className="text-white/70 text-sm leading-relaxed font-medium italic print-muted">
                      &ldquo;{p.pitch}&rdquo;
                    </p>
                  </blockquote>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                    <div>
                      <span className="text-[9px] font-black uppercase tracking-widest text-white/30 block mb-1.5 print-muted">
                        Tú aportas
                      </span>
                      <p className="text-white/55 text-xs leading-relaxed font-medium print-muted">
                        {p.you}
                      </p>
                    </div>
                    <div>
                      <span className="text-[9px] font-black uppercase tracking-widest text-white/30 block mb-1.5 print-muted">
                        Yo aporto
                      </span>
                      <p className="text-white/55 text-xs leading-relaxed font-medium print-muted">
                        {p.me}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 border-t border-white/5 pt-4">
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/25 shrink-0 mt-0.5 print-muted">
                      Pregunta de apertura
                    </span>
                    <p
                      className={`text-xs font-bold italic ${i % 2 === 0 ? "text-brand-blue/80" : "text-brand-teal/80"}`}
                    >
                      &ldquo;{p.opener}&rdquo;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MICROSERVICIOS ────────────────────────────────────────────── */}
        <section id="catalogo" className="py-16 px-6 print-break scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-4 block print-muted">
              Catálogo modular
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
              Lo que podemos montar <span className="gradient-text">según el cliente.</span>
            </h2>
            <p className="text-white/45 text-base font-medium mb-10 print-muted">
              La clave es no vender lo que ya tienen — sino lo que les falta o lo que no les
              funciona bien.
            </p>
            <div className="space-y-6">
              {microservices.map((cat) => (
                <div
                  key={cat.category}
                  className="glass-card bg-[#080808]/40 overflow-hidden"
                  style={{ borderRadius: "1rem" }}
                >
                  <div className={`px-7 py-4 border-b border-white/5 flex items-center gap-3`}>
                    <span
                      className={`w-2 h-2 rounded-full ${cat.color === "brand-blue" ? "bg-brand-blue" : "bg-brand-teal"}`}
                    />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/50 print-muted">
                      {cat.category}
                    </span>
                  </div>
                  <div className="divide-y divide-white/5">
                    {cat.rows.map((row) => (
                      <div key={row.has} className="grid grid-cols-1 md:grid-cols-3 gap-0">
                        <div className="px-7 py-4 md:border-r border-white/5">
                          <span className="text-[9px] font-black uppercase tracking-widest text-white/25 block mb-1 md:hidden print-muted">
                            El cliente tiene
                          </span>
                          <p className="text-xs text-white/45 font-medium print-muted">{row.has}</p>
                        </div>
                        <div className="px-7 py-4 md:border-r border-white/5">
                          <span className="text-[9px] font-black uppercase tracking-widest text-white/25 block mb-1 md:hidden print-muted">
                            Qué ofrecer
                          </span>
                          <p className="text-sm font-semibold text-white/80 print-white">
                            {row.offer}
                          </p>
                        </div>
                        <div className="px-7 py-4 flex items-center">
                          <span
                            className={`text-xs font-black ${cat.color === "brand-blue" ? "text-brand-blue" : "text-brand-teal"}`}
                          >
                            {row.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-white/30 text-xs mt-4 font-medium print-muted">
              Los módulos combinados se negocian en pack. La tarifa base de producción es 50 €/h +
              IVA.
            </p>
          </div>
        </section>

        {/* ── CLIENTE IDEAL ─────────────────────────────────────────────── */}
        <section id="cliente-ideal" className="py-16 px-6 print-break scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-4 block print-muted">
              A quién apuntamos
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-10">
              El cliente ideal. <span className="gradient-text">Para no perder el tiempo.</span>
            </h2>
            <div
              className="glass-card bg-[#080808]/40 overflow-hidden"
              style={{ borderRadius: "1rem" }}
            >
              <div className="grid grid-cols-2 border-b border-white/5">
                <div className="px-7 py-4 border-r border-white/5">
                  <span className="text-[9px] font-black uppercase tracking-widest text-brand-teal print-white">
                    Perfil que convierte
                  </span>
                </div>
                <div className="px-7 py-4">
                  <span className="text-[9px] font-black uppercase tracking-widest text-white/30 print-muted">
                    No es para nosotros
                  </span>
                </div>
              </div>
              <div className="divide-y divide-white/5">
                {idealClient.map((row, i) => (
                  <div key={i} className="grid grid-cols-2">
                    <div className="px-7 py-4 border-r border-white/5 flex items-start gap-2">
                      <Check size={11} className="text-brand-teal shrink-0 mt-0.5" />
                      <p className="text-sm text-white/70 font-medium print-white">{row.yes}</p>
                    </div>
                    <div className="px-7 py-4 flex items-start gap-2">
                      <span className="w-2 h-0.5 bg-white/15 shrink-0 mt-2" />
                      <p className="text-xs text-white/35 font-medium print-muted">{row.no}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CÓMO EMPEZAR ──────────────────────────────────────────────── */}
        <section id="empezar" className="py-16 px-6 print-break scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-10 bg-[#080808]/40 text-center space-y-6">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-teal block print-white">
                Cómo empezar
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
                Una conversación honesta <span className="gradient-text">es suficiente.</span>
              </h2>
              <div className="max-w-xl mx-auto space-y-3 text-left">
                {[
                  "Piensa en 2-3 negocios de tu entorno que no aparezcan bien online o que pierdan tiempo con gestiones manuales.",
                  'Abre la conversación de forma natural: "Oye, ¿cómo tienes lo de Google? ¿Te llegan clientes por ahí?"',
                  "Si hay interés, contáctame y lo valoramos juntos. Yo preparo la propuesta.",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="w-6 h-6 rounded-full bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-white/55 text-sm font-medium leading-relaxed print-muted">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <a href="mailto:hola@webpc.es" className="btn-primary px-7 py-3 print-hide">
                  Escribir a hola@webpc.es
                </a>
                <a
                  href="https://wa.me/34600367217"
                  className="print-hide inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-white hover:border-white/20 transition-all text-[11px] font-black uppercase tracking-widest"
                >
                  WhatsApp directo
                </a>
              </div>
              <p className="text-white/30 text-[11px] font-medium print-muted">
                hola@webpc.es · +34 600 367 217 · alexmerle.es
              </p>
            </div>
          </div>
        </section>

        <div className="flex justify-center pb-8 print-hide">
          <DossierPrintButton filename="Alex-Merle-Dossier-Colaboradores" />
        </div>
      </main>
    </>
  );
}
