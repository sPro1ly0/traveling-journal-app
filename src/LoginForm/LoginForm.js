import React, { Component } from 'react';
import './LoginForm.css';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            email_username: '',
            password: ''
        }
    };

    updateEmailUsername(email) {
        this.setState({
            email_username: email
        });
    };

    updatePassword(password) {
        this.setState({
            password: password
        });
    };

    handleSubmit(event) {
        event.preventDefault();
        const { email_username, password } = this.state;
        console.log( email_username, password);
        this.setState({ error: null });
        
    }


    render() {
        return (
            <section className="login">
                <header>
                    <h2>Login</h2>
                    <p>Use your email and password.</p>
                </header>
                <form
                    autoComplete="on"
                    className="login-form"
                    onSubmit={e => this.handleSubmit(e)}   
                >
                    <div className="login-field">
                        <label htmlFor="email_username">Email</label>
                        <input 
                            type="text" 
                            name="email_username" 
                            id="email_username"
                            aria-label="Enter your email address"
                            aria-required="true" 
                            required
                            onChange={e => this.updateEmailUsername(e.target.value)} />
                    </div>
                    <div className="login-field">
                        <label htmlFor="password">Password</label>
                        <input
                            autoComplete="off" 
                            type="password" 
                            name="password" 
                            id="password"
                            aria-label="Enter your password"
                            aria-required="true"
                            required
                            onChange={e => this.updatePassword(e.target.value)} />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </section>
        )
    }
}

export default LoginForm;