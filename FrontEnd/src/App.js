// App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from './Header';
import Navigation from './Navigation';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import ProfilePage from './ProfilePage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the authentication status from the server
    fetch('http://localhost:3000/checkAuth', {
      method: 'GET',
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => {
        setIsAuthenticated(data.isAuthenticated);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error checking authentication status:', error);
        setLoading(false);
      });
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Send a logout request to the server
    fetch('http://localhost:3000/logout', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Logout successful') {
          setIsAuthenticated(false);
        } else {
          console.error('Logout failed:', data.error);
        }
      })
      .catch((error) => {
        console.error('Error during logout:', error);
      });
  };

  if (loading) {
    // You might want to display a loading spinner while checking authentication status
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Header />
      <Navigation isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={<LoginPage onLogin={handleLogin} isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/profile"
          element={isAuthenticated ? <ProfilePage /> : <Navigate to="/login" />}
        />
        <Route path="/signup" element={<RegistrationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
