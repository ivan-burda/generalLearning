import React from "react";

const InputTextField = (props) => {
  return <input type="text" onChange={props.changed}></input>;
};

export default InputTextField;
