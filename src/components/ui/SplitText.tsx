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
          <span
            className={`inline-block ${word.gradient ? "gradient-text" : ""}`}
            style={{
              animation: "hero-fade-up 0.55s cubic-bezier(0.25, 0.4, 0.25, 1) both",
              animationDelay: `${baseDelay + i * wordDelay}s`,
            }}
          >
            {word.text}
          </span>
          {i < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </>
  );
}
