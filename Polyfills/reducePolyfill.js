Array.prototype.myReduce = function (callback, initialValue) {
  if (this == null || typeof callback !== "function") {
    throw new TypeError("Array.prototype.myReduce called on null or undefined");
  }
  let accumulator = initialValue !== undefined ? initialValue : this[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};

// Example usage
const arr = [1, 2, 3, 4];
const sum = arr.myReduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 10
