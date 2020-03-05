import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBarTop.css';

function NavBarTop() {
  return (
    <nav className='nav-top'>
      <Link to="/">Traveling Journal</Link>
      <div className='nav-top-links'>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    </nav>
  );
}

export default NavBarTop;