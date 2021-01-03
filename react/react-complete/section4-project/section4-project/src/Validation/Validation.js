import React from "react";

const Validation = (props) => {
  let validationMessage = "";
  if (props.textLength <= 5) {
    validationMessage = "Text too short"; //The whole paragraph including the <p> tags could be here
  } else {
    validationMessage = "Text long enough"; //The whole paragraph including the <p> tags could be here
  }
  return (
    <div>
      <p>{validationMessage}</p>
      {/* <p>{props.textLength < 5 ? "Text too short" : "Text long enough"}</p> */}
    </div>
  );
};

export default Validation;
