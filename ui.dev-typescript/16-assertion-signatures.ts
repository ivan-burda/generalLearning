// Assertion Signatures
// To assert to the type checker that a value has a specific type, we just append the keyword as, followed by the type we want to assert. This tells the TypeScript type checker that a certain value is in fact the type we say it is.

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const context = canvas.getContext("2d");
