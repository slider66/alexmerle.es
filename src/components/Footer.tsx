import Link from "next/link";
import { Linkedin, Mail, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-24 px-6 border-t border-white/5 bg-[#020202]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left space-y-4">
          <Link href="/" className="text-2xl font-black tracking-tighter block hover:opacity-80 transition-opacity">
            AM<span className="text-brand-blue">.</span>
          </Link>
          <p className="text-white/20 text-xs font-black uppercase tracking-widest">
            © {new Date().getFullYear()} Alex Merle. <br className="md:hidden" />
            Digital Risk Protection.
          </p>
        </div>

        <div className="flex gap-12">
          {['Portfolio', 'Sobre Mí', 'Contacto'].map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex gap-4">
          {[
            { icon: Zap, href: "https://wa.me/34600367217", color: "hover:bg-[#25D366]" },
            { icon: Linkedin, href: "https://es.linkedin.com/in/alejandromerle", color: "hover:bg-brand-blue" },
            { icon: Mail, href: "mailto:alex@merle.es", color: "hover:bg-brand-blue" }
          ].map((social, i) => (
            <a 
              key={i}
              href={social.href} 
              target="_blank" 
              className={`w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/5 ${social.color} hover:border-transparent transition-all duration-300 group`}
            >
              <social.icon size={18} className="group-hover:scale-110 transition-transform" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
