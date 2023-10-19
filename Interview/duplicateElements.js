var dataArray = [-1, -3, 1, 3, 3, 6, 9];

function findDup(dataArray) {
  let sortArr = dataArray.sort((a, b) => a - b);
  return sortArr.filter(
    (currentValue, currentIndex) =>
      sortArr.indexOf(currentValue) !== currentIndex
  );
}

console.log(findDup(dataArray));

function duplicateLetter(data) {
  var arr = data.toUpperCase().split("");
  var obj = {};
  for (var v in arr) {
    obj[arr[v]] = obj[arr[v]] || 0;
    obj[arr[v]]++;
  }
  for (var v in obj) {
    console.log(data + ", the letter '" + v + "' => " + obj[v] + " times.");
  }
}

duplicateLetter("Captain America");

// Not using objects and not counting anything but letters.
function duplicateLetterCheck(o) {
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var arr = o.toUpperCase().split("");
  var count = [];
  for (var v in arr) {
    pos = letters.indexOf(arr[v]);
    if (pos < 0) continue; // It wasn't a letter.
    count[pos] = count[pos] || 0;
    count[pos]++;
  }

  for (var v in count) {
    if (!(count[v] > 0)) continue; // The letter never appeared.
    console.log(
      o + ", the letter '" + letters[v] + "' => " + count[v] + " times."
    );
  }
}

duplicateLetterCheck("Captain America");
