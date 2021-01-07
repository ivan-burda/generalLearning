import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Max", age: 34 },
      { id: "2", name: "Manu", age: 32 },
      { id: "3", name: "Stephanie", age: 28 },
    ], //can be given any name, does not have to be an array, can contain anything
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]; //Instead of just a pointer to the state.persons array, by spreading I create a copy of that array
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
    console.log(persons);
    console.log(this.state.persons);
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    let btnClass = "";
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
      btnClass = classes.Red;
    }

    const assignedClassed = [];
    if (this.state.persons.length <= 2) {
      assignedClassed.push(classes.red); // classes: ['red]
    }
    if (this.state.persons.length <= 1) {
      assignedClassed.push(classes.bold); //classes: ['red', 'bold]
    }

    return (
      //Notice the two approaches for dealing with an onClick (and similar) events. The second approach with .bind() is recommended because it is more resource-thrifty.
      <div className={classes.App}>
        <h1>Hello World from React!</h1>
        <p className={assignedClassed.join(" ")}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
