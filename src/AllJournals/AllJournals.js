import React, { Component } from 'react';
import './AllJournals.css';
import JournalsContext from '../JournalsContext';
import JournalPost from '../JournalPost/JournalPost';

class AllJournals extends Component {

    static contextType = JournalsContext;

    render() {
        const { journals, comments } = this.context;
        const journalPosts = journals.map(journal => 
            <JournalPost 
                key={journal.id}
                journal={journal}
                comments={comments}
            />
        );
        return (
            <>
            <header>
                <h2>Discover Journals Around the World</h2>
            </header>
            <section>
                
                <form id="search-form">
                    <div className="search-field">
                        <label htmlFor="journal-title">Search Journals by Title</label>
                        <input type="text" name="title" placeholder="A Beautiful Day in Florida" />
                    </div>
                    <div className="search-field">
                        <label htmlFor="journal-location">Place</label>
                        <input type="text" name="location" placeholder="Miami, Florida" />
                    </div> 
                    <div className="search-field">
                        <label htmlFor="date" className="date">Start Date</label>
                        <div>
                        <input type="date" />
                        </div>
                        <label htmlFor="date" className="date">End Date</label>
                        <div>
                        <input type="date" />
                        </div>
                    </div>
                </form>
            </section>
            <section className="journals">
                {journalPosts}
            </section>
            </>
        )
    }
};

export default AllJournals;