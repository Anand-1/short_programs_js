// ES6 has map and weakMak
/* Map is similar to object and allows to store elements 
   in a key/value pair.
   - Elements are inserted in insertion order , they can 
   contain  objects, functions and other data types as key.
   - new Map() constuctor is used for creation  
*/

const map1 = new Map();
console.log(map1);
//================ ==Insertion Part using set() =======
//set() method for insertion is used
map1.set("info", { name: "Anand", age: 32 });
console.log(map1);

// we can have objects as key as well
let obj = {};
map1.set(obj, { name: "Raj", age: 30 });
console.log(map1);

//== Retrieval part  using get(''),check using has()===

console.log(map1.get(obj));
console.log(map1.get("info"));

console.log(map1.has("info"));
// Return true or false
//=== Check for map size
console.log(map1.size);

//== Iterate through map
map1.set("name", "Jack");
map1.set("age", "27");
for (let [key, value] of map1) {
  console.log(key + "-" + value);
}

// looping through Map
map1.forEach(function (value, key) {
  console.log(key + "- " + value);
});

//====== Iterate through map keys()
for (let key of map1.keys()) {
  console.log(key);
}

//======= Iterate through map values()
for (let value of map1.values()) {
  console.log("values are" + value);
}

//----  iterate using entries()

for (let entry of map1.entries()) {
  console.log(entry);
}

//== clear() or delete() method to remove ==============

console.log(map1.delete("info"));
// it will return true if element is found and deleted

map1.clear();
console.log(map1);

//------------------------------------------------------
//============ WeakMap Usage ===========================
/* They only contains objects as keys , otherwise same
   - they will throw error on other type 
   - methods are same in usage 
   - They are not iterable 
*/
console.log("---------------WeakMap====================");
const weakMap = new WeakMap();
console.log(weakMap); // WeakMap {}

let objWeak = {};

// adding object (element) to WeakMap
weakMap.set(objWeak, "hello");
weakMap.set("info", { name: "Anand", age: 32 });
console.log(weakMap); // WeakMap {{} => "hello"}
