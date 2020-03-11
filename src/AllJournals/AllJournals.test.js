/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import AllJournals from './AllJournals';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <AllJournals />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});