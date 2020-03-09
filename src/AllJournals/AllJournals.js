import React, { Component } from 'react';
import './AllJournals.css';
import SearchFilter from '../SearchFilter/SearchFilter';
import JournalsContext from '../JournalsContext';

class AllJournals extends Component {

  static contextType = JournalsContext;

  // componentDidMount() {
  //   this.context.showingNavBottom(true);
  // }


  render() {
    return (
      <>
        <header>
          <h2>Discover Journals Around the World</h2>
        </header>
        <SearchFilter />
      </>
    );
  }
}

export default AllJournals;