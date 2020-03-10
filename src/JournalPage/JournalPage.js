/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './JournalPage.css';
import CommentForm from '../CommentForm';
import Comment from '../Comment/Comment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
      this.context.showingNavBottom(true);
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

    render() {
      const { error } = this.context;

      const { journal, comments, user } = this.context;
      let title;
      let location;
      let author;
      let checkSameDate;
      let content;
      let addComments;
      if (journal.length > 0) {
        // console.log(journal[0]);

        author = journal[0].author;
        // console.log(author);
        if (author === undefined) {
          author = 'Unknown';
        }
        title = journal[0].title;

        location = journal[0].location;

        checkSameDate = (moment(journal[0].start_date).format('MMMM Do YYYY')  === moment(journal[0].end_date).format('MMMM Do YYYY') 
          ? moment(journal[0].start_date).format('MMMM Do YYYY') 
          : `${moment(journal[0].start_date).format('MMMM Do YYYY')} - ${moment(journal[0].end_date).format('MMMM Do YYYY')}`);

        content  = journal[0].content;
        
        addComments = comments.map(comment => 
          <Comment 
            key={comment.id}
            comment={comment}
            user={user}
          />
        );

      } 

      return (
        <>
          <section className="journal-page">
            <header className="journal-header">
              <h1>{title}</h1>
              <div className="journal-info">
                <h2>{location}</h2>
                <p>{checkSameDate}</p>
                <p>By: {author}</p>
              </div>
            </header>
            {error 
              ? <p className='red-error'>{error.error}</p>
              : ''}
            <section>
              <div className="journal-content">
                <p>{content}</p>
              </div>
            </section>
            <section className="comments-section">
              <h3>Comments <FontAwesomeIcon icon='comments' size='1x' /></h3>
              {addComments}
            </section>
            <CommentForm />
          </section>
        </>
      );
    }
}

export default JournalPage;
