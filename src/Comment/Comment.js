/* eslint-disable react/prop-types */
import React, { Component } from 'react';
//import PropTypes from 'prop-types';

class Comment extends Component {

  render() {
    const { comment } = this.props;

    if (comment.author === '') {
      comment.author = 'Unknown';
    }

    return (
      <div className="comment">
        <p className="comment-text">{comment.text}</p>
        <p className="user">{comment.author}</p>
      </div>
    );
  }
    
}

export default Comment;
