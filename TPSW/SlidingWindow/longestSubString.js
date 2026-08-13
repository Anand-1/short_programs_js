function findLongestSubstring(str) {
    let left = 0;
    let maxLength = 0;
    let maxSubstring = "";
    const seenChars = new Set();

    for (let right = 0; right < str.length; right++) {
        // If a duplicate character is found, shrink the window from the left
        while (seenChars.has(str[right])) {
            seenChars.delete(str[left]);
            left++;
        }

        // Add the current character to the set
        seenChars.add(str[right]);

        // Track the longest unique window found so far
        if (right - left + 1 > maxLength) {
            maxLength = right - left + 1;
            maxSubstring = str.slice(left, right + 1);
        }
    }

    return {
        length: maxLength,
        substring: maxSubstring
    };
}

// Example usage:
console.log(findLongestSubstring("abcabcbb")); 
// Output: { length: 3, substring: 'abc' }

console.log(findLongestSubstring("pwwkew"));    
// Output: { length: 3, substring: 'wke' }


// Longest subarray with sum less than or equal to k
function longestSubarrayWithSumLessThanOrEqualToK(arr, k) {
    let left = 0;
    let currentSum = 0;
    let maxLength = 0;

    for (let right = 0; right < arr.length; right++) {
        currentSum += arr[right];

        // Shrink the window from the left if the sum exceeds k
        while (currentSum > k && left <= right) {
            currentSum -= arr[left];
            left++;
        }

        // Update maxLength if the current window is valid
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Example usage:
console.log(longestSubarrayWithSumLessThanOrEqualToK([1, 2, 3, 4, 5], 7)); 
// Output: 3 (subarray [1, 2, 3] or [2, 3, 4] or [3, 4])
console.log(longestSubarrayWithSumLessThanOrEqualToK([1, 2, 3, 4, 5], 15)); 
// Output: 5 (entire array)
console.log(longestSubarrayWithSumLessThanOrEqualToK([1, 2, 3, 4, 5], 0)); 
// Output: 0 (no valid subarray)
// Time complexity: O(n) - Each element is processed at most twice (once when added and once when removed).
