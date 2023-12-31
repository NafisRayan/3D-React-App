import React from 'react';

const SignupPage = () => {
    return (
        <section>
            <div className="form-container">
                <h2>Sign Up</h2>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email" /> {/* Added email input */}
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
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
