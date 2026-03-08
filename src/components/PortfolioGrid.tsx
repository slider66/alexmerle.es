import { getRepositories, Repository } from "@/lib/github";
import { ExternalLink, Star, ArrowRight } from "lucide-react";
import Image from "next/image";

export default async function PortfolioGrid() {
  const repos = await getRepositories();

  return (
    <section id="portfolio" className="py-32 px-6 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            Mis Proyectos <br /> <span className="gradient-text">Destacados</span>
          </h2>
          <p className="text-white/40 text-xl max-w-2xl mx-auto font-medium">
            Una selección de soluciones técnicas enfocadas en seguridad y eficiencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {repos.map((repo: Repository, index: number) => (
            <div 
              key={repo.id} 
              className={`glass-card group flex flex-col h-full bg-[#080808]/40 border-white/5 hover:border-brand-blue/30 transition-all duration-500`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {repo.previewImage && (
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/5 bg-black/20">
                  <Image 
                    src={repo.previewImage} 
                    alt={`Preview of ${repo.name}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-60" />
                </div>
              )}
              
              <div className="p-10 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-8">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-blue mb-1">Proyecto</span>
                    <h3 className="text-2xl font-black tracking-tight group-hover:text-white transition-colors">
                      {repo.name.replace(/-/g, ' ')}
                    </h3>
                  </div>
                  {repo.stargazers_count > 0 && (
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full text-[10px] font-black text-yellow-500/80 border border-white/5">
                      <Star size={12} fill="currentColor" />
                      {repo.stargazers_count}
                    </div>
                  )}
                </div>

                <p className="text-white/40 leading-relaxed mb-10 text-sm font-medium line-clamp-3 group-hover:text-white/60 transition-colors">
                  {repo.description || "Explorando nuevas fronteras tecnológicas y de seguridad."}
                </p>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-10">
                    {repo.topics.slice(0, 4).map((topic: string) => (
                      <span key={topic} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[9px] uppercase tracking-widest font-black text-white/30 group-hover:text-white/50 transition-colors">
                        {topic}
                      </span>
                    ))}
                  </div>

                  {!repo.hideLink ? (
                    <a 
                      href={repo.html_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-brand-blue transition-all group/link"
                    >
                      Explorar Proyecto
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform text-brand-blue" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 text-[9px] font-black text-white/20 uppercase tracking-[0.2em]">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500/50" />
                      Privado / Confidencial
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
