/*for...in: This loop iterates over the enumerable property names (keys) of an object.
 It's designed for iterating through the properties of objects, 
 including those inherited from the prototype chain. */
const myObject = { a: 1, b: 2, c: 3 };
for (const key in myObject) {
  console.log(key);
}

/*for...of: This loop iterates over the values of an iterable object, such as an array,
 string, Map, Set, or the arguments object. It was introduced 
in ES6 to provide a more straightforward way to loop through collections. */

const myArray = [10, 20, 30];
for (const value of myArray) {
  console.log(value); // Output: 10, 20, 30
}

let data = [1, 2, 3, 4];
for (let item in data) {
  console.log(item);
  console.log(item);
}
