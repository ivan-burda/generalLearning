/*
  1. Create a `routes` array that has three routes.
      / which renders 🏠 in the sidebar and "Home" in the body
      /rainbows which renders 🌈 in the sidebar and "Rainbows" in the body
      /bears which renders 🐻 in the sidebar and "Bears" in the body

  2. Create a navbar which navigates between your three routes

  3. Utilize your `routes` array to render the proper
    `Route`s both in the sidebar and in the body.
*/

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// routes array here
const routes = [
  {
    path: "/",
    exact: true,
    name: "Home",
    sidebar: () => <p>🏠🏠🏠</p>,
    body: () => <h1>Home</h1>,
  },
  {
    path: "/rainbows",
    exact: false,
    name: "Rainbows",
    sidebar: () => <p>🌈🌈🌈</p>,
    body: () => <h1>Rainbows</h1>,
  },
  {
    path: "/bears",
    exact: false,
    name: "Bears",
    sidebar: () => <p>🐻🐻🐻</p>,
    body: () => <h1>Bears</h1>,
  },
];

class App extends React.Component {
  render() {
    return (
      <Router>
        <div style={{ display: "flex" }}>
          <div className="sidebar">
            {/* navbar here */}
            <ul>
              {routes.map((route) => (
                <li>
                  <Link to={route.path}>{route.name}</Link>
                </li>
              ))}
            </ul>

            {/* sidebar routes here */}
            {routes.map((route) => (
              <Route path={route.path} exact={route.exact} component={route.sidebar} />
            ))}
          </div>

          <div>
            {/* body  routes here */}
            {routes.map((route) => (
              <Route path={route.path} exact={route.exact} component={route.body} />
            ))}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
