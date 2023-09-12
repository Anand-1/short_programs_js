// Function in javascript is a block of code for specific task
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

// EventListener call back execution
function evenetlistenerExecution() {
  let count = 0;
  document.getElementById("btn").addEventListener("click", function xyz() {
    console.log("I am clicked !", ++count);
  });
}

evenetlistenerExecution();
