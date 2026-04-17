"use client";

import { TrendingUp, Smartphone, ArrowUpRight } from "lucide-react";
import { BlurReveal } from "@/components/ui/BlurReveal";

const stories = [
  {
    id: "hierros-merle",
    title: "Hierros Merle",
    tag: "Sector Industrial",
    metric: "+1.500",
    metricLabel: "Visitas orgánicas / mes",
    days: "En 6 días",
    description:
      "Suministros Merle, ferralla elaborada y acero estructural en Madrid desde 1993. Renovación completa orientada a SEO local con posicionamiento en Madrid, Toledo y Guadalajara. El resultado: un aumento drástico en la visibilidad en Google y mejora notable en la calidad de leads y solicitudes de presupuesto.",
    icon: TrendingUp,
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/20",
    href: "https://merle.es",
  },
  {
    id: "montes",
    title: "Café & Tortilla Montes",
    tag: "Hostelería Local",
    metric: "100%",
    metricLabel: "Digitalización Funcional",
    days: "En 7 días",
    description:
      "Demo operativa creada específicamente para el sector de la hostelería en San Agustín de Guadalix. Sustituye la clásica 'web de presentación' por una herramienta útil: integración de carta digital conectada a un sistema automatizado de encargos vía WhatsApp.",
    icon: Smartphone,
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    border: "border-brand-teal/20",
    href: "https://montes.vercel.app",
  },
];

export function SuccessStories() {
  return (
    <section
      id="casos-de-exito"
      className="py-32 px-6 relative overflow-hidden snap-start scroll-mt-16"
    >
      {/* Fondos difuminados */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-brand-blue/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-4 block">
            Casos de Éxito
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
            Resultados que <span className="gradient-text">hablan por sí solos.</span>
          </h2>
          <p className="text-white/55 text-xl max-w-2xl mx-auto font-medium">
            Más allá del diseño bonito. Webs construidas para captar clientes, automatizar procesos
            y hacer sonar el teléfono.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {stories.map((story, i) => (
            <BlurReveal key={story.id} delay={i * 0.1} className="h-full">
              <a
                href={story.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card p-10 flex flex-col h-full bg-[#080808]/40 border-white/5 transition-colors duration-500 group cursor-pointer ${story.id === "hierros-merle" ? "hover:border-brand-blue/20" : "hover:border-brand-teal/20"}`}
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="flex gap-4 items-center">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${story.bg} border ${story.border}`}
                    >
                      <story.icon size={24} className={story.color} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block mb-1">
                        {story.tag}
                      </span>
                      <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-white transition-colors">
                        {story.title}
                      </h3>
                    </div>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5 text-white/30 group-hover:text-white transition-colors">
                    <ArrowUpRight
                      size={18}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-end gap-3 mb-2">
                    <span
                      className={`text-6xl font-black tracking-tighter leading-none ${story.color}`}
                    >
                      {story.metric}
                    </span>
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-white/50">
                    {story.metricLabel}
                  </span>
                  <div className="mt-3">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-emerald-400/70 border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {story.days}
                    </span>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-white/5">
                  <p className="text-white/50 text-sm leading-relaxed font-medium group-hover:text-white/70 transition-colors">
                    {story.description}
                  </p>
                </div>
              </a>
            </BlurReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
