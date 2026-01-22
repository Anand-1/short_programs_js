let data = 'abbaa'

function isPalindrome(arr) {
    if (arr.length === 1) return true;
    if (arr.length === 2) return arr[0] === arr[1]
    let first = 0, last = arr.length - 1
    while (first < last) {
        if (arr[first] !== arr[last]) {
            return false;
        }
        first++;
        last--;
    }
    return true;
}
function checkSubPalindromes() {
    let finalArr = [];
    for (let i = 0; i < data.length; i++) {
        let curr = ''
        for (let j = i; j < data.length; j++) {
            curr += data[j]
            if (isPalindrome(curr)) finalArr.push(curr)
        }
    }
    return finalArr;
}

console.log(checkSubPalindromes(data))