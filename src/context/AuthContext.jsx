import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error('Error parsing stored user:', e);
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    console.log('Logging in user with role:', userData.role);
    
    // 1. Set the user in the global React state
    setUser(userData);
    
    // 2. Set the user in the permanent browser storage
    localStorage.setItem('user', JSON.stringify(userData));

    // 3. Clear the temporary 'NEW_SIGNUP_USER' flag
    localStorage.removeItem('NEW_SIGNUP_USER');

    // 4. Redirect user based on role
    setTimeout(() => {
      if (userData.role === 'student') {
        navigate('/student');
      } else if (userData.role === 'employer') {
        navigate('/employer');
      } else if (userData.role === 'admin') {
        navigate('/admin');
      } else if (userData.role === 'officer') {
        navigate('/officer');
      } else {
        console.error('Unknown role:', userData.role);
        navigate('/');
      }
    }, 100);
  };

  const logout = () => {
    console.log('Logging out');
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};