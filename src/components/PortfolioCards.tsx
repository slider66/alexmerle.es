"use client";

import { m } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Star, GitCommitHorizontal } from "lucide-react";
import { Repository } from "@/lib/github";

export function PortfolioCards({ repos }: { repos: Repository[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {repos.map((repo, index) => {
        const isClickable = !repo.hideLink;
        const Tag = isClickable ? m.a : m.div;
        const linkProps = isClickable
          ? { href: repo.html_url, target: "_blank", rel: "noopener noreferrer" }
          : {};

        return (
          <Tag
            key={repo.id}
            {...linkProps}
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{
              duration: 0.4,
              delay: (index % 3) * 0.07,
              ease: [0.25, 0.4, 0.25, 1],
            }}
            className={`glass-card group flex flex-col h-full bg-[#080808]/40 border-white/5 transition-colors duration-500 ${
              isClickable
                ? "hover:border-brand-blue/30 cursor-pointer"
                : "hover:border-white/10"
            }`}
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
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-blue mb-1">
                    Proyecto
                  </span>
                  <h3 className="text-2xl font-black tracking-tight group-hover:text-white transition-colors">
                    {repo.name.replace(/-/g, " ")}
                  </h3>
                </div>
                <div className="flex flex-col items-end gap-2">
                  {repo.stargazers_count > 0 && (
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full text-[10px] font-black text-yellow-500/80 border border-white/5">
                      <Star size={11} fill="currentColor" />
                      {repo.stargazers_count}
                    </div>
                  )}
                  {repo.commits_count > 0 && (
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full text-[10px] font-black text-white/30 border border-white/5">
                      <GitCommitHorizontal size={11} />
                      {repo.commits_count}
                    </div>
                  )}
                </div>
              </div>

              <p className="text-white/40 leading-relaxed mb-10 text-sm font-medium line-clamp-3 group-hover:text-white/60 transition-colors">
                {repo.description || "Explorando nuevas fronteras tecnológicas y de seguridad."}
              </p>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-10">
                  {repo.topics.slice(0, 4).map((topic: string) => (
                    <span
                      key={topic}
                      className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[9px] uppercase tracking-widest font-black text-white/30 group-hover:text-white/50 transition-colors"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                {isClickable ? (
                  <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-brand-blue transition-colors">
                    Explorar Proyecto
                    <ArrowUpRight
                      size={14}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-brand-blue"
                    />
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-[9px] font-black text-white/20 uppercase tracking-[0.2em]">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500/50" />
                    Privado / Confidencial
                  </div>
                )}
              </div>
            </div>
          </Tag>
        );
      })}
    </div>
  );
}
