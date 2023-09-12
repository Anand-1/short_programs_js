let name = {
  firstName: "Anand",
  lastName: "Raj",
};

let printName = function () {
  console.log(this.firstName + "" + this.lastName);
};

//traditional way
let printMyName = printName.bind(name);
printMyName();

//polyfill
Function.prototype.mybind = function () {
  return function () {};
};
