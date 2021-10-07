enum Seasons {
  winter,
  spring,
  summer,
  autumn,
}

function seasonsGreetings(season: Seasons) {
  if (season === Seasons.winter) return "Snowman";
  if (season === Seasons.spring) return "Swallow";
  if (season === Seasons.summer) return "Ice Cream";
  if (season === Seasons.autumn) return "Leaves";
}

seasonsGreetings(Seasons.winter);
