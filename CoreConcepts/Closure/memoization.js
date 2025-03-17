/* Memoization is a optimization technique that help make heavy computations processes
more efficient by storing the returns of processes as caches
- It should be a pure function(which returns same output for same input - no sideEffect) 
 */
function add(x) {
  return x + 5;
}

const memo = (func) => {
  let cache = {};
  return function (value) {
    if (cache[value]) {
      console.log("Return the value from Cache!");
      return cache[value];
    } else {
      console.log("New Calculation !");
      const result = func(value);
      cache[value] = result;
      return result;
    }
  };
};

const calculate = memo(add);
// memo is supposed to get callback add in order to be called later
console.log(calculate(10));
// calculate return a function that takes 'x' as argument (closure)
console.log(calculate(10));

// Memoize Multiplications
function multiplication(x, y) {
  return x * y;
}

// multiMemo is a higher order function
const multiMemo = (func) => {
  let cache = {};
  return function (x, y) {
    console.log(x, y);
    let data = JSON.stringify([x, y]);
    console.log(data);
    if (cache[data]) {
      console.log("Return from the cache !");
      return cache[data];
    } else {
      console.log("Return from new Calculation !");
      let result = func(x, y);
      cache[data] = result;
      return result;
    }
  };
};

const multiCalc = multiMemo(multiplication);
console.log(multiCalc(10, 20));
console.log(multiCalc(10, 20));
