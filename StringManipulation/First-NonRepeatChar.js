const FindFirstNonRepeatedCharacter = (str) => {
  let strArray = str.split("");
  let charObj = {};

  strArray.forEach((s) => {
    charObj[s] = (charObj[s] || 0) + 1;
  });

  for (let char of strArray) {
    if (charObj[char] === 1) {
      return char;
    }
  }
  return "Empty";
};
console.log(FindFirstNonRepeatedCharacter("jaydeepjai")); // Output: "y"
