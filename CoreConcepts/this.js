/* 'this' automatically resolves to an object or scope 
depending on the context at which is was defined. 
There are generally four kinds of bindings:
- Default Binding
- Implicit Binding
- Explicit Binding
- Constructor Call Binding
*/

/* As you can see, name() is a standalone, unattached function,
 so it is bound to the global scope. As a result, the this.name reference 
resolves to the global variable const name = 'Kingsley'.
When set in strict mode, the this reference is set to undefined.
 */

function alert() {
  "strict mode";
  console.log(this.name + " is calling");
}

const name = "Kingsley";
alert(); // Kingsley is calling

/* According to the binding rule in JavaScript, a function can use 
an object as its context only if that object is bound to it at the 
call site. This form of binding is known as implicit binding.
Put simply, when you call a function using dot notation, this is implicitly 
bound to the object the function is being called from. */

function alert() {
  console.log(this.age + " years old");
}

const myObj = {
  age: 22,
  alert: alert,
};

const myObj2 = {
  age: 22,
  alert: alert,
  nestedObj: {
    age: 26,
    alert: alert,
  },
};

myObj.nestedObj.alert(); // 26 years old
myObj.alert(); // 22 years old

/*To explicitly bind a function call to a context,
 you simply have to invoke the call() on
 that function and pass in the context object as parameter: */

function alert() {
  console.log(this.age + " years old");
}

const myObj3 = {
  age: 22,
};

alert.call(myObj3); // 22 years old

/* Now here's the fun part. Even if you were to pass around that 
function multiple times to new variables (currying), every invocation
 will use the same context because it has been locked 
(explicitly bound) to that object. This is called hard binding. */

function alert() {
  console.log(this.age);
}

const myObj4 = {
  age: 22,
};

const bar = function () {
  alert.call(myObj);
};

bar(); // 22
setTimeout(bar, 100); // 22
// a hard-bound `bar` can no longer have its `this` context overridden
bar.call(window); // still 22

/*When a function is invoked with the new keyword in front of it, 
otherwise known as a constructor call, the following things occur:

A brand new object is created (or constructed)
The newly constructed object is [[Prototype]]-linked to the function that constructed it
The newly constructed object is set as the this binding for that function call. */

function giveAge(age) {
  this.age = age;
}

const bar2 = new giveAge(22);
console.log(bar2.age); // 22
