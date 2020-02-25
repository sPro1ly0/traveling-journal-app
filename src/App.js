import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBarTop from './NavBarTop/NavBarTop';
import LandingPage from './LandingPage/LandingPage';
import SignUpForm from './SignUpForm/SignUpForm';
import LoginForm from './LoginForm/LoginForm';
import Footer from './Footer/Footer';

class App extends Component {

  render() {


    return (
      <>
        <NavBarTop />
        <main className='App'>
          <Route 
            exact path="/"
            component={LandingPage}/>
          <Route 
            exact path="/signup"
            component={SignUpForm}/>
          <Route 
            exact path="/login"
            component={LoginForm}/>
        </main>
        <Footer />
      </>
    );
  }
  
}

export default App;
