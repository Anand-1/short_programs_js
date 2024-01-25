// reverse a number
//parse float to convert string to number
// * Math.sign(data)  to provide proper sign
let data = -23456;
let data2 =
  parseFloat(data.toString().split("").reverse().join("")) * Math.sign(data);
console.log(data2);

var string1 = "Anand";
var string2 = "Raj";

[string1, string2] = [string2, string1];
console.log(string1);
console.log(string2);

var friends = ["Rahul", "Anand", "Raj", "Singh", "chauhan", "Mister"];

var friends1 = friends.reverse();
console.log(friends1);
