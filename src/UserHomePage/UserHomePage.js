/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import JournalsContext from '../JournalsContext';
import JournalPost from '../JournalPost/JournalPost';
import './UserHomePage.css';
import JournalsApiService from '../services/journals-api-service';

class UserHomePage extends Component {

  static contextType = JournalsContext;

  componentDidMount() {
    this.context.clearError();
    JournalsApiService.getUserName()
      .then(this.context.setUserName)
      .catch(this.context.setError);
    JournalsApiService.getUserJournals()
      .then(this.context.setUserJournalsList)
      .catch(this.context.setError);
    console.log('working');
  }

  render() {
    const { userJournalsList, user, error } = this.context;
    // console.log(userJournalsList);
    const numberOfJournals = userJournalsList.length;
    const journalPosts = userJournalsList.map(journal => 
      <JournalPost 
        key={journal.id}
        journal={journal}
        user={user}
      />
    );

	  return (
	    <>
	      <header>
	        <h2>My Journals</h2>
	        <p>You have {numberOfJournals} journals.</p>
	      </header>
        {error 
          ? <div className="error">{error}</div>
          : ''}
	      <section className="journals">
	        {journalPosts}
	      </section>
	    </>
	  );
  }
}

export default UserHomePage;