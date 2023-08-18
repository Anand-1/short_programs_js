// merge array elements alternatively

const arr1 = [1, 2, 3, 4, 5];

const arr2 = [6, 7, 8, 9, 10];

const mergeAlernatively = (arr1, arr2) => {
  const res = [];
  let j = 0;
  let k = 0;
  for (let i = 0; i < arr1.length + arr2.length; i++) {
    if (i % 2 == 0) {
      res.push(arr1[j]);
      j++;
    } else {
      res.push(arr2[k]);
      k++;
    }
  }
  console.log(res);
  return res;
};

mergeAlernatively(arr1, arr2);
