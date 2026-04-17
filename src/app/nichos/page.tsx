import { nichesData } from "@/lib/nicheData";
import { BlurReveal } from "@/components/ui/BlurReveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Diseño Web por Sectores · WebPC",
  description:
    "Páginas web y SEO local especializadas por sector. Cafeterías, restaurantes, talleres, clínicas, reformas y más — diseño web adaptado a tu negocio.",
  alternates: { canonical: "/nichos" },
  openGraph: {
    title: "Diseño Web por Sectores · WebPC",
    description:
      "Páginas web y SEO local especializadas por sector. Diseño web adaptado a cada tipo de negocio.",
    url: "https://webpc.es/nichos",
  },
};

export default function NichosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://webpc.es" },
          {
            "@type": "ListItem",
            position: 2,
            name: "Sectores",
            item: "https://webpc.es/nichos",
          },
        ],
      },
      {
        "@type": "ItemList",
        name: "Sectores de diseño web y SEO local",
        itemListElement: nichesData.map((n, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: n.name,
          url: `https://webpc.es/para/${n.slug}`,
        })),
      },
    ],
  };

  return (
    <main className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <section className="relative pt-40 pb-20 px-6 flex flex-col items-center justify-center min-h-[50vh] text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-teal/30 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <BlurReveal>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-[10px] font-black tracking-[0.2em] uppercase text-brand-teal border border-brand-teal/20 bg-brand-teal/5 rounded-full">
              Especialización por sector
            </span>
          </BlurReveal>

          <BlurReveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1]">
              Diseño web para <span className="gradient-text">tu sector</span>
            </h1>
          </BlurReveal>

          <BlurReveal delay={0.2}>
            <p className="text-xl md:text-2xl text-white/55 max-w-2xl mx-auto leading-relaxed font-medium">
              Cada negocio tiene problemas distintos. Trabajo con sectores específicos para
              ofrecerte una web que entiende tu cliente, tu competencia y tu mercado.
            </p>
          </BlurReveal>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <BlurReveal>
            <p className="text-[9px] font-black uppercase tracking-widest text-white/20 mb-10">
              {nichesData.length} sectores disponibles
            </p>
          </BlurReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {nichesData.map((niche, i) => (
              <BlurReveal key={niche.slug} delay={i * 0.03}>
                <Link
                  href={`/para/${niche.slug}`}
                  className="group flex flex-col gap-3 p-5 border border-white/8 rounded-2xl bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all"
                >
                  <h2 className="text-sm font-black text-white/80 group-hover:text-white transition-colors">
                    {niche.name}
                  </h2>
                  <p className="text-xs text-white/35 leading-relaxed line-clamp-2">
                    {niche.heroContext}
                  </p>
                  <span className="mt-auto flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-brand-teal/60 group-hover:text-brand-teal transition-colors">
                    Ver sector <ArrowRight size={10} />
                  </span>
                </Link>
              </BlurReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
