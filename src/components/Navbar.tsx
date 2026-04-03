"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { m, AnimatePresence } from "framer-motion";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Precios", href: "#precios" },
  { label: "Resultados", href: "#casos-de-exito" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
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
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-2xl font-extrabold tracking-tighter"
            aria-label="Volver al inicio"
          >
            AM<span className="text-brand-blue">.</span>
          </button>

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
              Hablemos
            </Link>
          </div>

          {/* Mobile */}
          <button
            className="md:hidden p-3 text-white/70 hover:text-white transition-colors"
            style={{ touchAction: "manipulation" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            // backdropFilter NO se puede animar con Framer Motion en iOS:
            // solo se aplica backdrop-filter sin prefijo y WebKit lo ignora.
            // Se define como estilo estático con ambos prefijos.
            style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
            className="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((l, index) => (
              <m.div
                key={l.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05, ease: "easeOut" }}
              >
                <Link
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-black tracking-tighter text-white/70 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              </m.div>
            ))}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + links.length * 0.05, ease: "easeOut" }}
            >
              <Link
                href="#contacto"
                onClick={() => setMenuOpen(false)}
                className="btn-primary mt-4 px-10 py-4 text-sm"
              >
                Hablemos
              </Link>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
