// Checking sum zero - Problem 1
// [-5, -4,-3,-2,-1,0, 2,4,6,8] >>> [-4,4]

let data = [-5, -4, -3, -2, -1, 0, 2, 4, 6, 8];

function getSumZero(arr) {
  arr = arr.sort(function (a, b) {
    return a - b;
  });
  console.log(arr);
  for (let n of arr) {
    for (let m = 1; m < n; m++) {
      if (n + arr[m] == 0) {
        console.log("found");
        return [n, arr[m]];
      }
      console.log(arr[n], arr[m]);
    }
  }
}

console.log(getSumZero(data));

//quadratic time complexity o(n2)

function getSumZeroNew(arr) {
  arr = arr.sort(function (a, b) {
    return a - b;
  });
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else if (sum < 0) {
      left++;
    }
  }
}

console.log(getSumZeroNew(data));

// O (n)
