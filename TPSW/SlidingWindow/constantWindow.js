//find the highest sum of three contiguous numbers in the following array.Window size is 3
function findHighestSum(arr) {
    if (arr.length < 3) {
        return null; // Not enough elements for a window of size 3
    }

    let maxSum = arr[0] + arr[1] + arr[2]; // Initialize with the sum of the first window
    let currentSum = maxSum;

    for (let i = 3; i < arr.length; i++) {
        currentSum = currentSum - arr[i - 3] + arr[i]; // Slide the window
        maxSum = Math.max(maxSum, currentSum); // Update max sum if current is greater
    }

    return maxSum;
}

// Example usage:
console.log(findHighestSum([1, 2, 3, 4, 5])); // Output: 12 (3 + 4 + 5)
console.log(findHighestSum([-1, -2, -3, -4, -5]));
//Time complexity: O(n) - We traverse the array once, performing constant time operations for each element.