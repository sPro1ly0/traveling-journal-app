import React, { Component } from 'react';

class Comment extends Component {

    render() {
        const { comment, users } = this.props;

        const findAuthor = users.filter(user => user.id === comment.authorId);
            //console.log(comments);
        const author = `${findAuthor[0].firstName} ${findAuthor[0].lastName}`;

        return (
            <>
                <div className="comment">
                    <p className="comment-text">{comment.text}</p>
                    <p className="user">{author}</p>
                </div>
            </>
        );
    };
    
};

export default Comment;