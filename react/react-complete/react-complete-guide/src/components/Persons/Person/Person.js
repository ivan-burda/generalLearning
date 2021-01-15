import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import classes from "./Person.css";

class Person extends Component {
  constructor(props){
    super(props); //must be used always if a constructor is used
    this.inputElementRef = React.createRef();
  }

  componentDidMount(){
    //this.inputElement.focus();
    this.inputElementRef.current.focus();
  };

  render() {
    console.log("[Person.js] rendering...");
    return (
      <Aux>
      
        <p onClick={this.props.click}>
          I'm {this.props.name}. I am {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        <input
          //ref={(inputEl)=>{this.inputElement = inputEl}}
          ref = {this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          defaultValue={this.props.name}
        />
   
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);
