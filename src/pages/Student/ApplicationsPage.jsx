import React from 'react';
import StudentNavbar from './StudentNavbar';
import styles from './ApplicationsPage.module.css';

// FIX: Added interviewTime to the scheduled application
const applications = [
  { id: 1, jobTitle: 'Senior Developer (INTERVIEW)', company: 'Innovate Solutions', status: 'Interview Scheduled', interviewTime: 'Wednesday, Oct 2nd at 2:00 PM' },
  { id: 2, jobTitle: 'UI/UX Designer', company: 'Creative Studio', status: 'In Review' },
  { id: 3, jobTitle: 'Data Analyst', company: 'Data Insights Co.', status: 'Submitted' },
];

const StudentApplicationsPage = () => {
  return (
    <div className={styles.pageContainer}>
      <StudentNavbar />
      <div className={styles.contentContainer}>
        <h1 className={styles.mainHeading}>My Applications</h1>
        <div className={styles.applicationGrid}>
          {applications.map(app => (
            <div key={app.id} className={styles.applicationCard}>
              <h3 className={styles.applicationTitle}>{app.jobTitle}</h3>
              <p className={styles.applicationMeta}>**{app.company}** - Status: <span className={styles.status} style={{ color: app.id === 1 ? '#ff8c00' : '#333' }}>{app.status}</span></p>
              
              {/* CRITICAL FIX: Display the scheduled time */}
              {app.interviewTime && (
                  <p className={styles.interviewNote} style={{ fontWeight: 'bold', color: '#007bff' }}>
                      Interview Time: {app.interviewTime}
                  </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentApplicationsPage;