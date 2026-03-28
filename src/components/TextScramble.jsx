import { useState, useEffect, useCallback } from 'react';

export default function TextScramble({ texts, className = '' }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const chars = '!<>-_\\/[]{}—=+*^?#________';

  const scramble = useCallback((target) => {
    let iteration = 0;
    const length = target.length;

    return new Promise((resolve) => {
      const interval = setInterval(() => {
        setDisplayText(
          target
            .split('')
            .map((char, i) => {
              if (i < iteration) return char;
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );

        if (iteration >= length) {
          clearInterval(interval);
          resolve();
        }
        iteration += 1 / 2;
      }, 30);
    });
  }, []);

  useEffect(() => {
    let timeout;
    const run = async () => {
      await scramble(texts[currentIndex]);
      timeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }, 3000);
    };
    run();
    return () => clearTimeout(timeout);
  }, [currentIndex, texts, scramble]);

  return (
    <span className={`font-mono ${className}`}>
      {displayText}
    </span>
  );
}
