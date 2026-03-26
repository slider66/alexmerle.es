"use client";

import { motion } from "framer-motion";

interface Word {
  text: string;
  gradient?: boolean;
}

interface SplitTextProps {
  words: Word[];
  baseDelay?: number;
  wordDelay?: number;
  /** Pasar false antes de montar en cliente para evitar opacity:0 en SSR */
  animate?: boolean;
}

export function SplitText({ words, baseDelay = 0.3, wordDelay = 0.12, animate = true }: SplitTextProps) {
  return (
    <>
      {words.map((word, i) => (
        <span key={i} className="inline-block align-bottom">
          <motion.span
            className={`inline-block ${word.gradient ? "gradient-text" : ""}`}
            initial={animate ? { y: "20px", opacity: 0 } : { y: "0px", opacity: 1 }}
            animate={{ y: "0px", opacity: 1 }}
            transition={{
              duration: 0.65,
              delay: animate ? baseDelay + i * wordDelay : 0,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          >
            {word.text}
          </motion.span>
          {i < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </>
  );
}
