console.log("Loaded Join Intersection Operation !");
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];

const joinOp = (arr1, arr2) => {
  let newArr = [...arr1, ...arr2];
  newArr = [...new Set(newArr)];
  return newArr;
};

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
