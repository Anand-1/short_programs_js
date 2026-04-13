/*
 * Call, Apply, and Bind in JavaScript
 *
 * - call() and apply() immediately invoke the function with a specified 'this' context.
 * - call() passes arguments individually, apply() passes them as an array.
 * - bind() creates a new function with a bound 'this' context, which can be invoked later.
 *
 * Common use cases: Function borrowing, setting 'this' context, partial application.
 */

// Example objects
const person1 = {
  firstName: "Anand",
  lastName: "Raj",
};

const person2 = {
  firstName: "Rahul",
  lastName: "Singh",
};

// Function to print full name with home
function printFullName(home) {
  console.log(`${this.firstName} ${this.lastName} from ${home || 'unknown'}`);
}

// 1. Using call() - Function borrowing with individual arguments
console.log("=== Using call() ===");
printFullName.call(person1); // Anand Raj from unknown
printFullName.call(person2, "Samastipur"); // Rahul Singh from Samastipur

// 2. Using apply() - Function borrowing with array of arguments
console.log("=== Using apply() ===");
printFullName.apply(person1, []); // Anand Raj from unknown
printFullName.apply(person2, ["Kolkata"]); // Rahul Singh from Kolkata

// 3. Using bind() - Creates a new bound function
console.log("=== Using bind() ===");
const printPerson1 = printFullName.bind(person1, "Delhi");
const printPerson2 = printFullName.bind(person2, "Mumbai");
printPerson1(); // Anand Raj from Delhi
printPerson2(); // Rahul Singh from Mumbai

// Additional Examples

// Example 4: Using call() with built-in functions (e.g., Math.max)
console.log("=== Using call() with Math.max ===");
const numbers = [5, 6, 2, 3, 7];
const max = Math.max.call(null, ...numbers); // Spread array for call
console.log(`Max number: ${max}`); // Max number: 7

// Example 5: Using apply() with built-in functions
console.log("=== Using apply() with Math.max ===");
const maxApply = Math.max.apply(null, numbers);
console.log(`Max number with apply: ${maxApply}`); // Max number with apply: 7

// Example 6: Binding methods from one object to another
console.log("=== Binding methods ===");
const car = {
  brand: "Toyota",
  getBrand: function() {
    return this.brand;
  }
};

const bike = {
  brand: "Honda"
};

const getBikeBrand = car.getBrand.bind(bike);
console.log(`Bike brand: ${getBikeBrand()}`); // Bike brand: Honda

// Example 7: Partial application with bind()
console.log("=== Partial application with bind() ===");
function multiply(a, b, c) {
  return a * b * c;
}

const multiplyBy2 = multiply.bind(null, 2);
console.log(`2 * 3 * 4 = ${multiplyBy2(3, 4)}`); // 2 * 3 * 4 = 24

const multiplyBy2And3 = multiply.bind(null, 2, 3);
console.log(`2 * 3 * 5 = ${multiplyBy2And3(5)}`); // 2 * 3 * 5 = 30

// Example 8: Using bind() with setTimeout (simulating event handlers)
console.log("=== Using bind() with setTimeout ===");
function greet(greeting) {
  console.log(`${greeting}, ${this.firstName}!`);
}

setTimeout(greet.bind(person1, "Hello"), 100); // After 100ms: Hello, Anand!
setTimeout(greet.bind(person2, "Hi"), 200); // After 200ms: Hi, Rahul!

// Note: In a real browser environment, bind() is useful for event listeners to maintain 'this' context.
