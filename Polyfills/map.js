Array.prototype.myMap = function () {
  const returnArry = [];
  for (let i = 0; i < this.length; i++) {
    returnArry[i] = this[i];
  }
  return returnArry;
};

const arr1 = [1, 2, 3].myMap();

console.log(arr1);

Array.prototype.myMap = function (callback, context) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback.call(context, this[i], i, this));
  }
  return arr;
};

let arr = [1, 2, 4, 5, 6, 4];
let context = {
  multiplier: 7,
  offset: 10,
};

let newArr = arr.myMap(function (value) {
  return value * this.multiplier + this.offset;
}, context);

console.log(newArr);
