/* Benefits : 
   - Easy to comprehend 
   - Less prone to sideeffects as these functions don't modify
     array ,and intead create a new one.
   - Avoid explicit loops 
*/

let studentRecords = [
  { name: "John", id: 123, marks: 98 },
  { name: "Baba", id: 101, marks: 23 },
  { name: "yaga", id: 200, marks: 45 },
  { name: "Wick", id: 115, marks: 75 },
];

//1. Traditional way
let namesTrad = [];
for (let index = 0; index < studentRecords.length; index++) {
  namesTrad.push(studentRecords[index].name.toUpperCase());
}
console.log(namesTrad);

// 2. for(...of)
let namesof = [];
for (const student of studentRecords) {
  names.push(student.name.toUpperCase());
}
console.log(namesof); // logs: [ 'JOHN', 'BABA', 'JOHN', 'WICK' ]
// 3. forEach()
let namesEach = [];
// In forEach , its camelCase and no return
studentRecords.forEach((student) => {
  names.push(student.name.toUpperCase());
});
console.log(namesEach); // logs: [ 'JOHN', 'BABA', 'JOHN', 'WICK' ]

// In all of above cases we will have to create empty array

const names = studentRecords.map((data) => data.name);
console.log(names);
// map have return type

//filter() returns only those elements from array which fulfils the provided criteria.
const ids = studentRecords.filter((data) => data.id > 120);
console.log(ids);

//The accumulator is the value that we end up with
//reducer is what action we will perform in order to get to one value
const finalData = studentRecords.reduce(
  (accumulator, curr_value) => accumulator + curr_value.marks,
  0
);
console.log(finalData);

//The every() method checks if all array values pass a test.
// It returns true or false

const numberEvery = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

//The some() method checks if some array values pass a test.

const numberSome = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
