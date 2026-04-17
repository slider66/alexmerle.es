"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export interface NavSection {
  id: string;
  label: string;
}

export function DossierNav({ sections, title }: { sections: NavSection[]; title: string }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const ratios = new Map<string, number>();

    const observers = sections.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const obs = new IntersectionObserver(
        ([entry]) => {
          ratios.set(id, entry.intersectionRatio);
          let maxId = sections[0]?.id ?? "";
          let maxRatio = -1;
          ratios.forEach((r, sid) => {
            if (r > maxRatio) {
              maxRatio = r;
              maxId = sid;
            }
          });
          setActive(maxId);
        },
        { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
      );

      obs.observe(el);
      return obs;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
  }, [sections]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <>
      {/* ── ÍNDICE IMPRIMIBLE (solo aparece en PDF) ──────────────────── */}
      <div
        className="hidden print:block mb-12 border border-gray-200 rounded-xl p-8 bg-gray-50"
        style={{ pageBreakAfter: "always" }}
      >
        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 mb-1">
          {title}
        </p>
        <h2 className="text-xl font-black text-gray-900 mb-6 tracking-tight">
          Índice de contenidos
        </h2>
        <ol className="space-y-2">
          {sections.map(({ label }, i) => (
            <li key={label} className="flex items-baseline gap-2">
              <span className="text-[11px] font-black text-gray-400 w-5 shrink-0">{i + 1}.</span>
              <span className="flex-1 border-b border-dotted border-gray-300" />
              <span className="text-sm font-semibold text-gray-700 flex-[3] text-left pl-2">
                {label}
              </span>
              <span className="text-[11px] font-black text-gray-400 w-8 text-right">
                p. {i + 2}
              </span>
            </li>
          ))}
        </ol>
        <p className="text-[9px] text-gray-400 mt-6 font-medium">
          webpc.es · hola@webpc.es · +34 600 367 217
        </p>
      </div>

      {/* ── DESKTOP: sidebar izquierdo fijo ──────────────────────────── */}
      <nav className="print:hidden hidden xl:flex fixed left-5 top-1/2 -translate-y-1/2 z-40">
        <div
          className="glass-card bg-[#080808]/70 px-4 py-5 flex flex-col gap-2.5"
          style={{ borderRadius: "1.25rem" }}
        >
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="group flex items-center gap-3 text-left"
            >
              <span
                className={`shrink-0 rounded-full transition-all duration-300 ${
                  active === id
                    ? "w-2 h-2 bg-brand-teal"
                    : "w-1.5 h-1.5 bg-white/20 group-hover:bg-white/50"
                }`}
              />
              <span
                className={`text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${
                  active === id ? "text-white" : "text-white/30 group-hover:text-white/60"
                }`}
              >
                {label}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* ── MÓVIL: botón flotante + bottom sheet ─────────────────────── */}
      <div className="print:hidden xl:hidden">
        {mobileOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
        )}

        {/* Bottom sheet */}
        <div
          className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div
            className="glass-card bg-[#0a0a0a]/95 border-white/10 px-5 pt-5 pb-10 rounded-b-none"
            style={{ borderRadius: "1.5rem 1.5rem 0 0" }}
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white/40">
                  Índice
                </span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-colors"
              >
                <X size={14} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {sections.map(({ id, label }, i) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`text-left px-4 py-3.5 rounded-xl border transition-all duration-200 text-[11px] font-black uppercase tracking-wider leading-tight ${
                    active === id
                      ? "border-brand-teal/40 bg-brand-teal/10 text-brand-teal"
                      : "border-white/6 bg-white/3 text-white/45 hover:text-white hover:border-white/15"
                  }`}
                >
                  <span className="text-white/25 mr-1.5">{i + 1}.</span>
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Botón disparador */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Abrir índice"
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full glass-card bg-[#080808]/80 border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors shadow-lg"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
    </>
  );
}
