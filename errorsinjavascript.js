//1.  Syntax Error
// try {
// func printName(){
//     console.log("Anand")
// }

// printName();
// }
// catch(error){

// }
// 2. Reference Error

// console.log(x);
// Type Error
// let num = 15;
// console.log(num.split(""));

// Evaluation Error

try {
  throw new EvalError("'Throws an error'");
} catch (error) {
  console.log(error.name, error.message);
}

// Range Error

const checkRange = (num) => {
  if (num < 30) throw new RangeError("Wrong number");
  return true;
};

checkRange(20);

//URI Error

console.log(decodeURI("https://www.educative.io/shoteditor"));

console.log(decodeURI("%sdfk"));

/* Internal Error - In the JS engine, this error occurs most often when there is too much data and 
the stack exceeds its critical size. 
When there are too many recursion patterns, switch cases, etc., the JS engine gets overwhelmed.  */
