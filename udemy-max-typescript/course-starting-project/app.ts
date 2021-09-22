// We can specify types within an object and even within an deeper object, however, typescript is able to understand the expect types from the declaration if we assign a value right away
// const myperson: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   various: any[];
// } = {
//   name: "Maxmilian",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//  various: ['TV', 5]
// }

// string[] = an array of strings

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; //this specifies a tuple: an array with a specific length and item types. Controls when we want to assign or re-asign items in the array (tuple); however by using .push() we would still be able to insert more elements - typescript does not catch this
} = {
  name: "Maxmilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase()); //Here typescript knows hobby is definitely a string so it can even suggest available methods for a string which makes writing code easier
  console.log(hobby.map()); //here typescript correctly complains that map() is not a method of a string
}
