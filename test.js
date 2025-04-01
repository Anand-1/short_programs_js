console.log("My Watch");
function timer() {
  let i = 0;
  const timer = setInterval(() => {
    console.log("Time is" + i++);
    if (i > 10) {
      clearInterval(timer);
    }
  }, 1000);
}
timer();
