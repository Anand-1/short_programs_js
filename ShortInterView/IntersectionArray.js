let arr1 = [2, 3, 4, 5, 5, 6];
let arr2 = [5, 6, 7, 8, 8];

function intersection(arr1, arr2) {
  return [...new Set(arr1)].filter((item) => {
    return arr2.indexOf(item) > -1;
  });
}

console.log(intersection(arr1, arr2));
