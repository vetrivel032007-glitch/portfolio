import React from 'react';
import styles from './Education.module.css';
import { educationData } from '../../data/portfolioData';
import { FaGraduationCap, FaCalendarAlt, FaUniversity } from 'react-icons/fa';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Academic Background & Education</h2>
        <p className="section-subtitle">
          Educational qualifications, academic achievements, and core coursework.
        </p>

        <div className={styles.grid}>
          {educationData.map((edu, idx) => (
            <div key={idx} className={styles.eduCard}>
              <div>
                <h3 className={styles.degreeTitle}>{edu.degree}</h3>
                <div className={styles.institution}>
                  <FaUniversity style={{ marginRight: '0.35rem' }} />
                  {edu.institution}
                </div>
                <p className={styles.board}>Board: {edu.board}</p>

                <div className={styles.scoreBadge}>🎓 {edu.score}</div>

                <div className={styles.yearText}>
                  <FaCalendarAlt /> {edu.year}
                </div>
              </div>

              <p className={styles.details}>{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
