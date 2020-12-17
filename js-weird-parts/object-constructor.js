function Car (owner, brand, color){
  this.owner = owner;
  this.brand = brand;
  this.color = color;
}

Car.prototype.introduceCar = function (){
  return (`This ${this.brand} car of ${this.color} color belongs to ${this.owner}.`);
}

var zdenek = new Car('Zdenek','Suzuki', 'red');


var sentence1 = new String('Today is a great day to be alive!');
var sentence2 = new String('What matters is how you walk through fire.');

String.prototype.isLongerThan = function(requiredLength){
  return this.length > requiredLength;
}

var number = new Number (3);
var anotherNumber = 3;
var thirdNUmber = Number ("3");
console.log(number);
console.log(anotherNumber);
console.log(thirdNUmber);
