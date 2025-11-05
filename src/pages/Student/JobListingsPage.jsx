import React from 'react';
import StudentNavbar from './StudentNavbar';
import styles from './JobListingsPage.module.css';

const jobs = [
  { id: 1, title: 'Senior Software Engineer', company: 'Innovate Solutions', location: 'San Francisco, CA', description: 'Seeking a skilled senior engineer to lead a new team.' },
  { id: 2, title: 'Product Manager', company: 'Global Tech', location: 'Remote', description: 'Experienced product manager to oversee our new mobile application.' },
  { id: 3, title: 'UX Researcher', company: 'DesignForward', location: 'New York, NY', description: 'Looking for a passionate UX researcher to conduct user studies.' },
  { id: 4, title: 'Backend Developer', company: 'Code Crafters Inc.', location: 'Boston, MA', description: 'Opportunity for a developer specializing in Node.js and database management.' },
];

const JobListingsPage = () => {
  
  const handleApply = (jobTitle, companyName) => {
    // Corrected Alert Box Message
    alert(`Successfully Applied!\nYou have submitted your application for ${jobTitle} at ${companyName}.\n\n(Note: In a live system, this application is now visible to the Employer.)`);
    
    // In a real application, you would send a POST request to your backend here.
  };

  return (
    <div className={styles.pageContainer}>
      <StudentNavbar />
      <div className={styles.contentContainer}>
        <h1 className={styles.mainHeading}>Available Job Listings</h1>
        <div className={styles.jobGrid}>
          {jobs.map(job => (
            <div key={job.id} className={styles.jobCard}>
              <h3 className={styles.jobTitle}>{job.title}</h3>
              <p className={styles.jobMeta}>**{job.company}** - {job.location}</p>
              <p className={styles.jobDescription}>{job.description}</p>
              
              {/* Button calls the new application function */}
              <button 
                className={styles.applyButton}
                onClick={() => handleApply(job.title, job.company)}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobListingsPage;