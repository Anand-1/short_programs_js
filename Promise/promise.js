/* 
Promise 
It is an object that may produce a single value some time in 
the future with either a resolved value or a reason of not being resolved .

Promise.all: It takes an array of promises and returns a single promise that 
resolves when all the input promises resolve. If any of the input promises reject,
the returned promise immediately rejects with the reason of the first rejected promise.

Promise.allSettled: It also takes an array of promises but waits for all of them to
 settle, regardless of whether they resolve or reject. It returns a promise that 
 resolves with an array of objects, each describing the outcome of a promise 
(status: 'fulfilled' or 'rejected', and value or reason accordingly).

Promise.any: It takes an array of promises and resolves as soon as any 
one of the promises resolves. If all promises reject, it rejects with an 
AggregateError containing all the rejection reasons.
*/
console.log("start callbacks");

function importantTask(username, cb) {
  setTimeout(() => {
    cb(`Subscribe to ${username}`);
  }, 1000);
}

function liketheVideo(video, cb) {
  setTimeout(() => {
    cb(`Like the ${video} video`);
  }, 1000);
}

function sharetheVideo(video, cb) {
  setTimeout(() => {
    cb(`Share the ${video} of Anand`);
  }, 1000);
}

function watchtheVideo(video, cb) {
  setTimeout(() => {
    cb(`Watch the ${video} of Anand`);
  }, 1000);
}

// const message = importantTask("Anand Raj", (action) => {
//   console.log(action);
//   liketheVideo("Anand ", (action) => {
//     console.log(action);
//     sharetheVideo("video", (action) => {
//       console.log(action);
//       watchtheVideo("video", (action) => {
//         console.log(action);
//       });
//     });
//   });
// });
// console.log(message);
console.log("Stop");

console.log("---Promise Loaded----");
function importantTaskPromise(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Subscribe to ${username} Promise`);
    }, 1000);
  });
}

function liketheVideoPromise(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Like the Video of ${username} Promise`);
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
      reject(`Watch the Video of ${username} promise`);
    }, 1000);
  });
}

// importantTaskPromise("Anand Raj")
//   .then((res) => {
//     console.log(res);
//     return liketheVideoPromise("Anand");
//   })
//   .then((res) => {
//     console.log(res);
//     return sharetheVideoPromise("Anand");
//   })
//   .then((res) => {
//     console.log(res);
//     return watchtheVideoPromise("Anand");
//   })
//   .then((res) => {
//     console.log(res);
//   });

// All inputs must pass with resolve , else fail
// Promise.all([
//   importantTaskPromise("Anand"),
//   liketheVideoPromise("Anand"),
//   sharetheVideoPromise("Anand"),
//   watchtheVideoPromise("Anand"),
// ])
//   .then((data) => {
//     console.log(`The resolved value is  ${data}`);
//   })
//   .catch((error) => {
//     console.log("Reason of rejection" + error);
//   })
//   .finally(() => {
//     console.log("This needs to be done");
//   });

// Race will return the first one which pass either resolve or reject, its all about first return
// Promise.race([
//   importantTaskPromise("Anand"),
//   liketheVideoPromise("Anand"),
//   sharetheVideoPromise("Anand"),
//   watchtheVideoPromise("Anand"),
// ])
//   .then((data) => {
//     console.log(`The resolved value of race is  ${data}`);
//   })
//   .catch((error) => {
//     console.log("Reason of rejection" + error);
//   })
//   .finally(() => {
//     console.log("This needs to be done");
//   });

// All gets settled , return all(resolve, reject) with reasons
// Promise.allSettled([
//   importantTaskPromise("Anand"),
//   liketheVideoPromise("Anand"),
//   sharetheVideoPromise("Anand"),
//   watchtheVideoPromise("Anand"),
// ])
//   .then((data) => {
//     console.log(`The resolved value of allSettled is  ${JSON.stringify(data)}`);
//   })
//   .catch((error) => {
//     console.log("Reason of rejection" + error);
//   })
//   .finally(() => {
//     console.log("This needs to be done");
//   });

// Even if one fails , it will return first resolved value
Promise.any([
  importantTaskPromise("Anand"),
  liketheVideoPromise("Anand"),
  sharetheVideoPromise("Anand"),
  watchtheVideoPromise("Anand"),
])
  .then((data) => {
    console.log(`The resolved value of any is  ${data}`);
  })
  .catch((error) => {
    console.log("Reason of rejection" + error);
  })
  .finally(() => {
    console.log("This needs to be done");
  });
