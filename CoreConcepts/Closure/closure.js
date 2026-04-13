/*
 * JavaScript Closures: Understanding and Examples
 *
 * A closure is a function that has access to variables in its outer (enclosing) scope,
 * even after the outer function has returned. This allows functions to "remember"
 * the environment in which they were created.
 *
 * Key Concepts:
 * - Lexical Scoping: Variables are accessible based on their position in the code.
 * - Function bundled with its lexical environment forms a closure.
 *
 * Common Uses:
 * - Module design pattern
 * - Currying
 * - Memoization
 * - Maintaining state in asynchronous operations
 * - Private variables
 */

console.log("=== JavaScript Closures Examples ===\n");

// Example 1: Basic Closure
// Inner function accesses outer function's variable
console.log("Example 1: Basic Closure");

function init() {
  const name = "Mozilla"; // Local variable in outer function

  function displayName() {
    // Inner function forms closure, can access 'name'
    console.log(`Name from closure: ${name}`);
  }

  displayName(); // Call inner function
}

init(); // Output: Name from closure: Mozilla

// Example 2: Returning a Function (Closure Preserves State)
console.log("\nExample 2: Returning a Function");

function createGreeter(greeting) {
  // 'greeting' is captured in closure
  return function(name) {
    console.log(`${greeting}, ${name}!`);
  };
}

const sayHello = createGreeter("Hello");
const sayHi = createGreeter("Hi");

sayHello("Alice"); // Output: Hello, Alice!
sayHi("Bob");     // Output: Hi, Bob!

// Example 3: Counter with Private Variable
console.log("\nExample 3: Counter with Private Variable");

function createCounter() {
  let count = 0; // Private variable, not accessible from outside

  return {
    increment: function() {
      count++;
      console.log(`Count: ${count}`);
    },
    decrement: function() {
      count--;
      console.log(`Count: ${count}`);
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
counter.increment(); // Count: 1
counter.increment(); // Count: 2
counter.decrement(); // Count: 1
console.log(`Final count: ${counter.getCount()}`); // Final count: 1

// Example 4: Closure in Loops (Common Pitfall)
console.log("\nExample 4: Closure in Loops");

function createFunctions() {
  const functions = [];

  for (let i = 0; i < 3; i++) {
    // Using 'let' creates block scope, so each closure captures the correct 'i'
    functions.push(function() {
      console.log(`Function ${i}: captured value is ${i}`);
    });
  }

  return functions;
}

const funcs = createFunctions();
funcs[0](); // Function 0: captured value is 0
funcs[1](); // Function 1: captured value is 1
funcs[2](); // Function 2: captured value is 2

// Example 5: Asynchronous Closures
console.log("\nExample 5: Asynchronous Closures");

function delayedGreeting(name, delay) {
  setTimeout(function() {
    // This anonymous function forms a closure, capturing 'name'
    console.log(`Hello, ${name}! (delayed by ${delay}ms)`);
  }, delay);
}

delayedGreeting("Alice", 500);
delayedGreeting("Bob", 1000);

// Example 6: Module Pattern
console.log("\nExample 6: Module Pattern");

const Calculator = (function() {
  let result = 0; // Private variable

  function add(x) {
    result += x;
    return result;
  }

  function subtract(x) {
    result -= x;
    return result;
  }

  function getResult() {
    return result;
  }

  function reset() {
    result = 0;
    return result;
  }

  // Return public API
  return {
    add,
    subtract,
    getResult,
    reset
  };
})();

Calculator.add(10);
Calculator.subtract(3);
console.log(`Calculator result: ${Calculator.getResult()}`); // 7
Calculator.reset();
console.log(`After reset: ${Calculator.getResult()}`); // 0

// Example 7: Currying with Closures
console.log("\nExample 7: Currying with Closures");

function multiply(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    };
  };
}

const multiplyBy2 = multiply(2);
const multiplyBy2And3 = multiplyBy2(3);
const result = multiplyBy2And3(4);

console.log(`Curried result (2 * 3 * 4): ${result}`); // 24

// Example 8: Closure for Data Privacy
console.log("\nExample 8: Closure for Data Privacy");

function createPerson(name, age) {
  // Private variables
  let _name = name;
  let _age = age;

  return {
    getName: function() {
      return _name;
    },
    getAge: function() {
      return _age;
    },
    setAge: function(newAge) {
      if (newAge > 0 && newAge < 150) {
        _age = newAge;
        console.log(`${_name}'s age updated to ${_age}`);
      } else {
        console.log("Invalid age");
      }
    },
    celebrateBirthday: function() {
      _age++;
      console.log(`Happy Birthday, ${_name}! You are now ${_age} years old.`);
    }
  };
}

const person = createPerson("Alice", 25);
console.log(`Name: ${person.getName()}`); // Alice
console.log(`Age: ${person.getAge()}`);   // 25
person.celebrateBirthday();               // Happy Birthday, Alice! You are now 26 years old.
person.setAge(30);                        // Alice's age updated to 30

// Example 9: Common Mistake with var in Loops
console.log("\nExample 9: Common Mistake with var in Loops");

function createFunctionsWithVar() {
  const functions = [];

  for (var i = 0; i < 3; i++) {
    // 'var' has function scope, so all closures share the same 'i'
    functions.push(function() {
      console.log(`Function with var: captured value is ${i}`);
    });
  }

  return functions;
}

const funcsWithVar = createFunctionsWithVar();
// All functions will log 3 because 'i' is 3 after the loop
funcsWithVar[0](); // Function with var: captured value is 3
funcsWithVar[1](); // Function with var: captured value is 3
funcsWithVar[2](); // Function with var: captured value is 3

console.log("\n=== End of Closures Examples ===");