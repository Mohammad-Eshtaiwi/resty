import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../scss/header.scss';
export default class Header extends Component {
  state = { appName: 'RESTy' };
  render() {
    return (
      <header>
        <h1>{this.state.appName}</h1>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/history">History</NavLink>
            </li>
            <li>
              <NavLink to="/help">Help</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
