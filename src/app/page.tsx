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
import { Linkedin, Shield, Globe, Cpu, MapPin, Layers, Check, Zap } from "lucide-react";

// ─── Datos estáticos ─────────────────────────────────────────────────────────

const skills = [
  { icon: Globe, label: "Web & SEO Local", color: "text-brand-blue" },
  { icon: Cpu, label: "IA Aplicada", color: "text-brand-teal" },
  { icon: Shield, label: "Ciberseguridad", color: "text-brand-blue" },
  { icon: Zap, label: "Encargos Online", color: "text-brand-teal" },
  { icon: Layers, label: "Integraciones", color: "text-brand-blue" },
];

const services = [
  {
    icon: Globe,
    title: "Presencia Online",
    subtitle: "Desde 449€",
    description:
      "Tu negocio visible en Google. Web profesional con carta digital, lista de precios, galería, ubicación y acceso directo a WhatsApp. SEO local para que te encuentren los clientes de tu zona.",
    items: [
      "Diseño responsive",
      "SEO local",
      "Google Maps integrado",
      "WhatsApp + Llamada directa",
    ],
  },
  {
    icon: Cpu,
    title: "Encargos y Reservas",
    subtitle: "Desde 599€",
    description:
      "Sistema online para gestionar pedidos o citas sin depender del teléfono. Menos llamadas, menos errores, más encargos fuera de tu horario habitual.",
    items: [
      "Encargos paso a paso para el cliente",
      "Selección de fecha y hora",
      "El cliente recibe confirmación",
      "Lo activas o desactivas cuando quieras",
    ],
  },
  {
    icon: Zap,
    title: "Integraciones y Pagos",
    subtitle: "Desde 849€",
    description:
      "Para negocios que necesitan conectar su web con otras herramientas. Cobro online, sincronización de datos y automatizaciones a medida.",
    items: [
      "Pasarela de pago integrada",
      "Google Sheets o Notion",
      "CRM o herramienta de gestión",
      "Automatizaciones personalizadas",
    ],
  },
];

const planBasico = [
  "Tu negocio en Google con SEO local",
  "Carta o menú digital para consultar (sin pedidos online)",
  "Botón de contacto directo: WhatsApp y teléfono",
  "Cómo llegar desde Google Maps",
  "Se ve bien en móvil y en ordenador",
  "Carga rápida desde el primer segundo",
];

const planAvanzado = [
  "Todo lo del Plan Básico incluido",
  "Sistema de encargos o reservas paso a paso",
  "El cliente elige fecha y hora de recogida",
  "Solo acepta pedidos con antelación suficiente",
  "Lo puedes activar o desactivar cuando quieras",
  "Confirmación automática por email al cliente y a ti",
  "El cliente recibe el pedido guardado en su calendario",
];

