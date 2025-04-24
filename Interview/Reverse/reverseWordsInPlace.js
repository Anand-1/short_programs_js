// Keep elements at its own position

let str = "This is Anand Raj";
//sihT si dnanA jaR
function reverseStr(data) {
  let newOne = data
    .split(" ")
    .map((item) => item.split("").reverse().join(""))
    .join(" ");
  console.log(newOne);
}

console.log(reverseStr(str));
