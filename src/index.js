import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faSearch, faPencilAlt, faBookOpen, faPlusCircle, faGlobeAmericas, faComments, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import App from './App/App';
import './index.css';


library.add(
  faHome,
  faSearch, 
  faPencilAlt, 
  faBookOpen, 
  faGlobeAmericas, 
  faPlusCircle, 
  faBookOpen, 
  faComments,
  faCheck,
  faTrash
);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  document.getElementById('root')
);