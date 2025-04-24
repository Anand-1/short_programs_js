// Filter is higher order function that returns fitered values as per condition

Array.prototype.myFilter = function (callback) {
  // There needs to be a return array, so initilize
  var arr = [];
  for (i = 0; i < this.length; i++) {
    if (callback.call(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

const arrData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let newData = arrData.myFilter((element) => {
  return element % 2 === 0;
});

console.log(newData);
