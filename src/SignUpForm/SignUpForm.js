/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';
import IdleService from '../services/idle-service';
import JournalsApiService from '../services/journals-api-service';
import JournalsContext from '../JournalsContext';
import './SignUpForm.css';

class SignUpForm extends Component {

  static contextType = JournalsContext;

  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  // Sign up new user
  handleSignUpSuccess = () => {
    const { history } = this.props;
    history.push('/login');
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { full_name, email, password } = e.target;
    this.setState({ error: null });
    AuthApiService.postUser({
      full_name: full_name.value,
      email: email.value,
      password: password.value
    })
      .then(() => {
        full_name.value = '';
        email.value = '';
        password.value = '';
        this.handleSignUpSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
      
  }

  // Login with Demo User

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/my-journals';
    history.push(destination);
  }

  handleDemoUserAuth = (e) => {
    e.preventDefault();
    this.setState({ error: null });
    // demo user's name is John Doe
    AuthApiService.postLogin({
      email: 'example@mail.com',
      password: 'pasS3!word'
    })
      .then(res => {
        TokenService.saveAuthToken(res.authToken);
        IdleService.registerIdleTimerResets();
        TokenService.queueCallbackBeforeExpiry(() => {
          AuthApiService.postRefreshToken();
        });
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
      <section className="signup">
        <header className="signup-header">
          <h2>Sign Up Today</h2>
        </header>
        <form 
          autoComplete="on"
          className="signup-form"
          onSubmit={this.handleSubmit}
        >   
          <div className="signup-error" role="alert">
            {handleError && <p className="red-error">{handleError}</p>}
          </div>
          <div className="signup-field">
            <label htmlFor="full_name">Full Name</label>
            <input 
              type="text" 
              name="full_name" 
              id="full_name"
              aria-label="Enter your full name"
              aria-required="true"
              placeholder="John Doe" 
              required />
          </div>
          <div className="signup-field">
            <label htmlFor="email">Email</label>
            <input 
              type="text" 
              name="email" 
              id="email"
              aria-label="Enter your email address"
              aria-required="true" 
              placeholder="jondoe@email.com" 
              required />
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
              required />
          </div>
          <button 
            type="submit"
            className='signup-button'
          >
              Sign Up
          </button>
          <p>OR</p>
          <Link 
            to="/my-journals"
            onClick={this.handleDemoUserAuth}
            type='button'
            className='demo-button'
          >
            Explore the Demo
          </Link>
        </form>
      </section>
    );
  }
}

export default SignUpForm;