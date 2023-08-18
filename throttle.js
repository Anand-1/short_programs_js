//throttle example

function throttle(call, delay) {
  return function (...args) {
    enableButton();
    setTimeout(() => {
      call();
    }, delay);
  };
}

function disableButton() {
  document.getElementById("btn").disabled = false;
}
function enableButton() {
  document.getElementById("btn").disabled = true;
}
//throttle is called with delay,making it enabled
const newFun = throttle(disableButton, 1000);

// Get the Element
var myVal = document.getElementById("btn");
// 2. EventListener added and click function called
myVal.addEventListener("click", newFun);
