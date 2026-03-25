import { notFound } from "next/navigation";
import { nichesData, getNicheData } from "@/lib/nicheData";
import { Suspense } from "react";
import PortfolioGrid from "@/components/PortfolioGrid";
import { ContactForm } from "@/components/ContactForm";
import { BlurReveal } from "@/components/ui/BlurReveal";
import { ContactLinks } from "@/components/ContactLinks";
import { FAQ } from "@/components/FAQ";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return nichesData.map((n) => ({ nicho: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ nicho: string }> }) {
  const resolvedParams = await params;
  const niche = getNicheData(resolvedParams.nicho);

  if (!niche) return {};

  return {
    title: `Diseño Web para ${niche.name} · Alejandro Merle`,
    description: niche.heroContext,
    alternates: { canonical: `/para/${niche.slug}` },
    openGraph: {
      title: `Diseño Web para ${niche.name} · Alejandro Merle`,
      description: niche.heroContext,
      url: `https://alexmerle.es/para/${niche.slug}`,
    },
  };
}

export default async function NichePage({ params }: { params: Promise<{ nicho: string }> }) {
  const resolvedParams = await params;
  const niche = getNicheData(resolvedParams.nicho);

  if (!niche) notFound();

  return (
    <main className="flex flex-col min-h-screen">
      {/* ── HERO NICHO-ESPECÍFICO ─────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-20 px-6 flex flex-col items-center justify-center min-h-[70vh] text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-teal/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-brand-blue/30 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <BlurReveal>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-[10px] font-black tracking-[0.2em] uppercase text-brand-blue border border-brand-blue/20 bg-brand-blue/5 rounded-full mb-6">
              Solución a Medida
            </span>
          </BlurReveal>

          <BlurReveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1]">
              Diseño web pensado para <span className="gradient-text">{niche.name}</span>
            </h1>
          </BlurReveal>

          <BlurReveal delay={0.2}>
            <p className="text-xl md:text-2xl text-white/55 max-w-2xl mx-auto leading-relaxed font-medium">
              {niche.heroContext}
            </p>
          </BlurReveal>

          <BlurReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Link
                href="#contacto"
                className="btn-primary w-full sm:w-auto px-10 py-5 flex items-center justify-center gap-3"
              >
                Impulsa tu negocio
                <ArrowRight size={14} />
              </Link>
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
              Hablemos de <br />
              <span className="gradient-text">tu negocio</span>
            </h2>
            <p className="text-white/55 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              Trabajemos juntos para digitalizar y mejorar la rentabilidad de tu actividad.
            </p>
          </BlurReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <ContactLinks />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
