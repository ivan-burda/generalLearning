/*
  You're given an array representation of your routes.
  Map over that array in order to create the following 
  URL to Component mapping

  / -> Home
  /newsletters -> Newsletters
    /newsletters/react -> Publication
    /newsletters/ui -> Publication
*/

import * as React from "react";
import { BrowserRouter as Router, Route, Link, useParams } from "react-router-dom";

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

    {/* subroutes here */}
    {routes.map((route) => (
      <RouteWithSubroutes key={route.path} {...route} />
    ))}
  </div>
);

function Publication() {
  const { id } = useParams();

  return <h3>Publication: {id}</h3>;
}

function RouteWithSubroutes(route) {
  return (
    <Route exact={route.exact} path={route.path}>
      <route.component routes={route.routes} />
    </Route>
  );
}

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

export default function App() {
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
          <RouteWithSubroutes key={route.path} {...route} />
        ))}
      </div>
    </Router>
  );
}
