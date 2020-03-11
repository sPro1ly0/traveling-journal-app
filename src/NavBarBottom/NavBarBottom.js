import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavBarBottom.css';

function NavBarBottom() {
  return (
    <nav className='nav-bottom'>
      <NavLink to="/my-journals" activeClassName="active-bottom">
        <FontAwesomeIcon icon='home' size='2x' />
        <p>My Journals</p>
      </NavLink>
      <NavLink to="/add-journal">
        <FontAwesomeIcon icon='plus-circle' size='2x' />
        <p>Add New Journal</p>
      </NavLink>
      <NavLink to="/all-journals" activeClassName="active-bottom">
        <FontAwesomeIcon icon='search' size='2x' />
        <p>Discover</p>
      </NavLink>
    </nav>
  );
}

export default NavBarBottom;