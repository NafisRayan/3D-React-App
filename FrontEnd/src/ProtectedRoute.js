import React from 'react';

const ProtectedRoute = ({ children }) => {
  
  if (!isAuthenticated) { 
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;