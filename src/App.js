import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarTop from './NavBarTop/NavBarTop';
import LandingPage from './LandingPage/LandingPage';
import SignUpForm from './SignUpForm/SignUpForm';
import LoginForm from './LoginForm/LoginForm';
import UserHomePage from './UserHomePage/UserHomePage';
import CreateJournalForm from './CreateJournalForm/CreateJournalForm';
import AllJournals from './AllJournals/AllJournals';
import ReadPostComments from './ReadPostComments/ReadPostComments';
import Footer from './Footer/Footer';
import NotFoundPage from './NotFoundPage/NotFoundPage';

class App extends Component {

  render() {


    return (
      <>
        <NavBarTop />
        <main className='App'>
          <Switch>
            <Route 
              exact path="/"
              component={LandingPage}
            />
            <Route 
              exact path="/signup"
              component={SignUpForm}
            />
            <Route 
              exact path="/login"
              component={LoginForm}
            />
            <Route 
              exact path="/my-journals"
              component={UserHomePage}
            />
            <Route 
              exact path="/all-journals"
              component={AllJournals}
            />
            <Route 
              exact path="/add-journal"
              component={CreateJournalForm}
            />
            <Route 
              exact path="/journals/:journalId"
              component={ReadPostComments}
            />
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>
        <Footer />
      </>
    );
  }
  
}

export default App;
