import React from 'react';

const JournalsContext = React.createContext({
  error: null,
  users: [],
  journals: [],
  allJournalsList: [],
  comments: [],
  loggedIn: null,
  setError: () => {},
  clearError: () => {},
  addJournal: () => {},
  deleteJournal: () => {},
  updateJournal:() => {},
  addComments:() => {},
  setLoginStatus: () => {},
  setAllJournalsList: () => {}
}); 

export default JournalsContext;