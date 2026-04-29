// Remove Duplicates from an Array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Example usage:
const arrayWithDuplicates = [1, 2, 3, 4, 2, 3, 5];
const uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]    


function removeDuplicatesFromString(str) {
    return [...new Set(str)].join('');
}

// Example usage:
const stringWithDuplicates = "hello world";
const uniqueString = removeDuplicatesFromString(stringWithDuplicates);
console.log(uniqueString); // Output: "helo wrd"    

function removeDuplicatesFromStr(str) {
    let seen = new Set();
    let result = '';

    for (let char of str) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }

    return result;
}

// Example usage:
const stringWithDuplicates2 = "programming";
const uniqueString2 = removeDuplicatesFromStr(stringWithDuplicates2);
console.log(uniqueString2); // Output: "progamin"

function removeDuplicates(arr) {
    const n = arr.length;
    if (n <= 1)
        return n;
	
    // Start from the second element
    let idx = 1; 
    for (let i = 1; i < n; i++) {
        if (arr[i] !== arr[i - 1]) {
            arr[idx++] = arr[i];
        }
    }

    return idx;
}

// Driver code
const arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
const newSize = removeDuplicates(arr);

console.log(arr.slice(0, newSize).join(' '));

//rearranging an array by sign
function rearrangeBySign(arr) {
  const positive = [];
  const negative = [];

  for (const num of arr) {
    if (num >= 0) {
      positive.push(num);
    } else {
      negative.push(num);
    }
  }

  return [...positive, ...negative];
}

// Example usage:
const arr = [1, -2, 3, -4, 5, -6];
console.log(rearrangeBySign(arr)); // Output: [1, 3, 5, -2, -4, -6]   

//last non-repeating character
function lastNonRepeatingCharacter(str) {
  const charCount = {};

  // Count the occurrences of each character
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the last non-repeating character
  for (let i = str.length - 1; i >= 0; i--) {
    if (charCount[str[i]] === 1) {
      return str[i];
    }
  }

  return null; // Return null if there is no non-repeating character
}

// Example usage:
const inputStr = "swiss";
console.log(lastNonRepeatingCharacter(inputStr)); // Output: "w"  

//last stone weight
function lastStoneWeight(stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a); // Sort in descending order
    const heaviest = stones[0];
    const secondHeaviest = stones[1];

    if (heaviest === secondHeaviest) {
      // Both stones are destroyed
      stones.splice(0, 2);
    } else {
      // The heavier stone is reduced by the weight of the lighter stone
      stones[0] = heaviest - secondHeaviest;
      stones.splice(1, 1); // Remove the second heaviest stone
    }
  }

  return stones.length === 1 ? stones[0] : 0; // Return the weight of the last stone or 0 if none left
}

// Example usage:
const stones = [2, 7, 4, 1, 8, 1];
console.log(lastStoneWeight(stones)); // Output: 1  