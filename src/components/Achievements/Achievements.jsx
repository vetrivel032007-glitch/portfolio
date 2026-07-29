import React from 'react';
import styles from './Achievements.module.css';
import { achievementsData, codingStats, personalInfo } from '../../data/portfolioData';
import { FaTrophy, FaCodeBranch, FaExternalLinkAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <h2 className="section-title">Achievements & Competitive Coding Profiles</h2>
        <p className="section-subtitle">
          Algorithmic accomplishments, technical seminars, and live competitive coding statistics.
        </p>

        <div className={styles.wrapper}>
          {/* LEFT: TECHNICAL ACTIVITIES & SEMINARS */}
          <div>
            <h3 className={styles.subSectionTitle}>
              <FaTrophy style={{ color: '#fbbf24' }} /> Technical Activities & Seminars
            </h3>

            <div className={styles.achieveGrid}>
              {achievementsData.map((item, idx) => (
                <div key={idx} className={styles.achieveCard}>
                  <div className={styles.achieveHeader}>
                    <span className={styles.achieveCategory}>{item.category}</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      {item.date}
                    </span>
                  </div>
                  <h4 className={styles.achieveTitle}>{item.title}</h4>
                  <p className={styles.achieveDesc}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: LIVE CODING PROFILES & STATS */}
          <div>
            <h3 className={styles.subSectionTitle}>
              <FaCodeBranch style={{ color: 'var(--accent-cyan)' }} /> Coding Platform Statistics
            </h3>

            <div className={styles.profilesGrid}>
              {/* LeetCode */}
              <div className={styles.profileCard}>
                <div>
                  <div className={styles.profileHeader}>
                    <SiLeetcode className={styles.profileIcon} style={{ color: '#ffa116' }} />
                    <span className={styles.profileName}>LeetCode</span>
                  </div>
                  <div className={styles.statLine}>
                    Solved: <span className={styles.highlightStat}>{codingStats.leetcode.solved}</span>
                  </div>
                  <div className={styles.statLine}>
                    Rating: <span className={styles.highlightStat}>{codingStats.leetcode.rating}</span>
                  </div>
                  <div className={styles.statLine} style={{ fontSize: '0.82rem' }}>
                    {codingStats.leetcode.badge}
                  </div>
                </div>
                <a
                  href={codingStats.leetcode.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.profileLink}
                >
                  View Profile <FaExternalLinkAlt style={{ fontSize: '0.75rem' }} />
                </a>
              </div>

              {/* GitHub */}
              <div className={styles.profileCard}>
                <div>
                  <div className={styles.profileHeader}>
                    <FaGithub className={styles.profileIcon} style={{ color: '#ffffff' }} />
                    <span className={styles.profileName}>GitHub</span>
                  </div>
                  <div className={styles.statLine}>
                    Repos: <span className={styles.highlightStat}>{codingStats.github.repositories}</span>
                  </div>
                  <div className={styles.statLine}>
                    Commits: <span className={styles.highlightStat}>{codingStats.github.contributions}</span>
                  </div>
                </div>
                <a
                  href={codingStats.github.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.profileLink}
                >
                  View Profile <FaExternalLinkAlt style={{ fontSize: '0.75rem' }} />
                </a>
              </div>

              {/* HackerRank */}
              <div className={styles.profileCard}>
                <div>
                  <div className={styles.profileHeader}>
                    <SiHackerrank className={styles.profileIcon} style={{ color: '#2ec866' }} />
                    <span className={styles.profileName}>HackerRank</span>
                  </div>
                  <div className={styles.statLine}>{codingStats.hackerrank.stars}</div>
                  <div className={styles.statLine}>
                    Rank: <span className={styles.highlightStat}>{codingStats.hackerrank.rank}</span>
                  </div>
                </div>
                <a
                  href={codingStats.hackerrank.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.profileLink}
                >
                  View Profile <FaExternalLinkAlt style={{ fontSize: '0.75rem' }} />
                </a>
              </div>

              {/* LinkedIn */}
              <div className={styles.profileCard}>
                <div>
                  <div className={styles.profileHeader}>
                    <FaLinkedin className={styles.profileIcon} style={{ color: '#0a66c2' }} />
                    <span className={styles.profileName}>LinkedIn</span>
                  </div>
                  <div className={styles.statLine}>500+ Connections</div>
                  <div className={styles.statLine}>Active Tech Posts</div>
                </div>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.profileLink}
                >
                  View Profile <FaExternalLinkAlt style={{ fontSize: '0.75rem' }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
