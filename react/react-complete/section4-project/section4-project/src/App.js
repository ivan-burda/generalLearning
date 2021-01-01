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
    this.setState({ wordChars: event.target.value.split("") });
  };

  render() {
    let displayChars = null;
    displayChars = (
      <div>
        {this.state.wordChars.map((char, index) => {
          return <CharComponent character={char} key={index} />;
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
