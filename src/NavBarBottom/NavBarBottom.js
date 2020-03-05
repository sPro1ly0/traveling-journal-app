import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBarBottom.css';

function NavBarBottom() {
  return (
    <nav className='nav-bottom'>
      <NavLink to="/my-journals">My Journals</NavLink>
      <NavLink to="/add-journal">+ Add New Journal</NavLink>
      <NavLink to="/all-journals">Discover Journals</NavLink>
    </nav>
  );
}

export default NavBarBottom;