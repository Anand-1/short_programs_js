// Brute Force

function threeSum(nums, target) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === target) {
                    result.push([nums[i], nums[j], nums[k]]);
                }
            }
        }
    }
    return result;
}

//revisit
//three sum problem
function threeSum(nums) {
  const result = [];
  nums.sort((a, b) => a - b); // Sort the array to handle duplicates

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        // Skip duplicates
        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

// Example usage:
const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums)); // Output: [[-1, -1, 2], [-1, 0, 1]]     

/*
Another approach is to use a hash table to store the elements as we iterate through the array. 
For each element, we check if the pair (the target minus the current element) is already in the hash table. 
If it is, we have found the two elements that add up to the target value.
 */

function threeSum(nums, target) {
    let result = [];
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const complement = target - (nums[i] + nums[j]);
            if (complement in hash) {
                result.push([nums[i], nums[j], complement]);
            } else {
                hash[nums[j]] = true;
            }
        }
    }
   
    return result;
}

