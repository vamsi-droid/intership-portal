import React from 'react';
import OfficerNavbar from './OfficerNavbar';
import { useAuth } from '../../context/AuthContext';
import styles from './OfficerDashboard.module.css';

const OfficerDashboard = () => {
  const { user } = useAuth();

  const stats = [
    { label: 'Total Students', value: '250', color: '#60a5fa' },
    { label: 'Placed Students', value: '180', color: '#10b981' },
    { label: 'Unplaced Students', value: '70', color: '#ef4444' },
    { label: 'Companies Registered', value: '45', color: '#8b5cf6' },
  ];

  return (
    <div className={styles.pageContainer}>
      <OfficerNavbar />
      <div className={styles.contentContainer}>
        <h1 className={styles.mainHeading}>Welcome, Officer {user.name}!</h1>

        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <p className={styles.statLabel}>{stat.label}</p>
              <h2 className={styles.statValue} style={{ color: stat.color }}>
                {stat.value}
              </h2>
            </div>
          ))}
        </div>

        <div className={styles.actionCard}>
          <h3 className={styles.cardHeading}>Quick Actions</h3>
          <ul className={styles.actionList}>
            <li className={styles.actionItem}>
              <span>📊</span>
              <p>View detailed placement statistics</p>
            </li>
            <li className={styles.actionItem}>
              <span>👥</span>
              <p>Manage student placement records</p>
            </li>
            <li className={styles.actionItem}>
              <span>🏢</span>
              <p>Track company interactions</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OfficerDashboard;