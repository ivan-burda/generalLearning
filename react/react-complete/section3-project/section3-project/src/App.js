import React, { Component } from "react";
import "./App.css";

//Import my own components
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";
import Footer from "./Footer/Footer";

//The main app
class App extends Component {
  state = {
    users: [
      {
        name: "Marcus",
        surname: "Aurelius",
        username: "Emperor",
      },
    ],
  };

  userNameChangeHandler = (event) => {
    this.setState({
      users: [
        {
          name: "Marcus",
          surname: "Aurelius",
          username: event.target.value,
        },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <div className="main">
          <UserOutput
            username={this.state.users[0].username}
            name={this.state.users[0].name}
            surname={this.state.users[0].surname}
          />
          <UserInput
            changed={this.userNameChangeHandler}
            username={this.state.users[0].username}
          />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

/* 
--Create TWO new components: UserInput and UserOutput
--UserInput should hold an input element, UserOutput two paragraphs
--Output multiple UserOutput components in the App component (any paragraph texts of your choice)
--Pass a username (of your choice) to UserOutput via props and display it there
--Add state to the App component (=> the username) and pass the username to the UserOutput component
--Add a method to manipulate the state (=> an event-handler method)
--Pass the event-handler method reference to the UserInput component and bind it to the input-change event
--Ensure that the new input entered by the user overwrites the old username passed to UserOutput
Add two-way-binding to your input (in UserInput) to also display the starting username
Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets
 */
