import React, { Component } from 'react';
import '../JournalPage/JournalPage.css';
import JournalsContext from '../JournalsContext';
import JournalsApiService from '../services/journals-api-service';


class CommentForm extends Component {
  static contextType = JournalsContext;

  handleSubmit = e => {
    e.preventDefault();
    const { journal } = this.context;
    const { comment } = e.target;
    const journal_id = journal[0].id;
    const text = comment.value;
      
    JournalsApiService.postComment(journal_id, text)
      .then(this.context.addComments)
      .then(() => {
        comment.value = '';
      })
      .catch(this.context.setError);
      
  }

  render() {
    return (
      <form id="add-comment" onSubmit={this.handleSubmit}>
        <label htmlFor="comment">Make A Comment</label>
        <textarea
          className='comment-textarea' 
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