const planCompleto = [
  "Todo lo del Plan Avanzado incluido",
  "Pasarela de pago online integrada",
  "Sincronización con Google Sheets o Notion",
  "Conexión con tu CRM o herramienta de gestión",
  "Automatizaciones personalizadas según tu flujo de trabajo",
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
            <p className="text-white/55 text-xl max-w-2xl mx-auto font-medium">
              Sin tecnicismos. Sin letra pequeña. Solo resultados.
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
        </div>
      </section>

      {/* ── VS AGENCIA ─────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <BlurReveal className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
              ¿Por qué no <span className="gradient-text">una agencia?</span>
            </h2>
          </BlurReveal>

          <BlurReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  agencia: "Hablas con un comercial, luego con un diseñador, luego con otro.",
                  yo: "Hablas directamente conmigo. El que diseña, el que programa y el que te coge el teléfono soy yo.",
                },
                {
                  agencia:
                    "Presupuestos de 2.000€ en adelante, con mantenimiento mensual obligatorio.",
                  yo: "Desde 449€, sin cuota mensual. El código es tuyo desde el primer día.",
                },
                {
                  agencia: "Plantillas genéricas adaptadas a tu negocio a medias.",
                  yo: "Diseño hecho para tu negocio concreto, no para cualquier negocio.",
                },
                {
                  agencia: "Tiempos de entrega de meses, con cambios que tardan semanas.",
                  yo: "Resultado en 1-2 semanas. Ajustes incluidos sin esperar turno.",
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
                desc: "Llamada de 15-20 minutos sin compromiso. Me cuentas qué tienes y qué necesitas. Yo te digo si puedo ayudarte y cómo.",
              },
              {
                step: "02",
                title: "Propuesta",
                desc: "Te mando una propuesta clara con precio cerrado. Sin presupuestos abiertos ni sorpresas al final.",
              },
              {
                step: "03",
                title: "Construimos",
                desc: "Diseño y desarrollo. Te voy enseñando el avance para que puedas pedir ajustes antes de que esté terminado.",
              },
              {
                step: "04",
                title: "Publicamos",
                desc: "Ponemos la web en marcha. Tienes dos sesiones de ajustes gratuitas para afinar lo que haga falta.",
              },
            ].map((item, i) => (
              <BlurReveal key={i} delay={i * 0.1}>
                <ShineCard className="p-7 rounded-2xl bg-white/[0.05] border border-white/10 h-full flex flex-col gap-4 hover:border-brand-blue/40 hover:bg-white/[0.07] transition-all duration-300">
                  <span className="text-6xl font-black leading-none select-none gradient-text opacity-50">
                    {item.step}
                  </span>
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
            <p className="text-white/55 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              Ejemplo real de propuesta para{" "}
              <a
                href="https://montes.vercel.app/propuesta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-teal hover:underline"
              >
                Café & Tortilla Montes
              </a>
              : carta online, ubicación, contacto y sistema de encargos.
            </p>
            <p className="text-white/50 text-sm max-w-xl mx-auto mt-3 leading-relaxed">
              Precios orientativos. Cada proyecto tiene sus propias necesidades y el presupuesto
              final puede variar. Hablamos antes de cerrar nada.
            </p>
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
                    Fase 1 — La base de tu presencia online
                  </p>
                  <div className="flex items-end gap-2 mb-1">
                    <span className="text-5xl font-black tracking-tighter">449€</span>
                  </div>
                  <p className="text-[10px] text-white/20 font-medium">+ IVA</p>
                </div>
                <p className="text-white/55 text-sm leading-relaxed">
                  Tu negocio con una imagen profesional desde el primer día: apareces en Google, el
                  cliente lo tiene todo claro y contactarte es inmediato.
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
                      Fase 2 — Landing + Encargos + Confirmaciones
                    </p>
                    <div className="flex items-end gap-2 mb-1">
                      <span className="text-5xl font-black tracking-tighter">599€</span>
                    </div>
                    <p className="text-[10px] text-white/20 font-medium">+ IVA</p>
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed">
                    El cliente reserva solo, ambos recibís confirmación automática, y el pedido
                    queda guardado sin que nadie tenga que hacer nada.
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
                    Fase 3 — Integraciones y Pagos Online
                  </p>
                  <div className="flex items-end gap-2 mb-1">
                    <span className="text-4xl font-black tracking-tighter">Desde 849€</span>
                  </div>
                  <p className="text-[10px] text-white/20 font-medium">
                    + IVA · varía según integraciones y herramientas
                  </p>
                </div>
                <p className="text-white/55 text-sm leading-relaxed">
                  Para negocios que necesitan conectar la web con sus herramientas: cobro online,
                  sincronización de datos y automatizaciones a medida.
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
                {/* Mantenimiento mensual */}
                <div className="glass-card p-8 bg-[#080808]/40 flex flex-col gap-4 border-brand-teal/20">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-brand-teal mb-2">
                      Mantenimiento mensual
                    </p>
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-black tracking-tighter">80€</span>
                      <span className="text-white/30 text-sm mb-1">/mes</span>
                    </div>
                    <p className="text-[10px] text-white/25 mt-0.5">
                      + IVA · Solo para proyectos desarrollados por mí
                    </p>
                    <p className="text-[11px] text-brand-teal/70 font-black mt-1">
                      2 sesiones de ajustes de 2h incluidas al mes.
                    </p>
                  </div>
                  <ul className="space-y-2 flex-1">
                    {[
                      "2 sesiones de ajustes de 2h al mes incluidas",
                      "Actualización de dependencias",
                      "Parcheado de vulnerabilidades (CVEs)",
                      "Soporte prioritario por WhatsApp",
                      "Cambios adicionales a solo 50€/modificación",
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
                  Consultor IT independiente con base en el norte de Madrid. Trabajo con negocios
                  locales — cafeterías, talleres, clínicas, inmobiliarias, tiendas— y con cualquier
                  negocio que tenga un problema tecnológico que no sabe muy bien cómo atajar: estar
                  en Google, automatizar procesos, recibir encargos online o simplemente tener una
                  imagen profesional{" "}
                  <strong className="text-white/80">sin pagar lo que cobra una agencia</strong>.
                </p>
                <p>
                  Formación en electrónica, telecomunicaciones e informática. Uso la IA como
                  herramienta de trabajo diaria para entregar proyectos más rápido y a mejor precio
                  que cualquier agencia. Todo lo que construyo va bien securizado: honeypots,
                  accesos restringidos, sin puertas traseras.
                </p>
                {/* Badges de credenciales */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <div className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-brand-blue/10 border border-brand-blue/30">
                    <Image
                      src="/telefonica-tech.png"
                      alt="Telefónica Tech"
                      width={140}
                      height={32}
                      className="h-6 w-auto brightness-0 invert opacity-80"
                    />
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-[11px] font-black uppercase tracking-widest text-brand-teal">
                    <Zap size={12} /> CompTIA Certified
                  </div>
                </div>
                <p className="flex items-center gap-2 text-white/40 text-sm">
                  <MapPin size={14} className="text-brand-teal shrink-0" />
                  San Agustín de Guadalix · Alcobendas · SSReyes · Las Tablas · Paracuellos · El
                  Molar
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

          {/* Foto */}
          <BlurReveal delay={0.15}>
            <div className="relative max-w-sm mx-auto lg:ml-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-teal/20 rounded-3xl blur-[60px]" />
              <div className="relative glass-card overflow-hidden border-white/10 rounded-3xl aspect-[4/5]">
                <Image
                  src="/alex.png"
                  alt="Alejandro Merle — Consultor IT Norte de Madrid"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs font-black uppercase tracking-widest text-white/60">
                    Alejandro Merle
                  </p>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest">
                    Consultor IT · Norte de Madrid
                  </p>
                </div>
              </div>
            </div>
          </BlurReveal>
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
            <p className="text-white/55 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              Cuéntame qué tienes entre manos. Reviso tu caso y te respondo en menos de 24h para ver
              si encajamos.
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
