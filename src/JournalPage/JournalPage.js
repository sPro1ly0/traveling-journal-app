/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './JournalPage.css';
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

    handleSubmit = e => {
      e.preventDefault();
      const { journalId } = this.props.match.params;
      const { comment } = e.target;
      const newComment = {
        id: Math.random() * 5,
        text: comment.value,
        journalId: Number(journalId),
        authorId: 1
      };
      this.context.addComment(newComment);
      comment.value = '';
      console.log(newComment);
    }


    render() {
      const { journal, comments } = this.context;

      if (journal.author === '') {
        journal.author = 'Unknown';
      }

      const checkSameDate = (moment(journal.start_date).format('MMMM Do YYYY')  === moment(journal.end_date).format('MMMM Do YYYY') 
        ? moment(journal.start_date).format('MMMM Do YYYY') 
        : `${moment(journal.start_date).format('MMMM Do YYYY')} - ${moment(journal.end_date).format('MMMM Do YYYY')}`);
     
      const addComments = comments.map( comment => 
        <Comment 
          key={comment.id}
          comment={comment}
        /> 
      );
      return (
        <>
          <header className="journal-header">
            <h1>{journal.title}</h1>
            <div className="journal-info">
              <h2>{journal.location}</h2>
              <p>{checkSameDate}</p>
              <p>By: {journal.author}</p>
            </div>
          </header>
          <section>
            <div className="journal-content">
              <p>{journal.content}</p>
            </div>
          </section>
          <section className="comments-section">
            <h3>Comments</h3>
            {addComments}
            <form id="add-comment" onSubmit={this.handleSubmit}>
              <label htmlFor="comment">Make A Comment</label>
              <textarea 
                id="comment" 
                name="comment" 
                aria-label='Type a comment.'
                defaultValue="Enter your comment..."
                cols="33"
                rows="5"
                required >
              </textarea>
              <button type="submit" className="add-comment-button">Add Comment</button>
            </form>
          </section>
        </>
      );
    }
}

export default JournalPage;