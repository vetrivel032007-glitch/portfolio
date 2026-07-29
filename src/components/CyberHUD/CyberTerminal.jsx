import React, { useState, useEffect, useRef } from 'react';
import styles from './CyberTerminal.module.css';
import { personalInfo, skillsData, projectsData, codingStats } from '../../data/portfolioData';
import { playCyberBeep, playCyberClick, toggleCyberAudio, isCyberAudioEnabled } from '../../utils/cyberSound';
import { FaTerminal, FaTimes, FaVolumeUp, FaVolumeMute, FaExpandAlt, FaCompressAlt } from 'react-icons/fa';

export default function CyberTerminal({ theme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [audioState, setAudioState] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'sys', text: '===================================================' },
    { type: 'sys', text: '   VETRIVEL D - CYBER OS v3.4 [NODE: ONLINE]' },
    { type: 'sys', text: '   Specialization: B.E CSE (AI & ML) | Full Stack' },
    { type: 'sys', text: '===================================================' },
    { type: 'sys', text: 'Type "help" to view available cyber commands.' },
  ]);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    setAudioState(isCyberAudioEnabled());

    const handleCustomOpen = () => {
      setIsOpen(true);
    };

    const handleKeyDown = (e) => {
      // Toggle terminal on Backtick (`) or Ctrl+K / Cmd+K
      if (
        (e.key === '`' || (e.key === 'k' && (e.ctrlKey || e.metaKey))) &&
        document.activeElement.tagName !== 'INPUT' &&
        document.activeElement.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };

    window.addEventListener('open-cyber-terminal', handleCustomOpen);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('open-cyber-terminal', handleCustomOpen);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleToggleSound = () => {
    const newState = toggleCyberAudio();
    setAudioState(newState);
  };

  const handleCommand = (e) => {
    if (e.key !== 'Enter') return;
    playCyberBeep();

    const rawCmd = inputVal.trim();
    const cmd = rawCmd.toLowerCase();
    setInputVal('');

    if (!rawCmd) return;

    const newHistory = [...history, { type: 'cmd', text: `vetrivel-d@cyber-core:~$ ${rawCmd}` }];

    if (cmd === 'help') {
      newHistory.push({
        type: 'res',
        text: `AVAILABLE CYBER COMMANDS:
  whoami    - View engineer profile & credentials
  skills    - View technical skills breakdown
  projects  - List featured AI & Web projects
  stats     - View LeetCode & GitHub coding stats
  contact   - Display contact links & email
  theme     - Switch theme [usage: theme cyber | dark | light]
  audio     - Toggle cyber sound effects (ON/OFF)
  clear     - Clear terminal buffer
  exit      - Close terminal drawer`,
      });
    } else if (cmd === 'whoami' || cmd === 'about') {
      newHistory.push({
        type: 'res',
        text: `PROFILE: ${personalInfo.name}
DEGREE:  ${personalInfo.department}
CGPA:    ${personalInfo.educationLine.cgpa}
COLLEGE: ${personalInfo.college}
SUMMARY: ${personalInfo.summary}`,
      });
    } else if (cmd === 'skills') {
      const skillsFormatted = skillsData
        .map((cat) => `[ ${cat.category.toUpperCase()} ]\n  ` + cat.skills.map((s) => `${s.name} (${s.level}%)`).join(' • '))
        .join('\n\n');
      newHistory.push({ type: 'res', text: skillsFormatted });
    } else if (cmd === 'projects') {
      const projFormatted = projectsData
        .map((p, idx) => `0${idx + 1}. ${p.title.toUpperCase()}\n   Tech: ${p.tech.join(', ')}\n   Demo: ${p.demo}`)
        .join('\n\n');
      newHistory.push({ type: 'res', text: projFormatted });
    } else if (cmd === 'stats') {
      newHistory.push({
        type: 'res',
        text: `LEETCODE   : ${codingStats.leetcode.solved} Problems Solved | Rating: ${codingStats.leetcode.rating} | ${codingStats.leetcode.badge}
GITHUB     : ${codingStats.github.repositories} Repositories | ${codingStats.github.contributions}
HACKERRANK : ${codingStats.hackerrank.stars}`,
      });
    } else if (cmd === 'contact') {
      newHistory.push({
        type: 'res',
        text: `EMAIL    : ${personalInfo.email}
PHONE    : ${personalInfo.phone}
GITHUB   : ${personalInfo.socials.github}
LINKEDIN : ${personalInfo.socials.linkedin}`,
      });
    } else if (cmd.startsWith('theme')) {
      const arg = cmd.split(' ')[1];
      if (arg === 'light' || arg === 'dark' || arg === 'cyber') {
        setTheme(arg);
        newHistory.push({ type: 'res', text: `✔ Theme successfully switched to: ${arg.toUpperCase()}` });
      } else {
        newHistory.push({ type: 'res', text: `Usage: theme cyber | dark | light (Current theme: ${theme.toUpperCase()})` });
      }
    } else if (cmd === 'audio') {
      const state = toggleCyberAudio();
      setAudioState(state);
      newHistory.push({ type: 'res', text: `Audio sound FX is now: ${state ? 'ENABLED 🔊' : 'MUTED 🔇'}` });
    } else if (cmd === 'clear') {
      setHistory([]);
      return;
    } else if (cmd === 'exit') {
      setIsOpen(false);
      return;
    } else {
      newHistory.push({
        type: 'res',
        text: `Command not recognized: "${rawCmd}". Type "help" for command directory.`,
      });
    }

    setHistory(newHistory);
  };

  return (
    <>
      {/* Floating Cyber Terminal Launcher Button */}
      <button
        className={styles.launcherBtn}
        onClick={() => {
          playCyberClick();
          setIsOpen(!isOpen);
        }}
        title="Open Cyber Command Terminal (` key)"
      >
        <span className={styles.launcherPulse} />
        <FaTerminal />
        <span className={styles.launcherText}>CYBER_TERMINAL</span>
      </button>

      {/* Cyber Terminal Drawer / Modal Overlay */}
      {isOpen && (
        <div className={`${styles.terminalDrawer} ${isExpanded ? styles.expanded : ''}`}>
          {/* Header Bar */}
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <span className={styles.dotRed} onClick={() => setIsOpen(false)} title="Close Terminal" />
              <span className={styles.dotYellow} onClick={() => setIsExpanded(!isExpanded)} title="Expand/Collapse" />
              <span className={styles.dotGreen} />
              <span className={styles.titleText}>vetrivel-d@cyber-core:~ (zsh)</span>
            </div>

            <div className={styles.headerControls}>
              <button onClick={handleToggleSound} className={styles.iconBtn} title={audioState ? 'Mute Audio' : 'Enable Audio'}>
                {audioState ? <FaVolumeUp style={{ color: '#00f3ff' }} /> : <FaVolumeMute />}
              </button>
              <button onClick={() => setIsExpanded(!isExpanded)} className={styles.iconBtn} title="Toggle Expand">
                {isExpanded ? <FaCompressAlt /> : <FaExpandAlt />}
              </button>
              <button onClick={() => setIsOpen(false)} className={styles.iconBtn} title="Close Terminal">
                <FaTimes />
              </button>
            </div>
          </div>

          {/* Terminal Logs & Output */}
          <div className={styles.body} onClick={() => inputRef.current?.focus()}>
            {history.map((item, idx) => (
              <div
                key={idx}
                className={`${styles.line} ${item.type === 'cmd' ? styles.cmdLine : item.type === 'sys' ? styles.sysLine : styles.resLine}`}
              >
                {item.text}
              </div>
            ))}

            {/* Input Line */}
            <div className={styles.inputLine}>
              <span className={styles.prompt}>vetrivel-d@cyber-core:~$</span>
              <input
                ref={inputRef}
                type="text"
                className={styles.input}
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleCommand}
                placeholder="type 'help'..."
                autoFocus
              />
            </div>
            <div ref={bottomRef} />
          </div>
        </div>
      )}
    </>
  );
}
