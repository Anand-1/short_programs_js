// Javascript program to find first and last occurrence of
// an elements in given sorted array

// Function for finding first and last occurrence
// of an elements
function findFirstAndLast(arr, item) {
  let n = arr.length;
  let first = -1,
    last = -1;
  for (let i = 0; i < n; i++) {
    if (item != arr[i]) continue;
    if (first == -1) first = i;
    last = i;
  }
  if (first != -1) {
    document.write("First Occurrence = " + first + "<br>");
    document.write("Last Occurrence = " + last + "<br>");
  } else document.write("Not Found");
}

let arr = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8];
let x = 8;
findFirstAndLast(arr, x);
