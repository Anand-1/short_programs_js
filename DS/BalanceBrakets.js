function isValidParentheses(data) {
  const stack = [];
  const pairs = { "(": ")", "{": "}", "[": "]" };
  for (const char of data) {
    console.log(char);
    console.log(char in pairs);
    if (char in pairs) {
      stack.push(char);
      console.log("Pushed to stack !");
    } else {
      console.log();
      if (pairs[stack.pop()] !== char) {
        console.log("pop done !");
        return false;
      }
    }
    console.log(stack);
  }
  return stack.length === 0;
}

console.log(isValidParentheses("{[()]}")); // Output: true
