import React, { Component } from "react";
import "./App.css";

import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    textLength: null,
    wordChars: [],
  };
  textChanged = (event) => {
    document.getElementById("wordLength").innerText = event.target.value.length;
    this.setState({ textLength: event.target.value.length });
    let chars = event.target.value.split("");
    let newWordChars = [];
    chars.forEach((char) => {
      newWordChars.push({ id: Math.floor(Math.random() * 10000), value: char });
    });
    this.setState({ wordChars: newWordChars });
  };

  deleteChar = (event) => {
    let wordCharsCopy = [...this.state.wordChars];
    this.state.wordChars.forEach((char) => {
      if (char.id === parseInt(event.target.getAttribute("data-id"))) {
        wordCharsCopy.splice(this.state.wordChars.indexOf(char), 1);
      }
    });
    this.setState({ wordChars: wordCharsCopy });
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
