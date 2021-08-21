import * as React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import TopNav from "./TopNav/TopNav";
import TeamLogo from "./TeamLogo";
import TeamPage from "./TeamPage/TeamPage";

import "./App.css";

const teamNames = ["bulls", "foxes", "hedgehogs", "koalas", "lemurs"];

const mainContent = () => {
  return (
    <div className="app-main">
      <div className="app-main-welcome">
        <p>Hash History Basketball League</p>
      </div>
      <div className="app-main-subtitle">
        <p>Select a team</p>
      </div>
      <div className="team-selection">
        {teamNames.map((team) => (
          <Link to={team} key={team}>
            <TeamLogo id={team} width="120px" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <TopNav />
      <Switch>
        <Route path="/" exact>
          {mainContent}
        </Route>
        <Route path="/:teampage" component={TeamPage} />
      </Switch>
    </div>
  );
}
