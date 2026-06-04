import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const move = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  const gap = 4;
  const armLen = 10;
  const thickness = 2;
  const color = '#007aa8';

  return (
    <div ref={cursorRef} className="custom-cursor" style={{ position: 'fixed', pointerEvents: 'none', zIndex: 9999, transform: 'translate(-50%, -50%)', mixBlendMode: 'difference' }}>
      {/* Top arm */}
      <div style={{ position: 'absolute', width: thickness, height: armLen, background: color, left: '50%', bottom: `calc(50% + ${gap}px)`, transform: 'translateX(-50%)' }} />
      {/* Bottom arm */}
      <div style={{ position: 'absolute', width: thickness, height: armLen, background: color, left: '50%', top: `calc(50% + ${gap}px)`, transform: 'translateX(-50%)' }} />
      {/* Left arm */}
      <div style={{ position: 'absolute', height: thickness, width: armLen, background: color, top: '50%', right: `calc(50% + ${gap}px)`, transform: 'translateY(-50%)' }} />
      {/* Right arm */}
      <div style={{ position: 'absolute', height: thickness, width: armLen, background: color, top: '50%', left: `calc(50% + ${gap}px)`, transform: 'translateY(-50%)' }} />
    </div>
  );
}