import React, { useEffect, useState, useRef } from 'react';
import styles from './CyberCursor.module.css';

export default function CyberCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailPos, setTrailPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const requestRef = useRef();

  useEffect(() => {
    // Enable only on fine pointer non-touch devices (desktop / laptop with mouse)
    const isTouch = window.matchMedia('(pointer: coarse)').matches || ('ontouchstart' in window && window.innerWidth <= 1024);
    if (isTouch) return;

    setIsVisible(true);

    let currentPos = { x: -100, y: -100 };
    let targetPos = { x: -100, y: -100 };
    let scrollTimeout;

    const handleMouseMove = (e) => {
      targetPos = { x: e.clientX, y: e.clientY };
      setPos(targetPos);

      const target = e.target;
      const isInteractive = target.closest(
        'a, button, input, textarea, select, [role="button"], .glass-card, [data-interactive], [onclick]'
      );
      setIsHovered(!!isInteractive);
    };

    const handleMouseDown = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 200);
    };

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 350);
    };

    // Smooth lerp for trailing lag square
    const animateTrail = () => {
      currentPos.x += (targetPos.x - currentPos.x) * 0.25;
      currentPos.y += (targetPos.y - currentPos.y) * 0.25;
      setTrailPos({ x: currentPos.x, y: currentPos.y });
      requestRef.current = requestAnimationFrame(animateTrail);
    };

    requestRef.current = requestAnimationFrame(animateTrail);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(requestRef.current);
      clearTimeout(scrollTimeout);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Lagging Outer Cyber Square Trail */}
      <div
        className={`${styles.trailSquare} ${isHovered ? styles.trailHovered : ''} ${
          isScrolling ? styles.trailScrolling : ''
        }`}
        style={{
          transform: `translate3d(${trailPos.x}px, ${trailPos.y}px, 0)`,
        }}
      />

      {/* Main Unique Cyber Square HUD Reticle */}
      <div
        className={`${styles.cursorWrapper} ${isHovered ? styles.hovered : ''} ${
          isScrolling ? styles.scrolling : ''
        } ${isClicked ? styles.clicked : ''}`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        }}
      >
        {/* Core Pulsing Diamond / Square Center */}
        <div className={styles.centerSquareCore} />

        {/* Inner Chamfered Tech Square */}
        <div className={styles.innerTechSquare}>
          <div className={`${styles.cornerBracket} ${styles.topLeft}`} />
          <div className={`${styles.cornerBracket} ${styles.topRight}`} />
          <div className={`${styles.cornerBracket} ${styles.bottomLeft}`} />
          <div className={`${styles.cornerBracket} ${styles.bottomRight}`} />
        </div>

        {/* Outer Rotating HUD Square Scanner */}
        <div className={styles.outerHudScanner} />

        {/* Target Reticle Crosshair Tick Lines */}
        <div className={styles.crosshairH} />
        <div className={styles.crosshairV} />

        {/* HUD Data Readout Tag */}
        <div className={styles.hudBadge}>
          <span>{isHovered ? 'LOCK' : isScrolling ? 'SYNC' : 'SYS.OK'}</span>
        </div>
      </div>
    </>
  );
}
