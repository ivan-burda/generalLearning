import React from "react";
import { useParams, useRouteMatch, Link } from "react-router-dom";

import useTeam from "../../hooks/useTeam";

function useTeamPageData(teamId) {
  const { response: team, loading: loadingTeam } = useTeam(teamId);

  return {
    team,
    loading: loadingTeam,
  };
}

export default function TeamPage() {
  const { teamId } = useParams();

  const { team } = useTeamPageData(teamId);

  console.log(team);
  return <div></div>;
}
