import React from "react";
import "./UserInput.css";

const UserInput = (props) => {
  const style = {
    background: "orange",
    fontSize: "0.9rem",
    textAlign: "center",
  };
  //Not needed at all to wrap a single element into a div. Wrapping into a div is recommended when returning more elements.
  return (
    <div>
      <input
        style={style}
        type="text"
        onChange={props.changed}
        defaultValue={props.username}
      />
    </div>
  );
};

export default UserInput;
