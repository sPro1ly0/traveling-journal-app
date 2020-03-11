/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import SearchFilter from './SearchFilter';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <SearchFilter />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});