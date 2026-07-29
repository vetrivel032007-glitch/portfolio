import React from 'react';
import styles from './Projects.module.css';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaCheckCircle, FaRocket, FaLayerGroup, FaExclamationTriangle } from 'react-icons/fa';

export default function CaseStudyModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.modalHeader}>
          <div>
            <span className={styles.categoryBadge}>{project.category}</span>
            <h3 className={styles.modalTitle}>{project.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              {project.subtitle} &bull; Role: <strong style={{ color: 'var(--accent-cyan)' }}>{project.role}</strong>
            </p>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
            <FaTimes />
          </button>
        </div>

        {/* Thumbnail Hero */}
        <div className={styles.modalMedia}>
          <img src={project.thumbnail} alt={project.title} className={styles.modalImg} />
        </div>

        {/* Details Section */}
        <div className={styles.modalBody}>
          <div className={styles.techLine}>
            {project.tech.map((t, idx) => (
              <span key={idx} className={styles.techBadgeModal}>
                {t}
              </span>
            ))}
          </div>

          <div className={styles.detailBlock}>
            <h4>Overview</h4>
            <p>{project.summary}</p>
          </div>

          <div className={styles.detailBlock}>
            <h4>
              <FaExclamationTriangle style={{ color: '#fbbf24', marginRight: '0.4rem' }} />
              Engineering Challenge & Solution
            </h4>
            <p><strong>Challenge:</strong> {project.challenges}</p>
            <p style={{ marginTop: '0.5rem' }}><strong>Solution:</strong> {project.solutions}</p>
          </div>

          <div className={styles.detailBlock}>
            <h4>
              <FaCheckCircle style={{ color: 'var(--accent-emerald)', marginRight: '0.4rem' }} />
              Key Features
            </h4>
            <ul className={styles.featureList}>
              {project.features.map((feat, idx) => (
                <li key={idx}>&bull; {feat}</li>
              ))}
            </ul>
          </div>

          <div className={styles.detailBlock}>
            <h4>
              <FaLayerGroup style={{ color: 'var(--accent-purple)', marginRight: '0.4rem' }} />
              System Architecture & Performance
            </h4>
            <p><strong>Architecture:</strong> {project.architecture}</p>
            <p style={{ marginTop: '0.35rem' }}>
              <strong>Lighthouse Metric:</strong> {project.performance}
            </p>
          </div>

          {/* Modal Actions */}
          <div className={styles.modalActions}>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Live Demo <FaExternalLinkAlt style={{ fontSize: '0.8rem' }} />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <FaGithub /> Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
