import React from 'react';

const JournalsContext = React.createContext({
    users: [],
    journals: [],
    comments: [],
    addJournal: () => {},
    deleteJournal: () => {},
    updateJournal:() => {}
});

export default JournalsContext;