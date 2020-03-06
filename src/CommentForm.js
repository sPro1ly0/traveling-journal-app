import React, { Component } from 'react';
import './JournalPage/JournalPage.css';
import JournalsContext from '../src/JournalsContext';
import JournalsApiService from '../src/services/journals-api-service';


class CommentForm extends Component {
    static contextType = JournalsContext;

    handleSubmit = e => {
      e.preventDefault();
      const { journal } = this.context;
      const { comment } = e.target;
      const journal_id = journal.id;
      const text = comment.value;
        
      JournalsApiService.postComment(journal_id, text)
        .then(this.context.addComment)
        .then(() => {
          comment.value = '';
          // console.log(this.context.comments);
        })
        .catch(this.context.setError);
        
    }

    render() {
      return (
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
      );
    }
}



export default CommentForm;