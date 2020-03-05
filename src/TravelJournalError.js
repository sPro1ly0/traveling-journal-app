import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TravelJournalError extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true
    });
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>Could not display App. There is something wrong, please try again later.</h2>
      );
    }
    return this.props.children;
  }
}

export default TravelJournalError;

TravelJournalError.propTypes = {
  children: PropTypes.any
};