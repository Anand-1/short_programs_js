function printDups(str) {
  let charCount = {};
  for (let i = 0; i < str.length; i++) {
    let character = str[i];
    console.log(character, charCount[character]);
    charCount[character] = (charCount[character] || 0) + 1;
  }
  console.log(charCount);

  for (let char in charCount) {
    if (charCount[char] > 1) {
      console.log(char + ", count = " + charCount[char]);
    }
  }
}

let str = "cacac";

printDups(str);
