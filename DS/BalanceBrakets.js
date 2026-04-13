// Check whether a string contains balanced parentheses/brackets/braces.
// Supports (), {}, and [] pairs.
function isValidParentheses(data) {
  // Use a stack to keep opening brackets until a matching closing bracket is found.
  const stack = [];

  // Map each opening bracket to its corresponding closing bracket.
  const pairs = { "(": ")", "{": "}", "[": "]" };

  for (const char of data) {
    // If the character is an opening bracket, push it onto the stack.
    if (char in pairs) {
      stack.push(char);
    } else {
      // For a closing bracket, pop the last opening bracket from the stack
      // and verify that it matches the current closing bracket.
      if (pairs[stack.pop()] !== char) {
        return false;
      }
    }
  }

  // If any opening brackets remain unmatched, the string is invalid.
  return stack.length === 0;
}

// Example usage.
console.log(isValidParentheses("{[()]}")); // Output: true
