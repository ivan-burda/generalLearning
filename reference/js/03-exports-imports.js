import person from "./01-exports-imports-person.js";
//import osoba from "./01-exports-imports-person.js"; -> this would be alright too; The name does not matter for files with default export

import { greet, politeRemark } from "./01-exports-imports-utility.js"; //The exact name matter for files without exact default export
import { greet2 as pozdrav2 } from "./01-exports-imports-utility.js"; //Even though the exact name must be used for named export, it is possible to set a new name for further referencing

//Imports everyhing as an object with a name given to it at the moment of importing
import * as everything from "./01-exports-imports-utility.js";

console.log(greet(person.name) + politeRemark);
console.log(pozdrav2(person.name) + politeRemark);
console.log(everything);
