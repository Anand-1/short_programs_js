/* ES6 introduced classes 
   - Classes are blueprint of Object. Object can be created 
   using classes.
   - Javascript classes are similar to constructor function
   , and it is merely a syntactic sugar 
   - class keyword is used for creation, and properties are 
   assigned in the constructor function. 
   - classes are not hoisted , by default in strict mode
   - type is function 
*/
// Let's see constructor function
function Person() {
  this.name = "Anand";
  // defining method
  this.greet = function () {
    return "Hello" + " " + this.name;
  };
}
// Create a object
console.log(typeof Person); // function
const personObject = new Person();
console.log(personObject);
console.log(personObject.greet());

//================================Clasess===============
/* Note: The Constructor() method inside a class is called 
   automatically each time an object is created.
*/
// Now using Class
class NewPerson {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello ${this.name}`);
  }
}

// creating an object
const personClass = new NewPerson("John");

// accessing property
console.log(personClass.name); // John

// accessing method
console.log(personClass.greet()); // Hello John

// ==================Getters and setters ==============
/* In Javascript, getter method get the value of an object
   and setter method sets the value of object.
*/
class Animal {
  constructor(name) {
    this.name = name;
  }
  get animalName() {
    return this.name;
  }
  set SetanimalName(x) {
    this.animalName = x;
  }
}

let newAnimal = new Animal("Dog");

console.log(newAnimal.animalName);
newAnimal.SetanimalName("Cat");
console.log(newAnimal.animalName);
