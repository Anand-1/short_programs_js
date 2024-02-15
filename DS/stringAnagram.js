// string anagram
// 'hello'  >>> 'lleho'
// 'ajay'  >>> 'aajy'

// length check

function checkStringsAnagram(a, b) {
  //length check
  let len1 = a.length;
  let len2 = b.length;
  if (len1 !== len2) {
    console.log("Invalid Input");
    return "false";
  }
  let str1 = a.split("").sort().join("");
  let str2 = b.split("").sort().join("");
  if (str1 === str2) {
    console.log("True");
  } else {
    console.log("False");
  }
}
checkStringsAnagram("indian", "ndiani");
