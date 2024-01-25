/* 
 JavaScript uses three dots (...) for both the rest and spread operators.
 But these two operators are not the same.

 The main difference between rest and spread is that the rest operator 
 puts the rest of some specific user-supplied values into a JavaScript array.

 But the spread syntax expands iterables into individual elements.
*/

function myBio(firstName, lastName, ...otherInfo) {
  return otherInfo;
}
// Use rest to enclose the rest of specific user-supplied values into an array:
const otherInfo = myBio("Anand", "Raj", "30", "male");
console.log(otherInfo);

// Spread Operator example
function myInfo(firstName, lastName, company) {
  return `${firstName} ${lastName} works ${company} `;
}

// Use spread to expand an array’s items into individual arguments
const myInforMation = myInfo(...["Anand", "Raj", "nowhere"]);
console.log(myInforMation);

// Note: The rest operator is used to put the rest of some specific
// user-supplied values into a JavaScript array.

// Define a destructuring object with two regular variables and one rest variable:
const { firstName, lastName, ...otherInfos } = {
  firstName: "Oluwatobi",
  lastName: "Sofela",
  companyName: "CodeSweetly",
  profession: "Web Developer",
  gender: "Male",
};

console.log(otherInfos);
/* whenever you use rest in a destructuring object,
 the rest operator will produce a properties object. */

/* How to Use Spread to Convert a String into 
 Individual Array Items */

const myName = "Oluwatobi Sofela";

console.log([...myName]);

/* How the Spread Operator Works in a Function Call */
// it will accomodate extra numbers as well
const numbers = [1, 3, 5, 7, 10, 200, 90, 59];

function addNumbers(a, b, c, d) {
  return a + b + c + d;
}

console.log(addNumbers(...numbers));

//How Spread Works in an Object Literal
// it will not clone the identical properties
const myNames = ["Oluwatobi", "Sofela"];
const bio = { ...myNames, firstName: "Oluwatobi", runs: "codesweetly.com" };

console.log(bio);

//////////////////////////////////////////////////////////////////
// What if myName contains non-primitive items?
/* Spread will create a reference between
 the original non-primitive and the cloned one.*/

const myNameInfo = [["Sofela", "is", "my"]];
const aboutMe = ["Oluwatobi", ...myNameInfo, "name."];

console.log(aboutMe);
myNameInfo[0].push("Girl");
console.log(aboutMe);
