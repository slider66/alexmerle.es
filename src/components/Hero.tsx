"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-teal/10 rounded-full blur-[120px]" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-white/5 border border-white/10 rounded-full text-white/60">
            Especialista en Ciberseguridad & IT
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Especialista en <span className="gradient-text">Digital Risk Protection</span> y Soluciones Digitales.
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Ayudo a empresas a mitigar riesgos tecnológicos y a transformar ideas complejas en realidades digitales seguras y eficientes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#portfolio" className="w-full sm:w-auto px-8 py-4 bg-brand-blue text-white font-bold rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all hover:-translate-y-1">
              Ver proyectos
            </Link>
            <Link href="#contacto" className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all">
              Contactar ahora
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
