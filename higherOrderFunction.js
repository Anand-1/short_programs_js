/*https://www.freecodecamp.org/news/higher-order-functions-in-javascript/ */

function filterFunction(arr, callback) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]) ? filteredArr.push(arr[i]) : null;
  }
  return filteredArr;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// Function containing logic for filtering out odd numbers

function isOdd(x) {
  return x % 2 != 0;
}

// Function containing logic for filtering out even numbers

function isEven(x) {
  return x % 2 === 0;
}

// For filtering out odd numbers

filterFunction(arr, isOdd);
console.log(filterFunction(arr, isOdd));
// Output of console.log(filterFunction(arr, isOdd)):
// [ 1, 3, 5, 7, 9, 11 ]

// For filtering out even numbers

filterFunction(arr, isEven);
console.log(filterFunction(arr, isEven));
// Output of console.log(filterFunction(arr, isEven)):
// [ 2, 4, 6, 8, 10 ]

//Polyfill of filter function
Array.prototype.filterFunction = function (callback) {
  const filteredArr = [];
  for (let i = 0; i < this.length; i++) {
    callback(this[i]) ? filteredArr.push(this[i]) : null;
  }
  return filteredArr;
};

//In the above code,
//this refers to the array the prototype is called upon.

const arr2 = [1, 2, 3, 4, 5];
console.log(arr2.filter(isEven));

// Using our own filterFunction() prototype implementation
arr.filterFunction((x) => x > 5).filterFunction((x) => x % 2 === 0);

//Using the inbuilt filter() implementation
arr.filter((x) => x > 5).filter((x) => x % 2 === 0);

// both give the same output on console.log: [ 6, 8, 10 ]

/*How to Return
 a Function from Another Function in JavaScript */

function calculate(operation) {
  switch (operation) {
    case "ADD":
      return function (a, b) {
        console.log(`${a} + ${b} = ${a + b}`);
      };
    case "SUBTRACT":
      return function (a, b) {
        console.log(`${a} - ${b} = ${a - b}`);
      };
  }
}

const calculateAdd = calculate("ADD");
console.log(calculateAdd);

// Output:
// [Function (anonymous)]

const calculateSubtract = calculate("SUBTRACT");
calculateSubtract(2, 3);
// Output: 2 - 3 = -1

calculate("ADD")(2, 3);
// Output: 2 + 3 = 5

calculate("SUBTRACT")(2, 3);
// Output: 2 - 3 = -1
