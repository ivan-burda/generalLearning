import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./TopNav.module.css";

export default function TopNav() {
  return (
    <nav className={classes.Nav}>
      <NavLink to="/">Home</NavLink>
      <div>
        <NavLink to="/players">Players</NavLink>
        <NavLink to="/teams">Teams</NavLink>
      </div>
    </nav>
  );
}
