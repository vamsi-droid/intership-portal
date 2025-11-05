// This file should be named src/pages/Employer/StudentProfileViewer.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import EmployerNavbar from './EmployerNavbar';
import styles from './StudentProfileViewer.module.css';

const students = {
  '101': {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    skills: 'React, Redux, Node.js',
    bio: 'Experienced frontend developer with a passion for building beautiful and functional web applications.',
    resume: 'https://example.com/resumes/jane_doe.pdf'
  },
  '102': {
    name: 'John Smith',
    email: 'john.smith@example.com',
    skills: 'Python, Machine Learning, SQL',
    bio: 'Recent graduate with a strong interest in data analysis and AI.',
    resume: 'https://example.com/resumes/john_smith.pdf'
  },
};

const StudentProfileViewer = () => {
  const { studentId } = useParams();
  const student = students[studentId];

  if (!student) {
    return (
      <div className={styles.pageContainer}>
        <EmployerNavbar />
        <h1 className={styles.notFoundHeading}>Student not found!</h1>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <EmployerNavbar />
      <div className={styles.contentContainer}>
        <h1 className={styles.mainHeading}>Viewing Profile: {student.name}</h1>
        <div className={styles.profileCard}>
          <p className={styles.infoText}><strong>Email:</strong> {student.email}</p>
          <p className={styles.infoText}><strong>Skills:</strong> {student.skills}</p>
          <p className={styles.infoText}><strong>Bio:</strong> {student.bio}</p>
          <p className={styles.infoText}>
            <strong>Resume:</strong> 
            <a href={student.resume} target="_blank" rel="noopener noreferrer" className={styles.link}>Download Resume</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentProfileViewer;