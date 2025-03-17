console.log("Anand");
const data = [3, 1, 0];
function missingNumber(data) {
  let numlength = data.length;
  let expectedSum = (numlength * (numlength + 1)) / 2;
  let actualSum = data.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}
console.log(missingNumber([3, 0, 1])); // Output: 2
console.log(missingNumber([0, 1])); // Output: 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // Output: 8
