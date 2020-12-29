import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Ivan", age: 34 },
      { name: "Stepan", age: 32 },
      { name: "Zdenek", age: 28 },
    ], //can be given any name, does not have to be an array, can contain anything
  };

  switchNameHandler = () => {
    console.log(this.state.persons[0].name);
    //Don't do the following to mutate the state: this.state.persons[0].name = "Ivanek";
    this.setState({
      persons: [
        { name: "Ivanek", age: 34 },
        { name: "Stepan", age: 32 },
        { name: "Zdenek", age: 28 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello World from React!</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        ></Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
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
