/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const comment = [];
  const user = [{   
    id: 1,
    full_name: 'John Doe',
    email: 'example@mail.com',
    password: 'password'
  }
  ];
  
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Comment comment={comment} user={user} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});