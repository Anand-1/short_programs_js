(function immediateA(a) {
  return (function immediateB(b) {
    console.log(a); // What is logged?
  })(1);
})(0);

/*0 is logged to the console.

immediateA is called with the argument 0, thus a parameter is 0.

immediateB function, being nested into immediateA function, 
is a closure that captures a variable from the outer immediateA scope,
where a is 0. Thus console.log(a) logs 0. */

let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count + "  Inside"); // What is logged?
  }
  console.log(count + " Outside"); // What is logged?
})();

//--------------------------------------------------------

function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function logMessage() {
    //  let message = `Count is ${count}`; change
    console.log(message);
  }

  return [increment, logMessage];
}

const [increment, log] = createIncrement();

increment();
log();
increment();
log();

//=================================================
function a() {
  console.log(b);
}

var b = 10;
a();
