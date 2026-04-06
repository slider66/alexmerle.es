"use client";

import { useState } from "react";
import { Printer, Info } from "lucide-react";

interface Props {
  filename?: string;
}

export function DossierPrintButton({ filename = "Alex-Merle-Dossier" }: Props) {
  const [showTip, setShowTip] = useState(false);

  const handlePrint = () => {
    const prev = document.title;
    document.title = filename;
    window.print();
    // Restaurar tras el diálogo (pequeño delay para que el print tome el título)
    setTimeout(() => { document.title = prev; }, 1000);
  };

  return (
    <div className="print:hidden relative inline-flex items-center gap-1">
      <button
        onClick={handlePrint}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-brand-blue/40 hover:bg-brand-blue/10 transition-all duration-300 text-[11px] font-black uppercase tracking-widest"
      >
        <Printer size={13} />
        Descargar PDF
      </button>
      <button
        onClick={() => setShowTip((v) => !v)}
        className="w-6 h-6 flex items-center justify-center text-white/25 hover:text-white/50 transition-colors"
        aria-label="Cómo descargar el PDF"
      >
        <Info size={13} />
      </button>
      {showTip && (
        <div className="absolute top-full right-0 mt-2 w-64 p-3 rounded-xl border border-white/10 bg-[#111] text-[11px] text-white/55 font-medium leading-relaxed z-50 shadow-xl">
          Se abre el menú de impresión del navegador. Elige{" "}
          <span className="text-white/80 font-bold">Guardar como PDF</span> (o{" "}
          <span className="text-white/80 font-bold">Save as PDF</span>) como destino de impresión.
        </div>
      )}
    </div>
  );
}
