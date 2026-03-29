"use client";

import { m } from "framer-motion";
import { ArrowRight, GitCommitHorizontal, Star, Terminal } from "lucide-react";
import { Repository } from "@/lib/github";

export function ToolCards({ repos }: { repos: Repository[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {repos.map((repo, index) => (
        <m.div
          key={repo.id}
          initial={{ y: 24 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{
            duration: 0.35,
            delay: (index % 3) * 0.06,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="glass-card group flex flex-col bg-[#080808]/40 border-white/5 hover:border-brand-teal/25 transition-colors duration-500 p-8"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-5">
            <div className="w-10 h-10 rounded-xl bg-brand-teal/10 border border-brand-teal/20 flex items-center justify-center shrink-0">
              <Terminal size={16} className="text-brand-teal" />
            </div>
            <div className="flex flex-col items-end gap-2">
              {repo.stargazers_count > 0 && (
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/5 rounded-full text-[10px] font-black text-yellow-500/70 border border-white/5">
                  <Star size={10} fill="currentColor" />
                  {repo.stargazers_count}
                </div>
              )}
              {repo.commits_count > 0 && (
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/5 rounded-full text-[10px] font-black text-white/25 border border-white/5">
                  <GitCommitHorizontal size={10} />
                  {repo.commits_count}
                </div>
              )}
            </div>
          </div>

          {/* Name */}
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-teal mb-1">
            Herramienta
          </span>
          <h3 className="text-lg font-black tracking-tight mb-3 group-hover:text-white transition-colors">
            {repo.name.replace(/-/g, " ")}
          </h3>

          {/* Description */}
          <p className="text-white/40 text-sm leading-relaxed font-medium line-clamp-3 group-hover:text-white/55 transition-colors flex-1 mb-6">
            {repo.description || "Utilidad de código abierto."}
          </p>

          {/* Topics */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {repo.topics.slice(0, 4).map((topic: string) => (
              <span
                key={topic}
                className="px-2.5 py-1 bg-brand-teal/5 border border-brand-teal/15 rounded-full text-[9px] uppercase tracking-widest font-black text-brand-teal/50 group-hover:text-brand-teal/70 transition-colors"
              >
                {topic}
              </span>
            ))}
          </div>

          {/* Link */}
          {!repo.hideLink ? (
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/30 hover:text-brand-teal transition-all group/link"
            >
              Ver código
              <ArrowRight
                size={13}
                className="group-hover/link:translate-x-1 transition-transform text-brand-teal"
              />
            </a>
          ) : (
            <div className="flex items-center gap-2 text-[9px] font-black text-white/20 uppercase tracking-[0.2em]">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500/50" />
              Privado / Confidencial
            </div>
          )}
        </m.div>
      ))}
    </div>
  );
}
