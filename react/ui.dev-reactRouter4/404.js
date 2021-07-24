/*
  You're given three components, `Home`, `Settings`, and
  `FourZeroFour`.

  1. Create a navbar to navigate between `/` 
    and `/settings`.

  2. Render your `Route`s according to the table below

    URL    Component
    `/` -> `Home`
    `/settings` -> `Settings`
    anything else -> `FourZeroFour`
 */

import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Home = () => <h1>Home</h1>;

const Settings = () => <h1>Settings</h1>;

const FourZeroFour = () => <h1>404</h1>;

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {/* Nav here */}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
          {/* Routes here */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/settings" component={Settings} />
            <Route component={FourZeroFour} />
          </Switch>
        </div>
      </Router>
    );
  }
}
