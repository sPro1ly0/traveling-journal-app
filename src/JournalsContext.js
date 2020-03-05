import React from 'react';

const JournalsContext = React.createContext({
  users: [],
  journals: [],
  comments: [],
  loggedIn: false,
  addJournal: () => {},
  deleteJournal: () => {},
  updateJournal:() => {},
  addComments:() => {},
  setLoginStatus: () => {}
}); 

export default JournalsContext;