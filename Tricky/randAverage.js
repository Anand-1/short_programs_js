// "use strict";
// let a = 12;
// console.log(a * 12);
// console.log(a ** 12);
// console.log(Math.pow(12, 12));

// /////////////////////////////////////////////

// function test() {
//   slary = 12;
//   console.log(slary);
// }
// test();
//
/////////////////////////////////////////////
// function test2() {
//   console.log(test2.abc);
// }
// test2(); // undefined
// test2.abc = 400;
// test2.abc = 600;
// test2(); // 600

/////////////////////////////////////////////

// console.log({} == {}); // false
// console.log({} === {}); // false

// ////////////////////////////////////////////

// let name = "Anand";
// let newName = name;
// newName = "Raj";
// console.log(name); // Anand

// ///////////////////////////////////////////////

// let a = {
//   name: "Anand",
// };
// let b = {
//   ...a,
// };

// b.name = "Raj";
// console.log(a.name); // Anand

// //////////////////////////////////////////////
// let x = 12;
// let y = new Number(12);
// let z = 12;
// console.log(typeof x);
// console.log(typeof y);
// console.log(x === y);
// console.log(y === z);

// ////////////////////////////////////////////////
// function test3(record) {
//   if (record == { age: 28 }) {
//     console.log("You are adult !");
//   } else if (record === { age: 28 }) {
//     console.log("You are still adult !");
//   } else {
//     console.log("No record !");
//   }
// }

// test3({ age: 28 });
// ///////////////////////////////////////////

// console.log(+true); // convert to integer ,so 1
// console.log(!"anand"); // string is truthy value , so answer is true

// ///////////////////////////////////////////

// var a = {};
// var b = { key: "b" };
// var c = { key: "c" };
// a[b] = 600;
// b[c] = 700;
// console.log(a);
// console.log(a[c]);
// console.log(a[b]);
// console.log(b[c]);
// console.log(b[b]);
