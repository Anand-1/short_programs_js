var dataArray = [-1, -3, 1, 3, 6, 999, 999];
/*
The indexOf() method returns the position of the first 
occurrence of a value in a string. 
The indexOf() method returns -1 if the value is not found.
*/
function findDupElementNumber(dataArray) {
  let sortArr = dataArray.sort((a, b) => a - b);
  console.log(sortArr);
  return sortArr.filter((currentValue, currentIndex) => {
    return sortArr.indexOf(currentValue) != currentIndex;
  });
}

console.log(findDupElementNumber(dataArray));

// Not using objects and not counting anything but letters.
function duplicateLetterCheck(o) {
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var arr = o.toUpperCase().split("");
  var count = [];
  for (var v in arr) {
    pos = letters.indexOf(arr[v]);
    if (pos < 0) continue; // It wasn't a letter.
    count[pos] = count[pos] || 0;
    console.log(count[pos]);
    count[pos]++;
  }

  for (var v in count) {
    if (!(count[v] > 0)) continue; // The letter never appeared.
    console.log(
      o + ", the letter '" + letters[v] + "' => " + count[v] + " times."
    );
  }
}

// duplicateLetterCheck("Caca");

function printDups(str) {
  let charCountObj = {};

  for (let i = 0; i < str.length; i++) {
    let character = str[i];
    charCountObj[character] = (charCountObj[character] || 0) + 1;
    console.log(character, charCountObj[character]);
  }
  console.log(charCountObj);
  for (let char in charCountObj) {
    if (charCountObj[char] > 1) {
      console.log(char + ", count = " + charCountObj[char]);
    }
  }
}

let str = "cacad";

printDups(str);

function printDuplicates(str) {
  let len = str.length;

  // Sorting the string
  str = str.split("").sort().join("");

  // Loop through the sorted string to find duplicates
  for (let i = 0; i < len; i++) {
    let count = 1;

    // Counting the occurrences of each character
    while (i < len - 1 && str[i] == str[i + 1]) {
      count++;
      i++;
    }

    // Printing the duplicate character and its count
    if (count > 1) {
      console.log(str[i] + ", count = " + count);
    }
  }
}

// printDuplicates(str);

// JavaScript program to count all duplicates
// from string using maps
function printDupsi(str) {
  let count = new Map();
  for (let i = 0; i < str.length; i++) {
    if (count.has(str[i])) {
      count.set(str[i], count.get(str[i]) + 1);
    } else {
      count.set(str[i], 1);
    }
    //increase the count of characters by 1
  }
  //iterating through the unordered map
  for (let [it, it2] of count) {
    if (it2 > 1)
      //if the count of characters is
      //greater than 1 then duplicate found
      console.log(it, ", count = ", it2);
  }
}

// printDupsi(str);
