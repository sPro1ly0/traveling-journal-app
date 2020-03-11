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
    this.context.showingNavBottom(true);
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
    let numberOfJournals = userJournalsList.length;
    let journalText = 'journals';
    if (numberOfJournals === 1) {
      journalText = 'journal';
    }
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
	        <h2 className='users-header'>My Journals</h2>
	        <p className='user-journal-number'>You have {numberOfJournals} {journalText}.</p>
	      </header>
        {error 
          ? <div className="red-error">{error}</div>
          : ''}
	      <section className="journals">
	        {journalPosts}
	      </section>
	    </>
	  );
  }
}

export default UserHomePage;