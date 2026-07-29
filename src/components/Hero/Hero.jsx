import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import AvatarCanvas from './AvatarCanvas';
import { personalInfo } from '../../data/portfolioData';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
  FaPaperPlane,
} from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';

export default function Hero() {
  const [tagIndex, setTagIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Animated Typing logic
  useEffect(() => {
    if (subIndex === personalInfo.taglines[tagIndex].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1500);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setTagIndex((prev) => (prev + 1) % personalInfo.taglines.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, tagIndex]);

  return (
    <section id="home" className={styles.heroSection}>
      <div className={`container ${styles.heroGrid}`}>
        {/* LEFT SIDE */}
        <div>
          <h1 className={styles.title}>
            Hello, I'm <br />
            <span className={styles.nameHighlight}>{personalInfo.name}</span>
          </h1>

          <div className={styles.typingWrapper}>
            <span>I am a&nbsp;</span>
            <span className={styles.typingText}>
              {personalInfo.taglines[tagIndex].substring(0, subIndex)}
            </span>
          </div>

          <p className={styles.summary}>{personalInfo.summary}</p>

          {/* CTA Buttons */}
          <div className={styles.ctaGroup}>
            <a href="#contact" className="btn-primary">
              Hire Me <FaPaperPlane style={{ fontSize: '0.85rem' }} />
            </a>
            <a href="#projects" className="btn-secondary">
              View Projects <FaArrowRight style={{ fontSize: '0.85rem' }} />
            </a>
            <a
              href="#contact"
              className="btn-secondary"
              title="Download Resume"
            >
              <FaDownload /> Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className={styles.socialRow}>
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              title="GitHub"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              title="LinkedIn"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              title="LeetCode"
              aria-label="LeetCode Profile"
            >
              <SiLeetcode />
            </a>
            <a
              href={personalInfo.socials.hackerrank}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              title="HackerRank"
              aria-label="HackerRank Profile"
            >
              <SiHackerrank />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className={styles.socialIcon}
              title="Email Me"
              aria-label="Email Me"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: Circular Profile Avatar */}
        <div className={styles.avatarContainer}>
          <AvatarCanvas />
          <div className={styles.avatarWrapper}>
            <div className={styles.glowRing}></div>
            <div className={styles.avatarBorder}>
              <img
                src={personalInfo.profileImage || "/profile.jpg"}
                alt="Vetrivel D Profile Avatar"
                className={styles.avatarImg}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
