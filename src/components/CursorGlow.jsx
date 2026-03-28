import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CursorGlow() {
  const glowRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if ('ontouchstart' in window) return;

    const handleMouseMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
        if (!visible) setVisible(true);
      }
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [visible]);

  if ('ontouchstart' in globalThis) return null;

  return (
    <div
      ref={glowRef}
      className="fixed pointer-events-none z-[9999] transition-opacity duration-300"
      style={{
        width: '600px',
        height: '600px',
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, rgba(34,211,238,0.03) 40%, transparent 70%)',
        opacity: visible ? 1 : 0,
      }}
    />
  );
}
