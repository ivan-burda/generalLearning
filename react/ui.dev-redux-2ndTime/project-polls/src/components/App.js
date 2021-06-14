import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import Leaderboard from "../components/Leaderboard";
import Dashboard from "../components/Dashboard";

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
      <div className="container">{loading === true ? null : <Dashboard />}</div>
    </Router>
  );
}
