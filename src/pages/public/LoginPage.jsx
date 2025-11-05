import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // <-- CRITICAL FIX: Ensures motion is defined
import { useAuth } from '../../context/AuthContext';
import styles from './LoginPage.module.css';

// --- CENTRALIZED HARDCODED USER DATA ---
const HARDCODED_USERS = [
    { email: 'student@example.com', password: 'password123', name: 'Jane Doe', role: 'student' },
    { email: 'employer@example.com', password: 'password123', name: 'Acme Corp', role: 'employer' },
    { email: 'admin@example.com', password: 'password123', name: 'System Admin', role: 'admin' },
    { email: 'ravi@example.com', password: 'password123', name: 'Ravi Sharma', role: 'student' },
    { email: 'nexus@example.com', password: 'password123', name: 'Nexus Corp', role: 'employer' },
    { email: 'admin2@example.com', password: 'password123', name: 'Lead Admin', role: 'admin' },
];

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let user = null;

    // 1. Check Hardcoded Users
    user = HARDCODED_USERS.find(
      u => u.email === email && u.password === password
    );

    // 2. Check Newly Created (Signed Up) User in Local Storage
    if (!user) {
        const storedSignup = localStorage.getItem('NEW_SIGNUP_USER');
        if (storedSignup) {
            const newUser = JSON.parse(storedSignup);
            if (newUser.email === email && newUser.password === password) {
                user = newUser; // Found the new user!
            }
        }
    }

    if (user) {
        // Log in the found user
        login(user); 
    } else {
        alert('Invalid credentials!');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.glassContainer}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className={styles.heading}>Login to Your Portal</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>
        <p className={styles.credentials}>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
        <div className={styles.contact}>
          <Link to="/contact">
            <button className={styles.button}>
              Contact Us
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;