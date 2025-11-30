import React from 'react';
import { useTheme } from '../context/ThemeContext';
import styles from './FloatingThemeToggle.module.css';

const FloatingThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={styles.floatingToggle}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      aria-label="Toggle theme"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
};

export default FloatingThemeToggle;