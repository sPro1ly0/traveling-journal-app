import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './Utils/PrivateRoute';
import PublicOnlyRoute from './Utils/PublicOnlyRoute';

import NavBarTop from './NavBarTop/NavBarTop';
import NavBarBottom from './NavBarBottom/NavBarBottom';

import LandingPage from './LandingPage/LandingPage';
import SignUpForm from './SignUpForm/SignUpForm';
import LoginForm from './LoginForm/LoginForm';

import UserHomePage from './UserHomePage/UserHomePage';
import AddJournalForm from './AddJournalForm/AddJournalForm';
import EditJournalForm from './EditJournalForm';
import AllJournals from './AllJournals/AllJournals';
import JournalPage from './JournalPage/JournalPage';

import Footer from './Footer/Footer';

import TravelJournalError from './TravelJournalError';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import JournalsContext from './JournalsContext';
import { journals, users, comments } from './ExampleData';
//import TokenService from './services/token-service';

class App extends Component {

  static contextType = JournalsContext;

  constructor(props) {
    super(props);
    this.state = {
      journals: journals,
      users: users,
      comments: comments,
      loggedIn: false
    };
  }

  addJournal = journal => {
    this.setState({
      journals: [journal, ...this.state.journals]
    });
  }

  deleteJournal= journalId => {
    const newJournals = this.state.journals.filter(journal => 
      journal.id !== journalId
    );
    this.setState({
      journals: newJournals
    });
  }

  updateJournal = updatedJournal => {
    const newJournals = this.state.journals.map(journal => 
      (journal.id === updatedJournal.id)
        ? updatedJournal
        : journal
    );
    this.setState({
      journals: newJournals
    });
  }

  addComment = comment => {
    this.setState({
      comments: [...this.state.comments, comment]
    });
  }

  setLoginStatus = status => {
    this.setState({
      loggedIn: status
    });
  }

  render() {

    const contextValue = {
      journals: this.state.journals,
      users: this.state.users,
      comments: this.state.comments,
      addJournal: this.addJournal,
      deleteJournal: this.deleteJournal,
      updateJournal: this.updateJournal,
      addComment: this.addComment,
      setLoginStatus: this.setLoginStatus
    };

    return (
      <>
        <JournalsContext.Provider value={contextValue}>
          <NavBarTop />
          <main className='App'>
            <TravelJournalError>
              <Switch>
                <Route 
                  exact path="/"
                  component={LandingPage}
                />
                <PublicOnlyRoute 
                  exact path="/signup"
                  component={SignUpForm}
                />
                <PublicOnlyRoute
                  exact path="/login"
                  component={LoginForm}
                />
                <PrivateRoute 
                  exact path="/my-journals"
                  component={UserHomePage}
                />
                <PrivateRoute 
                  exact path="/all-journals"
                  component={AllJournals}
                />
                <PrivateRoute 
                  exact path="/add-journal"
                  component={AddJournalForm}
                />
                <PrivateRoute 
                  exact path="/edit-journal/:journalId"
                  component={EditJournalForm}
                />
                <PrivateRoute
                  exact path="/journals/:journalId"
                  component={JournalPage}
                />
                <Route
                  component={NotFoundPage}
                />
              </Switch>
            </TravelJournalError>
          </main>
          <Footer />
          <NavBarBottom />
        </JournalsContext.Provider>      
      </>
    );
  }

}

export default App;
