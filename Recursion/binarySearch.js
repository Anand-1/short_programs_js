function binarySearch(arr, target, start, end) {
  // Base case: if start is greater than end, element not found
  if (start > end) {
    return -1;
  }

  // Find the middle index
  let mid = Math.floor((start + end) / 2);

  // If the target is found at the middle
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    // If the target is greater than the middle element, search in the right half
    return binarySearch(arr, target, mid + 1, end);
  } else {
    // If the target is smaller, search in the left half
    return binarySearch(arr, target, start, mid - 1);
  }
}

// Test the binarySearch function
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
console.log(binarySearch(sortedArray, 13, 0, sortedArray.length - 1));
