function outest() {
  var c = 12;
  function outer(b) {
    function inner() {
      console.log(a, b, c); // try printing b and c  here
    }
    let a = 10; // let instead of var
    return inner;
  }
  return outer;
}

let a = 100;
// Passing argument here
var close = outest()("Hi Closures"); // this will give you outer function
close();
