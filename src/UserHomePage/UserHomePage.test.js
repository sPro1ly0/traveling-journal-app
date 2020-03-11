/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import UserHomePage from './UserHomePage';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <UserHomePage />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});