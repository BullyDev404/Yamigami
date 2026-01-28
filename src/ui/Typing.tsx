import { useState, useEffect } from "react";

interface TypingProps {
  text: string;
  speed?: number;
}

function Typing({ text, speed = 30 }: TypingProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Typewriter effect
  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span>
      {displayedText}
      <span
        className={`text-black text-xs font-bolder ${showCursor ? "opacity-100" : "opacity-0"}`}
      >
        ♟️
      </span>
    </span>
  );
}

export default Typing;
