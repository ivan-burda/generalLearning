let fruitname: "Apple" = "Apple"; //by using the literal type such as "Apple" we say that the value of the variable can be only "Apple". This is the same behaviour we get by using const instead of let

//However the concept of literal type becomes more useful in such usecases
type Seasons = "spring" | "summer" | "autumn" | "winter";

function seasonsGreetings(season: Seasons) {
  if (season === "spring") return "swallow";
  if (season === "summer") return "icecream";
  if (season === "autumn") return "leaf"; //if we use 'fall' or 'autunm' we get a typescript warning immediately - perfect
  if (season === "winter") return "snowflake";
}
