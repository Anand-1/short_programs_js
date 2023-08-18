//debounce example

var count = 0;
var calldebounce = (e) => {
  console.log("Key Stroke  " + count++);
};

function debounce(call, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      call();
    }, delay);
  };
}

var betterfunction = debounce(calldebounce, 1000);

var myVal = document.getElementById("debounce");
myVal.addEventListener("keyup", betterfunction, false);
