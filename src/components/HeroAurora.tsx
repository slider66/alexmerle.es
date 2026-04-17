"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Cada wrapper es position:absolute inset-0 para que los orbs hijos mantengan
// su top/left/bottom/right correctos cuando GSAP aplica transform al wrapper.
export function HeroAurora() {
  const w1 = useRef<HTMLDivElement>(null);
  const w2 = useRef<HTMLDivElement>(null);
  const w3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const vh = window.innerHeight;

    const ctx = gsap.context(() => {
      gsap.to(w1.current, {
        y: -110,
        ease: "none",
        scrollTrigger: { start: 0, end: vh, scrub: 2 },
      });
      gsap.to(w2.current, {
        y: -70,
        ease: "none",
        scrollTrigger: { start: 0, end: vh, scrub: 3 },
      });
      gsap.to(w3.current, {
        y: -45,
        ease: "none",
        scrollTrigger: { start: 0, end: vh, scrub: 1.5 },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div ref={w1} className="absolute inset-0">
        <div className="aurora-orb aurora-orb-1" />
      </div>
      <div ref={w2} className="absolute inset-0">
        <div className="aurora-orb aurora-orb-2" />
      </div>
      <div ref={w3} className="absolute inset-0">
        <div className="aurora-orb aurora-orb-3" />
      </div>
    </div>
  );
}
