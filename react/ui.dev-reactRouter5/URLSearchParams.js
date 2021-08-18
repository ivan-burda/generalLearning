/*
  Inside the User component you need to parse the query string from the 
  URL and then show the information about the selected user (which you can 
    get from the `users` object).

  If no user is selected, show "Select a user".
*/

import * as React from "react";
import "./styles.css";
import { parse } from "query-string";
import { BrowserRouter as Router, Link, Route, useLocation } from "react-router-dom";

const users = {
  tylermcginnis: {
    name: "Tyler McGinnis",
    handle: "tylermcginnis",
    avatar: "https://res.cloudinary.com/uidotdev/image/twitter_name/tylermcginnis",
  },
  sarah_edo: {
    name: "Sarah Drasner",
    handle: "sarah_edo",
    avatar: "https://res.cloudinary.com/uidotdev/image/twitter_name/sarah_edo",
  },
  dan_abramov: {
    name: "Dan Abramov",
    handle: "dan_abramov",
    avatar: "https://res.cloudinary.com/uidotdev/image/twitter_name/dan_abramov",
  },
};

function User() {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const id = searchParams.get("id");
  const { name, avatar } = users[id];
  if (!id) {
    return <p>Select a user</p>;
  } else {
    return (
      <div>
        <img src={avatar} alt={name} />
        {name}
      </div>
    );
  }
}

export default function App() {
  return (
    <Router>
      <div>
        <h1>Users</h1>
        <ul>
          <li>
            <Link to="/?id=tylermcginnis">Tyler</Link>
          </li>
          <li>
            <Link to="/?id=sarah_edo">Sarah</Link>
          </li>
          <li>
            <Link to="/?id=dan_abramov">Dan</Link>
          </li>
        </ul>

        <hr />

        <Route path="/">
          <User />
        </Route>
      </div>
    </Router>
  );
}
