"use client";

import Link from "next/link";

export function HeroCtas() {
  const track = (cta: "primary" | "secondary") => {
    window.gtag?.("event", "cta_click", { from: "hero", cta });
  };

  return (
    <div
      className="flex flex-col sm:flex-row items-center justify-center gap-4"
      style={{ animation: "hero-fade-up 0.7s ease-out both", animationDelay: "0.4s" }}
    >
      <Link
        href="#contacto"
        className="btn-primary w-full sm:w-auto px-10 py-5"
        onClick={() => track("primary")}
      >
        Solicitar Diagnóstico
      </Link>
      <Link
        href="#precios"
        className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase text-xs tracking-widest rounded-full hover:bg-white/10 transition-all active:scale-95"
        onClick={() => track("secondary")}
      >
        Ver Niveles de Impacto
      </Link>
    </div>
  );
}
