function throttle(fn, limit) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

const throttledFunction = throttle(() => {
  console.log("Throttled function called");
}, 2000);

throttledFunction();
throttledFunction();
throttledFunction();
