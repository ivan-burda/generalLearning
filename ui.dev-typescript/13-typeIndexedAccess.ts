interface Fruit {
  name: string;
  color: string;
  nutrition: { name: string; amount: number }[];
}

//The FruitNutritionList is of type that is assigned ot the Fruit["nutrition"] property, i.e. of: { name: string; amount: number }[]
type FruitNutritionList = Fruit["nutrition"];

//We can even grab the type of individual items in an array. We can access a specific index, or we can use the number type to grab the type of every array value.

type NutritionFact = Fruit["nutrition"][0];

// typeof
// we can use the typeof operator to derive the type of a value at compile time.

// let rectangle = { width: 100, height: 200 };
// let rectangle2: typeof rectangle; // { width: number; height: number; }

// keyof
// We can use the keyof operator to give us a type which represents all of these property names. In reality, it's a union type of string literals, one for each property name.

// interface Rectangle {
//   width: number;
//   height: number;
// }
// type RectangleProperties = keyof Rectangle; // type RectangleProperties = "width" | "height"

// let rectangle: Rectangle = { width: 100, height: 200 };
// const propertyName: RectangleProperties = "height";
// console.log(rectangle[propertyName]); // 200

// const
// hen we have any value that we are assigning that we want to be inferred as a literal type, we can use what's called a const assertion. Remember, an assertion is a notice to the type checker that tells it more about our program so it can check our code properly. We write const assertions by putting as const after the literal value.

// let rectangle = { width: 100, height: 100 } as const;
// let rectangle: {
//     readonly width: 100;
//     readonly height: 100;
// }
