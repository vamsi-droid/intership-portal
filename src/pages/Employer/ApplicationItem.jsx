// This file should be named src/pages/Employer/ApplicationItem.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ApplicationItem.module.css';

const ApplicationItem = ({ application }) => {
  const [status, setStatus] = useState(application.status);
  
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    console.log(`Application for ${application.name} status changed to: ${e.target.value}`);
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h4 className={styles.name}>
          <Link to={`/employer/view-profile/${application.id}`} className={styles.nameLink}>
            {application.name}
          </Link>
        </h4>
        <span className={styles.matchScore}>
          Match: 75%
        </span>
      </div>
      <p className={styles.statusText}>Current Status: <strong>{status}</strong></p>
      
      <div className={styles.statusGroup}>
        <label className={styles.label}>Update Status:</label>
        <select onChange={handleStatusChange} value={status} className={styles.select}>
          <option value="New">New</option>
          <option value="In Review">In Review</option>
          <option value="Interview Scheduled">Interview Scheduled</option>
          <option value="Rejected">Rejected</option>
          <option value="Selected">Selected</option>
        </select>
      </div>

      <div className={styles.buttonGroup}>
        <Link to={`/employer/schedule-interview/${application.id}`}>
          <button className={styles.scheduleButton}>
            Schedule Interview
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ApplicationItem;