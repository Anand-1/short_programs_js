let i = 0;
function callme() {
  console.log(i++ + "Hell0");
  i++;
  if (i > 10) {
    clearInterval(id);
    console.log("I m done !");
  }
}

// let id = setInterval(callme, 2000);

console.log("-----------var let const understading");

var myName = "I am Rahul";
function printMyName() {
  var newName = "I am Anand";
  console.log(myName);
}

console.log(newName);

// var can be redeclared and can be redefined
// In hoisting declarations are hoisted to top
// of thier scope

printMyName();

// understanding let
//block is a chunk of code  bounded by {}.
