"use client";

import { motion, type TargetAndTransition, type Transition } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SplitText } from "@/components/ui/SplitText";

const titleLine1 = [
  { text: "Tu negocio", gradient: false },
  { text: "local,", gradient: false },
];

const titleLine2 = [
  { text: "visible", gradient: true },
  { text: "online.", gradient: false },
];

type MotionProps = {
  initial: TargetAndTransition;
  animate: TargetAndTransition;
  transition: Transition;
};

// Variantes: antes de montar en cliente → sin animación (visible)
//             después de montar          → animación normal
const fadeUp = (delay = 0): MotionProps => ({
  initial: { opacity: 1, y: 0 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

const fadeUpClient = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const f = mounted ? fadeUpClient : fadeUp;

  return (
    <section className="relative min-h-screen min-h-svh flex items-center justify-center pt-20 overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="aurora-orb aurora-orb-1" />
        <div className="aurora-orb aurora-orb-2" />
        <div className="aurora-orb aurora-orb-3" />
      </div>

      {/* Floating circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-10 w-24 h-24 border border-white/5 rounded-full animate-float opacity-20" />
        <div className="absolute bottom-1/3 right-10 w-32 h-32 border border-white/5 rounded-full animate-float delay-700 opacity-20" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Shiny badge */}
        <motion.div {...f(0)} className="mb-8">
          <span className="shiny-badge">Consultor IT · Norte de Madrid</span>
          <span className="inline-flex items-center gap-2 ml-3 px-4 py-2 text-[10px] font-black tracking-[0.2em] uppercase text-emerald-400/80 border border-emerald-500/20 bg-emerald-500/5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Aceptando proyectos
          </span>
        </motion.div>

        {/* Animated headline */}
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-10 leading-[0.95]">
          <span className="block">
            <SplitText words={titleLine1} baseDelay={0.2} animate={mounted} />
          </span>
          <span className="block">
            <SplitText words={titleLine2} baseDelay={0.44} animate={mounted} />
          </span>
        </h1>

        <motion.p
          className="text-xl md:text-2xl text-white/55 max-w-2xl mx-auto mb-14 leading-relaxed font-medium"
          {...f(0.5)}
        >
          Webs profesionales, encargos online y SEO local para negocios del norte de Madrid.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          {...f(0.65)}
        >
          <Link href="#precios" className="btn-primary w-full sm:w-auto px-10 py-5">
            Ver planes
          </Link>
          <Link
            href="#contacto"
            className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase text-xs tracking-widest rounded-full hover:bg-white/10 transition-all active:scale-95"
          >
            Reserva una llamada
          </Link>
        </motion.div>

        {/* Credenciales bajo los CTAs */}
        <motion.div
          className="flex items-center justify-center gap-4 mt-10 flex-wrap"
          {...f(0.8)}
        >
          <span className="text-[10px] text-white/20 uppercase tracking-widest font-black">
            Experiencia en
          </span>
          <span className="px-3 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-[10px] font-black uppercase tracking-widest text-brand-blue/70">
            Telefónica Tech
          </span>
          <span className="px-3 py-1.5 rounded-full bg-brand-teal/10 border border-brand-teal/20 text-[10px] font-black uppercase tracking-widest text-brand-teal/70">
            CompTIA Certified
          </span>
        </motion.div>
      </div>
    </section>
  );
}
