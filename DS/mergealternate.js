// merge array elements alternatively

const arr1 = [1, 2, 3, 4, 5];

const arr2 = [6, 7, 8, 9, 10];

function mergeSortedArrays(arr1, arr2) {
  const merged = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  console.log(i, j, merged);
  console.log(arr1.slice(i));
  console.log(arr2.slice(j));
  return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
}


function mergeSortedArrays(arr1, arr2) {
  let final = [];
  let index = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr2[i]) {
      final.push(arr1[i], arr2[i])
      index++;
    }
  }
  final = final.concat(arr1.slice(index, arr1.length)).concat(arr2.slice(index, arr2.length))
  return final;
}

console.log(mergeSortedArrays(arr1, arr2));
