// Function is javascript is a block of code for specific task
/* Callback:
    A callback function, also known as a higher-order function, is a function that is passed 
    to another function (let’s call this other function “otherFunction”) as a parameter,
     and the callback function is called (or executed) inside the otherFunction. 
*/

// A function that performs some asynchronous operation
function doSomethingAsync(callback) {
  setTimeout(() => {
    console.log("Async operation complete!");
    callback();
  }, 1000);
}

// A callback function to be executed after the asynchronous operation is complete
function afterAsyncOperation() {
  console.log("Callback function executed!");
}

// Calling the main function with the callback function
doSomethingAsync(afterAsyncOperation);
/* In this example, doSomethingAsync is a function that simulates an asynchronous 
operation (in this case, using setTimeout to delay execution). The function takes a callback parameter,
 which is a function passed as an argument.*/

// When doSomethingAsync completes its task (after one second in this case),
// it calls the provided callback function. In this example,
// the afterAsyncOperation function is passed as the callback,
// so it gets executed after the asynchronous operation is finished.

// Callback functions are commonly used in scenarios like handling the results of database queries,
//responding to events in graphical user interfaces (e.g., button clicks),
// or handling the outcome of HTTP requests in web development.

// In modern JavaScript, callback functions are often replaced with promises or async/await to handle
// asynchronous operations more efficiently and manage complex asynchronous code in a more readable manner.
//However, the concept of callbacks remains fundamental to understanding asynchronous programming.
