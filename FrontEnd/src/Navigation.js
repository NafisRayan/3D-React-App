import React from 'react';

// const Navigation = () => {
//     return (
//         <nav>
//             <a href="/">Home</a>
//             <a href="/login">Login</a>
//             <a href="/signup">Sign Up</a>
//         </nav>
//     );
// }

const Navigation = ({ isAuthenticated }) => {
    return (
      <nav>
        <a href="/">Home</a> 
        {isAuthenticated ? (
          <>
            <a href="/profile">Profile</a>
          </>
        ) : (
          <>
            <a href="/login">Login</a>
            <a href="/signup">Register</a>
          </>
        )}
      </nav>
    );
  };

export default Navigation;
