import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './LandingPage.module.css';

const LandingPage = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const roles = [
    { name: "Student", description: "Discover jobs and manage your applications.", route: "/login" },
    { name: "Employer", description: "Post listings and find the best talent.", route: "/login" },
    { name: "Admin", description: "Oversee the entire platform and user data.", route: "/login" },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.mainHeading}>Placement Interaction System</h1>
      <p className={styles.subHeading}>Please select your role to log in</p>
      
      <div className={styles.cardContainer}>
        {roles.map((role, index) => (
          <motion.div
            key={index}
            className={styles.card}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ y: -10 }}
            transition={{ delay: index * 0.2 }}
          >
            <Link to={role.route} className={styles.cardLink}>
              <h2 className={styles.cardHeading}>{role.name}</h2>
              <p className={styles.cardText}>{role.description}</p>
              <div className={styles.loginButton}>Log In</div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;