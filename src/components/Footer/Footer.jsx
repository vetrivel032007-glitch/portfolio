import React from 'react';
import styles from './Footer.module.css';
import { personalInfo } from '../../data/portfolioData';
import { FaArrowUp, FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Brand Col */}
          <div className={styles.brandCol}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              VETRIVEL<span style={{ color: 'var(--accent-cyan)' }}>.D</span>
            </h3>
            <p>
              Engineering scalable, high-performance web applications and AI solutions with React.js, Python, and modern software architectures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={styles.colTitle}>Navigation</h4>
            <ul className={styles.linkList}>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h4 className={styles.colTitle}>Connect</h4>
            <ul className={styles.linkList}>
              <li>
                <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub style={{ marginRight: '0.4rem' }} /> GitHub
                </a>
              </li>
              <li>
                <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin style={{ marginRight: '0.4rem' }} /> LinkedIn
                </a>
              </li>
              <li>
                <a href={personalInfo.socials.leetcode} target="_blank" rel="noopener noreferrer">
                  <SiLeetcode style={{ marginRight: '0.4rem' }} /> LeetCode
                </a>
              </li>
              {personalInfo.socials.hackerrank && (
                <li>
                  <a href={personalInfo.socials.hackerrank} target="_blank" rel="noopener noreferrer">
                    <SiHackerrank style={{ marginRight: '0.4rem' }} /> HackerRank
                  </a>
                </li>
              )}
              <li>
                <a href={`mailto:${personalInfo.email}`}>
                  <FaEnvelope style={{ marginRight: '0.4rem' }} /> Email Direct
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className={styles.bottomRow}>
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>

          <button className={styles.backTopBtn} onClick={scrollToTop}>
            Back to Top <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
