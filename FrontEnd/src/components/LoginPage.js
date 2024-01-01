import React, { useState } from 'react';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        // Create a data object with the form values
        const data = {
            username,
            password
        };

        // Make an HTTP POST request to your Node.js backend
        fetch('/login', {
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
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Login</button>
                </form>
                <p style={{ marginTop: '30px', textAlign: 'center', color: '#fff' }}>
                    Don't have an account? <a href="/signup" style={{ color: 'red' }}>Create one here</a>.
                </p>
            </div>
        </section>
    );
}

export default LoginPage;