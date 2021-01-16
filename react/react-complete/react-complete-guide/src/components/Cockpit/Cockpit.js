import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.css";
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);   //does not have to be called authContext - any name would do

  console.log(authContext.authenticated);

  useEffect(() => {
    //a functional component alternative for both componentDidMount and componentDidUpdate
    console.log("[Cockpit.js] useEffect");
    // setTimeout(() => {
    //   alert("Saved data to cloud");
    // }, 2000);
    toggleBtnRef.current.click();
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

  if (props.personsLength <= 2) {
    assignedClassed.push(classes.red); // classes: ['red]
  }
  if (props.personsLength <= 1) {
    assignedClassed.push(classes.bold); //classes: ['red', 'bold]
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.appTitle}</h1>
      <p className={assignedClassed.join(" ")}>This is really working!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle persons
      </button>
      <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

export default React.memo(cockpit);
