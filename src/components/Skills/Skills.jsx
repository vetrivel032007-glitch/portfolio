import React, { useState } from 'react';
import styles from './Skills.module.css';
import { skillsData } from '../../data/portfolioData';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaGithub,
  FaFigma,
  FaBrain,
  FaCode,
  FaCubes,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiFramer,
  SiVite,
  SiMysql,
  SiMongodb,
  SiNumpy,
  SiScikitlearn,
  SiOpencv,
  SiPostman,
  SiVercel,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { VscCode } from 'react-icons/vsc';

const iconMap = {
  FaReact: <FaReact style={{ color: '#61dafb' }} />,
  SiJavascript: <SiJavascript style={{ color: '#f7df1e' }} />,
  FaHtml5: <FaHtml5 style={{ color: '#e34f26' }} />,
  FaCss3Alt: <FaCss3Alt style={{ color: '#1572b6' }} />,
  SiFramer: <SiFramer style={{ color: '#0055ff' }} />,
  SiThreejs: <FaCubes style={{ color: '#38bdf8' }} />,
  SiVite: <SiVite style={{ color: '#646cff' }} />,
  FaNodeJs: <FaNodeJs style={{ color: '#339933' }} />,
  FaPython: <FaPython style={{ color: '#3776ab' }} />,
  TbApi: <TbApi style={{ color: '#38bdf8' }} />,
  SiMysql: <SiMysql style={{ color: '#4479a1' }} />,
  SiMongodb: <SiMongodb style={{ color: '#47a248' }} />,
  SiNumpy: <SiNumpy style={{ color: '#013243' }} />,
  SiScikitlearn: <SiScikitlearn style={{ color: '#f7931e' }} />,
  SiOpencv: <SiOpencv style={{ color: '#5c3ee8' }} />,
  Brain: <FaBrain style={{ color: '#c084fc' }} />,
  FaGithub: <FaGithub style={{ color: '#ffffff' }} />,
  SiVisualstudiocode: <VscCode style={{ color: '#007acc' }} />,
  SiPostman: <SiPostman style={{ color: '#ff6c37' }} />,
  SiVercel: <SiVercel style={{ color: '#ffffff' }} />,
  FaFigma: <FaFigma style={{ color: '#f24e1e' }} />,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skillsData.map((cat) => cat.category)];

  const displayedSkills =
    activeCategory === 'All'
      ? skillsData.flatMap((cat) => cat.skills)
      : skillsData.find((cat) => cat.category === activeCategory)?.skills || [];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Technical Expertise & Skills</h2>
        <p className="section-subtitle">
          Categorized technical skills with evaluated experience levels and proficiency ratings.
        </p>

        {/* Category Filter Tabs */}
        <div className={styles.categoryTabs}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.tabBtn} ${
                activeCategory === cat ? styles.activeTab : ''
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className={styles.skillsGrid}>
          {displayedSkills.map((skill, idx) => (
            <div key={idx} className={styles.skillCard}>
              <div className={styles.skillHeader}>
                <div className={styles.skillTitle}>
                  <span className={styles.skillIcon}>
                    {iconMap[skill.icon] || <FaCode />}
                  </span>
                  <span>{skill.name}</span>
                </div>
                <span className={styles.expTag}>{skill.experience}</span>
              </div>

              {/* Progress Bar */}
              <div className={styles.barTrack}>
                <div
                  className={styles.barFill}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              <div className={styles.skillFooter}>
                <span>Proficiency Level</span>
                <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
