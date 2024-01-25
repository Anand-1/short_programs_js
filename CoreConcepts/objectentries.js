const ssn = Symbol("ssn");
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  [ssn]: "123-345-789",
};

const objects = Object.entries(person);
console.log(objects);
