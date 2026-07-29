import React from 'react';
import styles from './Certificates.module.css';
import { certificatesData } from '../../data/portfolioData';
import { FaCertificate, FaExternalLinkAlt, FaIdBadge } from 'react-icons/fa';

export default function Certificates() {
  return (
    <section id="certificates" className="section">
      <div className="container">
        <h2 className="section-title">Verified Certifications & Credentials</h2>
        <p className="section-subtitle">
          Industry-recognized certifications in Full Stack Development, Machine Learning, and Web Security.
        </p>

        <div className={styles.grid}>
          {certificatesData.map((cert, idx) => (
            <div key={idx} className={styles.certCard}>
              <div>
                <div className={styles.cardHeader}>
                  <img src={cert.logo} alt={cert.issuer} className={styles.logo} />
                  <div>
                    <h3 className={styles.certTitle}>{cert.title}</h3>
                    <p className={styles.issuer}>{cert.issuer}</p>
                  </div>
                </div>

                <div className={styles.metaRow}>
                  <span>📅 Issue Date: {cert.date}</span>
                  <span>
                    <FaIdBadge style={{ marginRight: '0.3rem' }} />
                    ID: {cert.credentialId}
                  </span>
                </div>
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.verifyBtn}
              >
                Verify Credential <FaExternalLinkAlt style={{ fontSize: '0.78rem' }} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
