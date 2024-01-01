//SignupPage.js
import React, { useState } from 'react';

const SignupPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();

        // Create a data object with the form values
        const data = {
            username,
            email,
            password,
            confirmPassword
        };

        // Make an HTTP POST request to your Node.js backend
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            // Handle the response from the backend
            console.log(result);
        })
        .catch(error => {
            // Handle any errors
            console.error(error);
        });
    };

    return (
        <section>
            <div className="form-container">
                <h2>Sign Up</h2>
                <form onSubmit={handleSignup}>
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <button type="submit">Sign Up</button>
                </form>
                <p style={{ marginTop: '30px', textAlign: 'center', color: '#fff' }}>
                    Already have an account? <a href="/login" style={{ color: 'red' }}>Login here</a>.
                </p>
            </div>
        </section>
    );
}

export default SignupPage;