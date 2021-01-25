import React from 'react';
import classes from './SideDrawerToggler.css';

const sideDrawerToggler = (props) =>(
  <div className={classes.SideDrawerToggler} onClick={props.sideDrawerOpen}>
    <p>Sidemenu</p>
  </div>
);

export default sideDrawerToggler;