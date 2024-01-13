import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; // Import the CSS file

const ProfilePage = () => {
  const [userinfo, setUserinfo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    setUserinfo(JSON.parse(user));
  }, []);

  const handleLogout = async () => {
    try {
      localStorage.removeItem('user');
      sessionStorage.removeItem('user');
      navigate('/login');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };



  return (
    <div className="profile-container">
      <div className="profile-content">
        <h1>Welcome to your profile, {userinfo.username}!</h1>
        <ul className="instruction-list">
          <li className="instruction">You can click on any object and move them around.</li>
          <li className="instruction">Use the scroll wheel to zoom in and out.</li>
          <li className="instruction">To resize the objects use (1 to 9) keys after clickig on them.</li>
          <li className="instruction">Feel free to add objects with top left menu.</li>
          <li className="instruction">Use Delete key to delete the object.</li>
          <li className="instruction">Use the save button to save progress.</li>
          <li className="instruction">Use the load button to load the previous progress.</li>
        </ul>
        <button
          className="external-link-button"
          onClick={() => {
            window.open('http://127.0.0.1:8080/?username='+userinfo.username+'&password='+userinfo.password, '_blank');
          }}>
          Go to 3D Virtual site
        </button>
      </div>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;