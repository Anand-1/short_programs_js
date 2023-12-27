/* Arrows are the concise way of writing function statements 
   - Concise syntax 
     - if only one statement in function body, return keyword and 
       curly braces are not needed 
     - no funntion keyword is needed while defining it 
   - Arrow functions do not have thier own "this" context; Instead 
     they inherit it from enclosing scope.
   - Arrow functions also do not have their own new.target, 
     making them unsuitable for use with new to create instances 
     of an object.
*/

//1
const add = (x, y) => x + y;

//2

function Person() {
  this.age = 0;
  setInterval(function growUp() {
    this.age++;
    console.log(this.age);
  }, 1000);
}

// Person();

function Person2() {
  this.age = 0;

  setInterval(() => {
    // 'this' refers to the Person instance
    this.age++;
    console.log(this.age);
  }, 1000);
}

// Person2();

// Traditional function expression
const traditionalFunction = function () {
  console.log(arguments);
};

traditionalFunction(1, 2, 3); // Arguments object is available

// Arrow function
const arrowFunction = () => {
  console.log(arguments);
  // ReferenceError: arguments is not defined
};

arrowFunction(1, 2, 3); // ReferenceError
