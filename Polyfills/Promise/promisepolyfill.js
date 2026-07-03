function PromisePolyFill(executor) {
  let onResolve,
    onReject,
    isFulfilled = false,
    isRejected = false,
    isCalled = false,
    value;

  function resolve(val) {
    isFulfilled = true;
    value = val;
    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  }

  function reject(val) {
    isRejected = true;
    value = val;
    if (typeof onReject === "function") {
      onReject(val);
      isCalled = true;
    }
  }

  this.then = function (callback) {
    onResolve = callback;
    if (isFulfilled && !isCalled) {
      called = true;
      onResolve(value);
    }
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;
    return this;
  };
  try {
    executor(resolve, reject);
  } catch {
    reject(error);
  }
}

const examplePromise = new PromisePolyFill((resolve, reject) => {
  reject(2);
});

examplePromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("Rejected," + err);
  });
