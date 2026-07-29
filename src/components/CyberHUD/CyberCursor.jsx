import React, { useEffect, useState } from 'react';
import styles from './CyberCursor.module.css';

export default function CyberCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on pointer-fine devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    setIsVisible(true);

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target;
      const isInteractive =
        target.closest('a, button, input, textarea, select, [role="button"], .glass-card, [data-interactive]');
      setIsHovered(!!isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`${styles.cursorWrapper} ${isHovered ? styles.hovered : ''}`}
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
    >
      {/* Center Cyber Dot */}
      <div className={styles.dot} />

      {/* Outer Rotating Target Reticle Ring */}
      <div className={styles.reticleRing}>
        <div className={`${styles.cornerMarker} ${styles.topLeft}`} />
        <div className={`${styles.cornerMarker} ${styles.topRight}`} />
        <div className={`${styles.cornerMarker} ${styles.bottomLeft}`} />
        <div className={`${styles.cornerMarker} ${styles.bottomRight}`} />
      </div>

      {/* Target Crosshair Lines */}
      <div className={styles.crosshairX} />
      <div className={styles.crosshairY} />
    </div>
  );
}
