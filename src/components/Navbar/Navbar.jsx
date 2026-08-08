import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { FaDownload, FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Education', href: '#education' },
    { label: 'Coding Stats', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section scroll tracking
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        {/* Logo */}
        <a href="#home" className={styles.logo} onClick={() => handleNavClick('#home')}>
          <span className={styles.logoText}>VETRIVEL D</span>
          <span className={styles.logoAccent}>&lt;/&gt;</span>
        </a>

        {/* Desktop Links */}
        <ul className={styles.navLinks}>
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`${styles.navLink} ${isActive ? styles.activeLink : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.label}
                  {isActive && <span className={styles.activeIndicator}></span>}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Actions */}
        <div className={styles.actions}>
          <button
            onClick={toggleTheme}
            className={styles.themeBtn}
            title="Toggle Light/Dark Theme"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>

          <a
            href="#contact"
            className={styles.resumeBtn}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
          >
            <FaDownload /> <span className={styles.resumeText}>Resume</span>
          </a>

          <button
            className={styles.mobileToggle}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Backdrop overlay */}
      {mobileOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`${styles.mobileDrawer} ${mobileOpen ? styles.mobileDrawerOpen : ''}`}
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={styles.mobileNavLink}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(item.href);
            }}
          >
            <span>{item.label}</span>
            <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>&rarr;</span>
          </a>
        ))}
      </div>
    </header>
  );
}
