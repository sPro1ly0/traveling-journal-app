import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import TokenService from '../services/token-service';
import JournalsContext from '../JournalsContext';
import './NavBarTop.css';

class NavBarTop extends Component {

  static contextType = JournalsContext;

  constructor(props) {
    super(props);
  }

  handleLogoutLink = () => {
    TokenService.clearAuthToken();
    this.context.setLoginStatus(false);
  }

  renderLogoutLink() {
    return (
      <div className='nav-show-logout-link nav-top-links'>
        <NavLink 
          onClick={this.handleLogoutLink}
          to="/">
          Logout
        </NavLink>
      </div>
    );
  }

  renderLoginLinks() {
    return (
      <div className='nav-show-login-links nav-top-links'>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    );
    
  }

  render() {
    return (
      <nav className='nav-top'>
        <Link to="/">Traveling Journal</Link>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLinks()
        }
      </nav>
    );
  }
  
}

export default NavBarTop;