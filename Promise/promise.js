/* 
Promise 
It is an object that may produce a single value some time in 
the future with either a resolvled value or a reason of not being resolved .
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

const message = importantTask("Anand Raj", function (message) {
  console.log(message);
  liketheVideo("Anand ", (action) => {
    console.log(action);
    sharetheVideo("video", (action) => {
      console.log(action);
      watchtheVideo("video", (action) => {
        console.log(action);
      });
    });
  });
});
console.log(message);
console.log("Stop");

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

importantTaskPromise("Anand Raj")
  .then((res) => {
    console.log(res);
    return liketheVideoPromise("Anand");
  })
  .then((res) => {
    console.log(res);
    return sharetheVideoPromise("Anand");
  })
  .then((res) => {
    console.log(res);
    return watchtheVideoPromise("Anand");
  })
  .then((res) => {
    console.log(res);
  });

// If one of promise fail, all the promise will fail
Promise.all([
  importantTaskPromise("Anand"),
  liketheVideoPromise("Anand"),
  sharetheVideoPromise("Anand"),
  watchtheVideoPromise("Anand"),
])
  .then((data) => {
    console.log(`The resolved value is  ${data}`);
  })
  .catch((error) => {
    console.log("Reason of rejection" + error);
  })
  .finally(() => {
    console.log("This needs to be done");
  });

// Race will return the first one which pass
Promise.race([
  importantTaskPromise("Anand"),
  liketheVideoPromise("Anand"),
  sharetheVideoPromise("Anand"),
  watchtheVideoPromise("Anand"),
])
  .then((data) => {
    console.log(`The resolved value of race is  ${data}`);
  })
  .catch((error) => {
    console.log("Reason of rejection" + error);
  })
  .finally(() => {
    console.log("This needs to be done");
  });

// Even if one fails , it will return
Promise.allSettled([
  importantTaskPromise("Anand"),
  liketheVideoPromise("Anand"),
  sharetheVideoPromise("Anand"),
  watchtheVideoPromise("Anand"),
])
  .then((data) => {
    console.log(`The resolved value of allSettled is  ${data}`);
  })
  .catch((error) => {
    console.log("Reason of rejection" + error);
  })
  .finally(() => {
    console.log("This needs to be done");
  });

// Even if one fails , it will return
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

let subsscriber = false;
// change probability to false to catch
var newPromise = new Promise((resolve, reject) => {
  if (subsscriber) {
    resolve("User is Subscriber");
  } else {
    reject("User has not subscribed");
  }
});

// check the type of promise
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
