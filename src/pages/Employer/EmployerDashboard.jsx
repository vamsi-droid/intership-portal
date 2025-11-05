import React from 'react';
import { useAuth } from '../../context/AuthContext';
import EmployerNavbar from './EmployerNavbar';
import styles from './EmployerDashboard.module.css';

const jobListings = [
  { id: 1, title: 'Senior Developer', applications: 15 },
  { id: 2, title: 'UI/UX Designer', applications: 7 },
];
const newApplications = 3;

const EmployerDashboard = () => {
  const { user } = useAuth();

  return (
    <div className={styles.pageContainer}>
      <EmployerNavbar />
      <div className={styles.contentContainer}>
        <h1 className={styles.mainHeading}>Welcome, {user.name}!</h1>

        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <h3 className={styles.cardHeading}>New Applications</h3>
            <h4 className={styles.statNumber}>{newApplications}</h4>
            <p className={styles.statLabel}>Since your last login</p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardHeading}>Active Listings</h3>
            <ul className={styles.listingList}>
              {jobListings.map(job => (
                <li key={job.id} className={styles.listingItem}>
                  <p className={styles.listingTitle}>{job.title}</p>
                  <p className={styles.listingMeta}>{job.applications} Applications</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;