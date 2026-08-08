import React, { useState, useEffect } from 'react';
import './styles/global.css';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Internship from './components/Internship/Internship';
import Certificates from './components/Certificates/Certificates';
import Education from './components/Education/Education';
import Achievements from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import BackgroundParticles from './components/BackgroundParticles/BackgroundParticles';
import CyberCursor from './components/CyberHUD/CyberCursor';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <CyberCursor />
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <div style={{ position: 'relative', zIndex: 1 }}>
          <BackgroundParticles />
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <main>
            <Hero />
            <PersonalInfo />
            <About />
            <Skills />
            <Projects />
            <Internship />
            <Certificates />
            <Education />
            <Achievements />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
