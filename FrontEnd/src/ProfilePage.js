//ProfilePage.js

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the username from the server using a separate API request
    fetch('http://localhost:3000/getUsername', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.username) {
          setUsername(data.username);
        }
      })
      .catch((error) => {
        console.error('Error fetching username:', error);
      });
  }, []);

  const handleLogout = () => {
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
          navigate('/'); // Redirect after successful logout using navigate
        } else {
          console.error('Logout failed:', data.error);
        }
      })
      .catch((error) => {
        console.error('Error during logout:', error);
      });
  };

  return (
    <div>
      <h1>Welcome to your profile, {username}!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ProfilePage;
