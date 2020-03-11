/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './JournalPost.css';
import moment from 'moment';
//import PropTypes from 'prop-types';

class JournalPost extends Component {

  render() {
    const { journal, user } = this.props;
    // eslint-disable-next-line react/prop-types
    
    const numberOfComments = journal.number_of_comments;

    let testUserName;
    if (user === undefined) {
      testUserName = 'Unknown';
    } else {
      testUserName = user[0].full_name;
    }
    
    const renderEditButton = journal.author === testUserName ? <Link to={`/edit-journal/${journal.id}`}><FontAwesomeIcon icon='pencil-alt' size='1x' /> Edit</Link> : null;
    const modifyStartDate = moment(journal.start_date).format('MMMM YYYY');
        
    return (
      <>
               
        <div className="journal-post">
          <div className='journal-details'>
            <Link to={`/journals/${journal.id}`} className='journal-link'>
              <h2>{journal.title}</h2>
              <p>{journal.location}</p>
              <p className='journal-month-year'>{modifyStartDate}</p>
            </Link>  
          </div>
           
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
