// This file should be named src/pages/Student/StudentNavbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import styles from './StudentNavbar.module.css';

const StudentNavbar = () => {
  const { logout } = useAuth();

  return (
    <nav className={styles.nav}>
      <div className={styles.brand}>
        <Link to="/student" className={styles.brandLink}>
          Student Portal
        </Link>
      </div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/student" className={styles.navLink}>Dashboard</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/student/jobs" className={styles.navLink}>Job Listings</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/student/applications" className={styles.navLink}>My Applications</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/student/profile" className={styles.navLink}>My Profile</Link>
        </li>
        <li className={styles.navItem}>
          <button onClick={logout} className={styles.logoutButton}>Log Out</button>
        </li>
      </ul>
    </nav>
  );
};

export default StudentNavbar;