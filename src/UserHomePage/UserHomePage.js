import React, { Component } from 'react';
import './UserHomePage.css';

class UserHomePage extends Component {
    render() {
        return (
            <>
            <header>
                <h2>Your Journals</h2>
                <div class="add-entry">
                    <button>+ Add New Journal</button>
                </div>
            </header>
            <section>
                
                <form id="search-form">
                    <div class="search-field">
                        <label for="journal-title">Search Journals by Title</label>
                        <input type="text" name="title" placeholder="A Beautiful Day in Florida" />
                    </div>
                    <div class="search-field">
                        <label for="journal-location">Place</label>
                        <input type="text" name="location" placeholder="Miami, Florida" />
                    </div> 
                    <div class="search-field">
                        <label for="date" class="date">Start Date</label>
                        <div>
                        <input type="date" />
                        </div>
                        <label for="date" class="date">End Date</label>
                        <div>
                        <input type="date" />
                        </div>
                    </div>
                </form>
            </section>
            <section class="journals">
                <div class="journal-post">
                    <h2>Fun Day in Florida</h2>
                    <p>Miami, Florida</p>
                    <p>January 2020</p>
                    
                    <div class="comments-edit">
                        <p className="comments-count">Comments: 3</p>
                        <button>Edit</button>
                    </div>
                </div>
                <div class="journal-post">
                    <h2>Beauty of Italy</h2>
                    <p>Rome, Italy</p>
                    <p>June 2018</p>
                    <div class="comments-edit">
                    <p className="comments-count">Comments: 1</p>
                        <button>Edit</button>
                    </div>
                </div>
                <div class="journal-post">
                    <h2>First day in Australia</h2>
                    <p>Brisbane, Australia</p>
                    <p>April 2019</p>
                    <div class="comments-edit">
                        <p className="comments-count">Comments: 0</p>
                        <button>Edit</button>
                    </div>
                </div>
            </section>
            </>
        )
    }
};

export default UserHomePage;