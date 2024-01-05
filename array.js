// array is special variable that can hold more than one value

let myArray = ["Anand", "Rahul", "Ajit", "Sumit"];
console.log(`Length of array is "${myArray.length}"`);

// It will convert to comma separated string
console.log(`converting to string with toString() "${myArray.toString()}"`);

// As index starts with zero , length-1 is last element
console.log(`Acccessing last element "${myArray[myArray.length - 1]}"`);

console.log(`Push new element "${myArray.push("Tata")}"`);
console.log(`Array after push ${myArray}`);

console.log(`Pop new element "${myArray.pop()}"`);

console.log(`unshift new element "${myArray.unshift("Tata")}"`);

console.log(`shift new element "${myArray.shift()}"`);

console.log(typeof myArray);

// this will return true , if array
console.log(Array.isArray(myArray) + "<---------------------   Important");

// Join adds possibility of separator when used
console.log(myArray.join("|"));

// Note:  delete leaves undefined holes
delete myArray[3];
console.log(myArray);
myArray[3] = "Sumit";
console.log(myArray);

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

console.log(myChildren);

const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flat();
console.log(newArr);

// splice() method adds new items to an array
// First parameter defines the position where new elements should be added
// Second parameter defines how many elements needs to be removed
let newArray = myArray.splice(2, 0, "Lemon", "Kiwi");
console.log(myArray);

// slice does not remove anything from original array
// slice() method slices out a piece of an array
// it creates new array
console.log(myArray.slice(1));
console.log(myArray);

// Sorting array of numbers
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});
console.log(points);
