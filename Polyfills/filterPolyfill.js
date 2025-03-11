Array.prototype.myFilter = function (callback, context) {
  var arr = [];

  for (i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

const arrData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

arrData.myFilter((element) => {
  return element % 2 === 0;
});
