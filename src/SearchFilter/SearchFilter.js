/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from 'react';
import JournalPost from '../JournalPost/JournalPost';
import JournalsContext from '../JournalsContext';
// import JournalsApiService from '../services/journals-api-service';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';

class SearchFilter extends Component {

	constructor(props){
		super(props);
		this.state = {
			searchPlace: '', // search by place
			startDate: null, //search by date range
			endDate: null
		};
	}

    static contextType = JournalsContext;

    updateSearchPlace = (event) => {
    	this.setState({
    		searchPlace: event.target.value.substr(0, 20)
    	});
    }

    // componentDidMount() {
    //     JournalsApiService.getJournals()
    // }


    render() {
        
    	const error = this.state.error
    		? <div className="error">{this.state.error}</div>
    		: '';

    	const { journals, comments } = this.context;
    	let filteredPlaces = journals;
    	if (this.state.searchPlace) {
    		filteredPlaces = journals.filter(journal => 
    			journal.location.toLowerCase().indexOf(this.state.searchPlace.toLowerCase()) !== -1);
    	}
    	if (this.state.startDate && this.state.endDate) {
    		let start = moment(this.state.startDate._d);
    		let end = moment(this.state.endDate._d);
    		filteredPlaces = journals.filter(journal => 
    			moment(journal.startDate).isBetween(start, end, 'dates','[]')
    		);
    	}

    	let journalPosts = filteredPlaces.map((journal) => {
    		return <JournalPost 
    			key={journal.id}
    			journal={journal}
    			comments={comments}
    		/>;
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
    							value={this.state.searchPlace}
    							onChange={this.updateSearchPlace} />
    					</div> 
    					<div className="search-field">
    						<label htmlFor="startDate" className="date">Search by dates</label>
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