import React, { Component } from 'react';
import JournalPost from '../JournalPost/JournalPost';

class JournalPostList extends Component {
    render() {
        const books = this.props.bookItems.map((book, i) => 
            <JournalPost {...book} key={i}/>
        );
    
        return (
            <div className="book-result-list">
                {books}
            </div>
        );
    }
}

export default JournalPostList;