// sorted
let data = [2, 24, 3, 34, 433, 1, 5, 6, 67];
let dataSet = [...new Set(data)];
console.log(dataSet);

let numbers = [0, 1, 2, 3, 10, 20, 30];
numbers.sort((a, b) => a - b);

console.log(numbers);
