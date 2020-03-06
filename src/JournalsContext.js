import React from 'react';

const JournalsContext = React.createContext({
  error: null,
  users: [],
  journal: [],
  journals: [],
  allJournalsList: [],
  comments: [],
  loggedIn: null,
  setError: () => {},
  clearError: () => {},
  addJournal: () => {},
  deleteJournal: () => {},
  updateJournal:() => {},
  setJournal: () => {},
  clearJournal: () => {},
  setComments: () => {},
  addComments:() => {},
  setLoginStatus: () => {},
  setAllJournalsList: () => {}
}); 

export default JournalsContext;