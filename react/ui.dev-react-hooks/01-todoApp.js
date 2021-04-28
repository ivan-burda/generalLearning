import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

/*
  INSTRUCTIONS:
  Create a "todo" app with the following criteria.
    1. The user can add new todo items
    2. The user can remove todo items
*/

function Todo () {
  const [todos, setTodos] = React.useState(["Ivan", "Martin"]);
  const [inputValue, setInputValue] = React.useState();

  const typing = (typedText) => setInputValue(typedText);
  const addTodo = (newTodo)=> setTodos((todos)=>{let pole = [...todos]; pole.push(newTodo); return pole});
  const removeTodo = (todoName) => setTodos((todos).filter((item)=>item!==todoName));

  return (
    <div>
      {todos.map((todo) => (
        <div style={{
          display: "flex",
          border: "1px solid blue",
          width: "100px",
          height: "40px",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#bada55",
          color: "#000",
          fontWeight: "500",
          padding: "0px 5px",
          margin: "5px 0"
        }
        }>
          <p>{todo}</p>
          <button
            style={{ border: "none", background: "#fff" }}
            onClick={()=>removeTodo(todo)}>x</button>
        </div>
      ))}
      <input type="text" value={inputValue} placeholder="Todo" onChange={(e)=>typing(e.target.value)}></input>
      <button onClick={() => {addTodo(inputValue); typing("")}}>Add todo</button>
      
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Todo />, rootElement);
