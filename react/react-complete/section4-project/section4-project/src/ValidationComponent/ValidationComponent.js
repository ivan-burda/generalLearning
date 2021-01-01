import React from "react";

const ValidationComponent = (props) => {
  return <p>{props.textLength < 5 ? "Text too short" : null}</p>;
};

export default ValidationComponent;
