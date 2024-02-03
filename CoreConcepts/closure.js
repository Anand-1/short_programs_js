console.log("Closure Loaded");
//Function bundled together with its lexical scope is called closure
/* Lexical scoping: 
   A lexical scope in JavaScript means that a variable defined outside 
   a function can be accessible inside another function defined after the
   variable declaration. But the opposite is not true; the variables defined 
   inside a function will not be accessible outside that function.
*/
/* Usage
  - Module design pattern
  - currying
  - memoize
  - setTimeout
  - maintain the scope
*/
// Example 1:
function init() {
  var name = "Mozilla";
  // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name);
    // use variable declared in the parent function
  }
  displayName();
}
init();

// Example 2

function myName() {
  var num = 1;
  function printMyName() {
    console.log("The value is " + num);
  }
  num = 100;
  return printMyName;
}

var print = myName();
console.log(print); // it will print the function
print(); // It will print the value 100 as reference to num exists

function numberGenerator() {
  // Local “free” variable that ends up within the closure
  var num = 1;
  function checkNumber() {
    console.log(num);
  }
  num++;
  return checkNumber;
}

var numbera = numberGenerator();
numbera();
numbera(); // 2
