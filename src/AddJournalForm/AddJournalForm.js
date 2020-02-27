import React, { Component } from 'react';
import './AddJournalForm.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import JournalsContext from '../JournalsContext';

class AddJournalForm extends Component {

    static contextType = JournalsContext;

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            startDate: null,
            endDate: null
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { title, location, content  } = e.target;
        const journal = {
            id: Math.random() * 5,
            title: title.value,
            location: location.value,
            startDate: this.state.startDate._d,
            endDate: this.state.endDate._d,
            content: content.value,
            authorId: 1
        }
        this.context.addJournal(journal);
        this.props.history.push('/my-journals')
    }

    handleClickCancel = () => {
        this.props.history.goBack();
    };

    render() {
        const { error } = this.state;
        return (
            <>
                <header>
                    <h1>New Journal</h1>
                </header>
                <section>
                    <form 
                        className="add-entry"
                        onSubmit={this.handleSubmit}
                    >
                        <div className='red-error' role='alert'>
                            {error && <p>{error.message}</p>}
                        </div>
                        <div className="form-section">
                            <label htmlFor="title">Title</label>
                            <input
                                id="title" 
                                type="text" 
                                name="title" 
                                placeholder="A Beautiful Day in Florida" 
                                required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="location">Where did you go?</label>
                            <input 
                                id="location"
                                type="text" 
                                name="location" 
                                placeholder="Miami, Florida" 
                                required />
                        </div> 
                        <div className="form-section">
                            <label htmlFor="startDate" className="date">Select your travel dates</label>
                            <DateRangePicker                                
                                startDate={this.state.startDate}
                                startDateId="startDate"
                                endDate={this.state.endDate}
                                endDateId="endDate"
                                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                                focusedInput={this.state.focusedInput} 
                                onFocusChange={focusedInput => this.setState({ focusedInput })} 
                                numberOfMonths={1}
                                isOutsideRange={() => false}
                            />
                        </div>
                        <div className="form-section">
                            <label htmlFor="content">What did you do?</label>
                            <textarea id="content" name="content" rows="15"   
                            required></textarea>
                        </div>
                        <div className="add-edit-buttons">
                            <button type="submit">Add New Journal</button>
                            <button type="button" onClick={this.handleClickCancel}>Cancel</button>
                        </div>
                    </form>
                </section>
            </>
        )
    }
};

export default AddJournalForm;