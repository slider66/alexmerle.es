"use client";

import { useDeviceCapability } from "./MotionProvider";

/**
 * Orbes aurora + círculos flotantes del Hero.
 * Solo se renderizan en dispositivos con GPU/CPU suficiente.
 * filter:blur(100px) en 3 elementos animados es el mayor coste GPU en móviles.
 */
export function AuroraBackground() {
  const tier = useDeviceCapability();
  // null = aún detectando | "low" = dispositivo débil → no renderizar en ambos casos
  if (tier !== "high") return null;

  return (
    <>
      {/* Aurora orbs */}
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
    </>
  );
}
