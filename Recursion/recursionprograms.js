let data = [3, 3, 4, 5, 32];

function multiply(data) {
  console.log(data);
  if (data.length < 1) {
    return 1;
  } else {
    let newdata =
      data[data.length - 1] * multiply(data.slice(0, data.length - 1));
    console.log(newdata);
    return newdata;
  }
}

console.log(multiply(data));

// Factorial example
console.log("Factorial Example !");
let n = 5;

function factorial(n) {
  if (n == 1 || n == 0) return 1;
  else return n * factorial(n - 1);
}
console.log(factorial(n));

//  Range of Numbers
console.log("Range of Numbers Problem !");
function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) return [];
  else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

// rangeOfNumbers(1,5) =>[1,2,3,4,5]
// rangeOfNumbers(1,4) =>[1,2,3,4]
// rangeOfNumbers(1,3) =>[1,2,3]
// rangeOfNumbers(1,2) =>[1,2]
// rangeOfNumbers(1,1) =>[1]
// rangeOfNumbers(1,0) =>[]

console.log(rangeOfNumbers(5, 10));
