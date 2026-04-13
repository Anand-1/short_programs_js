/*
  'this' binding in JavaScript depends on how a function is called.
  There are four common binding rules:
  - Default binding
  - Implicit binding
  - Explicit binding (call/apply/bind)
  - Constructor binding (new)
*/

// -----------------------------------------------------------------------------
// Default Binding
// -----------------------------------------------------------------------------
// When a function is called without any object reference, it uses default binding.
// In non-strict mode, the default object is the global object (window in browser,
// global in Node). In strict mode, `this` is undefined.

globalThis.name = "Anand";
function standaloneFunction() {
  console.log("Default binding example:");
  console.log("  this === globalThis?", this === globalThis);
  console.log("  name from this:", this.name);
}

standaloneFunction();

// -----------------------------------------------------------------------------
// Implicit Binding
// -----------------------------------------------------------------------------
// When a function is called as a property of an object, `this` is bound to that object.

function showAge() {
  console.log(`${this.age} years old`);
}

const person = {
  age: 22,
  showAge,
};

const company = {
  age: 42,
  teamMember: {
    age: 26,
    showAge,
  },
};

person.showAge(); // 22 years old
company.teamMember.showAge(); // 26 years old

// -----------------------------------------------------------------------------
// Explicit Binding
// -----------------------------------------------------------------------------
// call() and apply() let you explicitly set the `this` value for a function call.

function showAgeExplicit() {
  console.log(`${this.age} years old`);
}

const customer = {
  age: 30,
};

showAgeExplicit.call(customer); // 30 years old

// bind() returns a new function with `this` permanently set to the given object.
const boundShowAge = showAgeExplicit.bind(customer);
boundShowAge(); // 30 years old
boundShowAge.call({ age: 99 }); // still 30 years old

// -----------------------------------------------------------------------------
// Hard Binding
// -----------------------------------------------------------------------------
// A wrapper function can lock `this` so it cannot be overridden later.

function showAgeHard() {
  console.log(this.age);
}

const hardPerson = {
  age: 22,
};

const hardBound = function () {
  showAgeHard.call(hardPerson);
};

hardBound(); // 22
setTimeout(hardBound, 100); // 22
hardBound.call({ age: 99 }); // still 22

// -----------------------------------------------------------------------------
// Constructor Binding
// -----------------------------------------------------------------------------
// When a function is called with `new`, a fresh object is created and bound to `this`.

function PersonWithAge(age) {
  this.age = age;
}

const instance = new PersonWithAge(22);
console.log("Constructor binding example:", instance.age); // 22
