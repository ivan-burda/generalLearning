import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawerToggler from './SideDrawerToggler/SideDrawerToggler';

const toolbar = (props) => (
  <header className={classes.Toolbar}> 
    <div><SideDrawerToggler sideDrawerOpen={props.sideDrawerOpen}/></div>
    <div className={classes.Logo}><Logo/></div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems/>
    </nav>
  </header>
);

export default toolbar;