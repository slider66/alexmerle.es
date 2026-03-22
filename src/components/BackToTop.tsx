"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Volver arriba"
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-brand-blue/90 backdrop-blur-sm border border-brand-blue/50 flex items-center justify-center text-white shadow-lg hover:bg-brand-blue hover:-translate-y-1 transition-all duration-300"
    >
      <ArrowUp size={16} />
    </button>
  );
}
