import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World from React!</h1>
        <Person name="Ivan" age="34"></Person>
        <Person name="Stepan" age="32"></Person>
        <Person name="Zdenek" age="28"></Person>
      </div>
    );
  }
}

export default App;
