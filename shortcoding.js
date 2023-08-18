// Problem : Remove duplicate from the array

const data = [12, 33, 44, 1, 1, 2, 44, 44, 45, 56];
const newdata = [...new Set(data)];
console.log(newdata.sort());
