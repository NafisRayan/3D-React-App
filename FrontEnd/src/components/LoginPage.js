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
            </div>
        </section>
    );
}

export default LoginPage;
