const arry = [5, 1, 2, 1, 3, 4, 3, 5];
console.log(arry);
function toFindDuplicates(data) {
  const uniqueElements = new Set(data);
  const filteredElements = data.filter((item) => {
    if (uniqueElements.has(item)) {
      uniqueElements.delete(item);
    } else {
      return item;
    }
  });
  console.log(filteredElements);
  return filteredElements;
}

console.log(toFindDuplicates(arry));
