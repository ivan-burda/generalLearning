import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = (props) => {

  return(
      <nav className={"Navigation"}>
        <ul>
          <li><NavLink to="/users" exact activeClassName="NavLink-active" className="NavLink">Users</NavLink></li>
          <li><NavLink to="/courses" exact activeClassName="NavLink-active" className="NavLink">Courses</NavLink></li>
        </ul>
      </nav>
  );
}

export default Navigation;