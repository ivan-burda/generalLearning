import React from "react";

const Footer = () => {
  const getYear = () => {
    let date = new Date();
    return date.getFullYear();
  };

  const style = {
    background: "BurlyWood",
    width: "500px",
    height: "1.5rem",
    lineHeight: "1.5rem",
    fontSize: "0.8rem",
    padding: "0",
    margin: "0",
    position: "relative",
  };

  return (
    <div style={style}>
      <p>{getYear()}</p>
    </div>
  );
};
export default Footer;
