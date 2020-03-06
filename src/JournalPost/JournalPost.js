/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import JournalsContext from '../JournalsContext';
import './JournalPost.css';
import moment from 'moment';
//import PropTypes from 'prop-types';

class JournalPost extends Component {

    

  render() {
    const { journal } = this.props;
    // eslint-disable-next-line react/prop-types
    //const findComments = comments.filter(comment => comment.journalId === journal.id);
    const numberOfComments = journal.number_of_comments;
    // demo userId = 1
    const renderEditButton = journal.authorId === 1 ? <Link to={`/edit-journal/${journal.id}`}>Edit</Link> : null;
    const modifyStartDate = moment(journal.startDate).format('MMMM YYYY');
        
    return (
      <>
               
        <div className="journal-post">
          <Link to={`/journals/${journal.id}`} className='journal-link'>
            <h2>{journal.title}</h2>
          </Link>
          <p>{journal.location}</p>
          <p>{modifyStartDate}</p>
                
          <div className="comments-edit">
            <p className="comments-count">Comments: {numberOfComments}</p>
            {renderEditButton}
          </div>
        </div> 
                
      </>
    );
  }
    
}

export default JournalPost;

// JournalPost.propTypes = {
//   journal: PropTypes.object,
//   comments: PropTypes.object
// };