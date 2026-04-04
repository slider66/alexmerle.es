import Link from "next/link";
import { Linkedin, Mail, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-24 px-6 border-t border-white/5 bg-[#020202]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left space-y-4">
          <Link
            href="/"
            className="text-2xl font-black tracking-tighter block hover:opacity-80 transition-opacity"
          >
            AM<span className="text-brand-blue">.</span>
          </Link>
          <p className="text-white/20 text-xs font-black uppercase tracking-widest">
            © {new Date().getFullYear()} Alejandro Merle. <br className="md:hidden" />
            Consultor IT · Norte de Madrid.
          </p>
          {/* Texto para crawlers — localidades de actuación */}
          <p className="sr-only">
            Consultor informático independiente en el norte de Madrid. Servicios de diseño web, SEO
            local y consultoría IT para negocios y autónomos en San Agustín de Guadalix, San
            Sebastián de los Reyes, El Molar, Las Tablas, Paracuellos de Jarama, Alcobendas, Algete,
            Cobeña, Fuente el Saz de Jarama, Tres Cantos, Colmenar Viejo, Soto del Real, Guadalix de
            la Sierra, Pedrezuela y alrededores.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          <div className="space-y-3">
            <p className="text-[9px] font-black uppercase tracking-widest text-white/20">Zonas</p>
            {[
              { label: "San Agustín de Guadalix", href: "/san-agustin-de-guadalix" },
              { label: "Alcobendas", href: "/alcobendas" },
              { label: "San Sebastián de los Reyes", href: "/san-sebastian-de-los-reyes" },
              { label: "El Molar", href: "/el-molar" },
              { label: "Tres Cantos", href: "/tres-cantos" },
              { label: "Paracuellos de Jarama", href: "/paracuellos-de-jarama" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-[10px] font-medium text-white/30 hover:text-white/70 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="space-y-3">
            <p className="text-[9px] font-black uppercase tracking-widest text-white/20">Sectores</p>
            {[
              { label: "Cafeterías", href: "/para/cafeterias" },
              { label: "Restaurantes", href: "/para/restaurantes" },
              { label: "Talleres", href: "/para/talleres" },
              { label: "Peluquerías", href: "/para/peluquerias" },
              { label: "Clínicas", href: "/para/clinicas" },
              { label: "Reformas", href: "/para/reformas" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-[10px] font-medium text-white/30 hover:text-white/70 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="space-y-3">
            <p className="text-[9px] font-black uppercase tracking-widest text-white/20">Navegación</p>
            {[
              { label: "Servicios", href: "/#servicios" },
              { label: "Precios", href: "/#precios" },
              { label: "Contacto", href: "/#contacto" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-[10px] font-medium text-white/30 hover:text-white/70 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          {[
            { icon: Zap, href: "https://wa.me/34600367217", color: "hover:bg-[#25D366]", label: "WhatsApp" },
            { icon: Linkedin, href: "https://es.linkedin.com/in/alejandromerle", color: "hover:bg-brand-blue", label: "LinkedIn" },
            { icon: Mail, href: "mailto:alex@merle.es", color: "hover:bg-brand-blue", label: "Email" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/5 ${social.color} hover:border-transparent transition-all duration-300 group`}
            >
              <social.icon size={18} className="group-hover:scale-110 transition-transform" />
            </a>
          ))}
        </div>
      </div>

      {/* Barra legal */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-wrap justify-center gap-6">
        {[
          { label: "Aviso Legal", href: "/aviso-legal" },
          { label: "Política de Privacidad", href: "/privacidad" },
          { label: "Política de Cookies", href: "/cookies" },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-[9px] font-black uppercase tracking-widest text-white/20 hover:text-white/50 transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
