// Checking sum zero - Problem 1
// [-5, -4, -2, -1, 6, 8, 4] >>> [-4,4]

let data = [-5, -2, -1, 6, 8, 4];

function getSumZero(data) {
  let newdata = data.sort((a, b) => {
    return a - b;
  });
  for (let n = 0; n < newdata.length - 1; n++) {
    for (let m = 1; m < newdata.length; m++) {
      if (newdata[n] + newdata[m] == 0) {
        console.log("found");
        console.log(newdata[n], newdata[m]);
        return [newdata[n], newdata[m]];
      }
    }
  }
  return "not found";
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
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else if (sum < 0) {
      left++;
    } else {
      return "Not Found !";
    }
  }
}

console.log(getSumZeroNew(data));
