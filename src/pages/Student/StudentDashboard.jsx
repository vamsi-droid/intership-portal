import React from 'react';
import StudentNavbar from './StudentNavbar';
import { useAuth } from '../../context/AuthContext';
import styles from './StudentDashboard.module.css';

const getProfileCompletion = (profileData) => {
  const totalFields = 5;
  let completedFields = 0;
  if (profileData.name) completedFields++;
  if (profileData.resume) completedFields++;
  if (profileData.skills && profileData.skills.length > 0) completedFields++;
  if (profileData.education) completedFields++;
  if (profileData.experience) completedFields++;
  return (completedFields / totalFields) * 100;
};

const StudentDashboard = () => {
  const { user } = useAuth();
  
  const profileData = {
    name: user.name,
    resume: 'resume.pdf',
    skills: ['React', 'JavaScript', 'HTML'],
    education: 'University of XYZ',
    experience: null,
  };

  const applications = [
    { id: 1, status: 'In Review' },
    { id: 2, status: 'Interview Scheduled' },
    { id: 3, status: 'Submitted' },
    { id: 4, status: 'Rejected' },
    { id: 5, status: 'Submitted' },
  ];
  
  const totalApplications = applications.length;
  const interviews = applications.filter(app => app.status === 'Interview Scheduled').length;
  const profileCompletion = getProfileCompletion(profileData);

  return (
    <div className={styles.pageContainer}>
      <StudentNavbar />
      <div className={styles.contentContainer}>
        <h1 className={styles.mainHeading}>Welcome, {user.name}!</h1>

        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <h3 className={styles.cardHeading}>Profile Completion</h3>
            <div className={styles.progressBarContainer}>
              <div 
                className={styles.progressBar}
                style={{ width: `${profileCompletion}%` }}
              ></div>
            </div>
            <p className={styles.cardText}>
              Your profile is **{profileCompletion}%** complete.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardHeading}>Application Stats</h3>
            <div className={styles.statsContainer}>
              <div>
                <h4 className={styles.statNumber}>{totalApplications}</h4>
                <p className={styles.statLabel}>Jobs Applied</p>
              </div>
              <div>
                <h4 className={styles.statNumber}>{interviews}</h4>
                <p className={styles.statLabel}>Interviews</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.actionCard}>
          <h3 className={styles.cardHeading}>Your Next Steps</h3>
          <ul className={styles.actionList}>
            <li className={styles.actionItem}>
              <p className={styles.actionText}>**Complete your profile.** Missing your work experience!</p>
            </li>
            {interviews > 0 && (
              <li className={styles.actionItem}>
                <p className={styles.actionText}>You have an upcoming interview!</p>
              </li>
            )}
            <li className={styles.actionItem}>
              <p className={styles.actionText}>**Explore more jobs** to increase your chances.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;