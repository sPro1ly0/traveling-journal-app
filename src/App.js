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
import TokenService from './services/token-service';
//import { journals, users, comments } from './ExampleData';

class App extends Component {

  static contextType = JournalsContext;

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loggedIn: TokenService.hasAuthToken() ? true : false,
      user: [],
      journal: [],
      userJournalsList: [],
      allJournalsList: [],
      comments: []
    };
  }

  setError = error => {
    console.error(error);
    this.setState({ error });
  }

  clearError = () => {
    this.setState({ error: null });
  }

  setLoginStatus = status => {
    this.setState({
      loggedIn: status
    });
  }

  setUserName = user => {
    this.setState({
      user
    });
  }

  setJournal = journal => {
    this.setState({
      journal
    });
  }

  addJournal = journal => {
    console.log(journal);
    this.setState({
      allJournalsList: [...this.state.allJournalsList, journal]
    });
  }

  deleteJournal= journalId => {
    const newUserJournals = this.state.userJournalsList.filter(journal => 
      journal.id !== journalId
    );
    const newAllJournals = this.state.allJournalsList.filter(journal => 
      journal.id !== journalId
    );

    this.setState({
      userJournalsList: newUserJournals,
      allJournalsList: newAllJournals
    });
  }

  updateJournal = updatedJournal => {
    const newUserJournals = this.state.userJournalsList.map(journal => 
      (journal.id === updatedJournal.id)
        ? updatedJournal
        : journal
    );

    const newAllJournals = this.state.allJournalsList.map(journal => 
      (journal.id === updatedJournal.id)
        ? updatedJournal
        : journal
    );

    this.setState({
      userJournalsList: newUserJournals,
      allJournalsList: newAllJournals
    });
  }

  setUserJournalsList = userJournals => {
    // show newest journals first
    const userJournalsList = userJournals.reverse();
    this.setState({
      userJournalsList
    });
  }

  setAllJournalsList = allJournals => {
    // show newest journals first
    const allJournalsList = allJournals.reverse();
    this.setState({
      allJournalsList
    });
  }

  setComments = comments => {
    this.setState({ 
      comments 
    });
  }

  addComments = comment => {
    this.setState({
      comments: [...this.state.comments, comment]
    });
  }

  clearJournal = () => {
    this.setJournal([]);
    this.setComments([]);
  }
  // clear when user logs out
  clearData = () => {
    this.setAllJournalsList([]);
    this.setComments([]);
    this.setJournal([]);
    this.setUserName([]);
    this.setUserJournalsList([]);
    this.clearError();
  }

  renderNavBottom() {
    return (
      <NavBarBottom />
    );
  }

  render() {

    const contextValue = {
      error: this.state.error,
      user: this.state.user,
      journal: this.state.journal,
      userJournalsList: this.state.userJournalsList,
      allJournalsList: this.state.allJournalsList,
      comments: this.state.comments,
      setError: this.setError,
      clearError: this.clearError,
      setUserName: this.setUserName,
      addJournal: this.addJournal,
      deleteJournal: this.deleteJournal,
      updateJournal: this.updateJournal,
      setJournal: this.setJournal,
      clearJournal: this.clearJournal,
      addComments: this.addComments,
      setComments: this.setComments,
      setLoginStatus: this.setLoginStatus,
      setAllJournalsList: this.setAllJournalsList,
      setUserJournalsList: this.setUserJournalsList,
      clearData: this.clearData
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
                  component={NotFoundPage} //good
                />
              </Switch>
            </TravelJournalError>
          </main>
          <Footer />
          {TokenService.hasAuthToken()
            ? this.renderNavBottom()
            : ''
          }
        </JournalsContext.Provider>      
      </>
    );
  }

}

export default App;
