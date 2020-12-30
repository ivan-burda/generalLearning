//FUNCTION-BASED COMPONENT

import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = (props) => {
  //State 1 for person
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Ivan", age: 34 },
      { name: "Stepan", age: 32 },
      { name: "Zdenek", age: 28 },
    ], //can be given any name, does not have to be an array, can contain anything
  });
  //State 2 for some other data
  const [otherState, setOtherState] = useState({
    otherState: "some value",
  });
  //As obvious from the above, in the functional components (unlike in class components) the state is sliced int multiple smalle state-chunks which also get updated on individual basis

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    console.log(personsState.persons[0].name);
    //Don't do the following to mutate the state: this.state.persons[0].name = "Ivanek";
    setPersonsState({
      persons: [
        { name: "Ivanek", age: 34 },
        { name: "Stepan", age: 32 },
        { name: "Zdenek", age: 28 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hello World from React!</h1>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      ></Person>
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My hobby: Crafting
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      ></Person>
    </div>
  );
};

export default app;
