/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';
import IdleService from '../services/idle-service';
import JournalsApiService from '../services/journals-api-service';
import JournalsContext from '../JournalsContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './LandingPage.css';

class LandingPage extends Component {

  static contextType = JournalsContext;

  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  handleLoginSuccess = () => {
    const { history } = this.props;
    const destination = '/my-journals';
    history.push(destination);
  }

  handleDemoUserAuth = (e) => {
    e.preventDefault();
    this.setState({ error: null });
    // demo user's name John Doe
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
        console.log('working');
      })
      .catch(res => {
        this.setState({ error: res.error });
        console.log(this.state.error);
      });
  }

  render() {
    const { error } = this.state;
    return (
      <>
        <section className="banner">
          {error &&  <p className='red-error'>{error}</p>}
          <h2 className='intro-header'>Journal your journey wherever you go</h2>
          <Link 
            to="/my-journals"
            onClick={this.handleDemoUserAuth}
            type='button'
            className='demo-button'>Explore the Demo!</Link>
        </section>
        <section className="feature-sections">
          <FontAwesomeIcon icon='book-open' size='4x' />
          <h3>Tell your stories</h3>
          <p>Write about the places you&apos;ve experienced and keep track of where you&apos;ve traveled.</p>
          <img alt="place" src="https://sonshineventura.org/files/2015/02/wireframe-box-270x203.jpg" />
        </section>
        <section className="feature-sections second-section">
          <FontAwesomeIcon icon='globe-americas' size='4x' />
          <h3>Discover new places</h3>
          <p>Explore and read journals about all the places our users have been.</p>
          <img alt="place" src="https://sonshineventura.org/files/2015/02/wireframe-box-270x203.jpg" />
        </section>
        <section className="feature-sections">
          <FontAwesomeIcon icon='comments' size='4x' />
          <h3>Start conversations</h3>
          <p>Comment on other journals and ask for travel advice to new places to help begin your next journey.</p>
          <img alt="place" src="https://sonshineventura.org/files/2015/02/wireframe-box-270x203.jpg" />
        </section>
      </>
    );
  }
 
}

export default LandingPage;