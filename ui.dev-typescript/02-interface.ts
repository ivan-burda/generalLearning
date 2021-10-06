interface Car {
  wheels: number;
  color: string;
}

const car: Car = { wheels: 4, color: "white" };
const ferrari: Car = { wheels: 4, color: "red" };

interface Nutrient {
  name: string;
  value: number;
}

interface EdibleThing {
  name: string;
  color: string;
  calories: number;
  nutrients: Nutrient[];
}

interface Fruit extends EdibleThing {
  sweetness: number;
}

let fruitBasket: Fruit[] = [];

const tomato = { name: "Tomato", color: "red", calories: 10, nutrients: [], sweetness: 2 };

fruitBasket.push(tomato);

const sumSweetness = fruitBasket.reduce((accumulator, fruit: Fruit) => {
  if (fruit.sweetness) {
    return accumulator + fruit.sweetness;
  }
  return accumulator;
}, 0);
