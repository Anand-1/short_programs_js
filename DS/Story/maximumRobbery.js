/*
A thief is robbing houses along the street . He cannot rob two adjacent houses . 
Find maximum amount he can rob ?
 */

let arr1 = [1, 2, 3, 1];
let arr2 = [2, 7, 9, 3, 1];

function maximumRobbery(data = []) {
  let isEvenHouses = 0;
  let isOddHouses = 0;
  for (let i = 0; i < data.length; i++) {
    // Remember , we are looking for house index
    if (i % 2 == 0) {
      isEvenHouses += data[i];
    } else {
      isOddHouses += data[i];
    }
  }
  return Math.max(isEvenHouses, isOddHouses);
}

console.log(maximumRobbery(arr1));
console.log(maximumRobbery(arr2));
