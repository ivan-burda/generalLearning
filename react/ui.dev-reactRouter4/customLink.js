/*
  Your application has three routes, `/`, `/notifications`,
  and `/settings`. 
  
  Your job is to implement the `EmojiLink`
  custom `Link` component so that it renders the `Emoji`
  along with the name (`children`) if the app's location
  matches the `Link`s `path`.
*/

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => <h2>Home</h2>;
const Settings = () => <h2>Settings</h2>;
const Notifications = () => <h2>Notifications</h2>;

const EmojiLink = ({ children, to, exact, emoji }) => {
  return (
    <Route
      path={to}
      exact={exact}
      children={({ match }) => (
        <div className={match ? "active" : ""}>
          {match ? emoji : ""}
          <Link to={to}>{children}</Link>
        </div>
      )}
    />
  );
};

class App extends React.Component {
  render() {
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

          <Route exact path="/" component={Home} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/settings" component={Settings} />
        </div>
      </Router>
    );
  }
}

export default App;
