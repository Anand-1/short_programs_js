let data = "My name is Anand";

let lengthData = data.length;

console.log(`Length of string is ${lengthData}`);

// Extracting string parts
// slice(start, end) -> extracts (start to end(end not included))
console.log("<------- slice ------->");
console.log(`Sliced content is "${data.slice(0, 5)}"`);
console.log(`Sliced with one parameter "${data.slice(5)}"`);
console.log(`Sliced with one parameter and negative "${data.slice(-5)}"`);

// stubstring is similar to slice , value less than zero is
// treated as zero
console.log("<------ substring ----->");
console.log(`substring value is "${data.substring(7, 16)}"`);
console.log(`Substring with one parameter "${data.substring(5)}"`);
console.log(
  `Substring with one parameter and negative "${data.substring(-5)}"`
);
// substr is similar to slice but second parameter is length
console.log("<-----substr----->");
console.log(`substr value is "${data.substr(7, 16)}"`);
console.log(`Substr with one parameter "${data.substr(5)}"`);
console.log(`Substr with one parameter and negative "${data.substr(-5)}"`);

// replace replaces ith specified value,
// returns a new string and first match value
console.log("<-----Replace ----->");
console.log(`text with replaced value "${data.replace("Anand", "Rahul")}"`);
console.log(
  `text with replaceAll value "${data.replaceAll("Anand", "Rahul")}"`
);

// toUpperCase & toLowerCase
console.log("<----- toUpperCase , toLowerCase----->");
console.log(`Lower case "${data.toLowerCase()}"`);
console.log(`Upper case "${data.toUpperCase()}"`);

let text1 = " Hello";
let text2 = "World ";

// Strings are immutable they can be replaced not modified
console.log("<----- concat ----->");
console.log(`Concated value is "${text1.concat(" ", text2)}"`);
console.log(`Concated value with trim is "${text1.concat(" ", text2).trim()}"`);
console.log(
  `Concated value with trimStart is "${text1.concat(" ", text2).trimStart()}"`
);
console.log(
  `Concated value with trimEnd is "${text1.concat(" ", text2).trimEnd()}"`
);

// padStart and padEnd , text nneds to be string
// padStart(length to which padded , padded value)
console.log("<----- padStart , padEnd ----->");
console.log(`Text with padStart "${data.padStart(4, "x")}"`);
console.log(`Text with padEnd "${data.padEnd(4, "x")}"`);

// charCodeAt and charAt
console.log("<--- charAt, property access & charCodeAt---->");
console.log(`charAt usage '${data.charAt(0)}'`);
console.log(`charCodeAt usage '${data.charCodeAt(0)}'`);
console.log(`propert access usage '${data[0]}'`);

// String to Array
console.log("<------  split()----->");

console.log(` Split usage "${data.split(",")}`);
// Split on commas
console.log(` Split usage "${data.split(" ")}`);
// Split on spaces
console.log(` Split usage "${data.split("|")}`);
// Split on pipe
