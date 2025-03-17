(function immediateA(a) {
  return (function immediateB(b) {
    console.log(a); // What is logged?
    console.log(b); // What is logged?
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
    console.log(count + "  Inside"); // What is logged? 1
  }
  console.log(count + " Outside"); // What is logged? 0
})();

//--------------------------------------------------------

function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  console.log(message);
  function logMessage() {
    let message = `Count is ${count}`;
    console.log(message);
  }

  return [increment, logMessage];
}

const [incrementMessage, log] = createIncrement();
//0
incrementMessage();
log(); //1
incrementMessage();
log(); //2
incrementMessage();
log(); //3
