// sorted
let data = [2, 24, 3, 34, 433, 1, 5, 6, 67];

/* new Set(arr) is a set containing all the values in arr,
which duplicates necessarily removed .the spread converts 
back 'this ' into array  */
console.log(new Set(data));
let dataSet = [...new Set(data)];
console.log(dataSet);

let numbers = [0, 1, 2, 3, 10, 20, 30];
numbers.sort((a, b) => a - b);

console.log(numbers);
