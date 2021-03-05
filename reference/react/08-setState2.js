import React from "react";
import ReactDOM from "react-dom";

// https://platform.ui.dev/courses/786054/lectures/14271542
//Update the state based on the previous state - I have to pass the previous state into the function

class Count extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    // Increment count by 1
    this.setState((state)=>{
      return {
        count : state.count + 1,
      }
    })
  }
  decrement() {
    // Decrement count by 1
    this.setState((state)=>{
      return {
        count: state.count - 1,
      }
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.decrement}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}

ReactDOM.render(
  <Count />,
  document.getElementById('root')
);