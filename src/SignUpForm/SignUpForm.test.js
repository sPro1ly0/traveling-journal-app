/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import SignUpForm from './SignUpForm';
import { BrowserRouter } from 'react-router-dom';

it.only('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <BrowserRouter>
      <SignUpForm />
    </BrowserRouter>, 
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});