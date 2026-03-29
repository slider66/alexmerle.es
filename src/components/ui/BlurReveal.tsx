"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface BlurRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function BlurReveal({ children, className = "", delay = 0 }: BlurRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  // "pre"     → SSR / antes de montar: visible sin estilos (fallback seguro)
  // "hidden"  → montado pero fuera del viewport: esperando scroll
  // "visible" → en viewport: anima entrada
  const [state, setState] = useState<"pre" | "hidden" | "visible">("pre");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("visible");
          io.disconnect();
        } else {
          setState("hidden");
        }
      },
      { rootMargin: "0px 0px -5% 0px", threshold: 0 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style: React.CSSProperties =
    state === "pre"
      ? {}
      : state === "hidden"
      ? { opacity: 0, transform: "translateY(16px)" }
      : {
          opacity: 1,
          transform: "translateY(0)",
          transition: `opacity 0.4s ease ${delay}s, transform 0.4s ease ${delay}s`,
        };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
