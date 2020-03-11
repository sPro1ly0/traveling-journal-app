/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import EditJournalForm from './EditJournalForm';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');

  const props = {
    match: {params: []}
  }

  ReactDOM.render(
    <BrowserRouter>
      <EditJournalForm {...props} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});