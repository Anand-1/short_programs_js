let data = "1234-2323-4223";
let len = data.length;
let last4 = data.slice(-4).padStart(len, "*");
console.log(last4);

//**********4223

let first4 = data.slice(0, 4).padEnd(len, "*");
console.log(first4);
//1234**********
