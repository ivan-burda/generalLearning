class Fruit {
  name: string; //property
  color: string;
  sweetness: number;
  constructor(name: string, color: string, sweetness: number) {
    this.name = name;
    this.color = color;
    this.sweetness = sweetness;
  }
  //method
  fullName() {
    const isSweet = this.sweetness > 50;
    return `${isSweet ? "Sweet " : ""}${this.color} ${this.name}`;
  }
}

const banana = new Fruit("Banana", "yellow", 70);

//We can use the class type as an annotation, just like we would an Interface.
const fruitBasket: Fruit[] = [];
fruitBasket.push(new Fruit("Pear", "green", 60));

//INHERITACE
class EdibleThing {
  name: string;
  color: string;
  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }
}

class Fruit extends EdibleThing {
  sweetness: number;
  constructor(name: string, color: string, sweetness: number) {
    super(name, color); // must be called
    this.sweetness = sweetness;
  }
}

// Static Properties
// We can assign static properties to a class. These are properties which only exist on the class definition, not class instances.
class Vegetable {
  static cookingTimeSeconds = 5;
  static cook(vegetable: Vegetable) {
    setTimeout(() => {
      console.log(`Cooked ${vegetable.name}`);
    }, Vegetable.cookingTimeSeconds * 1000);
  }
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const squash = new Vegetable("squash");
Vegetable.cook(squash); // 5 seconds later: "Cooked squash"

// Abstract Classes
// Abstract classes are classes which cannot be instantiated, but provide implementation details for any classes which extend them.
abstract class EdibleThing {
  name: string;
  abstract eat(): void;
  constructor(name: string) {
    this.name = name;
  }
}
class Fruit extends EdibleThing {
  constructor(name: string) {
    super(name);
  }
  eat() {
    console.log(`Yum. ${this.name}s are tasty.`);
  }
}
