import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import TopNav from "./TopNav/TopNav";

import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <TopNav />
        <div>Hash History Basketball League</div>
      </div>
    </Router>
  );
}
