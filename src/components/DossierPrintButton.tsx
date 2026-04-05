"use client";

import { Printer } from "lucide-react";

export function DossierPrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="print:hidden inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-brand-blue/40 hover:bg-brand-blue/10 transition-all duration-300 text-[11px] font-black uppercase tracking-widest"
    >
      <Printer size={13} />
      Descargar PDF
    </button>
  );
}
