import React, { Component } from 'react';
import JournalPost from '../JournalPost/JournalPost';
import JournalsContext from '../JournalsContext';

class SearchFilter extends Component {

    constructor(props){
        super(props);
        this.state = {
            searchPlace: "", // search by place
            startDate: "",
            endDate: ""
        }
    }

    static contextType = JournalsContext;

    updateSearchPlace = (event) => {
        this.setState({
          searchPlace: event.target.value.substr(0, 20)
        });
    }


    render() {
        
        const error = this.state.error
            ? <div className="error">{this.state.error}</div>
            : "";

        const { journals, comments } = this.context;
        let filteredPlaces = journals.filter(
            (journal) => {
                return journal.location.toLowerCase().indexOf(this.state.searchPlace.toLowerCase())
                        !== -1;
            }
        );
        const journalPosts = filteredPlaces.map((journal) => {
           return <JournalPost 
                key={journal.id}
                journal={journal}
                comments={comments}
            />
        });

        return (
            <>
                <section>
                    {error}
                    <form id="search-form">
                        <div className="search-field">
                            <label htmlFor="journal-location">Search Journals by Place</label>
                            <input 
                                type="text" 
                                name="location" 
                                placeholder="Madrid, Spain"
                                onChange={this.updateSearchPlace} />
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