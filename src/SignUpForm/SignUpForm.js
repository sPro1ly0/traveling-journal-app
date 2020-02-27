import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SignUpForm.css';

class SignUpForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            full_name: '',
            email_username: '',
            password: ''
        }
    };

    updateFullName(fullName) {
        this.setState({
            full_name: fullName
        });
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
        const { full_name, email_username, password } = this.state;
        console.log( full_name, email_username, password);
        this.setState({ error: null });
        
    }

    render() {
        const { error } = this.state;
        return (
            <section className="signup">
                <header className="signup-header">
                    <h2>Sign Up Today</h2>
                </header>
                <form 
                    autoComplete="on"
                    className="signup-form"
                    onSubmit={e => this.handleSubmit(e)}
                >   
                    <div role="alert">
                        {error && <p className="red-error">{error}</p>}
                    </div>
                    <div className="signup-field">
                        <label htmlFor="full_name">Full name</label>
                        <input 
                            type="text" 
                            name="full_name" 
                            id="full_name"
                            aria-label="Enter your full name"
                            aria-required="true"
                            placeholder="John Doe" 
                            required
                            onChange={e => this.updateFullName(e.target.value)} />
                    </div>
                    <div className="signup-field">
                        <label htmlFor="email_username">Email</label>
                        <input 
                            type="text" 
                            name="email_username" 
                            id="email_username"
                            aria-label="Enter your email address"
                            aria-required="true" 
                            placeholder="jondoe@email.com" 
                            required
                            onChange={e => this.updateEmailUsername(e.target.value)} />
                    </div>
                    <div className="signup-field">
                        <label htmlFor="password">Password</label>
                        <input
                            autoComplete="off" 
                            type="password" 
                            name="password" 
                            id="password"
                            aria-label="Create your password"
                            aria-required="true"
                            required
                            onChange={e => this.updatePassword(e.target.value)} />
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