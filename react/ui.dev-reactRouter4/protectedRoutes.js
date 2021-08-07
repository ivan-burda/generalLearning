/*
  1. Create a `PrivateRoute` component that redirects to
    the /login route if the user isn't authenticated (using 
    fakeAuth.isAuthenticated).

  2. Make /notifications a private route.

  3. Finish implementing `AuthButton` to allow the user
      to logout (using fakeAuth.signout).
*/

import React from "react";
import { BrowserRouter as Router, Link, Route, Redirect, withRouter } from "react-router-dom";

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100); // fake async
  },
};

const Home = () => <h3>Home</h3>;
const Notifications = () => (
  <>
    <h3>Notifications</h3>
    <p>Protected area</p>
  </>
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      fakeAuth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

class Login extends React.Component {
  state = {
    redirectToReferrer: false,
  };
  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true,
      }));
    });
  };
  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>You must log in to view that page</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

const AuthButton = withRouter(({ history }) =>
  fakeAuth.isAuthenticated === true ? (
    <div>
      <button
        type="button"
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </div>
  ) : (
    <p>You are now not logged in!</p>
  )/*
  Utilizing React Router v4's `Prompt` component,
  prompt the user if they try to navigate away from the
  `/survey` route if their form is "dirty".
*/

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Prompt
} from 'react-router-dom'

const Home = () => <h1>Home</h1>
const Settings = () => <h1>Settings</h1>

class Survey extends React.Component {
  state = {
    food: '',
    isBlocking: false
  }
  handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset()
    this.setState({isBlocking:false})
  }
  handleChange = (e) => {
    const food = e.target.value
    
    this.setState({
      food,
      isBlocking: food.length > 0
    })
  }
  render() {
    const { food, isBlocking } = this.state

    if(food && !isBlocking){
      return <h1>Thank you for the submission!</h1>
    }

    return (
      <form onSubmit={this.handleSubmit}>
      <Prompt
        when={isBlocking}
        message={(location)=>`Are you sure you want to go to ${location.pathname}?`}
      />
        <label>
          What is your favorite food?

          <input 
            type='text'
            placeholder='Favorite Food'
            onChange={this.handleChange}
            value={food}
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/survey">Survey</Link></li>
            <li><Link to="/settings">Settings</Link></li>
          </ul>

          <hr />

          <Route path="/" exact component={Home} />
          <Route path="/survey" component={Survey} />
          <Route path="/settings" component={Settings} />
        </div>
      </Router>
    )
  }
}

export default App
);

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/notifications">Notifications</Link>
          </li>
        </ul>

        <AuthButton />

        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/notifications" component={Notifications} />
      </div>
    </Router>
  );
}
