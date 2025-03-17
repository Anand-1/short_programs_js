const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function filterArr(arr, callback) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]) ? filteredArr.push(arr[i]) : null;
  }
  return filteredArr;
}

function isOdd(x) {
  return x % 2 != 0;
}

function isEven(x) {
  return x % 2 === 0;
}

console.log(filterArr(arr, isOdd));
console.log(filterArr(arr, isEven));
