import React, { Component } from 'react';
import './CreateJournalForm.css';

class CreateJournalForm extends Component {
    render() {
        return (
            <>
                <header>
                    <h1>New Journal</h1>
                </header>
                <section>
                    <form className="add-entry">
                        <div className="form-section">
                            <label for="journal-title">Title</label>
                            <input type="text" name="title" placeholder="A Beautiful Day in Florida" required />
                        </div>
                        <div className="form-section">
                            <label for="journal-location">Where did you go?</label>
                            <input type="text" name="location" placeholder="Miami, Florida" required />
                        </div> 
                        <div className="form-date">
                            <label for="date" class="date">Date</label>
                            <div>
                                <input id="date" type="number" name="date-month" placeholder="01" min="1" max="12" required="" /> <span>- </span>
                                <input type="number" name="date-day" class="date-day"  placeholder="01" min="1" max="31" required="" /> <span>- </span> 
                                <input type="number" name="date-year" class="date-year" placeholder="2020" min="1900" max="2020" required="" /> 
                            </div>
                        </div>
                        <div className="form-section">
                            <label for="journal-content">What did you do?</label>
                            <textarea name="journal-content" rows="15"   required></textarea>
                        </div>
                        <div className="add-edit-buttons">
                            <button type="submit">Save</button>
                            <button type="reset">Delete</button>
                        </div>
                    </form>
                </section>
            </>
        )
    }
};

export default CreateJournalForm;