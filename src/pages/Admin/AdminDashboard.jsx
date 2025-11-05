import React from 'react';
import { useAuth } from '../../context/AuthContext';
import AdminNavbar from './AdminNavbar';
import styles from './AdminDashboard.module.css';

const AdminDashboard = () => {
    const { user } = useAuth();

    return (
        <div className={styles.pageContainer}>
            <AdminNavbar />
            <div className={styles.contentContainer}>
                <h1 className={styles.mainHeading}>Welcome, Admin {user.name}!</h1>
                <div className={styles.cardGrid}>
                    <div className={styles.card}>
                        <h3 className={styles.cardHeading}>System Overview</h3>
                        <p className={styles.infoText}>Total Users: 100</p>
                        <p className={styles.infoText}>Active Jobs: 50</p>
                        <p className={styles.infoText}>Total Applications: 250</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;