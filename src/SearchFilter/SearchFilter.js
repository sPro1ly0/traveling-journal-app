import React, { Component } from 'react';
import JournalPost from '../JournalPost/JournalPost';

class SearchFilter extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: "", // search by journal title
            place: "", // search by place
            date: ""
        }
    }

    static contextType = JournalsContext;

    handleTitleInput(text) {
        this.setState({
          title: text
        })
    }

    handlePlaceInput(text) {
        this.setState({
          title: text
        })
    }

    render() {
        const error = this.state.error
            ? <div className="error">{this.state.error}</div>
            : "";

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
                <section>
                    {error}
                    <form id="search-form">
                        <div className="search-field">
                            <label htmlFor="journal-title">Search Journals by Title</label>
                            <input 
                                type="text" 
                                name="title" 
                                placeholder="Beautiful Day in Florida"
                                onChange={} />
                        </div>
                        <div className="search-field">
                            <label htmlFor="journal-location">Place</label>
                            <input 
                                type="text" 
                                name="location" 
                                placeholder="Miami, Florida" />
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

export default SearchFilter;