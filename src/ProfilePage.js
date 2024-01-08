//ProfilePage.js

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ProfilePage = () => {

  

  const [userinfo, setUserinfo] = useState({});


  const navigate = useNavigate();

  useEffect(() => {

    const user = localStorage.getItem('user')
    setUserinfo(JSON.parse(user))

  }, []);

  const handleLogout = async () => {
    try {

          localStorage.removeItem('user')
          sessionStorage.removeItem('user')
          navigate('/login');

    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div>
      <h1>Welcome to your profile, {userinfo.username}!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ProfilePage;