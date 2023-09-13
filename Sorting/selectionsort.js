const arr = [39, 11, 10];

function selectionSort(arr) {
  // One by one move boundary of unsorted subarray
  for (let i = 0; i < arr.length - 1; i++) {
    // Find the minimum element in unsorted array
    let min_val = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min_val]) {
        min_val = j;
        // Swap the found minimum element with the first element
        [arr[min_val], arr[i]] = [arr[i], arr[min_val]];
      }
    }
  }
  return arr;
}

console.log(selectionSort(arr));
