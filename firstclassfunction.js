/*First-Class Function: A programming language is said to have
First-class functions if functions in that language are treated
like other variables. So the functions can be assigned to any other
variable or passed as an argument or can be returned by another function.
JavaScript treat function as a first-class-citizens.  */

var argument = "";
a(argument);
b(); // type error function not defined

// function Statement aka function Decaration
function a(paramter) {
  console.log("function statement !");
}

// function expression , when function is named then called named function expression

var b = function () {
  console.log("Function Expresssion!");
};

// anonymous function , it will thro error name is needed
// function(){
//     console.log("anonymous function !")
// }
