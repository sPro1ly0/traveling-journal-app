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
//import { journals, users, comments } from './ExampleData';
//import TokenService from './services/token-service';

class App extends Component {

  static contextType = JournalsContext;

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      journal: [],
      journals: [],
      allJournalsList: [],
      users: [],
      comments: [],
      loggedIn: false
    };
  }

  setError = error => {
    console.error(error);
    this.setState({ error });
  }

  clearError = () => {
    this.setState({ error: null });
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

  setAllJournalsList = allJournalsList => {
    this.setState({
      allJournalsList
    });
  }

  setJournal = journal => {
    this.setState({
      journal
    });
  }

  setComments = comments => {
    this.setState({ 
      comments 
    });
  }

  clearJournal = () => {
    this.setJournal([]);
    this.setComments([]);
  }

  render() {

    const contextValue = {
      journal: this.state.journal,
      journals: this.state.journals,
      allJournalsList: this.state.allJournalsList,
      users: this.state.users,
      comments: this.state.comments,
      addJournal: this.addJournal,
      deleteJournal: this.deleteJournal,
      updateJournal: this.updateJournal,
      addComment: this.addComment,
      setLoginStatus: this.setLoginStatus,
      setAllJournalsList: this.setAllJournalsList,
      setJournal: this.setJournal,
      clearJournal: this.clearJournal,
      setComments: this.setComments,
      setError: this.setError,
      clearError: this.clearError
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
                  component={LandingPage} // good
                />
                <PublicOnlyRoute 
                  exact path="/signup"
                  component={SignUpForm} // good
                />
                <PublicOnlyRoute
                  exact path="/login"
                  component={LoginForm} // good
                />
                <PrivateRoute 
                  exact path="/my-journals"
                  component={UserHomePage}
                />
                <PrivateRoute 
                  exact path="/all-journals"
                  component={AllJournals} // good
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
                  exact path="/journals/:journalId" // good
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
