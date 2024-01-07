// src/LoginPage.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    const { name, value } = e.target;

    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', loginData);
      console.log(response.data);

      // Assuming your server sends a success message upon successful login
      if (response.data.message === 'Login successful') {
        if (onLogin) {
          onLogin(); // Trigger the authentication process
        }

        localStorage.setItem('user', JSON.stringify(loginData))
        sessionStorage.setItem('user', JSON.stringify(loginData))

        // Redirect to the profile page
        navigate('/profile');
      } else {
        // Handle unsuccessful login
        console.error('Login failed:', response.data.error);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }

    setLoginData({
      username: '',
      password: '',
    });
  };

  return (
    <section>
      <div className="form-container">
        <h1>Login Form</h1>
        <form onSubmit={handleLoginSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={loginData.username}
            onChange={handleLoginChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleLoginChange}
            required
          />
          
          <button type="submit">Login</button>
          <p style={{ marginTop: '30px', textAlign: 'center', color: '#fff' }}>
            Don't have an account? <a href="/signup" style={{ color: 'red' }}>Sign up here</a>.
          </p>
        </form>
      </div>
    </section>
  );
}

export default LoginPage;
