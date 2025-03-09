console.log("Longest Substring loaded!");

// let data = "abcabcbb";

//https://dev.to/seanwelshbrown/find-the-length-of-the-longest-substring-without-repeating-characters-in-javascript-20pg
const data = [12, 11, 33, 12, 23];
const countOccurrences = (arr) =>
  arr.reduce((acc, val) => ((acc[val] = (acc[val] || 0) + 1), acc), {});
console.log(countOccurrences(data));

const longestWord = (sentence) =>
  sentence
    .split(" ")
    .reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      ""
    );

const firstNonRepeatedChar = (str) =>
  str.split("").find((char) => str.indexOf(char) === str.lastIndexOf(char));

const countWordOccurrences = (sentence) =>
  sentence
    .split(" ")
    .reduce(
      (countMap, word) => ({ ...countMap, [word]: (countMap[word] || 0) + 1 }),
      {}
    );
