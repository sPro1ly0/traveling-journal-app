import React, { Component } from 'react';
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';
import './LoginForm.css';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            email: '',
            password: ''
        }
    };

    updateEmailUsername = (e) => {
        const email = e.target.value;
        this.setState({
            email
        });
    };

    updatePassword = (e) => {
        const password= e.target.value;
        this.setState({
            password
        });
    };

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     const { email, password } = this.state;
    //     console.log( email, password);
    //     this.setState({ error: null });
        
    // }

    handleSubmitAuth = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        this.setState({ error: null });

        AuthApiService.postLogin({
            email: email,
            password: password
        })
            .then(res => {
                this.setState({ 
                    email: '',
                    password: ''
                })
                TokenService.saveAuthToken(res.authToken);
                this.props.onLoginSuccess();
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
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
                    onSubmit={this.handleSubmitAuth}   
                >   
                    <div role="alert">
                        {this.state.error && <p className="red-error">{this.state.error}</p>}
                    </div>
                    <div className="login-field">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            name="email" 
                            id="email"
                            aria-label="Enter your email address"
                            aria-required="true" 
                            required
                            onChange={this.updateEmailUsername} />
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
                            onChange={this.updatePassword} />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </section>
        )
    }
}

export default LoginForm;