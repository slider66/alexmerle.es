import { notFound } from "next/navigation";
import { geoMunicipalities, getGeoMunicipality, dailyLocalSearches } from "@/lib/geoData";
import { Suspense } from "react";
import PortfolioGrid from "@/components/PortfolioGrid";
import { ContactForm } from "@/components/ContactForm";
import { BlurReveal } from "@/components/ui/BlurReveal";
import { ContactLinks } from "@/components/ContactLinks";
import { FAQ } from "@/components/FAQ";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return geoMunicipalities.map((m) => ({ municipio: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ municipio: string }> }) {
  const resolvedParams = await params;
  const geo = getGeoMunicipality(resolvedParams.municipio);

  if (!geo) return {};

  return {
    title: `Diseño Web y SEO Local en ${geo.name} · Alejandro Merle`,
    description: geo.heroContext,
    alternates: { canonical: `/${geo.slug}` },
    openGraph: {
      title: `Diseño Web en ${geo.name} · Alejandro Merle`,
      description: geo.heroContext,
      url: `https://alexmerle.es/${geo.slug}`,
    },
  };
}

export default async function MunicipioPage({
  params,
}: {
  params: Promise<{ municipio: string }>;
}) {
  const resolvedParams = await params;
  const geo = getGeoMunicipality(resolvedParams.municipio);

  if (!geo) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://alexmerle.es" },
          { "@type": "ListItem", position: 2, name: geo.name, item: `https://alexmerle.es/${geo.slug}` },
        ],
      },
      {
        "@type": "LocalBusiness",
        name: `Alejandro Merle — Diseño Web en ${geo.name}`,
        description: geo.heroContext,
        url: `https://alexmerle.es/${geo.slug}`,
        telephone: "+34600367217",
        email: "alex@merle.es",
        areaServed: { "@type": "City", name: geo.name },
        priceRange: "€€",
        serviceType: "Diseño web y SEO local",
      },
    ],
  };

  return (
    <main className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* ── HERO GEO-ESPECÍFICO ─────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-20 px-6 flex flex-col items-center justify-center min-h-[70vh] text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-teal/30 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <BlurReveal>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-[10px] font-black tracking-[0.2em] uppercase text-brand-teal border border-brand-teal/20 bg-brand-teal/5 rounded-full mb-6">
              Servicio Local en {geo.name}
            </span>
          </BlurReveal>

          <BlurReveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1]">
              Páginas web y SEO para negocios en <span className="gradient-text">{geo.name}</span>
            </h1>
          </BlurReveal>

          <BlurReveal delay={0.2}>
            <p className="text-xl md:text-2xl text-white/55 max-w-2xl mx-auto leading-relaxed font-medium">
              {geo.heroContext}
            </p>
          </BlurReveal>

          <BlurReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Link
                href="#contacto"
                className="btn-primary w-full sm:w-auto px-10 py-5 flex items-center justify-center gap-3"
              >
                Hablemos de tu web
                <ArrowRight size={14} />
              </Link>
            </div>
          </BlurReveal>
        </div>
      </section>

      {/* ── CONTEXTO LOCAL ÚNICO + CTA PÉRDIDA DIARIA ─────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <BlurReveal>
            <p className="text-lg text-white/60 leading-relaxed mb-10">
              {geo.localContext}
            </p>
          </BlurReveal>
          <BlurReveal delay={0.1}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {geo.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-white/55">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </BlurReveal>
          {/* CTA pérdida diaria — dato calculado a partir de la población real del municipio */}
          <BlurReveal delay={0.2}>
            <div className="border border-white/8 rounded-2xl p-6 bg-white/[0.02] flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="shrink-0 text-center sm:text-left">
                <p className="text-5xl font-black text-brand-blue tabular-nums leading-none">
                  {dailyLocalSearches(geo.population)}
                </p>
                <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mt-1">
                  búsquedas locales / día
                </p>
              </div>
              <div className="h-px sm:h-12 w-full sm:w-px bg-white/8 shrink-0" />
              <p className="text-sm text-white/50 leading-relaxed">
                Estimación de vecinos de <strong className="text-white/70">{geo.name}</strong> que buscan
                servicios locales en Google cada día. Sin presencia web,{" "}
                <strong className="text-white/70">ninguno de ellos puede encontrarte</strong>.
              </p>
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
              Da el paso en <br />
              <span className="gradient-text">{geo.name}</span>
            </h2>
            <p className="text-white/55 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              Trabajemos juntos para llevar tu negocio al siguiente nivel digital. Sin
              intermediarios, trato directo.
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
