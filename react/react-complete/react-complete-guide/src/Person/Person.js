import React from "react";

const Person = (props) => {
  return (
    <p>
      I'm {props.name}. I am {props.age} years old.
    </p>
  );
};

export default Person;
