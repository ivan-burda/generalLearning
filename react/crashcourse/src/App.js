import React, { Component } from "react";
import Header from "./components/layout/Header";
import Todos from "./components/Todos.js";
import AddTodo from "./components/AddTodo.js";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false,
      },
      {
        id: 2,
        title: "Dinner with wife",
        completed: false,
      },
      {
        id: 3,
        title: "Meeting with boss",
        completed: false,
      },
    ],
  };

  //Toggle completion state of a todo
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  //Delete a todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  //Get next id
  getNextId() {
    let existingIds = this.state.todos.map((todo) => todo.id);
    existingIds.sort((a, b) => a - b);

    if (existingIds[existingIds.length - 1] === undefined) {
      console.log(existingIds);
      return 1;
    } else {
      console.log(existingIds);
      let next;
      console.log(next);
      for (let i = 1; i <= existingIds[existingIds.length - 1]; i++) {
        if (existingIds.indexOf(i) === -1) {
          console.log(i);
          next = i;
        }
      }
      //return existingIds[existingIds.length - 1] + 1;
      return next;
    }
  }

  //Add a todo
  addTodo = (title) => {
    const newTodo = {
      id: this.getNextId(),
      title,
      completed: false,
    };

    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
