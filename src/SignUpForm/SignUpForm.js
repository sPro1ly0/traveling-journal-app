import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SignUpForm.css';

class SignUpForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            first_name: '',
            last_name: '',
            email_username: '',
            password: ''
        }
    };

    updateFirstName(firstName) {
        this.setState({
            first_name: firstName
        });
    };

    updateLastName(lastName) {
        this.setState({
            last_name: lastName
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
        const { first_name, last_name, email_username, password } = this.state;
        console.log( first_name, last_name, email_username, password);
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
                        <label htmlFor="first_name">First name</label>
                        <input 
                            type="text" 
                            name="first_name" 
                            id="first_name"
                            aria-label="Enter your first name"
                            aria-required="true"
                            placeholder="John" 
                            required
                            onChange={e => this.updateFirstName(e.target.value)} />
                    </div>
                    <div className="signup-field">
                        <label htmlFor="last_name">Last name</label>
                        <input 
                            type="text" 
                            name="last_name" 
                            id="last_name"
                            aria-label="Enter your last name"
                            aria-required="true" 
                            placeholder="Doe" 
                            required
                            onChange={e => this.updateLastName(e.target.value)} />
                    </div>
                    <div className="signup-field">
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