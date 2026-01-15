import React, { useState, useEffect } from 'react';

interface TerminalTextProps {
  text: string;
  typingSpeed?: number;
  startDelay?: number;
  className?: string;
  cursor?: boolean;
}

export const TerminalText: React.FC<TerminalTextProps> = ({ 
  text, 
  typingSpeed = 50, 
  startDelay = 0, 
  className = "",
  cursor = true
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setStarted(true);
    }, startDelay);

    return () => clearTimeout(delayTimer);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;

    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => {
        if (index >= text.length) {
          clearInterval(intervalId);
          return prev;
        }
        const nextChar = text.charAt(index);
        index++;
        return text.substring(0, index);
      });
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, [text, typingSpeed, started]);

  return (
    <span className={className}>
      {displayedText}
      {cursor && <span className="animate-cursor-blink text-neon-blue inline-block ml-1">_</span>}
    </span>
  );
};