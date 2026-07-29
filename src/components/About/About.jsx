import React from 'react';
import styles from './About.module.css';
import { storySections } from '../../data/portfolioData';
import { FaUserCheck, FaBullseye, FaCompass, FaLightbulb, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About & Engineering Journey</h2>
        <p className="section-subtitle">
          Discover my background, core objectives, engineering mindset, and soft skills.
        </p>

        <div className={styles.aboutWrapper}>
          {/* LEFT STORY BLOCK */}
          <motion.div
            className={styles.storyCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.98, y: -2 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className={styles.storyBlock}>
              <h3>
                <FaUserCheck /> Who I Am
              </h3>
              <p>{storySections.whoIAm}</p>
            </div>

            <div className={styles.storyBlock}>
              <h3>
                <FaBullseye /> Career Objective
              </h3>
              <p>{storySections.careerObjective}</p>
            </div>

            <div className={styles.storyBlock}>
              <h3>
                <FaCompass /> Journey & Passion
              </h3>
              <p>{storySections.journey}</p>
              <p style={{ marginTop: '0.75rem' }}>{storySections.passion}</p>
            </div>
          </motion.div>

          {/* RIGHT STRENGTHS & COMPETENCIES */}
          <motion.div
            className={styles.storyCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.98, y: -2 }}
            transition={{ duration: 0.3, ease: 'easeOut', delay: 0.1 }}
          >
            <div className={styles.storyBlock}>
              <h3>
                <FaLightbulb /> Core Competencies & Strengths
              </h3>
              <p style={{ marginBottom: '1.25rem' }}>
                Key attributes that drive my engineering execution and team collaboration:
              </p>
            </div>

            <div className={styles.strengthsGrid}>
              {storySections.strengths.map((item, idx) => (
                <motion.div
                  key={idx}
                  className={styles.strengthCard}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4>
                    <FaCheckCircle style={{ color: 'var(--accent-cyan)' }} />
                    {item.title}
                  </h4>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
