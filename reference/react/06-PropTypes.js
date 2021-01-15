// Install this package to define prop types for your components in order to:
// Give an overview what props are relevant for your individual components
// Make it clear what value types the props are offscreenBuffering

//sudo npm install --save prop-types

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
      <Aux>
      
        <p onClick={this.props.click}>
          I'm {this.props.name}. I am {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        <input
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