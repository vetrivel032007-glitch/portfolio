import React, { useState } from 'react';
import styles from './Projects.module.css';
import { projectsData } from '../../data/portfolioData';
import CaseStudyModal from './CaseStudyModal';
import { FaSearch, FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';

export default function Projects() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'React / Full Stack', 'AI / ML & Full Stack', 'React & Animation'];

  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.summary.toLowerCase().includes(search.toLowerCase()) ||
      project.tech.some((t) => t.toLowerCase().includes(search.toLowerCase()));

    const matchesCategory =
      activeCategory === 'All' || project.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Engineering Projects</h2>
        <p className="section-subtitle">
          FAANG-grade scalable web applications, machine learning systems, and interactive UI experiences.
        </p>

        {/* Controls Row: Search & Filters */}
        <div className={styles.controlsRow}>
          <div className={styles.searchBox}>
            <FaSearch style={{ color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search projects by title, tech, or feature..."
              className={styles.searchInput}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className={styles.filterGroup}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${
                  activeCategory === cat ? styles.activeFilter : ''
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.imgWrapper}>
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className={styles.thumbnail}
                />
                <span className={styles.categoryTag}>{project.category}</span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.subtitle}>{project.subtitle}</p>

                {/* Tech badges */}
                <div className={styles.techRow}>
                  {project.tech.map((t, idx) => (
                    <span key={idx} className={styles.techBadge}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Card Footer Actions */}
                <div className={styles.cardFooter}>
                  <button
                    className="btn-secondary"
                    style={{ padding: '0.45rem 1rem', fontSize: '0.82rem' }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <FaInfoCircle /> Case Study
                  </button>

                  <div className={styles.cardLinks}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.iconLink}
                      title="View GitHub Repository"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.iconLink}
                      title="Live Demo"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
