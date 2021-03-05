import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

// https://platform.ui.dev/courses/786054/lectures/14271542
// Update the state regardless the value of the previous state. I can just pass in any value of the new state, however, I cannot reliably relate it to the state value at the moment when I am requesting the state update

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: "light"
    };
    this.handleLightMode = this.handleLightMode.bind(this);
    this.handleDarkMode = this.handleDarkMode.bind(this);
  }
  handleLightMode() {
    this.setState({ mode: "light" });
  }
  handleDarkMode() {
    this.setState({ mode: "dark" });
  }
  render() {
    const { mode } = this.state;

    return (
      <div
        style={{
          height: "100%",
          background: mode === "light" ? "#fff" : "#000"
        }}
      >
        {mode === "light" ? (
          <button onClick={this.handleDarkMode}>Dark Mode</button>
        ) : (
          <button onClick={this.handleLightMode}>Light Mode</button>
        )}
      </div>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById("root"));
