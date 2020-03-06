/* eslint-disable react/prop-types */
import React, { Component } from 'react';
//import PropTypes from 'prop-types';

class Comment extends Component {

  render() {
    const { comment } = this.props;
    let author = comment.author;
    if (author === undefined) {
      author = 'Unknown';
    }
    
    return (
      <div className="comment">
        <p className="comment-text">{comment.text}</p>
        <p className="user">{author}</p>
      </div>
    );
  }
    
}

export default Comment;
