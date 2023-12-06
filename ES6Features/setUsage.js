/* ES6 introduced Set and WeakSet.
   Similar to arrays that allows us to store multiple items
   like numbers , strings , objects etc. However, unlike 
   array, a set cannot contain dupilcate values.
   - created using new Set()
*/

const set1 = new Set();
console.log(set1);

const set2 = new Set([
  1,
  "hello",
  1,
  "hello",
  { count: true },
  { count: true },
]);
console.log(set2); // Object are not duplicates

console.log(set2.values());

// has() is used to check presence of element
console.log(set2.has({ count: true }));
console.log(set2.has(1));

set2.add(3);
console.log(set2);

// Looping through set

for (let i of set2) {
  console.log(i);
}

// clear or delete method is used for removal
console.log(set2.delete(1));
// return true if element is found and deleted
console.log(set2.values());
set1.clear();

//=================WeakSet=========================
/* The WeakSet is similar to Set. Howeverm WeakSet can
   can only contain objects.
   - methods are same 
   - throws error on addition other data types
   - not iterable 
*/
console.log("================WeakSet=========");
const weakSet = new WeakSet();
console.log(weakSet); // WeakSet {}

let obj = {
  message: "Hi",
  sendMessage: true,
};

// adding object (element) to WeakSet
weakSet.add(obj);

console.log(weakSet);
// WeakSet {{message: "Hi", sendMessage: true}}

//==============================================
// perform union operation
// contain elements of both sets
function union(a, b) {
  let unionSet = new Set(a);
  for (let i of b) {
    unionSet.add(i);
  }
  return unionSet;
}

// two sets of fruits
let setA = new Set(["apple", "mango", "orange"]);
let setB = new Set(["grapes", "apple", "banana"]);

let result = union(setA, setB);

console.log(result);

// perform intersection operation
// elements of set a that are also in set b
function intersection(setA, setB) {
  let intersectionSet = new Set();

  for (let i of setB) {
    if (setA.has(i)) {
      intersectionSet.add(i);
    }
  }
  return intersectionSet;
}

let result2 = intersection(setA, setB);

console.log(result2);

// perform difference operation
// elements of set a that are not in set b
function difference(setA, setB) {
  let differenceSet = new Set(setA);
  for (let i of setB) {
    differenceSet.delete(i);
  }
  return differenceSet;
}

let result3 = difference(setA, setB);

console.log(result3);

// perform subset operation
// true if all elements of set b is in set a
function subset(setA, setB) {
  for (let i of setB) {
    if (!setA.has(i)) {
      return false;
    }
  }
  return true;
}

let resultSubset = subset(setA, setB);

console.log(resultSubset);
