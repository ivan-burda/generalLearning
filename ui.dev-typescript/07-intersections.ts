interface Fruit {
  name: string;
  color: String;
  sweetness: number;
}

interface Vegetable {
  name: string;
  hasSeeds: boolean;
}

type EdibleThing = Fruit & Vegetable;

type FrutSweetness = EdibleThing[""];
