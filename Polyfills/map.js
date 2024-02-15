Array.prototype.myMap = function () {
  const returnArry = [];
  for (let i = 0; i < this.length; i++) {
    returnArry[i] = this[i];
  }
  return returnArry;
};

const arr1 = [1, 2, 3].myMap();

console.log(arr1);
