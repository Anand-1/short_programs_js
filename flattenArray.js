//flattening nested array

let ary = [1, 2, 3, [4, [5, 5], 9], [10]];

let dataNew = function flatten(ary) {
  var ret = [];
  // Initialized Empty Array for result
  for (var i = 0; i < ary.length; i++) {
    // Looped -> checked if elements are array or not
    if (Array.isArray(ary[i])) {
      // If array they are concatenated to array
      ret = ret.concat(flatten(ary[i]));
    } else {
      // if normal elements pushed to result
      ret.push(ary[i]);
    }
  }
  return ret;
};
///flattened
console.log(dataNew(ary));
