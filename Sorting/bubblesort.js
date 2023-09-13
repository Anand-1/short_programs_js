const arr = [39, 11, 10];
// immediate elements are swapped
function bubblesort(data) {
  for (let i = 0; i < data.length; i++) {
    // last element is already in place
    for (let j = 0; j < data.length - 1 - i; j++) {
      if (data[j] > data[j + 1]) {
        console.log(data[j], data[j + 1]);
        // If the condition is true
        // then swap them
        [data[j], data[j + 1]] = [data[j + 1], data[j]];
      }
    }
  }
  console.log(data);
}

bubblesort(arr);
