import React, { useState, useEffect } from 'react';
import styles from './LoadingScreen.module.css';
import { loadingMessages } from '../../data/portfolioData';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // 3.5 seconds total loading time
    const intervalTime = 35; // 100 steps * 35ms = 3500ms
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Switch messages periodically based on progress
    const idx = Math.min(
      Math.floor((progress / 100) * loadingMessages.length),
      loadingMessages.length - 1
    );
    setMessageIndex(idx);

    if (progress === 100) {
      setTimeout(() => {
        setIsFading(true);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 600); // 600ms fade out duration
      }, 400);
    }
  }, [progress, onComplete]);

  return (
    <div className={`${styles.overlay} ${isFading ? styles.fadeOut : ''}`}>
      <div className={styles.container}>
        {/* Animated Code Monitor */}
        <div className={styles.monitorFrame}>
          <div className={styles.monitorHeader}>
            <span className={styles.dotRed}></span>
            <span className={styles.dotYellow}></span>
            <span className={styles.dotGreen}></span>
            <span className={styles.monitorTitle}>vetrivel-d ~ dev-terminal</span>
          </div>

          <div className={styles.monitorBody}>
            <div className={styles.codeLines}>
              <div className={styles.codeLine}>
                <span className={styles.lineNum}>01</span>
                <span>import &#123; Developer, AI_Engineer &#125; from 'vetrivel-d';</span>
              </div>
              <div className={styles.codeLine}>
                <span className={styles.lineNum}>02</span>
                <span>const app = new ReactApp(&#123; target: 'FAANG-Standard' &#125;);</span>
              </div>
              <div className={styles.codeLine}>
                <span className={styles.lineNum}>03</span>
                <span>await app.compileAssets(); // Initializing UI System</span>
              </div>
            </div>

            <div className={styles.activeMessage}>
              <span style={{ color: '#818cf8' }}>&gt;</span>
              <span>{loadingMessages[messageIndex]}</span>
              <span className={styles.cursor}></span>
            </div>
          </div>
        </div>

        {/* Progress Bar & Percentage */}
        <div className={styles.progressWrapper}>
          <div className={styles.progressBarTrack}>
            <div
              className={styles.progressBarFill}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className={styles.progressFooter}>
            <span>Building System...</span>
            <span className={styles.percentageText}>{progress}%</span>
          </div>
        </div>

        {/* Developer Badge */}
        <div className={styles.developerBadge}>
          ⚡ VETRIVEL D | BE CSE (AI & ML)
        </div>
      </div>
    </div>
  );
}
