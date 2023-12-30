import React from 'react';

const LoginPage = () => {
    return (
        <section>
            <div className="form-container">
                <h2>Login</h2>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
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
