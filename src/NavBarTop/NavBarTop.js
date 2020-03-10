import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import TokenService from '../services/token-service';
import JournalsContext from '../JournalsContext';
import IdleService from '../services/idle-service';
import './NavBarTop.css';

class NavBarTop extends Component {

  static contextType = JournalsContext;

  handleLogoutLink = () => {
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
    this.context.setLoginStatus(false);
    this.context.clearData();
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
        {TokenService.hasAuthToken()
          ? <p className='app-name'>Traveling Journal</p>
          : <Link to="/" className='app-name'>Traveling Journal</Link>
        }
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLinks()
        }
      </nav>
    );
  }
  
}

export default NavBarTop;