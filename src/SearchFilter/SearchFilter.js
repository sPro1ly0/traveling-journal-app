import React, { Component } from 'react';
import JournalPost from '../JournalPost/JournalPost';
import JournalsContext from '../JournalsContext';
import JournalsApiService from '../services/journals-api-service';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './SearchFilter.css';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';

class SearchFilter extends Component {

  static contextType = JournalsContext;

  constructor(props){
    super(props);
    this.state = {
      searchPlace: '', // search by place
      startDate: null, //search by date range
      endDate: null,
      error: null
    };
  }

    

    updateSearchPlace = (event) => {
      this.setState({
        searchPlace: event.target.value.substr(0, 20)
      });
    }

    componentDidMount() {
      this.context.clearError();
      JournalsApiService.getJournals()
        .then(this.context.setAllJournalsList)
        .catch(this.context.setError);
      JournalsApiService.getUserName()
        .then(this.context.setUserName)
        .catch(this.context.setError);
      console.log('working');
    }


    render() {
        
      const { error } = this.context;
        
      const { allJournalsList = [], user } = this.context;
      // console.log('work?', allJournalsList);
      let filteredPlaces = this.context.allJournalsList;
      if (this.state.searchPlace) {
        filteredPlaces = allJournalsList.filter(journal => 
          journal.location.toLowerCase().indexOf(this.state.searchPlace.toLowerCase()) !== -1);
      }
      if (this.state.startDate && this.state.endDate) {
        let start = moment(this.state.startDate._d);
        let end = moment(this.state.endDate._d);
        filteredPlaces = allJournalsList.filter(journal => 
          moment(journal.start_date).isBetween(start, end, 'dates','[]')
        );
      }
      //console.log(filteredPlaces);
      let journalPosts = filteredPlaces.map((journal) => {
        return <JournalPost 
          key={journal.id}
          journal={journal}
          user={user}
        />;
      });

      return (
        <>
          <section>
            {error 
              ? <div className="error">{this.state.error}</div>
              : ''}
            <form id="search-form">
              <div className="search-field">
                <label htmlFor="journal-location">Search Journals by Place</label>
                <input 
                  type="text" 
                  name="location" 
                  placeholder="Madrid, Spain"
                  value={this.state.searchPlace}
                  onChange={this.updateSearchPlace} />
              </div> 
              <div className="search-field">
                <label htmlFor="startDate" className="date">Search by Dates</label>
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
                  showClearDates={true}
                />
              </div>
            </form>
          </section>
          <section className="journals">
            {journalPosts}
          </section>
        </>
      );
    }
}

export default SearchFilter;