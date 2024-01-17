const arry = [5, 1, 2, 5, 1, 3, 4, 3, 5];
function toFindDuplicates(data) {
  const uniqueElements = new Set(data);
  const filteredElements = data.filter((item) => {
    console.log(item);
    if (uniqueElements.has(item)) {
      console.log("ash" + item);
      uniqueElements.delete(item);
    } else {
      return item;
    }
  });
  console.log(filteredElements);
  return filteredElements;
}

console.log(toFindDuplicates(arry));
