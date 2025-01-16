let arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
let n = arr.length;
let diagonal = 0;
let antiDiagonal = 0;
for (let i = 0; i < n; i++) {
  diagonal += arr[i][i];
  antiDiagonal += arr[i][n - i - 1];
}
let difference = antiDiagonal - diagonal;
console.log(difference);
