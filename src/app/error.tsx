"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center space-y-6 max-w-md">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-blue">
          Algo ha fallado
        </p>
        <h1 className="text-4xl font-black tracking-tighter">Error inesperado</h1>
        <p className="text-white/40 text-sm leading-relaxed">
          Ha ocurrido un problema cargando la página. Puedes intentarlo de nuevo o contactarme
          directamente.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="px-8 py-3 bg-brand-blue text-white font-black uppercase text-[10px] tracking-widest rounded-full hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)] transition-all"
          >
            Intentar de nuevo
          </button>
          <a
            href="mailto:hola@webpc.es"
            className="px-8 py-3 border border-white/10 text-white font-black uppercase text-[10px] tracking-widest rounded-full hover:border-white/30 transition-all"
          >
            Contactar
          </a>
        </div>
      </div>
    </main>
  );
}
