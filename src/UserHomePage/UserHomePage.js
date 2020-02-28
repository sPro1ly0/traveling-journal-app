import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import JournalsContext from '../JournalsContext';
import JournalPost from '../JournalPost/JournalPost';
import './UserHomePage.css';

class UserHomePage extends Component {

    static contextType = JournalsContext;

    render() {
        const { journals, comments, users } = this.context;
        // make John Doe the demo user, userId = 1
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
                <section className="journals">
                    {journalPosts}
                </section>
            </>
        )
    }
};

export default UserHomePage;