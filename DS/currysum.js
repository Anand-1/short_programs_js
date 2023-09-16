/*Currying funtions : 
Its is process of taking a function with multiple arguments and 
transforming it into a sequence of functions each with only single argument .
*/
const sum = (a) => (b) => (c) => (d) => (e) => a + b + c + d + e;
let total = sum(1)(2)(3)(4)(5);
console.log(total);
