function isPalindrome(string) {
  let left = 0;
  let right = string.length - 1;
  while (left <= right) {
    if (string[left] !== string[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("madam"));

// Forward and backward same

function palindrome(str) {
  var reversed = str.split("").reverse().join("");
  if (reversed == str) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("eye"));

// Reursive way palicrome check

function checkPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return checkPalindrome(str.slice(1, -1));
  return false;
}

console.log(checkPalindrome("ada")); // true
