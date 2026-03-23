import { getRepositories } from "@/lib/github";
import { BlurReveal } from "@/components/ui/BlurReveal";
import { PortfolioCards } from "@/components/PortfolioCards";
import { ToolCards } from "@/components/ToolCards";

export default async function PortfolioGrid() {
  const repos = await getRepositories();

  const webs = repos.filter((r) => r.type !== 'tool');
  const tools = repos
    .filter((r) => r.type === 'tool')
    .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());

  return (
    <>
      {/* ── WEBS & APPS ─────────────────────────────────────────────────────── */}
      <section id="portfolio" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-brand-blue/5 rounded-full blur-[150px] -z-10" />

        <div className="max-w-7xl mx-auto">
          <BlurReveal className="text-center mb-24">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-blue mb-4 block">
              Trabajos recientes
            </span>
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
              Negocios que ya <br /> <span className="gradient-text">están online.</span>
            </h2>
            <p className="text-white/40 text-xl max-w-2xl mx-auto font-medium">
              Proyectos reales para clientes locales y personales. El tuyo podría ser el siguiente.
            </p>
          </BlurReveal>

          <PortfolioCards repos={webs} />
        </div>
      </section>

      {/* ── HERRAMIENTAS ────────────────────────────────────────────────────── */}
      {tools.length > 0 && (
        <section id="herramientas" className="py-24 px-6 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-brand-teal/4 rounded-full blur-[150px] -z-10" />

          <div className="max-w-7xl mx-auto">
            <BlurReveal className="text-center mb-16">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-teal mb-4 block">
                Open Source
              </span>
              <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
                Herramientas <span className="gradient-text">que uso y publico.</span>
              </h2>
              <p className="text-white/40 text-lg max-w-xl mx-auto font-medium">
                Scripts, utilidades y automatizaciones que resuelven problemas concretos.
              </p>
            </BlurReveal>

            <ToolCards repos={tools} />
          </div>
        </section>
      )}
    </>
  );
}
