/* eslint-disable react/prop-types */
import React, { Component } from 'react';
//import PropTypes from 'prop-types';

class Comment extends Component {

  render() {
    const { comment, user } = this.props;
    let author = comment.author;
    if (author === undefined) {
      author = user[0].full_name;
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
