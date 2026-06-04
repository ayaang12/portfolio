import { useEffect, useRef, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';

// Scramble-decode animation: letters cycle through random chars before resolving
// This is a signature effect that immediately separates from AI-generated portfolios
export default function ScrambleText({ text, delay = 0, className = '', tag = 'span' }) {
  const [displayed, setDisplayed] = useState(() => text.split('').map(() => ' '));
  const [started, setStarted] = useState(false);
  const frameRef = useRef(null);
  const Tag = tag;

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    const letters = text.split('');
    let resolved = new Array(letters.length).fill(false);
    let iteration = 0;
    const totalIterations = letters.length * 5; // frames before each letter resolves

    const tick = () => {
      iteration++;
      setDisplayed(letters.map((ch, i) => {
        if (ch === ' ') return ' ';
        const resolveAt = Math.floor((i / letters.length) * totalIterations * 0.7);
        if (iteration > resolveAt) {
          resolved[i] = true;
          return ch;
        }
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      }));

      if (resolved.every(Boolean)) {
        clearInterval(frameRef.current);
        setDisplayed(letters);
      }
    };

    frameRef.current = setInterval(tick, 40);
    return () => clearInterval(frameRef.current);
  }, [started, text]);

  return (
    <Tag className={className}>
      {displayed.map((ch, i) => (
        <span
          key={i}
          className="inline-block"
          style={{ color: ch !== text[i] && ch !== ' ' ? 'hsl(195 90% 42%)' : undefined, minWidth: ch === ' ' ? '0.3em' : undefined }}
        >
          {ch}
        </span>
      ))}
    </Tag>
  );
}