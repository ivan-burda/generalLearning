import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

/*
  Instructions:
    You're building an app to see how many times you can click
    a button in 10 seconds. 

    The UI has three parts, a button, a timer counting down from 10,
    and a count of how many times you've clicked the button.

    Once the timer reaches 0, remove the button from the UI.
*/

function CounterGame() {
  const [clicks, setClicks] = React.useState(0);
  const [time, setTime] = React.useState(10);
  const id = React.useRef(null);

  const clear = () => window.clearInterval(id.current)

  const handleClick = () => {
    setClicks((clicks) => clicks += 1);
  };

  React.useEffect(() => {
     id.current = window.setInterval(() => {
      setTime((time) => time-1);
    }, 1000)
    return clear;
  }, []);

  React.useEffect(()=>{
    if(time === 0){
      clear();
    }
  }, [time]);



  return (
    <div className="App">
      <h1 className="clickCounter">{clicks}</h1>
      <p className="timeLeft">Time left: {time} seconds</p>
      {time > 0 ? <button onClick={() => handleClick()}>+</button> : null}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<CounterGame />, rootElement);
