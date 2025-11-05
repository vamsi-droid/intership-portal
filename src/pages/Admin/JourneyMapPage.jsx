import React from 'react';
import AdminNavbar from './AdminNavbar';
import styles from './JourneyMapPage.module.css';

const journeyMap = [
  {
    phase: "Phase 1: Discovery & Onboarding",
    description: "This phase covers how a user finds and joins your platform.",
    userJourneys: [
      {
        user: "Student",
        details: "A student hears about your platform from their university's placement officer or a friend. They visit the website, see the three-card interface, and click 'Student' to sign up. They create a profile by entering their details.",
        feelings: "Hopeful, curious, a little overwhelmed.",
      },
      {
        user: "Employer",
        details: "An employer is looking for new talent and finds your platform through a search engine or a university partnership. They see the landing page and click 'Employer.' They fill out a form to create a company profile.",
        feelings: "Interested, professional, a little cautious.",
      },
    ],
  },
  {
    phase: "Phase 2: Exploration & Engagement",
    description: "In this phase, the user is actively using the platform's core features.",
    userJourneys: [
      {
        user: "Student",
        details: "The student logs in and lands on their personalized dashboard. They see their profile completion progress and application statistics. They navigate to the 'Job Listings' page to search and filter for jobs. They click 'Apply' on a few jobs.",
        feelings: "Focused, productive, excited.",
      },
      {
        user: "Employer",
        details: "The employer logs in and goes to their dashboard. They click 'Post a Job' and fill out a form with a job description. They then go to the 'Manage Listings' page and see a new application has come in for one of their jobs.",
        feelings: "In control, efficient, pleased.",
      },
    ],
  },
  {
    phase: "Phase 3: Interaction & Action",
    description: "This phase is about the direct interaction between students and employers.",
    userJourneys: [
      {
        user: "Student",
        details: "The student checks the 'My Applications' page and sees that one of their applications has a status of 'Interview Scheduled.' They receive an email notification with a link to schedule a time.",
        feelings: "Anxious, hopeful, grateful.",
      },
      {
        user: "Employer",
        details: "The employer is on the 'Job Details' page and sees all the applications for a specific job. They see a 'Match Score' for a student and click on their name to view their full profile. They then schedule an interview with that student using the interview scheduler.",
        feelings: "Informed, confident, decisive.",
      },
    ],
  },
  {
    phase: "Phase 4: Resolution & Offboarding",
    description: "This phase covers the end of the user's journey.",
    userJourneys: [
      {
        user: "Student",
        details: "The student receives an offer for a job they applied for. Their application status changes to 'Selected.' They log out of the system, feeling happy with the outcome.",
        feelings: "Elated, successful.",
      },
      {
        user: "Employer",
        details: "The employer hires a student from the platform. They change the student's application status to 'Selected.' They close the job listing and log out, feeling satisfied.",
        feelings: "Satisfied, efficient.",
      },
    ],
  },
  {
    phase: "Phase 5: Admin & System Oversight",
    description: "This is a continuous phase, focusing on the admin's role in maintaining a healthy platform.",
    userJourneys: [
      {
        user: "Admin",
        details: "The admin logs in and goes to the anomaly detection dashboard. They see an alert for a student who has applied to too many jobs in a short time. They also use the 'Manage Users' page to view a specific user's activity timeline.",
        feelings: "In control, informed, proactive.",
      },
    ],
  },
];

const JourneyMapPage = () => {
  return (
    <div className={styles.pageContainer}>
      <AdminNavbar />
      <div className={styles.contentContainer}>
        <h1 className={styles.mainHeading}>Customer Journey Map</h1>
        <p className={styles.subHeading}>Visualizing the user experience from discovery to resolution.</p>
        
        <div className={styles.mapGrid}>
          {journeyMap.map((phase, index) => (
            <div key={index} className={styles.phaseCard}>
              <h2 className={styles.phaseHeading}>{phase.phase}</h2>
              <p className={styles.phaseDescription}>{phase.description}</p>
              
              <div className={styles.userJourneys}>
                {phase.userJourneys.map((journey, journeyIndex) => (
                  <div key={journeyIndex} className={styles.journeyCard}>
                    <h3 className={styles.journeyUser}>{journey.user}</h3>
                    <p className={styles.journeyDetails}>{journey.details}</p>
                    <p className={styles.journeyFeelings}>
                      <strong>Feelings:</strong> {journey.feelings}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JourneyMapPage;