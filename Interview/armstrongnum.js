/* The sume of cube of each digits is equal to number 
itself.
1634 = 1*1*1*1 + 6*6*6*6* + 3*3*3*3 + 4*4*4*4
 153 = 1*1*1 + 5*5*5 + 3*3*3
*/

let data = 153;
function chechArmstrong(data) {
  let localData = data;
  data = data.toString().split("");
  let tempData = 0;
  for (let i = 0; i < data.length; i++) {
    tempData += Math.pow(data[i], data.length);
  }
  if (localData == tempData) return true;
  return false;
}

console.log("Using for Loop => " + chechArmstrong(153));

const checkArmStrongNumber = (data) => {
  let arr = data.toString().split("");
  let len = arr.length;
  let mappedData = arr
    .map((x) => Math.pow(x, len))
    .reduce((acc, iter) => acc + iter);
  if (mappedData === data) return true;
  return false;
};

console.log("Using map => " + checkArmStrongNumber(1634));
