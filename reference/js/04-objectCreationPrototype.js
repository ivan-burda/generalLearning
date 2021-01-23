//A LENGTHY WAY TO CREATE OBJECTS

function Human (gender, age, weight){
  let human = Object.create(Human.prototype);
  human.gender = gender;
  human.age = age;
  human.weight = weight;
  //This is an own method which will get copied to any new instance of the object
  human.sleep = (sleepDuration) =>`${this.name} is going to sleep for ${sleepDuration} hours!`;

 return human;
}

//This is a method which is set at the level of the Human object prototype. This method is accessible to any instance of the Human object, however, it does not get copied to new intances.
Human.prototype.eat = function(){
  console.log(`${this.name} is eating!`);
}

const Peter = Human("man", 39, 75);

//A MORE ELEGANT WAY TO CREATE OBJECTS
function HumanWithNew (name, gender, age, weight){
  //If I am going to create this object instance with 'new' then this will be automatically created let human = Object.create(Human.prototype);
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.weight = weight;

  //This is an own method which will get copied to any new instance of the object
  this.sleep = (sleepDuration) =>`${this.name} is going to sleep for ${sleepDuration} hours!`;

  //The return HumanWithNew will be automatically create if I instantiate a new object with 'new'
}

HumanWithNew.prototype.eat = function(foodItem){
  console.log(`${this.name} is eating ${foodItem}!`);
}

const Martina = new HumanWithNew ("Martina", "woman", 31, 70);

//CLASSES
class Person{
  constructor(name, gender, age, weight){
    //Properties
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.weight = weight;
    //This would be a method that gets copied to every new instance
    this.introduce = function(){console.log(`Hello, I am ${this.name}`)};
  }
  //These are methods which do not get copied, they are rather referd to via prototype
  sleep(sleepDuration) {
    console.log(`${this.name} is going to sleep for ${sleepDuration} hours!`);
  }
  eat(foodItem){
    console.log(`${this.name} is eating ${foodItem}!`);
  }

}

const Wanda = new Person ("Wanda", "woman", 17, 62);
Wanda.eat("apple");
Wanda.sleep(9);


