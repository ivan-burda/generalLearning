let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

//If I user 'unknown' for as a type, because I do not know the type of value which will be assigned, however I want to be a bit more restrictive than just using 'any', then I need an additional check us as below;
if (typeof userInput === "string") {
  userName = userInput;
}

//'never' means the function does not ever return anything, it rather returns and error which breaks the script
function generateError(message: string, code: number): never {
  throw {
    message: message,
    errorCode: code,
  };
}

generateError("Error occured", 500);
