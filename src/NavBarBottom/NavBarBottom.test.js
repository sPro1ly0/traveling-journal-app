/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import NavBarBottom from './NavBarBottom';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <NavBarBottom />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});