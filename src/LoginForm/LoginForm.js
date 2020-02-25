import React, { Component } from 'react';
import './LoginForm.css';

class LoginForm extends Component {
    render() {
        return (
            <section className="login">
                <header>
                    <h2>Login</h2>
                    <p>Use your email and password.</p>
                </header>
                <form className="login-form">
                    <div className="login-field">
                        <label for="username">Email</label>
                        <input type="text" name="username" id="username" />
                    </div>
                    <div className="login-field">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </section>
        )
    }
}

export default LoginForm;