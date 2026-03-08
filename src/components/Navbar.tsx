"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"}`}>
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-extrabold tracking-tighter">
          AM<span className="text-brand-blue">.</span>
        </Link>
        <div className="flex items-center gap-8">
          <Link href="#portfolio" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Proyectos
          </Link>
          <Link href="#sobre-mi" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Sobre Mí
          </Link>
          <Link href="#contacto" className="px-5 py-2 bg-brand-blue text-white rounded-full text-sm font-bold hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all hover:-translate-y-0.5">
            Hablemos
          </Link>
        </div>
      </nav>
    </header>
  );
}
