// Async Code
/* async keyword with a function is used to represent that the function is
 an asynchronous function. The async function returns a promise.*/

//The await keyword is used inside the async function to wait for the asynchronous operation.

//  promise
let promise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("Promise resolved normal");
  }, 4000);
});

// async function
async function asyncFunc() {
  // wait until the promise resolves
  let result = await promise;
  console.log(result + " in await");
}

// calling the async function
asyncFunc();

// async function
async function asyncFunctry() {
  try {
    // wait until the promise resolves
    let result = await promise;
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

// calling the async function
asyncFunctry().then().catch(alert); // Promise resolved
