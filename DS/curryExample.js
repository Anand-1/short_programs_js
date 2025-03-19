/*Currying funtions : 
Its is process of taking a function with multiple arguments and 
transforming it into a sequence of functions each with only single argument .
*/
const sum = (a) => (b) => (c) => (d) => (e) => a + b + c + d + e;
let total = sum(1)(2)(3)(4)(5);
console.log(total);

function evaluate(operations) {
  return function (a) {
    return function (b) {
      if (operations == "sum") {
        return a + b;
      } else if (operations === "multiply") {
        return a * b;
      } else return "Invalid Operation !";
    };
  };
}
evaluate("sum")(2)(3);
evaluate("multiply")(2)(3);

// Infinte Currying

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(sum(2)(3));
