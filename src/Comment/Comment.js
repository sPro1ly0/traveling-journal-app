/* eslint-disable react/prop-types */
import React, { Component } from 'react';
//import PropTypes from 'prop-types';

class Comment extends Component {

  render() {
    const { comment, users } = this.props;

    const findAuthor = users.filter(user => user.id === comment.authorId);
    const author = findAuthor[0].fullName;

    return (
      <div className="comment">
        <p className="comment-text">{comment.text}</p>
        <p className="user">{author}</p>
      </div>
    );
  }
    
}

export default Comment;

// Comment.propTypes = {
//     comment: ,
//     users:
// };