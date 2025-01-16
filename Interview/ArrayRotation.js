console.log("Array Rotation loaded !");
// Brute force
let data = [1, 2, 3, 4, 5, 6];
let rotation = 3;
const arrayRot = (data, key) => {
  for (let i = 0; i < key; i++) {
    data.unshift(data.pop());
  }
  return data;
};
console.log(arrayRot(data, rotation));

// Space complexity : O(1), or constant space
// Runtime complexity : O(n*k), as each time unshift is re-seating elements
// console.log(arrayRotate(data, 2));

let key = 3;
const rotateUsingWhile = (data, key) => {
  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  key %= data.length;
  reverse(data, 0, data.length - 1);
  console.log(data);
  reverse(data, 0, key - 1);
  console.log(data);
  reverse(data, key, data.length - 1);
  console.log(data);
  return data;
};
console.log("Rotation Using While " + rotateUsingWhile(data, key));

// const rotateArray = (arr, k) => arr.slice(k).concat(arr.slice(0, k));
// console.log(rotateArray(data, 2));

const arr = [1, 3, 6, 5, 4];
const rotatedArr = arr.map((e, i) => arr[arr.length - i - 1]);
console.log(rotatedArr);
