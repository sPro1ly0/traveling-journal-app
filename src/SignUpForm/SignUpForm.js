import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SignUpForm.css';

class SignUpForm extends Component {
    render() {
        return (
            <section className="signup">
                <header className="signup-header">
                    <h2>Sign Up Today</h2>
                </header>
                <form className="signup-form">
                    <div className="signup-field">
                        <label for="first-name">First name</label>
                        <input placeholder="John" type="text" name="first-name" id="first-name" />
                    </div>
                    <div className="signup-field">
                        <label for="last-name">Last name</label>
                        <input type="text" name="last-name" id="last-name" placeholder="Doe" />
                    </div>
                    <div className="signup-field">
                        <label for="username">Email</label>
                        <input type="text" name="username" id="username" />
                    </div>
                    <div className="signup-field">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <button type="submit">Sign Up</button>
                    <p>OR</p>
                    <Link to="/my-journals" type='button'>Explore the Demo</Link>
                </form>
            </section>
        )
    }
}

export default SignUpForm;