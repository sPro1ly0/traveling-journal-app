import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavBarBottom.css';

function NavBarBottom() {
  return (
    <nav className='nav-bottom'>
      <NavLink to="/my-journals" activeClassName="active-bottom">
        <FontAwesomeIcon icon='home' size='2x' />
         My Journals
      </NavLink>
      <NavLink to="/add-journal">
        <FontAwesomeIcon icon='plus-circle' size='2x' />
        Add New Journal
      </NavLink>
      <NavLink to="/all-journals" activeClassName="active-bottom">
        <FontAwesomeIcon icon='search' size='2x' />
        Discover
      </NavLink>
    </nav>
  );
}

export default NavBarBottom;