import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

/*
  INSTRUCTIONS:
  Create a "todo" app with the following criteria.
    1. The user can add new todo items
    2. The user can remove todo items
*/

function generateId(){
  return '_' + Math.random().toString(36).substr(2,9);
}

function Todo() {
  const [todos, setTodos] = React.useState([]);
  const [todoNameInput, setTodoNameInput] = React.useState("");

  const handleSubmit = () => {
    setTodos((todos) => todos.concat({
      text: todoNameInput,
      id: generateId(),
    }));
    setTodoNameInput("");
  };

  const removeTodo = (id) => setTodos((todos) => todos.filter((t) => t.id !== id));

  return (
    <div>
      <ul>
      {todos.map(({text, id})=>(
        <li key={id}>
            <span>{text}</span>
            <button onClick={()=>removeTodo(id)}>x</button>
        </li>
      ))}
      </ul>

      <input type="text" value={todoNameInput} placeholder="Todo" onChange={(e) => setTodoNameInput(e.target.value)} />
      <button onClick={handleSubmit}>Add todo</button>

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Todo />, rootElement);
