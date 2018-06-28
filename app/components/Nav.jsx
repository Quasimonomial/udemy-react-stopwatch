import React from 'react';
import { NavLink } from 'react-router-dom'

class Nav extends React.Component {
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Tested Stopwatch</li>
            <li>
              <NavLink to="/countdown" activeClassName='active-link' exact>Timer</NavLink>
            </li>
            <li>
              <NavLink to="/timer" activeClassName='active-link' exact>Countdown</NavLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
              <li className="menu-text">Created by <a href="https://github.com/Quasimonomial/" target="_blank">Travis</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
