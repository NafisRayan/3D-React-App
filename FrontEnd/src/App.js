import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import HomePage from './HomePage';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Navigation />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<RegistrationPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
