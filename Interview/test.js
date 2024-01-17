var arr = [1, 2, 3, 4, 5, 6];
const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.at(1));
arr.splice(arr.length - 1, 1, "Anand");
console.log(arr);
console.log(arr.length);
console.log(arr[5]);

console.log(arr.slice(0, 2));
console.log(arr);
arr.fill("Anand");
console.log(arr);
