import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-teal/30 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-lg mx-auto space-y-8">
        <p className="text-[10px] font-black tracking-[0.3em] uppercase text-brand-teal">
          Error 404
        </p>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter">
          Página no <span className="gradient-text">encontrada</span>
        </h1>
        <p className="text-white/50 text-lg leading-relaxed">
          Esta dirección no existe. Si buscabas información sobre diseño web o SEO local en el norte de Madrid, desde aquí puedes seguir.
        </p>
        <Link
          href="/"
          className="btn-primary inline-flex items-center gap-3 px-8 py-4"
        >
          Volver al inicio
          <ArrowRight size={14} />
        </Link>
      </div>
    </main>
  );
}
