console.log("Loaded Join Intersection Operation !");
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];

const joinOp = (arr1, arr2) => {
  let newArr = [...arr1, ...arr2];
  newArr = [...new Set(newArr)];
  return newArr;
};

var a = [1, 2, 3],
  b = [101, 2, 1, 10];
var c = a.concat(b);
var d = c.filter((item, pos) => c.indexOf(item) === pos);

console.log(d); // d is [1, 2, 3, 101, 10]

const intersectioOp = (arr1, arr2) => {
  let returnArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      returnArr.push(arr1[i]);
    }
  }
  return returnArr;
};

console.log(joinOp(arr1, arr2));
console.log(intersectioOp(arr1, arr2));
const filteredArray = arr1.filter((value) => arr2.includes(value));
console.log(filteredArray);
