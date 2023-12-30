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
            </div>
        </section>
    );
}

export default SignupPage;
