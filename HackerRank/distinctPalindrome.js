// Function to find all distinct palindrome 
// substrings in a given string.
function palindromicSubstr(str) {
    let n = str.length;

    // Create a set to store the result
    let result = new Set();

    // generate all substrings
    for (let i = 0; i < n; i++) {

        // to store the substring
        let cur = "";
        for (let j = i; j < n; j++) {
            cur += str[j];

            // check if cur is palindrome
            let l = 0, r = cur.length - 1;
            let isPalindrome = true;
            while (l < r) {
                if (cur[l] !== cur[r]) {
                    isPalindrome = false;
                    break;
                }
                l++;
                r--;
            }

            // if cur is palindrome, 
            // insert it into the set
            if (isPalindrome) {
                result.add(cur);
            }
        }
    }

    // Convert the set to a vector
    let res = Array.from(result);

    return res;
}

let str = "abaaa";
let result = palindromicSubstr(str);
console.log(result.join(" "));