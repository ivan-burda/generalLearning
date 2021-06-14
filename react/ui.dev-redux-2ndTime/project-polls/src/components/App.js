import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import Leaderboard from "../components/Leaderboard";
import Dashboard from "../components/Dashboard";
import Nav from "../components/Nav";
import AddPoll from "../components/AddPoll";
import Poll from "../components/Poll";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authedUser === null);

  React.useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  const store = useSelector((store) => store);
  console.log("Store", store);
  return (
    <Router>
      <div className="container">
        <Nav />
        {loading === true ? null : (
          <div>
            <Route path="/" exact>
              <Dashboard />
            </Route>
            <Route path="/leaderboard">
              <Leaderboard />
            </Route>
            <Route path="/polls/:id">
              <Poll />
            </Route>
            <Route path="/add">
              <AddPoll />
            </Route>
          </div>
        )}
      </div>
    </Router>
  );
}
