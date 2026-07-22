// revisit Important

function lengthOfLongestSubstring(s) {
  let left = 0;
  let maxLength = 0;
  const seen = new Set();
  for (let right = 0; right < s.length; right++) {
    console.log(seen.has(s[right]), s[right])
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
      console.log(left)
    }
    seen.add(s[right]);
    console.log(seen);
    maxLength = Math.max(maxLength, right - left + 1);
    console.log(maxLength)
    console.log("------------- iteration  " + right +' completed')
  }
  return maxLength;
}

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
//console.log(lengthOfLongestSubstring('bbbbb')); // 1


console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb"));    // 1
console.log(lengthOfLongestSubstring("pwwkew"));   // 3

//Time Complexity: O(n)
