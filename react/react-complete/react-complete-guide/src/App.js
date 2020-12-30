import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 34 },
      { name: "Manu", age: 32 },
      { name: "Stephanie", age: 28 },
    ], //can be given any name, does not have to be an array, can contain anything
  };

  switchNameHandler = (newName) => {
    //Don't do the following to mutate the state: this.state.persons[0].name = "Ivanek";
    this.setState({
      persons: [
        { name: newName, age: 34 },
        { name: "Manu", age: 32 },
        { name: "Stephanie", age: 28 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 34 },
        { name: event.target.value, age: 32 },
        { name: "Stephanie", age: 28 },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "6px",
      margin: "auto",
      cursor: "pointer",
    };

    return (
      //Notice the two approaches for dealing with an onClick (and similar) events. The second approach with .bind() is recommended because it is more resource-thrifty.
      <div className="App">
        <h1>Hello World from React!</h1>
        <button
          style={style}
          onClick={() => this.switchNameHandler("Maximilian!!!")}
        >
          Switch name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        ></Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Max!")} //'click' - I can use any name here
          changed={this.nameChangedHandler}
        >
          My hobby: Crafting
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        ></Person>
      </div>
    );
  }
}

export default App;
