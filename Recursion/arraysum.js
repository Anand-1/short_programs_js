function arraysum(arr, len) {
  if (len <= 0) return 0;
  else {
    return arr[len - 1] + arraysum(arr, len - 1);
  }
}

const arr = [23, 4, 3, 35, 5, 454];

console.log(arraysum(arr, arr.length));
