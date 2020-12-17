/*const sayHello = function () {
  console.log('Hello');
}
*/

/*const sayHello = () => {
  console.log('Hello');
}
*/

//One-line function does not need braces
//const sayHello = () => console.log('Hello');

//Online line returns
/*const sayHello = () => function () {
  return 'Hello';
}
*/


//One-line returns 'Hello' - the same as the above
//const sayHello = () => 'Hello';


//Return an object
/*const sayHello = () => ({
  msg: 'Hello'
});
*/

//Single param does not even need parentheses
//const sayHello = name => console.log(`Your name is ${name}!`);


//Multiple params need parentheses
//const sayHello = (firstName, lastName) => console.log(`Your name is ${firstName} ${lastName}!`);

//sayHello('Brad', 'Traversy');

const users = ['Nathan', 'John', 'William'];


//standard long way of writing the function
/*const nameLengths = users.map(function (name) {
  return name.length;
})
*/

//a shorter way of writing the function
/*const nameLengths = users.map((name) => {
  return name.length;
});
*/

//the shortest way of writing the function

const nameLengths = users.map(name => name.length);

console.log(nameLengths)