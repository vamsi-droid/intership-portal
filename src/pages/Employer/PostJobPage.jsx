// This file should be named src/pages/Employer/PostJobPage.jsx
import React, { useState } from 'react';
import EmployerNavbar from './EmployerNavbar';
import styles from './PostJobPage.module.css';

const PostJobPage = () => {
  const [jobDetails, setJobDetails] = useState({
    title: '',
    company: 'Acme Corp',
    location: '',
    description: '',
    requirements: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails(prevDetails => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Job has been posted successfully!');
    console.log('Job Posted:', jobDetails);
    setJobDetails({
      title: '',
      company: 'Acme Corp',
      location: '',
      description: '',
      requirements: '',
    });
  };

  return (
    <div className={styles.pageContainer}>
      <EmployerNavbar />
      <div className={styles.contentContainer}>
        <h1 className={styles.mainHeading}>Post a New Job</h1>
        <div className={styles.formCard}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Job Title</label>
              <input
                type="text"
                name="title"
                value={jobDetails.title}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Company</label>
              <input
                type="text"
                name="company"
                value={jobDetails.company}
                onChange={handleChange}
                disabled
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Location</label>
              <input
                type="text"
                name="location"
                value={jobDetails.location}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Job Description</label>
              <textarea
                name="description"
                value={jobDetails.description}
                onChange={handleChange}
                rows="5"
                required
                className={styles.input}
              ></textarea>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Requirements</label>
              <textarea
                name="requirements"
                value={jobDetails.requirements}
                onChange={handleChange}
                rows="3"
                className={styles.input}
              ></textarea>
            </div>
            <button type="submit" className={styles.button}>
              Post Job
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostJobPage;