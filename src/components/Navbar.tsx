"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Precios", href: "#precios" },
  { label: "Resultados", href: "#casos-de-exito" },
  { label: "El Equipo", href: "#sobre-mi" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // eslint-disable-line react-hooks/set-state-in-effect
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 50);
      // Solo cierra el menú con scroll real (>10px) — en iOS un tap puede
      // disparar un micro-scroll de 1-2px por el bounce del sistema.
      if (menuOpen && y > 10) setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  // Bloquea scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        style={{
          transform: mounted ? "translateY(0)" : "translateY(-100%)",
          opacity: mounted ? 1 : 0,
          transition:
            "transform 0.5s cubic-bezier(0.25, 0.4, 0.25, 1), opacity 0.5s ease, background-color 0.3s ease, padding 0.3s ease, border-color 0.3s ease",
        }}
        className={`fixed top-0 left-0 w-full z-50 ${isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"}`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-black tracking-tighter block hover:opacity-80 transition-opacity"
          >
            WebPC<span className="text-brand-blue">.</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link href="#contacto" className="btn-primary px-5 py-2 text-sm">
              Diagnóstico
            </Link>
          </div>

          {/* Mobile — botón hamburguesa */}
          <button
            className="md:hidden p-3 text-white/70 hover:text-white transition-colors"
            style={{ touchAction: "manipulation" }}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile drawer — CSS puro, sin Framer Motion.
          Motivo: Navbar está fuera del LazyMotion provider (MotionProvider wraps
          solo {children}). Sin LazyMotion, m.div aplica initial:{opacity:0}
          como estilo estático y la animación nunca corre → drawer invisible.
          CSS transition es 100% fiable en iOS Firefox/Safari. */}
      <div
        aria-hidden={!menuOpen}
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
        className={`
          fixed inset-0 z-40 bg-black/95
          flex flex-col items-center justify-center gap-8
          md:hidden
          transition-opacity duration-300
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
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
          className="btn-primary mt-4 px-10 py-4 text-sm"
        >
          Hablemos
        </Link>
      </div>
    </>
  );
}
