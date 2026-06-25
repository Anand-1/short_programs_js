// Expected Output: 1, 4, 3, 3, 5, 2, 7, 6, 8
console.log('1', "As per the event loop, the synchronous code will be executed first, then the microtasks (Promises) will be executed, and finally the macrotasks (setTimeout) will be executed.");
setTimeout(() => {
  console.log('2', "setTimeout is a macrotask, so it will be executed after the microtasks (Promises) are completed.");
}, 0)

Promise.resolve().then(() => {
  console.log('3', "This is a microtask, so it will be executed after the synchronous code but before the macrotasks.");
})


console.log('4', "This is synchronous code, so it will be executed first.");

Promise.resolve().then(() => {
  console.log('3', "This is a microtask, so it will be executed after the synchronous code but before the macrotasks.");
})

Promise.resolve().then(function() {
  console.log('5', "This is a microtask, so it will be executed after the synchronous code but before the macrotasks.");
}).then(function() {

  setTimeout(() => {
    console.log('6', "setTimeout is a macrotask, so it will be executed after the microtasks (Promises) are completed.");
  }, 0) 
}).then(function() {
  console.log('7', "This is a microtask, so it will be executed after the synchronous code but before the macrotasks.");
}).then(function() {
  console.log('8', "This is a microtask, so it will be executed after the synchronous code but before the macrotasks.");
});

setTimeout(() => {
  console.log('9', "setTimeout is a macrotask, so it will be executed after the microtasks (Promises) are completed.");
}, 0)

console.log('10', "This is synchronous code, so it will be executed first.");