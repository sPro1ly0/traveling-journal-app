import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import JournalsContext from '../JournalsContext';
import './JournalPost.css';




class JournalPost extends Component {

    

    render() {
        const { journal, comments } = this.props;
        const findComments = comments.filter(comment => comment.journalId === journal.id);
        const numberOfComments = findComments.length;
        const renderEditButton = journal.authorId === 1 ? <Link to={`/edit-journal/${journal.id}`}>Edit</Link> : null;
        return (
            <>
               
                    <div className="journal-post">
                        <Link to={`/journals/${journal.id}`} className='journal-link'>
                            <h2>{journal.title}</h2>
                        </Link>
                        <p>{journal.location}</p>
                        <p>{journal.date}</p>
                
                        <div className="comments-edit">
                            <p className="comments-count">Comments: {numberOfComments}</p>
                            {renderEditButton}
                        </div>
                    </div> 
                
            </>
            )
    }
    
};

export default JournalPost;