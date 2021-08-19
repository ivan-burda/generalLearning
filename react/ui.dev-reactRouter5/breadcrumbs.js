/*
  1. Create a `routes` array that has three routes.
      / which renders 🏠 in the sidebar and "Home" in the body
      /rainbows which renders 🌈 in the sidebar and "Rainbows" in the body
      /bears which renders 🐻 in the sidebar and "Bears" in the body

  2. Create a navbar which navigates between your three routes

  3. Utilize your `routes` array to render the proper
    `Route`s both in the sidebar and in the body.
*/

import * as React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// routes array here
const routes = [
  {
    path: "/",
    exact: true,
    title: "Home",
    sidebar: () => <div className="emojis">🏠🏠🏠</div>,
    home: () => <h2>Home</h2>,
  },
  {
    path: "rainbows",
    exact: false,
    title: "Rainbows",
    sidebar: () => <div className="emojis">🌈🌈🌈</div>,
    home: () => <h2>Rainbows</h2>,
  },
  {
    path: "bears",
    exact: false,
    title: "Bears",
    sidebar: () => <div className="emojis">🐻🐻🐻</div>,
    home: () => <h2>Bears</h2>,
  },
];

export default function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div className="sidebar">
          {/* navbar here */}
          <ul>
            {routes.map((route) => (
              <li>
                <Link to={route.path}>{route.title}</Link>
              </li>
            ))}
          </ul>
          {/* sidebar routes here */}
          <Switch>
            {routes.map((route) => (
              <Route path={`/${route.path}`} exact={route.exact}>
                {route.sidebar}
              </Route>
            ))}
          </Switch>
        </div>

        <div>
          {/* body  routes here */}
          <Switch>
            {routes.map((route) => (
              <Route path={`/${route.path}`}>{route.home}</Route>
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
