import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

/*
  Instructions:
    Assume you're creating an app that allows the user to 
    post status updates (ala Twitter). Your UI should have a
    textarea and a button. The button should be disabled if the
    length of the textarea is 0 or greater than 240 characters.
    The document's title should inform the user on how many
    characters they have left to type before they hit the 240
    character limit - "115 characters left."
*/

function App() {
  const [postInput, setPostInput] = React.useState("");



  React.useEffect(()=>{
    if (postInput.length > 0 && postInput.length  < 240){
      document.getElementById("submitBtn").disabled = false;
    } else{
      document.getElementById("submitBtn").disabled = true;
    }
  },[postInput]);

  React.useEffect(()=>{
    document.title = `${240 - postInput.length} characters left`
  },[postInput]);

  return (
    <div className="App">
      <h1 id="title"></h1>
      <p>Your new post:</p>
      <textarea
      type="text"
      value={postInput} 
      name="post"
      placeholder="Type here..."
      onChange={(e) => setPostInput(e.target.value)}
      ></textarea>
      <button id="submitBtn">Submit</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
