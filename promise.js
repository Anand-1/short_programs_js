/* 
Promise 
It is an object that may produce a single value some time in 
the future with either a resolvled value or a reason of not being resolved .
*/
let probability = true;
var newPromise = new Promise((resolve, reject) => {
  if (probability) {
    reject("There is no probablity");
  } else {
    resolve("True Probability");
  }
});

console.log("Type of Promise is " + typeof newPromise);

newPromise
  .then((data) => {
    console.log(`The resolved value is  ${data}`);
  })
  .catch((error) => {
    console.log("Reason of rejection" + error);
  })
  .finally(() => {
    console.log("This needs to be done");
  });
