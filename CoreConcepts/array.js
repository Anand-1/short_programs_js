/*
 * JavaScript Arrays: Core Concepts and Methods
 *
 * Arrays are special variables that can hold more than one value.
 * This file demonstrates basic array operations and methods.
 */

// Creating an array
let myArray = ["Anand", "Rahul", "Ajit", "Sumit"];
console.log(`Length of array: ${myArray.length}`);

// Converting to string (comma-separated)
console.log(`Converting to string with toString(): "${myArray.toString()}"`);

// Accessing elements (index starts at 0)
console.log(`Accessing last element: "${myArray[myArray.length - 1]}"`);

// Adding elements
console.log(`Push new element (returns new length): ${myArray.push("Tata")}`);
console.log(`Array after push: ${myArray}`);

console.log(`Pop last element (returns removed element): "${myArray.pop()}"`);
console.log(`Array after pop: ${myArray}`);

console.log(`Unshift new element at start (returns new length): ${myArray.unshift("Tata")}`);
console.log(`Array after unshift: ${myArray}`);

console.log(`Shift first element (returns removed element): "${myArray.shift()}"`);
console.log(`Array after shift: ${myArray}`);

// Checking type
console.log(`Type of myArray: ${typeof myArray}`);

// Checking if it's an array
console.log(`Is array? ${Array.isArray(myArray)}`);

// Joining with separator
console.log(`Joined with "|": ${myArray.join("|")}`);

// Deleting elements (leaves undefined holes - not recommended)
delete myArray[3];
console.log(`After delete (note undefined hole): ${myArray}`);
myArray[3] = "Sumit"; // Restore
console.log(`After restoring: ${myArray}`);

// Concatenating arrays
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(`Concatenated array: ${myChildren}`);

// Flattening nested arrays
const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flat();
console.log(`Flattened array: ${newArr}`);

// Splicing (modifies original array)
// Adds elements at index 2, removes 0 elements
myArray.splice(2, 0, "Lemon", "Kiwi");
console.log(`After splice (add at index 2): ${myArray}`);

// Slicing (does not modify original, creates new array)
const slicedArray = myArray.slice(1);
console.log(`Sliced from index 1: ${slicedArray}`);
console.log(`Original array unchanged: ${myArray}`);

// Sorting arrays
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b); // Ascending order
console.log(`Sorted points (ascending): ${points}`);

// Sorting strings (default lexicographical)
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(`Sorted fruits: ${fruits}`);

// Reversing array
fruits.reverse();
console.log(`Reversed fruits: ${fruits}`);

// Finding elements
console.log(`Index of "Apple": ${fruits.indexOf("Apple")}`);
console.log(`Includes "Banana": ${fruits.includes("Banana")}`);

// Iterating with forEach
console.log("Iterating with forEach:");
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

// Mapping to new array
const upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(`Mapped to uppercase: ${upperFruits}`);

// Filtering
const longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(`Filtered (length > 5): ${longFruits}`);

// Reducing
const totalLength = fruits.reduce((sum, fruit) => sum + fruit.length, 0);
console.log(`Total length of fruit names: ${totalLength}`);

// Additional Array Methods

// Finding elements
console.log("\n=== Finding Elements ===");
const numbers = [10, 20, 30, 40, 50];

// find() - Returns the first element that satisfies the condition
const found = numbers.find(num => num > 25);
console.log(`First number > 25: ${found}`); // 30

// findIndex() - Returns the index of the first element that satisfies the condition
const foundIndex = numbers.findIndex(num => num > 25);
console.log(`Index of first number > 25: ${foundIndex}`); // 2

// Testing conditions
console.log("\n=== Testing Conditions ===");

// some() - Tests if at least one element passes the test
const hasEven = numbers.some(num => num % 2 === 0);
console.log(`Has even numbers: ${hasEven}`); // true

// every() - Tests if all elements pass the test
const allEven = numbers.every(num => num % 2 === 0);
console.log(`All even numbers: ${allEven}`); // true (all are even)

// Modifying arrays
console.log("\n=== Modifying Arrays ===");

// fill() - Fills the array with a static value
const fillArray = [1, 2, 3, 4, 5];
fillArray.fill(0, 2, 4); // Fill with 0 from index 2 to 4 (not including 4)
console.log(`After fill(0, 2, 4): ${fillArray}`); // [1, 2, 0, 0, 5]

// copyWithin() - Copies part of the array to another location
const copyArray = [1, 2, 3, 4, 5];
copyArray.copyWithin(0, 3, 5); // Copy from index 3 to 5 to index 0
console.log(`After copyWithin(0, 3, 5): ${copyArray}`); // [4, 5, 3, 4, 5]

// flatMap() - Maps each element and flattens the result
const flatMapArray = [1, 2, 3];
const flatMapped = flatMapArray.flatMap(x => [x, x * 2]);
console.log(`FlatMap result: ${flatMapped}`); // [1, 2, 2, 4, 3, 6]

// Creating arrays
console.log("\n=== Creating Arrays ===");

// Array.from() - Creates array from iterable or array-like object
const fromString = Array.from("hello");
console.log(`Array from string: ${fromString}`); // ['h', 'e', 'l', 'l', 'o']

const fromSet = Array.from(new Set([1, 2, 2, 3]));
console.log(`Array from Set: ${fromSet}`); // [1, 2, 3]

// Array.of() - Creates array with variable number of arguments
const ofArray = Array.of(1, 2, 3, 4);
console.log(`Array.of(1, 2, 3, 4): ${ofArray}`); // [1, 2, 3, 4]

// Iterators
console.log("\n=== Array Iterators ===");

// entries() - Returns an iterator of key/value pairs
const entries = fruits.entries();
console.log("Entries:");
for (let [index, value] of entries) {
  console.log(`${index}: ${value}`);
}

// keys() - Returns an iterator of keys (indices)
const keys = fruits.keys();
console.log("Keys:", Array.from(keys)); // [0, 1, 2, 3]

// values() - Returns an iterator of values
const values = fruits.values();
console.log("Values:", Array.from(values)); // ['Orange', 'Mango', 'Banana', 'Apple']

// Advanced splice example (removal)
console.log("\n=== Advanced Splice (Removal) ===");
const spliceRemove = [1, 2, 3, 4, 5];
const removed = spliceRemove.splice(1, 2, 'a', 'b'); // Remove 2 elements from index 1, add 'a', 'b'
console.log(`Removed elements: ${removed}`); // [2, 3]
console.log(`Array after splice: ${spliceRemove}`); // [1, 'a', 'b', 4, 5]

// Slice with parameters
console.log("\n=== Slice with Parameters ===");
const sliceArray = [0, 1, 2, 3, 4, 5, 6];
console.log(`Slice(1, 4): ${sliceArray.slice(1, 4)}`); // [1, 2, 3]
console.log(`Slice(-3): ${sliceArray.slice(-3)}`); // [4, 5, 6]
console.log(`Slice(2, -1): ${sliceArray.slice(2, -1)}`); // [2, 3, 4, 5]
