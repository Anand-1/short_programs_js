//throttle example

function throttle(enable, delay) {
  return function (...args) {
    disableButton();
    setTimeout(() => {
      enable();
    }, delay);
  };
}

function enableButton() {
  console.log("button enabled");
  document.getElementById("btn").disabled = false;
  document.getElementById("btn").style.color = "blue";
}
function disableButton() {
  console.log("button disabled");
  document.getElementById("btn").disabled = true;
  document.getElementById("btn").style.color = "red";
}
//throttle is called with delay,making it enabled

// Get the Element
var myVal = document.getElementById("btn");

// 2. EventListener added and click function called
myVal.addEventListener("click", throttle(enableButton, 1000));
