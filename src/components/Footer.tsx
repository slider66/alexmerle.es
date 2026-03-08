import Link from "next/link";
import { Linkedin, Mail, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-[#030303]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-left">
          <Link href="/" className="text-2xl font-extrabold tracking-tighter mb-4 block">
            AM<span className="text-brand-blue">.</span>
          </Link>
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Alex Merle. <br className="md:hidden" />
            Todos los derechos reservados.
          </p>
        </div>

        <div className="flex gap-8">
          <Link href="#portfolio" className="text-sm text-white/60 hover:text-white transition-colors">Proyectos</Link>
          <Link href="#sobre-mi" className="text-sm text-white/60 hover:text-white transition-colors">Sobre Mí</Link>
          <Link href="#contacto" className="text-sm text-white/60 hover:text-white transition-colors">Contacto</Link>
        </div>

        <div className="flex gap-4">
          <a 
            href="https://wa.me/34600367217" 
            target="_blank" 
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-[#25D366] hover:border-[#25D366] transition-all"
          >
            <Zap size={20} />
          </a>
          <a 
            href="https://es.linkedin.com/in/alejandromerle" 
            target="_blank" 
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-brand-blue hover:border-brand-blue transition-all"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:alex@merle.es" 
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-brand-blue hover:border-brand-blue transition-all"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
