"use client";

import { useRef } from "react";

export function ShineCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const shineRef = useRef<HTMLSpanElement>(null);

  function handleMouseEnter() {
    const el = shineRef.current;
    if (!el) return;
    // Reinicia la animación
    el.classList.remove("shine-run");
    void el.offsetWidth; // reflow para reiniciar
    el.classList.add("shine-run");
  }

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`} onMouseEnter={handleMouseEnter}>
      <span ref={shineRef} className="shine-beam" aria-hidden />
      {children}
    </div>
  );
}
