import React, { useEffect } from "react";
import classes from "./Cockpit.css";
const cockpit = (props) => {
  useEffect(() => {
    //a functional component alternative for both componentDidMount and componentDidUpdate
    console.log("[Cockpit.js] useEffect");
    setTimeout(() => {
      alert("Saved data to cloud");
    }, 2000);
    return () => {
      console.log("[Cockpit.js] did clean up work in useEffect");
    };
  }, [props.persons]);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] did clean up work in 2nd useEffect");
    };
  });

  const assignedClassed = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClassed.push(classes.red); // classes: ['red]
  }
  if (props.persons.length <= 1) {
    assignedClassed.push(classes.bold); //classes: ['red', 'bold]
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.appTitle}</h1>
      <p className={assignedClassed.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle persons
      </button>
    </div>
  );
};

export default cockpit;
