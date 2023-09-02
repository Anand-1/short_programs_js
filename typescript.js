"use strict";
/*TypeScript is JavaScript with added syntax for types ,
or syntactic superset of JavaScript which adds static typing.*/
console.log("Typescript");
// Explicit type assignment
let myName = "Anand Raj";
// Implicit type assignment
let myNewName = "Anand Raj";
/* Having TypeScript "guess" the type of a value is called infer. */
// define our readonly tuple
const ourReadonlyTuple = [
    5,
    true,
    "The Real Coding God",
];
// throws error as it is readonly.
ourReadonlyTuple.push("Coding God took a day off");
const graph = [55.2, 41.3];
const [x, y] = graph;
console.log(x);
console.log(y);
