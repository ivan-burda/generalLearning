// Code goes here!
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max", hobbies: ["Sport", "Programming"] }, { age: 30 });
const mergedObj2 = merge({ animal: "dog" }, { legs: 4 });
const mergedObj3 = merge({ animal: "spider" }, { legs: 8 }); // TS already notifies me that 30 is not an object
console.log(mergedObj.age);
console.log(mergedObj2.legs);

//Another generic function where the generic specifies the type of the function parameter

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = `Got 1 element.`;
  }
  if (element.length > 1) {
    descriptionText = `Got ${element.length} elements.`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));

//The keyof
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return "Value " + obj[key];
}

console.log(extractAndConvert({ name: "Max" }, "name"));

//Generic classes
class DataStorage<T extends string | number | boolean> {
  //by extending here I allow that the data storage can be created only for specific type of data -> I exclude for example objects
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(5);
numberStorage.addItem(55);
numberStorage.addItem(544);
numberStorage.removeItem(55);
console.log(numberStorage.getItems());

const numberAndStringStorage = new DataStorage<number | string>();
numberAndStringStorage.addItem("Max");
numberAndStringStorage.addItem(55);

// const objectStorage = new DataStorage<object>(); //objct type of storage is not allowed because I limited this in the class setup
