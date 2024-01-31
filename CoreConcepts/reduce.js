const items = [
  { name: "Apple", price: 1 },
  { name: "Orange", price: 2 },
  { name: "Mango", price: 3 },
];

const totalPrice = items.reduce((accumulator, item, index, array) => {
  return (accumulator += item.price);
}, 10);

console.log(totalPrice);

//How to Group Similar Items Together

const itemsNew = [
  { name: "Apple", category: "Fruit" },
  { name: "Onion", category: "Vegetable" },
  { name: "Orange", category: "Fruit" },
  { name: "Lettuce", category: "Vegetable" },
];

const groupedItems = itemsNew.reduce((accumulator, item) => {
  const category = item.category;
  if (!accumulator[category]) {
    accumulator[category] = [];
  }
  accumulator[category].push(item.name);
  return accumulator;
}, {});

console.log(groupedItems);

//How to Remove Duplicates Using the reduce() Method
const itemsArray = [1, 2, 3, 1, 2, 3, 7, 8, 7];

const noDuplicateItems = itemsArray.reduce((accumulator, item) => {
  if (!accumulator.includes(item)) {
    accumulator.push(item);
  }
  return accumulator;
}, []);

console.log(noDuplicateItems);
// [ 1, 2, 3, 7, 8 ]
