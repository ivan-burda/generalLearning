import person from "./01-exports-imports-person.js";
import { greet, politeRemark } from "./01-exports-imports-utility.js";

console.log(greet(person.name) + politeRemark);
