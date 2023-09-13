/*
 Call and apply immediately calls a function ,aruguments are
 individually passed in call while apply expects an array.
 while bind creates a new function.
*/

var myName = {
  firstName: "Anand",
  lastName: "Raj",
};

var homename = {
  firstName: "Rahul",
  lastName: "Singh",
};

function printFullname(home) {
  this.home = home;
  console.log(
    ` ${this.firstName}` + " " + `${this.lastName}` + " from  " + `${this.home}`
  );
}

//function borrowing
printFullname.call(homename);
printFullname.call(myName);

/* In order to pass more parameters in this function ,
 We can pass additional parameters */
printFullname.call(homename, "Samastipur");
printFullname.call(myName, "kolkata");

// while using apply [] is used for additional parameters
printFullname.apply(homename, ["Samastipur"]);
printFullname.apply(myName, ["kolkata"]);

/* Bind will make a copy of function and will return it rather than
immediately invoking it */

let print = printFullname.bind(homename, "Samastipur");
let print2 = printFullname.bind(myName, "kolkata");
print();
print2();
