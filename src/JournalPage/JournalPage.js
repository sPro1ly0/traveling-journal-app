/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './JournalPage.css';
import CommentForm from '../CommentForm';
import Comment from '../Comment/Comment';
import JournalsContext from '../JournalsContext';
import JournalsApiService from '../services/journals-api-service';
import moment from 'moment';


class JournalPage extends Component {

    static defaultProps = {
      match: { params: {} },
    }

    static contextType = JournalsContext;

    componentDidMount() {
      this.context.clearError();
      const { journalId } = this.props.match.params;
      JournalsApiService.getJournal(journalId)
        .then(this.context.setJournal)
        .catch(this.context.setError);
      JournalsApiService.getJournalComments(journalId)
        .then(this.context.setComments)
        .catch(this.context.setError);
    }

    componentWillUnmount() {
      this.context.clearJournal();
    }

    renderJournalPage() {
      const { journal, comments, user } = this.context;

      let author = journal.author;
      if (author === undefined) {
        author = 'Unknown';
      }

      const checkSameDate = (moment(journal.start_date).format('MMMM Do YYYY')  === moment(journal.end_date).format('MMMM Do YYYY') 
        ? moment(journal.start_date).format('MMMM Do YYYY') 
        : `${moment(journal.start_date).format('MMMM Do YYYY')} - ${moment(journal.end_date).format('MMMM Do YYYY')}`);

      return (
        <>
          <header className="journal-header">
            <h1>{journal.title}</h1>
            <div className="journal-info">
              <h2>{journal.location}</h2>
              <p>{checkSameDate}</p>
              <p>By: {author}</p>
            </div>
          </header>
          <JournalContent journal={journal} />
          <JournalComments 
            comments={comments}
            user={user} />
          <CommentForm />
        </>
      );
    }


    render() {
      const { error } = this.context;
      let page;
      if (error) {
        // eslint-disable-next-line quotes
        page = (error.message === `Journal doesn't exist`)
          ? <p className='red-error'>Journal not found.</p>
          : <p className='red-error'>There was an error.</p>;
      } else {
        page = this.renderJournalPage();
      }
      return (
        <>
          <section className="comments-section">
            {page}
          </section>
        </>
      );
    }
}

export default JournalPage;

function JournalContent({ journal }) {
  return (
    <section>
      <div className="journal-content">
        <p>{journal.content}</p>
      </div>
    </section>
  );
}

function JournalComments({ comments = [], user }) {
  const addComments = comments.map(comment => 
    <Comment 
      key={comment.id}
      comment={comment}
      user={user}
    /> 
  );
  return (
    <section className="comments-section">
      <h3>Comments</h3>
      {addComments}
    </section>
  );
  
}
