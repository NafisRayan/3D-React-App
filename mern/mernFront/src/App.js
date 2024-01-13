// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Navigation from './Navigation';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import ProfilePage from './ProfilePage';

function App() {

  return (
    <Router>
      <Header />
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={<LoginPage/>}

          // element={<LoginPage onLogin={handleLogin} isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/profile"
          element={<ProfilePage />}
        />
        <Route path="/signup" element={<RegistrationPage />} />
      </Routes>
    </Router>
  );
}

export default App;