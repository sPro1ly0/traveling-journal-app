/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import JournalPost from './JournalPost';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const journal = [];
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <JournalPost journal={journal} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});