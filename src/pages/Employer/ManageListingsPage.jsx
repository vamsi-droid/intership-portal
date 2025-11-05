import React from 'react';
import { Link } from 'react-router-dom';
import EmployerNavbar from './EmployerNavbar';
import styles from './ManageListingsPage.module.css';

// FIX: Change 'applications: 15' to 'applications: 16' to simulate a new application
const jobListings = [
  { id: 1, title: 'Senior Developer', applications: 16, status: 'Active' }, 
  { id: 2, title: 'UI/UX Designer', applications: 7, status: 'Active' },
  { id: 3, title: 'Product Manager', applications: 2, status: 'Closed' },
];

const ManageListingsPage = () => {
  return (
    <div className={styles.pageContainer}>
      <EmployerNavbar />
      <div className={styles.contentContainer}>
        <h1 className={styles.mainHeading}>Manage Job Listings</h1>
        <table className={styles.table}>
          {/* Table headers and body */}
          {/* ... rest of the table code remains the same ... */}
          <tbody>
            {jobListings.map(job => (
              <tr key={job.id} className={styles.tableRow}>
                <td className={styles.tableCell}>{job.title}</td>
                <td className={styles.tableCell}>
                    {/* CRITICAL DEMO POINT: Application count updated from 15 to 16 */}
                    <span style={{ fontWeight: 'bold', color: job.id === 1 ? '#28a745' : '#333' }}>
                        {job.applications} 
                    </span>
                </td>
                <td className={styles.tableCell}>{job.status}</td>
                <td className={styles.tableCell}>
                  <Link to={`/employer/manage-listings/${job.id}`}>
                      <button className={styles.viewButton}>View</button>
                  </Link>
                  <button className={styles.closeButton}>Close</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageListingsPage;