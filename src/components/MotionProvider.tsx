"use client";

import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";
import { ReactNode, useEffect, useState, createContext, useContext } from "react";

// null   → aún no detectado (estado inicial — no renderizar elementos pesados)
// "high" → dispositivo capaz: animaciones completas
// "low"  → conexión lenta / RAM < 4 GB / CPU < 4 cores: animaciones desactivadas
export type DeviceTier = "low" | "high" | null;

const DeviceCapabilityContext = createContext<DeviceTier>(null);

/** Consume el tier de dispositivo detectado en cualquier componente hijo. */
export function useDeviceCapability(): DeviceTier {
  return useContext(DeviceCapabilityContext);
}

function detectTier(): "low" | "high" {
  const nav = navigator as Navigator & {
    connection?: { effectiveType?: string; saveData?: boolean };
    deviceMemory?: number;
  };

  const slowConnection =
    nav.connection?.saveData === true ||
    nav.connection?.effectiveType === "slow-2g" ||
    nav.connection?.effectiveType === "2g";

  // deviceMemory solo disponible en Chrome/Android — undefined en iOS (se ignora)
  const lowMemory = nav.deviceMemory !== undefined && nav.deviceMemory < 4;

  // iPhones viejos reportan 2 cores; budget Android suele tener 4
  const lowCPU =
    navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency < 4;

  return slowConnection || lowMemory || lowCPU ? "low" : "high";
}

export function MotionProvider({ children }: { children: ReactNode }) {
  // Default null → elementos pesados (aurora orbs) NO se renderizan en SSR
  // ni en el primer paint. Solo aparecen cuando se confirma tier "high" en useEffect.
  // Motivo: Lighthouse emula móvil con CPU throttling pero no cambia
  // hardwareConcurrency, así que el default "high" provocaba que los orbes
  // con filter:blur(100px) inflasen artificialmente el Style&Layout time (~13s).
  const [tier, setTier] = useState<DeviceTier>(null);

  useEffect(() => {
    setTier(detectTier());
  }, []);

  return (
    <DeviceCapabilityContext.Provider value={tier}>
      <LazyMotion features={domAnimation}>
        {/* "always" desactiva TODAS las animaciones de Framer Motion globalmente */}
        <MotionConfig reducedMotion={tier === "low" ? "always" : "user"}>
          {children}
        </MotionConfig>
      </LazyMotion>
    </DeviceCapabilityContext.Provider>
  );
}
