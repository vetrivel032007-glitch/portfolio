import React, { useState, useEffect } from 'react';
import styles from './CyberTelemetry.module.css';

export default function CyberTelemetry() {
  const [fps, setFps] = useState(60);
  const [ping, setPing] = useState(14);

  useEffect(() => {
    // Dynamic FPS & Ping counter simulation
    let frameCount = 0;
    let lastTime = performance.now();
    let animId;

    const calcFps = () => {
      const now = performance.now();
      frameCount++;
      if (now - lastTime >= 1000) {
        setFps(Math.min(60, frameCount));
        frameCount = 0;
        lastTime = now;
      }
      animId = requestAnimationFrame(calcFps);
    };

    animId = requestAnimationFrame(calcFps);

    const pingInterval = setInterval(() => {
      setPing(Math.floor(10 + Math.random() * 8));
    }, 4000);

    return () => {
      cancelAnimationFrame(animId);
      clearInterval(pingInterval);
    };
  }, []);

  return (
    <div className={styles.telemetryContainer}>
      <div className={styles.hudLine}>
        <span className={styles.pulseDot} />
        <span className={styles.sysText}>SYS.CORE_V3</span>
        <span className={styles.divider}>|</span>
        <span className={styles.valText}>FPS: {fps}</span>
        <span className={styles.divider}>|</span>
        <span className={styles.valText}>PING: {ping}ms</span>
        <span className={styles.divider}>|</span>
        <span className={styles.valAccent}>NODE: IN_S3</span>
      </div>
    </div>
  );
}
