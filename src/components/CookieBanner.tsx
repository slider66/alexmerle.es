"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "cookie_consent";

type Consent = "accepted" | "rejected";

declare global {
  interface Window {
    dataLayer: unknown[];
    // opcional: no existe hasta que el usuario acepta las cookies
    gtag?: (...args: unknown[]) => void;
  }
}

/** Carga el script de GA4 dinámicamente solo si el usuario acepta. */
function loadGA() {
  if (document.querySelector('script[data-ga]')) return;
  const s = document.createElement("script");
  s.src = "https://www.googletagmanager.com/gtag/js?id=G-794H8PS8X1";
  s.async = true;
  s.setAttribute("data-ga", "1");
  document.head.appendChild(s);
  s.onload = () => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function (...args: unknown[]) { window.dataLayer.push(args); };
    window.gtag?.("js", new Date());
    window.gtag?.("config", "G-794H8PS8X1");
  };
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Consent | null;
    if (!saved) {
      setVisible(true);
    } else if (saved === "accepted") {
      loadGA();
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
    loadGA();
  }

  function reject() {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-[60] px-4 pb-4 md:px-6 md:pb-6 pointer-events-none"
    >
      <div className="pointer-events-auto max-w-2xl mx-auto md:mx-0 bg-black/90 border border-white/10 rounded-2xl px-5 py-4 backdrop-blur-md shadow-xl flex flex-col sm:flex-row sm:items-center gap-4">
        <p className="text-xs text-white/55 leading-relaxed flex-1">
          Usamos cookies analíticas (Google Analytics) para entender cómo se usa la web.
          Sin publicidad ni rastreo entre sitios.{" "}
          <Link href="/cookies" className="text-brand-blue hover:underline underline-offset-2">
            Política de cookies
          </Link>
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={reject}
            className="px-4 py-2 text-xs font-bold text-white/50 border border-white/10 rounded-full hover:text-white hover:border-white/25 transition-colors"
            style={{ touchAction: "manipulation" }}
          >
            Solo esenciales
          </button>
          <button
            onClick={accept}
            className="btn-primary px-4 py-2 text-xs"
            style={{ touchAction: "manipulation" }}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
