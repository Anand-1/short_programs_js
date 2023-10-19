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

console.log("---Promise Loaded----");
function importantTaskPromise(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username} Promise`);
    }, 1000);
  });
}

function liketheVideoPromise(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like the Video of ${username} Promise`);
    }, 1000);
  });
}

function sharetheVideoPromise(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the Video of ${username} promise`);
    }, 1000);
  });
}

function watchtheVideoPromise(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Watch the Video of ${username} promise`);
    }, 1000);
  });
}

const result = async () => {
  try {
    // wait until the promise resolves
    const message1 = await importantTaskPromise("Anand");
    const message2 = await liketheVideoPromise("Anand");
    const message3 = await sharetheVideoPromise("Anand");
    const message4 = await watchtheVideoPromise("Anand");
    console.log({ message1, message2, message3, message4 });
  } catch (error) {
    console.log(error);
  }
};

result();
