import React, { Component } from 'react';
import './AddJournalForm/AddJournalForm.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import JournalsContext from './JournalsContext';

class EditJournalForm extends Component {

    static contextType = JournalsContext;

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            id: '',
            title: '',
            location: '',
            startDate: null,
            endDate: null,
            content: '',
        }
    }

    componentDidMount() {
        const { journalId } = this.props.match.params;

        const journal = this.context.journals.find((j) => 
          j.id === Number(journalId)
        );

        function convert(str) {
            let date = new Date(str);
            let mnth = ("0" + (date.getMonth() + 1)).slice(-2);
            let day = ("0" + date.getDate()).slice(-2);
            return [mnth, day, date.getFullYear()].join("/");
          }

        const startDateFormat = convert(journal.startDate);
        const endDateFormat = convert(journal.endDate);
        // console.log(startDateFormat);

        this.setState({
            id: journal.id,
            title: journal.title,
            location: journal.location,
            startDate: moment(startDateFormat),
            endDate: moment(endDateFormat),
            content: journal.content,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        //const { journalId } = this.props.match.params;

        const { id, title, location, startDate, endDate, content  } = this.state;
        const journal = {
            id,
            title,
            location,
            startDate,
            endDate,
            content,
            authorId: 1
        };
        this.setState({
            error: null
        });
        console.log(journal);
        this.resetFields(journal)
        this.context.updateJournal(journal)
        this.props.history.push('/my-journals')
    }

    resetFields = (newFields) => {
        this.setState({
          id: newFields.id || '',
          title: newFields.title || '',
          location: newFields.location || '',
          content: newFields.content || ''
        })
    }

    handleClickCancel = () => {
        this.props.history.goBack();
    };

    handleTitleChange = (e) => {
        const title = e.target.value;
        this.setState({
            title
        })
    }

    handleLocationChange = (e) => {
        const location = e.target.value;
        this.setState({
            location
        })
    }

    handleContentChange = (e) => {
        const content = e.target.value;
        this.setState({
            content
        })
    }

    handleDelete = e => {
        e.preventDefault();
        const { journalId } = this.props.match.params;
        this.context.deleteJournal(Number(journalId));
        this.props.history.push('/my-journals')
    }

    render() {
        const { title, location, content, error } = this.state;
        return (
            <>
                <header>
                    <h1>Edit Journal</h1>
                </header>
                <section className="journal-form">
                    <form 
                        className="add-entry"
                        onSubmit={this.handleSubmit}>
                        <div className='red-error' role='alert'>
                            {error && <p>{error.message}</p>}
                        </div>
                        <div className="form-section">
                            <label htmlFor="title">Title</label>
                            <input
                                id="title" 
                                type="text" 
                                name="title" 
                                placeholder="A Lovely Day in Hawaii"
                                value={title}
                                onChange={this.handleTitleChange} 
                                required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="location">Where did you go?</label>
                            <input 
                                id="location"
                                type="text" 
                                name="location" 
                                placeholder="Honolulu, Hawaii"
                                value={location}
                                onChange={this.handleLocationChange} 
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
                            <textarea 
                                name="content" 
                                rows="15"
                                value={content}
                                onChange={this.handleContentChange}   
                                required >
                            </textarea>
                        </div>
                        <div className="add-edit-buttons">
                            <button type="submit">Save Changes</button>
                            <button type="button" onClick={this.handleDelete}>Delete</button>
                            <button type="button" onClick={this.handleClickCancel}>Cancel</button>
                        </div>
                    </form>
                </section>
            </>
        )
    }
};

export default EditJournalForm;