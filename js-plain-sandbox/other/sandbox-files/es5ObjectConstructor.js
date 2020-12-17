//Person constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  this.origin = 'Earth';
  /*this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }*/
}

//Calculate age
Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

//Get full name
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
}

//Gets married
Person.prototype.getsMarried = function (newLastName) {
  this.lastName = newLastName;
}

const ivan = new Person('Ivan', 'Burda', '01-31-1986');
const marry = new Person('Marry', 'Johnson', '03-11-1996');

console.log(marry);
console.log(marry.calculateAge());
console.log(marry.getFullName());
marry.getsMarried('Smith');
console.log(marry.getFullName());

console.log(marry.hasOwnProperty('getFullName'));