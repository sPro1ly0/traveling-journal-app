import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import JournalsContext from '../JournalsContext';
import './JournalPost.css';




class JournalPost extends Component {


    render() {
        const { journal, comments } = this.props;
        const findComments = comments.filter(comment => comment.journalId === journal.id);
        const numberOfComments = findComments.length;
        return (
            <Link to={`/journals/${journal.id}`} className='journal-link'>
                <div className="journal-post">
                    <h2>{journal.title}</h2>
                    <p>{journal.location}</p>
                    <p>{journal.date}</p>

                    <div className="comments-edit">
                        <p className="comments-count">Comments: {numberOfComments}</p>
                        <button>Edit</button>
                    </div>
                </div> 
            </Link>
               
            )
    }
    
};

export default JournalPost;