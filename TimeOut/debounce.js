//debounce example
// Once we pause , action will be performed
var count = 0;
var calldebounce = (e) => {
  console.log("Key up  " + count++);
};

function debounce(call, delay) {
  // local timer initialization
  let timer;

  return function (...arg) {
    // reset action , if next action is performed
    clearTimeout(timer);
    //timer given value
    timer = setTimeout(() => {
      call();
    }, delay);
  };
}

// Action performeed after some time
const betterfunction = debounce(calldebounce, 1000);

const getElemetFunction = document.getElementById("debounce");
getElemetFunction.addEventListener("keyup", betterfunction, false);
