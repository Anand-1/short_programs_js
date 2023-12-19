// Arrow + Template Literals
const myName = "Anand Raj";
const data = (myName) => ` My name is ${myName}`;
console.log(data(myName));

// Destructuring Objects
// Using it one can extract properties from object
// and assign them to variables in Javascript

const employee = {
  name: "Anand",
  age: 30,
  department: {
    designation: "I am software Developer",
  },
};

const {
  fname,
  age,
  department: { designation },
  falana,
} = employee;
console.log(fname, age, designation, falana);

//Destructing arrays
// It unpacks values from arrays or properties from
// the objects into distinct variables.

let [firstName, middleName, last, address] = ["Anand", "Raj", "Singh"];
console.log("lastname " + last);

//Object Literals
function studentAddress(address) {
  const { city, state, data } = address;
  const newStudentAddress = {
    city,
    state,
    data,
    country: "India",
  };
  console.log(
    `${newStudentAddress.city} ` +
      `${newStudentAddress.state} ` +
      `${newStudentAddress.country}` +
      `${newStudentAddress.data}`
  );
}

studentAddress({ city: "Samastipur", state: "Bihar", data: function () {} });

//for...of loop

const students = [
  { name: "Anand", city: "Samasttipur" },
  { name: "Rahul", city: "Rasalpur" },
  { name: "Sumit", city: "Jayanagar" },
];

for (const student of students) {
  console.log(student.name + " belongs to " + student.city);
}

console.log("------- Spread operator -----------");
const shoppingList = ["bread", "milk", "butter", "spaggetti", "onion"];
const addshoppingList = [...shoppingList, "tofu", "pasta"];
console.log(addshoppingList);

let listData = (...nums) => {
  console.log(nums);
};

listData(3, 4, 5, 5, 5, 4, 3, 3);
