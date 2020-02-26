import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import JournalsContext from '../JournalsContext';
import JournalPost from '../JournalPost/JournalPost';
import './UserHomePage.css';

class UserHomePage extends Component {

    static contextType = JournalsContext;

    render() {
        const { journals, comments, users } = this.context;
        const demoJournals = journals.filter(journal => journal.authorId === 1);
        const numberOfJournals = demoJournals.length;
        const journalPosts = demoJournals.map(journal => 
            <JournalPost 
                key={journal.id}
                journal={journal}
                comments={comments}
                users={users}
            />
        );

        return (
            <>
                <header>
                    <h2>My Journals</h2>
                    <p>You have {numberOfJournals} journals.</p>
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

export default UserHomePage;