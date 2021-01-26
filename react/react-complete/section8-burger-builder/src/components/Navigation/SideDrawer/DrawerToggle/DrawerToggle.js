import React from 'react';
import classes from './DrawerToggle.css';

const sideDrawerToggler = (props) =>(
  <div className={classes.DrawerToggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default sideDrawerToggler;