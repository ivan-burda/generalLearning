const personProtoypes = {
  greeting: function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function (newLastName) {
    this.lastName = newLastName;
  }
}

const marry = Object.create(personProtoypes);
marry.firstName = 'Marry';
marry.lastName = 'Williams';
marry.age = 30;

marry.getsMarried('Thompson');

console.log(marry.greeting());


const brad = Object.create(personProtoypes, {
  firstName: {
    value: 'Brad'
  },
  lastName: {
    value: 'Traversy'
  },
  age: {
    value: 36
  }
});

console.log(brad);
console.log(brad.greeting());