// function add(n1: number, n2: number): string { //if I did not specify the function return value type as 'string', it would automatically be expected as type 'number' by Typescript, becasue both parameters are of the number type
//   return n1.toString() + n2.toString();
// }

function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  //:void is used as a type if the function does not have a return step and it does not return anything. By default is does not have to be specified - TS infers it on its own.
  console.log("Result" + num);
}

//here we can see how the type is defined for a callback function
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

// let combineValues: Function; //specifies that the variable need to hold or point to a function
let combineValues: (a: number, b: number) => number; //the variable accepts a function with two params of type number and the function also should return a number

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(10, 6));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
