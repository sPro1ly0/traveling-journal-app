import React, { Component } from 'react';
import './ReadPostComments.css';

class ReadPostComments extends Component {
    render() {
        return (
            <>
                <header className="journal-header">
                    <h1>A Fun Day in Florida</h1>
                    <div class="journal-info">
                        <h2>Orlando, Florida</h2>
                        <p>June 12, 2019</p>
                        <p>By John Doe</p>
                    </div>
                </header>
                <section>
                    <div className="journal-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </section>
                <section className="comments-section">
                    <h3>Comments</h3>
                    <div class="comment">
                        <p class="comment-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p class="user">Jane Doe</p>
                    </div>
                    <div class="comment">
                        <p class="comment-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p class="user">Luke Sky</p>
                    </div>
                    <form id="add-comment">
                        <label for="comment">Make A Comment</label>
                        <textarea id="comment" name="comment"
                            rows="5" cols="33">It was a dark and stormy night...
                        </textarea>
                        <button className="add-comment-button">Add Comment</button>
                    </form>
                </section>
            </>
        )
    }
}

export default ReadPostComments;