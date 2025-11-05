import React from 'react';
import { useParams } from 'react-router-dom';
import EmployerNavbar from './EmployerNavbar';
import ApplicationItem from './ApplicationItem';
import { useAuth } from '../../context/AuthContext'; // <-- Import useAuth
import styles from './JobDetailsPage.module.css';

const jobData = {
  '1': { 
    title: 'Senior Developer', 
    description: 'Lead our next big project.', 
    // We will dynamically add the logged-in user to this list
    applications: [
      { id: 101, name: 'Jane Doe', status: 'In Review' },
      { id: 102, name: 'John Smith', status: 'New' },
      // Note: New Applicant (ID 999) will be inserted dynamically below
    ]
  },
  '2': { 
    title: 'UI/UX Designer', 
    description: 'Create beautiful user interfaces.', 
    applications: [
      { id: 201, name: 'Emily White', status: 'Interview Scheduled' },
      { id: 202, name: 'David Brown', status: 'In Review' },
    ]
  },
};

const JobDetailsPage = () => {
  const { jobId } = useParams();
  const { user } = useAuth(); // <-- Get the logged-in user
  const job = jobData[jobId];

  // --- CRITICAL FIX: Add the currently logged-in user as a NEW applicant ---
  if (job && user.role === 'student') {
      const isUserAlreadyListed = job.applications.some(app => app.id === user.email);
      
      if (!isUserAlreadyListed) {
          job.applications.push({
              id: user.email, // Use email as unique ID for simplicity
              name: user.name,
              status: 'Submitted',
          });
      }
  }
  // --- END CRITICAL FIX ---


  if (!job) {
    return (
      <div className={styles.pageContainer}>
        <EmployerNavbar />
        <h1 className={styles.notFoundHeading}>Job not found!</h1>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <EmployerNavbar />
      <div className={styles.contentContainer}>
        <h1 className={styles.mainHeading}>{job.title}</h1>
        <p className={styles.jobDescription}>{job.description}</p>

        <h2 className={styles.applicationsHeading}>Applications ({job.applications.length})</h2>
        <div className={styles.applicationsGrid}>
          {job.applications.map(app => (
            <ApplicationItem 
              key={app.id} 
              application={app} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;