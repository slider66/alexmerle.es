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
}

export function SplitText({ words, baseDelay = 0.3, wordDelay = 0.12 }: SplitTextProps) {
  return (
    <>
      {words.map((word, i) => (
        <span key={i} className="inline-block align-bottom">
          <motion.span
            className={`inline-block ${word.gradient ? "gradient-text" : ""}`}
            initial={{ y: "18px", opacity: 0 }}
            animate={{ y: "0px", opacity: 1 }}
            transition={{
              duration: 0.55,
              delay: baseDelay + i * wordDelay,
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
