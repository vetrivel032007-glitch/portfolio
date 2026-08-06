import React from 'react';
import styles from './Internship.module.css';
import { internshipsData } from '../../data/portfolioData';
import { FaBuilding, FaCalendarAlt, FaLaptopCode, FaBrain } from 'react-icons/fa';

export default function Internship() {
  const getCompanyIcon = (iconType, company) => {
    if (iconType === 'code' || company.toLowerCase().includes('novitech')) {
      return (
        <div className={`${styles.companyIconBox} ${styles.novitechBadge}`} title={company}>
          <FaLaptopCode className={styles.companySvgIcon} />
          <span className={styles.companySubBadge}>N</span>
        </div>
      );
    }
    return (
      <div className={`${styles.companyIconBox} ${styles.nikalusBadge}`} title={company}>
        <FaBrain className={styles.companySvgIcon} />
        <span className={styles.companySubBadge}>AI</span>
      </div>
    );
  };

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Internship & Experience</h2>
        <p className="section-subtitle">
          Professional experience delivering software features in real-world engineering teams.
        </p>

        <div className={styles.timeline}>
          {internshipsData.map((exp) => (
            <div key={exp.id} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineCard}>
                {/* Header */}
                <div className={styles.itemHeader}>
                  <div className={styles.companyInfo}>
                    {getCompanyIcon(exp.iconType, exp.company)}
                    <div>
                      <h3 className={styles.roleTitle}>{exp.role}</h3>
                      <div className={styles.companyName}>
                        <FaBuilding style={{ marginRight: '0.35rem' }} />
                        {exp.company} &bull; {exp.location}
                      </div>
                    </div>
                  </div>

                  <span className={styles.durationBadge}>
                    <FaCalendarAlt style={{ marginRight: '0.4rem' }} />
                    {exp.duration}
                  </span>
                </div>

                {/* Responsibilities */}
                <div className={styles.sectionBlock}>
                  <h4>Key Responsibilities & Deliverables</h4>
                  <ul className={styles.bulletList}>
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
