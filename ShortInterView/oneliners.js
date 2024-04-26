//https://medium.com/deno-the-complete-reference/10-javascript-coding-interview-questions-part-2-42250060345c

/*1.Can you write a line of code in JavaScript to swap the values of
 two variables without using a temporary variable? */
var data1 = 3;
var data12 = 4;
[data1, data12] = [data12, data1];
console.log(data1, data12);

/*Question 8: Can you write a function in JavaScript to transpose a 2D matrix?
 */
var data2 = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

function transposeArray(array, arrayLength) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push([]);
  }

  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < arrayLength; j++) {
      newArray[j].push(array[i][j]);
    }
  }

  return newArray;
}
const transposeMatrix = (matrix) =>
  matrix[0].map((col, i) => matrix.map((row) => row[i]));

console.log(transposeMatrix(data2));

/*Question 3: Can you write a one-liner in JavaScript to find the 
longest consecutive sequence of a specific element in an array? */
const longestConsecutiveSequence = (arr, element) =>
  Math.max(
    ...arr
      .join("")
      .split(element)
      .map((group) => group.length)
  );

/*Question 11: Can you write a function
 in JavaScript to create a countdown from a given number? */
const countdown = (n) => Array.from({ length: n }, (_, i) => n - i);
console.log(countdown(6));

let sentence = "This is the Anand from samastipur";
const longestWord = (sentence) =>
  sentence
    .split(" ")
    .reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      ""
    );

console.log(longestWord(sentence));

/*Question 17: Can you write a function in JavaScript to count 
the occurrences of each element in an array and return the result as an object?
const  */
const countOccurrences = (arr) =>
  arr.reduce((acc, val) => ((acc[val] = (acc[val] || 0) + 1), acc), {});

const inputArray = [1, 2, 2, 3, 4, 4, 4, 5];
const result = countOccurrences(inputArray);
console.log(result);

/*Question 16: Can you write a function in JavaScript to generate a random 
integer between a specified minimum and maximum value (inclusive)? */
const randomInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const minValue = 5;
const maxValue = 10;
const resultNew = randomInRange(minValue, maxValue);
console.log(resultNew);

/*Question 32: Can you write a JavaScript function to find the 
first non-repeated character in a given string?
const firstNonRepeatedChar = (str) => str */
const firstNonRepeatedChar = (str) =>
  str.split("").find((char) => str.indexOf(char) === str.lastIndexOf(char));

const s1 = "programming";
const r1 = firstNonRepeatedChar(s1); // r1: 'o'

const s2 = "hello";
const r2 = firstNonRepeatedChar(s2); // r2: 'h'

/*Can you write a JavaScript function to flatten a nested object? */
// const flattenObject = (obj) =>
//   Object.assign(
//     {},
//     ...(function flattenObj(o) {
//       return [].concat(
//         ...Object.keys(o).map((k) =>
//           typeof o[k] === "object" ? flattenObj({ [k]: o[k] }) : { [k]: o[k] }
//         )
//       );
//     })(obj)
//   );
// const o = { a: 1, b: { c: 2, d: { e: 3 } } };
// const r = flattenObject(o);

/*Can you write a JavaScript function to rotate the elements
 of an array to the right by a specified number of positions? */

const rotateArray = (arr, positions) =>
  arr.slice(-positions).concat(arr.slice(0, -positions));
const arr = [1, 2, 3, 4, 5];
const pos = 2;
const result3 = rotateArray(arr, pos);
