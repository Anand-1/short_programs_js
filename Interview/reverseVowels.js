// JavaScript program to reverse order of vowels

// utility function to check for vowel
function isVowel(c) {
  return (
    c == "a" ||
    c == "A" ||
    c == "e" ||
    c == "E" ||
    c == "i" ||
    c == "I" ||
    c == "o" ||
    c == "O" ||
    c == "u" ||
    c == "U"
  );
}

// Function to reverse order of vowels
function reverseVowel(str1) {
  let j = 0;
  // Storing the vowels separately
  let str = str1.split("");
  let vowel = "";
  for (let i = 0; i < str.length; i++) {
    if (isVowel(str[i])) {
      j++;
      vowel += str[i];
    }
  }

  // Placing the vowels in the reverse
  // order in the string
  for (let i = 0; i < str.length; i++) {
    if (isVowel(str[i])) {
      str[i] = vowel[--j];
    }
  }

  return str.join("");
}

let str = "hello world";
document.write(reverseVowel(str));
