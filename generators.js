/*
  Its a way to work with functions and iterators .
  - Function execution can be stopped from any where in the 
    inside the function
  - continue from halted position as well 
*/
console.log("Generators Loaded !");

// defining a generator
function* generator_funciton() {
  console.log("1");
  yield 100;
  console.log("2");
  yield 200;
  console.log("Last call");
}

// creating a generator
const generator_obj = generator_funciton();

console.log(generator_obj.next());
console.log(generator_obj.next());
console.log(generator_obj.next());

//Passing Arguments to Generator Functions

function* genFunc() {
  let x = yield "hello";
  console.log(x);
  console.log("Some code here !");
  yield 5;
}

const genFuncObj = genFunc();
console.log(genFuncObj.next());
console.log(genFuncObj.next(6));
console.log(genFuncObj.next());

/////////////////////////////////////////////////////////

// creating iterable object
const iterableObj = {
  // iterator method
  [Symbol.iterator]() {
    let step = 0;
    return {
      next() {
        step++;
        if (step === 1) {
          return { value: "1", done: false };
        } else if (step === 2) {
          return { value: "2", done: false };
        } else if (step === 3) {
          return { value: "3", done: false };
        }
        return { value: "", done: true };
      },
    };
  },
};

for (const i of iterableObj) {
  console.log(i);
}
////////////////////////////////////////////////

// generator function
function* generatorFunc() {
  yield 100;
  yield 200;
}

// returns generator object
const generator = generatorFunc();

console.log(generator.next());

// throws an error
// terminates the generator
console.log(generator.throw(new Error("Error occurred.")));
console.log(generator.next());
/*Uses of Generators
   Generators let us write cleaner code while writing asynchronous tasks.
   Generators provide an easier way to implement iterators.
   Generators execute its code only when required.
   Generators are memory efficient.
 */
