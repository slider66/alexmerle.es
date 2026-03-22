"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Precios", href: "#precios" },
  { label: "Proyectos", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  return (
    <>
      <header
        style={{
          transform: mounted ? "translateY(0)" : "translateY(-100%)",
          opacity: mounted ? 1 : 0,
          transition: "transform 0.5s cubic-bezier(0.25, 0.4, 0.25, 1), opacity 0.5s ease, background-color 0.3s ease, padding 0.3s ease, border-color 0.3s ease",
        }}
        className={`fixed top-0 left-0 w-full z-50 ${isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"}`}>
        <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-extrabold tracking-tighter">
            AM<span className="text-brand-blue">.</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
            <Link href="#contacto" className="px-5 py-2 bg-brand-blue text-white rounded-full text-sm font-bold hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all hover:-translate-y-0.5">
              Hablemos
            </Link>
          </div>

          {/* Mobile */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-black tracking-tighter text-white/70 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="mt-4 px-10 py-4 bg-brand-blue text-white rounded-full text-sm font-black uppercase tracking-widest hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all"
          >
            Hablemos
          </Link>
        </div>
      )}
    </>
  );
}
