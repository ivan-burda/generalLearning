function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  if (showResult) {
    const result = n1 + n2;
    console.log(phrase + result);
  }
  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

let mynumber: number; //If I declare a variable but does not assign a number I can specify the type for this variable
mynumber = 5;

let mytext = "hello world"; //If I declare a variable and assign a value to it e.g. a string, a number, etc. this automatically sets the type for the variable
mytext = "123"; // here I can re-asign with a string, but not with a different type

const result = add(number1, number2, printResult, resultPhrase);
