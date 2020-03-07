/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';
import JournalsApiService from '../services/journals-api-service';
import JournalsContext from '../JournalsContext';
import './LoginForm.css';

class LoginForm extends Component {

  static contextType = JournalsContext;

  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

    handleLoginSuccess = () => {
      const { location, history } = this.props;
      const destination = (location.state || {}).from || '/my-journals';
      history.push(destination);
    }

    handleSubmitAuth = (e) => {
      e.preventDefault();
      const { email, password } = e.target;
      this.setState({ error: null });

      AuthApiService.postLogin({
        email: email.value,
        password: password.value
      })
        .then(res => {
          email.value = '';
          password.value = '';
          TokenService.saveAuthToken(res.authToken);
          this.handleLoginSuccess();
          this.context.setLoginStatus(true);
        })
        .then(() => {
          this.context.clearError();
          JournalsApiService.getUserName()
            .then(this.context.setUserName)
            .catch(this.context.setError);
          JournalsApiService.getUserJournals()
            .then(this.context.setUserJournalsList)
            .catch(this.context.setError);
          console.log('working');
        })
        .catch(res => {
          this.setState({ error: res.error });
        });
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
                required />
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
                required />
            </div>
            <button type="submit">Login</button>
          </form>
        </section>
      );
    }
}

export default LoginForm;