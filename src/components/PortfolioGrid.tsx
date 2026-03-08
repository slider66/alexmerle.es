import { getRepositories, Repository } from "@/lib/github";
import { ExternalLink, Star } from "lucide-react";
import Image from "next/image";

export default async function PortfolioGrid() {
  const repos = await getRepositories();

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Mis Proyectos <span className="gradient-text">Destacados</span>
          </h2>
          <p className="text-white/50 text-lg">Explorando código y creando soluciones innovadoras.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo: Repository) => (
            <div 
              key={repo.id} 
              className={`glass-card group flex flex-col overflow-hidden ${repo.highlight ? "ring-1 ring-brand-blue/30 bg-brand-blue/[0.03]" : ""}`}
            >
              {repo.previewImage && (
                <div className="relative aspect-video w-full overflow-hidden border-b border-white/5">
                  <Image 
                    src={repo.previewImage} 
                    alt={`Preview of ${repo.name}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-xs font-bold text-white uppercase tracking-widest">Vista Previa</span>
                  </div>
                </div>
              )}
              
              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-xl font-bold tracking-tight group-hover:text-brand-blue transition-colors">
                      {repo.name}
                    </h3>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/5 rounded-full text-xs font-bold text-yellow-500">
                      <Star size={14} fill="currentColor" />
                      {repo.stargazers_count}
                    </div>
                  </div>
                  <p className="text-white/60 leading-relaxed mb-8 text-sm md:text-base">
                    {repo.description || "Sin descripción disponible."}
                  </p>
                </div>
                
                <div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {repo.topics.slice(0, 6).map((topic: string) => (
                      <span key={topic} className="px-3 py-1 bg-white/5 border border-white/5 rounded-md text-[10px] uppercase tracking-wider font-bold text-white/40">
                        {topic}
                      </span>
                    ))}
                  </div>

                  {!repo.hideLink ? (
                    <a 
                      href={repo.html_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-blue/80 transition-colors group/link"
                    >
                      Explorar en GitHub 
                      <ExternalLink size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  ) : (
                    <span className="text-xs font-bold text-white/30 uppercase tracking-widest">
                      Proyecto Privado / Confidencial
                    </span>
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
