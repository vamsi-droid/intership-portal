import React from 'react';
import { Link } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import styles from './ManageUsersPage.module.css';

const users = [
  { id: 1, name: 'Jane Doe', email: 'student@example.com', role: 'Student' },
  { id: 2, name: 'Acme Corp', email: 'employer@example.com', role: 'Employer' },
  { id: 3, name: 'Emily White', email: 'emily@example.com', role: 'Student' },
  { id: 4, name: 'Global Tech', email: 'global.tech@example.com', role: 'Employer' },
  { id: 5, name: 'System Admin', email: 'admin@example.com', role: 'Admin' },
];

const ManageUsersPage = () => {
  return (
    <div className={styles.pageContainer}>
      <AdminNavbar />
      <div className={styles.contentContainer}>
        <h1 className={styles.mainHeading}>Manage Users</h1>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tableHeader}>Name</th>
              <th className={styles.tableHeader}>Email</th>
              <th className={styles.tableHeader}>Role</th>
              <th className={styles.tableHeader}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className={styles.tableRow}>
                <td className={styles.tableCell}>
                  {/* FIX: Link the user name to the User Activity Timeline page */}
                  <Link to={`/admin/user-timeline/${user.id}`} className={styles.nameLink}>
                    {user.name}
                  </Link>
                </td>
                <td className={styles.tableCell}>{user.email}</td>
                <td className={styles.tableCell}>{user.role}</td>
                <td className={styles.tableCell}>
                  <button className={styles.deleteButton}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsersPage;