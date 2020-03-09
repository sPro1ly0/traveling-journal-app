/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './AddJournalForm/AddJournalForm.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import JournalsContext from './JournalsContext';
import JournalsApiService from './services/journals-api-service';
import ValidationError from './ValidationError';

class EditJournalForm extends Component {

    static contextType = JournalsContext;

    constructor(props) {
      super(props);
      this.state = {
        error: null,
        id: '',
        title: {
          value: '',
          touched: false
        },
        location: {
          value: '',
          touched: false
        },
        content: {
          value: '',
          touched: false
        },
        startDate: null,
        endDate: null,
      };
    }

    componentDidMount() {
      this.context.clearError();
      this.context.showingNavBottom(false);
      const { journalId } = this.props.match.params;
      JournalsApiService.getJournal(journalId)
        .then(resJson => {
          console.log(resJson);
          this.setState({
            id: resJson.id,
            title: { value: resJson.title },
            location: { value: resJson.location },
            startDate: moment(resJson.start_date),
            endDate: moment(resJson.end_date),
            content: { value: resJson.content },
          });
        })
        .catch(this.context.setError);
    }

    componentWillUnmount() {
      this.context.clearJournal();
    }

    updateTitle = (e) => {
      const title = e.target.value;
      this.setState({
        title: {value: title, touched: true}
      });
    };

    updateLocation = (e) => {
      const location = e.target.value;
      this.setState({
        location: {value: location, touched: true}
      });
    };

    updateContent = (e) => {
      const content = e.target.value;
      this.setState({
        content: {value: content, touched: true}
      });
    };

    validateTitle() {
      const title = this.state.title.value;
      if (title.length === 0) {
        return 'Title is required';
      } else if (title.length > 100) {
        return 'Title cannot be more than 100 characters long.';
      }
    }

    validateLocation() {
      const location = this.state.location.value;
      if (location.length === 0) {
        return 'Location is required';
      } else if (location.length > 100) {
        return 'Location cannot be more than 100 characters long.';
      }
    }

    validateContent() {
      const content = this.state.content.value;
      if (content.length > 25000) {
        return 'Content cannot be more than 25000 characters long.';
      }
    }

    handleSubmit = (e) => {
      e.preventDefault();

      const { id, title, location, content, startDate, endDate  } = this.state;
      
      const updateJournal = {
        title: title.value,
        location: location.value,
        start_date: startDate,
        end_date: endDate,
        content: content.value
      };

      this.setState({
        error: null
      });
      
      JournalsApiService.updateJournal(id, updateJournal)
        .then(() => {
          console.log();
          this.resetFields(updateJournal);
          this.context.updateJournal(updateJournal);
          this.props.history.push('/my-journals');
        })
        .catch(this.context.setError);
    }

    resetFields = (newFields) => {
      this.setState({
        id: newFields.id || '',
        title: newFields.title || '',
        location: newFields.location || '',
        content: newFields.content || ''
      });
    }

    handleClickCancel = () => {
      this.props.history.goBack();
    };


    handleDelete = () => {
      const { journalId } = this.props.match.params;
      JournalsApiService.deleteJournal(journalId)
        .then(this.context.deleteJournal(journalId))
        .catch(this.context.setError);
      this.props.history.push('/my-journals');
      console.log(journalId);
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
                  value={title.value || ''}
                  aria-label="Enter a title for your new journal"
                  aria-required="true"
                  onChange={this.updateTitle} 
                  required />
                {this.state.title.touched && (<ValidationError message={this.validateTitle()}/>)}
              </div>
              <div className="form-section">
                <label htmlFor="location">Where did you go?</label>
                <input 
                  id="location"
                  type="text" 
                  name="location" 
                  placeholder="Honolulu, Hawaii"
                  value={location.value || ''}
                  aria-label="Enter the location of your travel"
                  aria-required="true"
                  onChange={this.updateLocation} 
                  required />
                {this.state.location.touched && (<ValidationError message={this.validateLocation()}/>)}
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
                  minimumNights={0}
                  isOutsideRange={() => false}
                  required={true}
                />
              </div>
              <div className="form-section">
                <label htmlFor="content">What did you do?</label>
                <textarea 
                  name="content" 
                  rows="15"
                  value={content.value || ''}
                  aria-label="Enter content for journal"
                  aria-required="true"
                  onChange={this.updateContent} 
                  required >
                </textarea>
                {this.state.content.touched && (<ValidationError message={this.validateContent()}/>)}
              </div>
              <div className="add-edit-buttons">
                <button type="submit">Save Changes</button>
                <button type="button" onClick={this.handleDelete}>Delete</button>
                <button type="button" onClick={this.handleClickCancel}>Cancel</button>
              </div>
            </form>
          </section>
        </>
      );
    }
}

export default EditJournalForm;