import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Players from "./Players";
import Teams from "./Teams";
import Navbar from "./Navbar";
import TeamPage from "./TeamPage";
import Articles from "./Articles";

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
