import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (userData) => {
    // 1. Set the user in the global React state
    setUser(userData);
    
    // 2. Set the user in the permanent browser storage
    localStorage.setItem('user', JSON.stringify(userData));

    // 3. CRITICAL: Clear the temporary 'NEW_SIGNUP_USER' flag 
    //    so the next time the app loads, the login page doesn't break.
    localStorage.removeItem('NEW_SIGNUP_USER');

    // 4. Redirect user
    if (userData.role === 'student') {
      navigate('/student');
    } else if (userData.role === 'employer') {
      navigate('/employer');
    } else if (userData.role === 'admin') {
      navigate('/admin');
    }
};

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login');
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};