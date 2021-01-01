import React, { Component } from "react";
import "./App.css";

import InputTextField from "./InputTextField/InputTextField";

class App extends Component {
  inputTextChangeHandler = (event) => {
    document.getElementById("wordLength").innerText = event.target.value.length;
  };

  render() {
    return (
      <div className="App">
        <InputTextField changed={this.inputTextChangeHandler} />
        <p id="wordLength"></p>
      </div>
    );
  }
}

export default App;
