//A STANDARD APPROACH TO CREATION OF CLASSES
//A superordinate class
class Human {
  constructor() {
    this.armsCount = 2;
    this.legsCount = 2;
    this.type = "mammal";
  }

  printType() {
    console.log(this.type);
  }
}

//Class
class Person extends Human {
  //extends is used to inherit from another class
  constructor(name) {
    super(); //super() is used to executed the inheritance
    this.name = name;
  }
  printMyName() {
    console.log(this.name);
  }
}

const person = new Person("Ivan");
person.printMyName();
person.printType(); //calls an inherited method

//==============================================================================

//THE MOST MODERN APPROACH TO CREATION OF CLASSES
//a property can be assigned to a class directly without using the constructor
//A superordinate class
class Human2 {
  //This type of assignment can be used instead of the constructor
  armsCount = 2;
  legsCount = 2;
  type = "mammal";

  printType = () => {
    //a property with an arrow function assigned to it - used here instead of implementing a method by a function
    console.log(this.type);
  };
}

//Class
class Person2 extends Human2 {
  //extends is used to inherit from another class
  constructor(name) {
    super();
    this.name = name;
  }
  printMyName = () => {
    console.log(this.name);
  };
}

const person2 = new Person2("Ivanek");
person2.printMyName();
person2.printType();
