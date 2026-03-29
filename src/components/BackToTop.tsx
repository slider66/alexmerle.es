"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { m, AnimatePresence } from "framer-motion";

const WA_NUMBER = "34600367217";
const WA_TEXT = encodeURIComponent("Hola Alejandro, te escribo desde alexmerle.es. Me gustaría saber más sobre tus servicios.");
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`;

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Aparece justo después de hacer scroll más allá de la altura de la primera pantalla (el Hero)
    const onScroll = () => setVisible(window.scrollY > window.innerHeight);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp flotante — siempre visible */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300"
      >
        <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.17 1.535 5.943L.057 23.885a.5.5 0 0 0 .632.612l6.094-1.596A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.942 9.942 0 0 1-5.223-1.487l-.374-.222-3.876 1.015 1.034-3.772-.244-.386A9.943 9.943 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
      </a>

      {/* Back to top — aparece al scrollar */}
      <AnimatePresence>
        {visible && (
          <m.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Volver arriba"
            className="fixed bottom-6 left-6 z-50 w-11 h-11 rounded-full bg-brand-blue/90 backdrop-blur-sm border border-brand-blue/50 flex items-center justify-center text-white shadow-lg hover:bg-brand-blue hover:-translate-y-1 transition-all duration-300"
          >
            <ArrowUp size={16} />
          </m.button>
        )}
      </AnimatePresence>
    </>
  );
}
