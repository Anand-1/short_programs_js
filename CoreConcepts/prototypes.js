// In javascript , prototype is internal property of every object that allows
// you to add properties and methods to all instances of a particular
// object type

console.log("Hello prototype");

console.log(Array.prototype);
function Person(name) {
  this.name = name;
}

// Adding method to the prototype of Person
Person.prototype.sayHello = function () {
  console.log(`Hello My name is ${this.name}`);
};

// Creating instances of Person
const person1 = new Person("Anand");
const person2 = new Person("Rahul");

person1.sayHello();
person2.sayHello();

console.log(person1.hasOwnProperty("name")); // true
console.log(person1.hasOwnProperty("sayHello")); // false
