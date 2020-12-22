import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos.js";
import AddTodo from "./components/AddTodo.js";
import About from "./components/pages/About";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => this.setState({ todos: res.data }));
  }

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
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) =>
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        })
      );
  };

  //Get next id
  getNextId() {
    let existingIds = this.state.todos.map((todo) => todo.id);
    existingIds.sort((a, b) => a - b);

    if (existingIds[existingIds.length - 1] === undefined) {
      console.log(existingIds);
      return 1;
    } else {
      return existingIds[existingIds.length - 1] + 1;
    }
  }

  //Add a todo
  addTodo = (title) => {
    // const newTodo = {
    //   id: this.getNextId(),
    //   title,
    //   completed: false,
    // };

    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title: title,
        completed: false,
      })
      .then((res) =>
        this.setState({
          todos: [
            ...this.state.todos,
            {
              id: this.getNextId(),
              title: res.data.title,
              completed: res.data.completed,
            },
          ],
        })
      );
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
