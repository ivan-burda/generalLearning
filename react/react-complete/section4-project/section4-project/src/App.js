import React, { Component } from "react";
import "./App.css";

import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    textLength: null,
    wordChars: [
      { id: "1", value: "a" },
      { id: "2", value: "d" },
      { id: "3", value: "e" },
      { id: "4", value: "l" },
      { id: "5", value: "a" },
    ],
  };
  textChanged = (event) => {
    document.getElementById("wordLength").innerText = event.target.value.length;
    this.setState({ textLength: event.target.value.length });
    this.setState({ wordChars: event.target.value.split("") });
  };

  deleteChar = (event) => {
    let charactersCopy = [...this.state.wordChars];
    this.state.wordChars.forEach((char) => {
      if (char.id === event.target.getAttribute("data-id")) {
        charactersCopy.splice(this.state.wordChars.indexOf(char), 1);
      }
    });
    this.setState({ wordChars: charactersCopy });
  };

  render() {
    let displayChars = null;
    displayChars = (
      <div>
        {this.state.wordChars.map((char) => {
          return (
            <CharComponent
              character={char.value}
              key={char.id}
              id={char.id}
              click={this.deleteChar}
            />
          );
        })}
      </div>
    );

    return (
      <div className="App">
        <input id="wordInput" type="text" onChange={this.textChanged}></input>
        <p id="wordLength"></p>
        <ValidationComponent textLength={this.state.textLength} />
        {displayChars}
      </div>
    );
  }
}

export default App;
