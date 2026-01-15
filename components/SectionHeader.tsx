import React, { useRef, useEffect, useState } from 'react';
import { TerminalText } from './TerminalText';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mb-12 border-b border-neon-blue/20 pb-4">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-mono">
        <span className="text-neon-blue mr-2">&gt;</span>
        {isVisible && <TerminalText text={title} typingSpeed={60} cursor={false} />}
        {!isVisible && <span className="opacity-0">{title}</span>}
      </h2>
      {subtitle && (
        <p className="text-text-muted text-sm md:text-base font-mono mt-2 pl-6">
          // {subtitle}
        </p>
      )}
    </div>
  );
};