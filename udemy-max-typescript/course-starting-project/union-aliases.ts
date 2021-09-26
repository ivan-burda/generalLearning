//You can simplify this code:

// function greet(user: { name: string; age: number }) {
//   console.log('Hi, I am ' + user.name);
// }

// function isOlder(user: { name: string; age: number }, checkAge: number) {
//   return checkAge > user.age;
// }

type User = { name: string; age: number };

function greet(user: User) {
  console.log("Hi, I am " + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}

type MyCombinableTypes = number | string; // the type alias a great way to set union types and then refer to them easily later
type MyConversionDescripton = "as-number" | "as-text";

function combine(
  input1: MyCombinableTypes, //support or multiple types is called "union types"
  input2: MyCombinableTypes,
  resultConversion: MyConversionDescripton // or of we do not want just any string, we can specify: 'as-number' | 'as-text'  -> these would be literal types
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  if (resultConversion === "as-number") {
    return +result;
  } else {
    return result.toString();
  }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Asterix", "Obelix", "as-text");
console.log(combinedNames);
