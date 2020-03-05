/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './JournalPage.css';
import Comment from '../Comment/Comment';
import JournalsContext from '../JournalsContext';
import moment from 'moment';


class JournalPage extends Component {

    static defaultProps = {
      match: { params: {} },
    }

    static contextType = JournalsContext;

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
      const { journals, users, comments} = this.context;

      const { journalId } = this.props.match.params;

      const journal = journals.find((j) => 
        j.id === Number(journalId)
      );
        // console.log(journalId);
        // console.log(journal);
      const checkSameDate = (moment(journal.startDate).format('MMMM Do YYYY')  === moment(journal.endDate).format('MMMM Do YYYY') 
        ? moment(journal.startDate).format('MMMM Do YYYY') 
        : `${moment(journal.startDate).format('MMMM Do YYYY')} - ${moment(journal.endDate).format('MMMM Do YYYY')}`);
        // console.log(checkSameDate);
      const findAuthor = users.filter(user => user.id === journal.authorId);
      const findComments = comments.filter(comment => comment.journalId === journal.id);
      // console.log(comments);
      // console.log(findComments);
      const author = findAuthor[0].fullName; // 'unknown'
      const addComments = findComments.map( comment => 
        <Comment 
          key={comment.id}
          comment={comment}
          users={users}
        /> 
      );
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