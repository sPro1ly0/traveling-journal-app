/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import TokenService from '../services/token-service';
import IdleService from '../services/idle-service';
import AuthApiService from '../services/auth-api-service';
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
          IdleService.registerIdleTimerResets();
          TokenService.queueCallbackBeforeExpiry(() => {
            AuthApiService.postRefreshToken();
          });
          this.handleLoginSuccess();
          this.context.setLoginStatus(true);
          this.context.clearError();
          JournalsApiService.getUserName()
            .then(this.context.setUserName)
            .catch(this.context.setError);
          JournalsApiService.getUserJournals()
            .then(this.context.setUserJournalsList)
            .catch(this.context.setError);
        })
        .catch(res => {
          this.setState({ error: res.error });
        });
    }


    render() {
      const { error } = this.state;
      // if error is undefined
      let handleError;
      if (error === undefined) {
        handleError = 'Something went wrong with server try again later.';
      } else {
        handleError = error;
      }

      return (
        <section className="login">
          <header className='login-header'>
            <h2>Login</h2>
            <p>Use your email and password.</p>
          </header>
          <form
            autoComplete="on"
            className="login-form"
            onSubmit={this.handleSubmitAuth}   
          >   
            <div className='login-error' role="alert">
              {handleError && <p className="red-error">{handleError}</p>}
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
            <button 
              type="submit"
              className='login-button'
            >
              Login</button>
          </form>
        </section>
      );
    }
}

export default LoginForm;