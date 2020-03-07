import React from 'react';

const JournalsContext = React.createContext({
  error: null,
  user: [],
  journal: [],
  userJournalsList: [],
  allJournalsList: [],
  comments: [],
  loggedIn: null,
  setError: () => {},
  clearError: () => {},
  setUserName: () => {},
  addJournal: () => {},
  deleteJournal: () => {},
  updateJournal:() => {},
  setJournal: () => {},
  clearJournal: () => {},
  setComments: () => {},
  addComments:() => {},
  setLoginStatus: () => {},
  setAllJournalsList: () => {},
  setUserJournalsList: () => {},
  clearData: () => {}
}); 

export default JournalsContext;