import React from 'react';
import styles from './PersonalInfo.module.css';
import { personalInfo } from '../../data/portfolioData';
import { FaMapMarkerAlt, FaGraduationCap, FaUniversity, FaQuoteLeft } from 'react-icons/fa';

export default function PersonalInfo() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className={styles.infoGrid}>
          {/* LEFT GLASS CARD */}
          <div className={styles.card}>
            {/* Location */}
            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <FaMapMarkerAlt />
              </div>
              <div className={styles.infoContent}>
                <h4>Location</h4>
                <p>{personalInfo.location}</p>
              </div>
            </div>

            {/* College */}
            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <FaUniversity />
              </div>
              <div className={styles.infoContent}>
                <h4>College & Specialization</h4>
                <p>{personalInfo.college}</p>
                <span style={{ fontSize: '0.9rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                  {personalInfo.department}
                </span>
              </div>
            </div>

            {/* Education Summary Line */}
            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <FaGraduationCap />
              </div>
              <div className={styles.infoContent} style={{ width: '100%' }}>
                <h4>Academic Performance Summary</h4>
                <div className={styles.eduBadgeLine}>
                  <span className={styles.eduBadge}>
                    🎓 SSLC : {personalInfo.educationLine.sslc}
                  </span>
                  <span className={styles.eduBadge}>
                    🎓 HSC : {personalInfo.educationLine.hsc}
                  </span>
                  <span className={styles.eduBadge}>
                    🎓 CGPA : {personalInfo.educationLine.cgpa}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT GLASS CARD: Quote & Availability */}
          <div className={styles.card}>
            <div>
              <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.75rem', letterSpacing: '0.08em' }}>
                Engineering Philosophy
              </h4>
              <div className={styles.quoteBlock}>
                <FaQuoteLeft style={{ marginRight: '0.5rem', opacity: 0.5 }} />
                "{personalInfo.quote}"
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.75rem', letterSpacing: '0.08em' }}>
                Current Status & Availability
              </h4>
              <div className={styles.availabilityGroup}>
                {personalInfo.availability.map((item, idx) => (
                  <div key={idx} className={styles.availItem}>
                    <span className={styles.dotPulse}></span>
                    <span>{item.replace('🟢 ', '')}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
