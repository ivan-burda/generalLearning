interface Fruit {
  name: string;
  sweetness?: number;
}

interface Vegetable {
  name: string;
  hasSeeds: boolean;
}

type EdibleThing = Fruit | Vegetable;

function checkForSeeds(food: EdibleThing) {
  //Should I have not used type-narrowing here, TS would complain, because there could be food (e.g. Fruit) which does not have the 'hasSeeds' property
  if ("hasSeeds" in food) {
    console.log(food.hasSeeds);
  }
}

function getSweetness(fruit: Fruit): number {
  const sweetness = fruit.sweetness;
  if (sweetness) {
    return sweetness;
  }
  throw new Error("Sweetness is not set.");
}
