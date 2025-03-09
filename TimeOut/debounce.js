/*
Debouncing is a way of delaying the execution of a function until a certain amount
of time has passed since the last time it was called. This can be useful for scenarios
where we want to avoid unnecessary or 
repeated function calls that might be expensive or time-consuming.
*/

//debounce example
// Once we pause , action will be performed
var count = 0;
var calldebounce = (data) => {
  console.log(data);
  console.log("Key up  " + count++);
};

function hofdebounce(call, delay) {
  // local timer initialization, with closure
  let timer;

  return function (...arg) {
    // reset action , if next action is performed
    clearTimeout(timer);
    //timer given value
    timer = setTimeout(() => {
      call(arg);
    }, delay);
  };
}

// Action performeed after some time
const result = hofdebounce(calldebounce, 1000);

const getElemetFunction = document.getElementById("debounce");
getElemetFunction.addEventListener("keyup", (e) => result(e.target.value));
