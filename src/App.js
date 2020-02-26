import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarTop from './NavBarTop/NavBarTop';
import NavBarBottom from './NavBarBottom/NavBarBottom';
import LandingPage from './LandingPage/LandingPage';
import SignUpForm from './SignUpForm/SignUpForm';
import LoginForm from './LoginForm/LoginForm';
import UserHomePage from './UserHomePage/UserHomePage';
import CreateJournalForm from './CreateJournalForm/CreateJournalForm';
import AllJournals from './AllJournals/AllJournals';
import JournalPage from './JournalPage/JournalPage';
import Footer from './Footer/Footer';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import JournalsContext from './JournalsContext';
import { journals, users, comments } from './ExampleData';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      journals: journals,
      users: users,
      comments: comments
    }
  }
  static contextType = JournalsContext;

  render() {

    const contextValue = {
      journals: this.state.journals,
      users: this.state.users,
      comments: this.state.comments
    }

    return (
      <>
        <JournalsContext.Provider value={contextValue}>
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
                component={JournalPage}
              />
              <Route
                component={NotFoundPage}
              />
            </Switch>
          </main>
          <Footer />
          <NavBarBottom />
        </JournalsContext.Provider>
        
      </>
    );
  }
  
}

export default App;
