import { SplitText } from "@/components/ui/SplitText";
import { HeroCtas } from "@/components/HeroCtas";
import { AuroraBackground } from "@/components/AuroraBackground";

// Headline elegido por criterio de copywriting (2026-04-02).
// Razón: ataca la amenaza concreta (competencia ya posicionada) en lugar de
// prometer un beneficio abstracto. Ver EXPERIMENTO_HERO_AB.md para contexto.
// Cuando el tráfico orgánico sea suficiente (>500 visitas/mes), replantear A/B test.

const currentMonth = new Intl.DateTimeFormat("es", { month: "long" }).format(new Date());
const availabilityBadge = `Solo 2 plazas disponibles en ${currentMonth}`;

const titleLine1 = [{ text: "¿Tu web atrae clientes", gradient: false }];
const titleLine2 = [{ text: "o es un fósil digital?", gradient: true }];

export default function Hero() {
  return (
    <section className="relative min-h-screen min-h-svh flex items-center justify-center pt-20 overflow-hidden snap-start">
      <AuroraBackground />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Shiny badge */}
        <div className="mb-8" style={{ animation: "hero-fade-up 0.6s ease-out both" }}>
          <span className="shiny-badge">Web Performance Club · Elite Tech</span>
          <span className="inline-flex items-center gap-2 ml-3 px-4 py-2 text-[10px] font-black tracking-[0.2em] uppercase text-emerald-400/80 border border-emerald-500/20 bg-emerald-500/5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {availabilityBadge}
          </span>
        </div>

        {/* H1 — server-rendered para que Google lo indexe correctamente */}
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-10 leading-[0.95]">
          <span className="block">
            <SplitText words={titleLine1} baseDelay={0.2} />
          </span>
          <span className="block">
            <SplitText words={titleLine2} baseDelay={0.44} />
          </span>
        </h1>

        <p
          className="text-xl md:text-2xl text-white/55 max-w-2xl mx-auto mb-14 leading-relaxed font-medium"
          style={{ animation: "hero-fade-up 0.7s ease-out both", animationDelay: "0.3s" }}
        >
          Rescatamos negocios de la invisibilidad mediante arquitectura Web 4.0: rendimiento
          extremo, automatización de procesos e integración de IA operativa.
        </p>

        <HeroCtas />

        {/* Credenciales */}
        <div
          className="flex items-center justify-center gap-4 mt-10 flex-wrap"
          style={{ animation: "hero-fade-up 0.7s ease-out both", animationDelay: "0.5s" }}
        >
          <span className="text-[10px] text-white/20 uppercase tracking-widest font-black">
            Experiencia en
          </span>
          <span className="px-3 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-[10px] font-black uppercase tracking-widest text-brand-blue/70">
            Telefónica Tech
          </span>
          <span className="px-3 py-1.5 rounded-full bg-brand-teal/10 border border-brand-teal/20 text-[10px] font-black uppercase tracking-widest text-brand-teal/70">
            CompTIA Certified
          </span>
        </div>
      </div>
    </section>
  );
}
