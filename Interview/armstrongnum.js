/* The sume of cube of each digits is equal to number 
itself.
1634 = 1*1*1*1 + 6*6*6*6* + 3*3*3*3 + 4*4*4*4
 153 = 1*1*1 + 5*5*5 + 3*3*3
*/

let data = 153;
function chechArmstrong(data) {
  let localData = data;
  data = data.toString().split("");
  console.log(data);
  let tempData = 0;
  for (let i = 0; i < data.length; i++) {
    tempData += Math.pow(data[i], data.length);
  }
  if (localData == tempData) return true;
  return false;
}

console.log(chechArmstrong(data));
