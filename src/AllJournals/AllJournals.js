import React, { Component } from 'react';
import './AllJournals.css';
import SearchFilter from '../SearchFilter/SearchFilter';

class AllJournals extends Component {


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