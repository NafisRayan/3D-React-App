import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from './Header';
import Navigation from './Navigation'; 
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import ProfilePage from './ProfilePage';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const ProtectedRoute = ({children}) => {
    if(!isAuthenticated) {
      return <Navigate to="/login" />
    }  
    return children;
  };

  const handleLogin = () => {
    // API call
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Header />

      <Navigation 
        isAuthenticated={isAuthenticated}
      />

      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route 
          path="/login"
          element={<LoginPage onLogin={handleLogin} />} 
        />

        <Route 
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        <Route 
          path="/signup"
          element={<RegistrationPage />}
        />

      </Routes>
    </Router>
  );
}

export default App;