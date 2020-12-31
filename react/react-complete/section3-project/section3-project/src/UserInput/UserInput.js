import React from "react";
import "./UserInput.css";

const UserInput = (props) => {
  const style = {
    background: "orange",
    fontSize: "0.9rem",
    textAlign: "center",
  };
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
