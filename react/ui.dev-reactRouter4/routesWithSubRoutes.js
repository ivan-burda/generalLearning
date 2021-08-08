/*
  You're given an array representation of your routes.
  Map over that array in order to create the following 
  URL to Component mapping

  / -> Home
  /newsletters -> Newsletters
    /newsletters/react -> Publication
    /newsletters/ui -> Publication
*/

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => <h2>Home</h2>;

const Newsletters = ({ routes }) => (
  <div>
    <h2>Newsletters</h2>
    <ul>
      <li>
        <Link to="/newsletters/react">React</Link>
      </li>
      <li>
        <Link to="/newsletters/ui">UI</Link>
      </li>
    </ul>

    {routes.map((route) => (
      <RouteWithSubRoutes key={route.path} {...route} />
    ))}
    {/* subroutes here */}
  </div>
);

const Publication = ({ match }) => <h3>Publication: {match.params.id}</h3>;

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/newsletters",
    component: Newsletters,
    routes: [
      {
        path: "/newsletters/:id",
        component: Publication,
      },
    ],
  },
];

const RouteWithSubRoutes = (route) => <Route path={route.path} exact={route.exact} render={(props) => <route.component {...props} routes={route.routes} />} />;

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/newsletters">Newsletters</Link>
            </li>
          </ul>

          {/* top-level routes here */}
          {routes.map((route) => (
            <RouteWithSubRoutes key={route.path} {...route} />
          ))}
        </div>
      </Router>
    );
  }
}

export default App;
