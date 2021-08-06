import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";

import Loading from "./Loading";

import DynamicImport from "./DynamicImport";

const Home = (props) => <DynamicImport load={() => import("./Home")}>{(Component) => (Component === null ? <Loading /> : <Component {...props} />)}</DynamicImport>;
const Players = (props) => <DynamicImport load={() => import("./Players")}>{(Component) => (Component === null ? <Loading /> : <Component {...props} />)}</DynamicImport>;
const Teams = (props) => <DynamicImport load={() => import("./Teams")}>{(Component) => (Component === null ? <Loading /> : <Component {...props} />)}</DynamicImport>;
const TeamPage = (props) => <DynamicImport load={() => import("./TeamPage")}>{(Component) => (Component === null ? <Loading /> : <Component {...props} />)}</DynamicImport>;
const Articles = (props) => <DynamicImport load={() => import("./Home")}>{(Component) => (Component === null ? <Loading /> : <Component {...props} />)}</DynamicImport>;

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/players" component={Players} />
          <Route path="/teams" component={Teams} />
          <Route path="/:teamId" exact component={TeamPage} /> {/* a path with the structur /:someId has to be last but before the 404 to avoid ambiguous matching with /players and /teams, becasue /: matches any route with a slash that is followed by something additional*/}
          <Route path="/:teamId/articles" component={Articles} />
          <Route render={() => <h1 className="text-center">404</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
