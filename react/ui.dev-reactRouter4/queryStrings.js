/*
  Inside the User component you need to parse the query string from the 
  URL and then show the information about the selected user (which you can 
    get from the `users` object).

  If no user is selected, show "Select a user".
*/

import React from "react";
import "./styles.css";
import { parse } from "query-string";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const users = {
  tylermcginnis: {
    name: "Tyler McGinnis",
    handle: "tylermcginnis",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  sarah_edo: {
    name: "Sarah Drasner",
    handle: "sarah_edo",
    avatar: "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
  },
  dan_abramov: {
    name: "Dan Abramov",
    handle: "dan_abramov",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  },
};

function User({ location }) {
  const { id } = parse(location.search);
  const user = users[id];

  if (user !== undefined) {
    return (
      <div>
        <p>{user.name}</p>
        <img src={user.avatar} alt={`Avatar for ${user.name}`} />
      </div>
    );
  }
  return (
    <div>
      <p>Select a user</p>
    </div>
  );
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

        <Route path="/" component={User} />
      </div>
    </Router>
  );
}
