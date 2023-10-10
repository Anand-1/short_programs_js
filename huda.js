let count = 0;
let inputFunction = (e) => {
  console.log("Click");
  let inputText = document.getElementById("password").value;
  document.getElementById("password").value = "";
  if (inputText !== "huda") {
    count++;
    if (count === 3) {
      startTimer();
    }
  }
  console.log(inputText);
};
function startTimer() {
  var timeleft = 10;
  var inputTimer = setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(inputTimer);
      document.getElementById("password").disabled = false;
      document.getElementById("countdown").innerHTML = "";
    } else {
      document.getElementById("countdown").innerHTML =
        timeleft + " seconds remaining";
      document.getElementById("password").disabled = true;
    }
    timeleft -= 1;
  }, 1000);
}

const getElemetFunction = document.getElementById("btn");
getElemetFunction.addEventListener("click", inputFunction, false);
