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
