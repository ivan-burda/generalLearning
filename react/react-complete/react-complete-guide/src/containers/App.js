import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }
  state = {
    persons: [
      { id: "1", name: "Max", age: 34 },
      { id: "2", name: "Manu", age: 32 },
      { id: "3", name: "Stephanie", age: 28 },
    ], //can be given any name, does not have to be an array, can contain anything
    showPersons: false,
    showCockpit: true,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  /*   componentWillMount() {
    console.log("[App.js] componentWillMount");
  } */

  componentDidMount() {
    //an important lifecycle hook
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    //an important lifecycle hook
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    //an important lifecycle hook
    console.log("[App.js] componentDidUpdate");
  }

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
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    console.log("[App.js] render");
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      //Notice the two approaches for dealing with an onClick (and similar) events. The second approach with .bind() is recommended because it is more resource-thrifty.
      <div className={classes.App}>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            appTitle={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
          />
        ) : null}
        {persons}
      </div>
    );
  }
}

export default App;
