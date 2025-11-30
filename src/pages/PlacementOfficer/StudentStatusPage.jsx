import React, { useState } from 'react';
import OfficerNavbar from './OfficerNavbar';
import styles from './StudentStatusPage.module.css';

const initialStudents = [
  { id: 1, name: 'Jane Doe', email: 'jane@example.com', branch: 'CSE', status: 'Unplaced', company: '-' },
  { id: 2, name: 'John Smith', email: 'john@example.com', branch: 'ECE', status: 'Placed', company: 'Tech Sol' },
  { id: 3, name: 'Ravi Sharma', email: 'ravi@example.com', branch: 'CSE', status: 'Unplaced', company: '-' },
  { id: 4, name: 'Emily White', email: 'emily@example.com', branch: 'IT', status: 'Placed', company: 'Acme Corp' },
  { id: 5, name: 'Michael Brown', email: 'michael@example.com', branch: 'MECH', status: 'Unplaced', company: '-' },
];

const StudentStatusPage = () => {
  const [students, setStudents] = useState(initialStudents);
  const [filter, setFilter] = useState('All');

  const handleStatusChange = (id, newStatus) => {
    const updatedStudents = students.map(student => 
      student.id === id ? { ...student, status: newStatus, company: newStatus === 'Unplaced' ? '-' : 'TBD' } : student
    );
    setStudents(updatedStudents);
  };

  const handleCompanyChange = (id, newCompany) => {
    const updatedStudents = students.map(student => 
        student.id === id ? { ...student, company: newCompany } : student
      );
      setStudents(updatedStudents);
  };

  const filteredStudents = filter === 'All' 
    ? students 
    : students.filter(s => s.status === filter);

  return (
    <div className={styles.pageContainer}>
      <OfficerNavbar />
      <div className={styles.contentContainer}>
        <h1 className={styles.mainHeading}>Student Placement Status</h1>
        
        <div className={styles.filterSection}>
            <label className={styles.filterLabel}>Filter by Status: </label>
            <select onChange={(e) => setFilter(e.target.value)} className={styles.filterSelect}>
                <option value="All">All Students</option>
                <option value="Placed">Placed</option>
                <option value="Unplaced">Unplaced</option>
            </select>
        </div>

        <div className={styles.tableCard}>
            <table className={styles.table}>
            <thead>
                <tr>
                <th className={styles.th}>Name</th>
                <th className={styles.th}>Branch</th>
                <th className={styles.th}>Status</th>
                <th className={styles.th}>Company</th>
                </tr>
            </thead>
            <tbody>
                {filteredStudents.map(student => (
                <tr key={student.id} className={styles.tr}>
                    <td className={styles.td}>
                        <div className={styles.studentName}>{student.name}</div>
                        <div className={styles.studentEmail}>{student.email}</div>
                    </td>
                    <td className={styles.td}>{student.branch}</td>
                    <td className={styles.td}>
                        <select 
                            value={student.status} 
                            onChange={(e) => handleStatusChange(student.id, e.target.value)}
                            className={`${styles.statusSelect} ${student.status === 'Placed' ? styles.placed : styles.unplaced}`}
                        >
                            <option value="Unplaced">Unplaced</option>
                            <option value="Placed">Placed</option>
                        </select>
                    </td>
                    <td className={styles.td}>
                        {student.status === 'Placed' ? (
                             <input 
                             type="text" 
                             value={student.company}
                             onChange={(e) => handleCompanyChange(student.id, e.target.value)}
                             className={styles.companyInput}
                           />
                        ) : (
                            <span>-</span>
                        )}
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default StudentStatusPage;