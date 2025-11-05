// This file should be named src/pages/Employer/InterviewSchedulerPage.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import EmployerNavbar from './EmployerNavbar';
import styles from './InterviewSchedulerPage.module.css';

const studentData = {
  '101': { name: 'Jane Doe' },
  '102': { name: 'John Smith' },
  '201': { name: 'Emily White' },
  '202': { name: 'David Brown' },
};

const InterviewSchedulerPage = () => {
  const { studentId } = useParams();
  const student = studentData[studentId];
  const [selectedSlot, setSelectedSlot] = useState(null);

  const availableSlots = [
    { id: '1', date: 'Oct 2, 2025', time: '10:00 AM' },
    { id: '2', date: 'Oct 2, 2025', time: '02:00 PM' },
    { id: '3', date: 'Oct 3, 2005', time: '11:00 AM' },
  ];

  const handleBookSlot = (slot) => {
    setSelectedSlot(slot);
    alert(`Interview with ${student.name} booked for ${slot.date} at ${slot.time}.`);
  };

  return (
    <div className={styles.pageContainer}>
      <EmployerNavbar />
      <div className={styles.contentContainer}>
        <h1 className={styles.mainHeading}>Schedule Interview for {student ? student.name : 'Student'}</h1>
        <div className={styles.schedulerCard}>
          <h3 className={styles.cardHeading}>Available Time Slots</h3>
          <div className={styles.slotsGrid}>
            {availableSlots.map(slot => (
              <div
                key={slot.id}
                onClick={() => handleBookSlot(slot)}
                className={`${styles.slotCard} ${selectedSlot?.id === slot.id ? styles.selectedSlot : ''}`}
              >
                <p className={styles.slotDate}>{slot.date}</p>
                <p className={styles.slotTime}>{slot.time}</p>
              </div>
            ))}
          </div>
          {selectedSlot && (
            <p className={styles.confirmationText}>
              You have successfully booked an interview.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InterviewSchedulerPage;