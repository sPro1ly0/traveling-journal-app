/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import JournalsApiService from '../services/journals-api-service';
import './AddJournalForm.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import JournalsContext from '../JournalsContext';
import ValidationError from '../ValidationError';
import moment from 'moment';

class AddJournalForm extends Component {

  static contextType = JournalsContext;

  constructor(props) {
    super(props);
    this.state = {
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
      startDate: moment(),
      endDate: moment(),
      error: null,
    };
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

    componentDidMount() {
      this.context.showingNavBottom(false);
    }

    handleSubmit = (e) => {
      e.preventDefault();

      const { title, location, content  } = this.state;
      const { startDate, endDate } = this.state;
      
      console.log(this.state.startDate.valueOf());
      console.log(this.state.startDate._d);
      
      const newJournal = {
        title: title.value,
        location: location.value,
        start_date: startDate,
        end_date: endDate,
        content: content.value
      };
      // console.log('working!', newJournal);
      JournalsApiService.postJournal(newJournal)
        .then(res => {
          console.log(res);
          this.context.addJournal(res);
        })
        .then(() => {
          title.value = '';
          location.value = '';
          content.value = '';
          this.props.history.push('/my-journals');
        }
          
        )
        .catch(this.context.setError);
      
      
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
                  aria-label="Enter a title for your new journal"
                  aria-required="true"
                  placeholder="A Beautiful Day in Florida"
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
                  placeholder="Miami, Florida" 
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
                  id="content"
                  name="content" 
                  rows="15"
                  aria-label="Enter content for new journal"
                  aria-required="true"
                  onChange={this.updateContent}   
                  required></textarea>
                {this.state.content.touched && (<ValidationError message={this.validateContent()}/>)}
              </div>
              <div className="add-edit-buttons">
                <button type="submit">Add New Journal</button>
                <button type="button" onClick={this.handleClickCancel}>Cancel</button>
              </div>
            </form>
          </section>
        </>
      );
    }
}

export default AddJournalForm;