/*
  Your application has three routes, `/`, `/notifications`,
  and `/settings`. 
  
  Your job is to implement the `EmojiLink`
  custom `Link` component so that it renders the `Emoji`
  along with the name (`children`) if the app's location
  matches the `Link`s `path`.
*/

import * as React from "react";
import { BrowserRouter as Router, Route, Link, useRouteMatch } from "react-router-dom";

const Home = () => <h2>Home</h2>;
const Settings = () => <h2>Settings</h2>;
const Notifications = () => <h2>Notifications</h2>;

const EmojiLink = ({ children, to, exact, emoji }) => {
  const match = useRouteMatch({
    exact,
    path: to,
  });
  return (
    <div>
      {match ? emoji : ""}
      <Link to={to}>{children}</Link>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <div>
        <EmojiLink exact={true} to="/" emoji={`🏠`}>
          Home
        </EmojiLink>
        <EmojiLink to="/notifications" emoji={`🔔`}>
          Notifications
        </EmojiLink>
        <EmojiLink to="/settings" emoji={`⚙️`}>
          Settings
        </EmojiLink>

        <hr />

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/notifications">
          <Notifications />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </div>
    </Router>
  );
}
