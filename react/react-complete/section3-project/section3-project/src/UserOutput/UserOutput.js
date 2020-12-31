import React from "react";
import "./UserOutput.css";

const UserOutput = (props) => {
  const style = {
    fontWeight: "600",
  };
  return (
    <div>
      <p style={style}>User name: {props.username}</p>
      <p style={style}>
        Full name: {props.name} {props.surname}
      </p>
    </div>
  );
};

export default UserOutput;
