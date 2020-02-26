import React, { Component } from 'react';
import './JournalPage.css';
import Comment from '../Comment/Comment';
import JournalsContext from '../JournalsContext';


class JournalPage extends Component {

    static defaultProps = {
        match: { params: {} },
    }

    static contextType = JournalsContext;
    render() {
        const { journals, users, comments} = this.context;

        const { journalId } = this.props.match.params;

        const journal = journals.find((j) => 
          j.id === Number(journalId)
        );
        // console.log(journalId);
        // console.log(journal);

        const findAuthor = users.filter(user => user.id === journal.authorId);
        const findComments = comments.filter(comment => comment.journalId === journal.id);
        //console.log(comments);
        console.log(findComments);
        const author = `${findAuthor[0].firstName} ${findAuthor[0].lastName}`;
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
                        <p>{journal.date}</p>
                        <p>{author}</p>
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
                    <form id="add-comment">
                        <label htmlFor="comment">Make A Comment</label>
                        <textarea id="comment" name="comment" value="Enter your comment..."
                            rows="5" cols="33">
                        </textarea>
                        <button className="add-comment-button">Add Comment</button>
                    </form>
                </section>
            </>
        )
    }
}

export default JournalPage;