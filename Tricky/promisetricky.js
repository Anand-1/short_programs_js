console.log(1);

const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    console.log(2);
  }, 1000);
});

const p2 = new Promise((res, rej) => {
  console.log(3);
});

setTimeout(() => {
  console.log(4);
}, 1000);
console.log(5);
/////////////////////
let c = 0;

let id = setInterval(function () {
  c = c > 10 ? c + "1" : ++c;

  console.log("Hello");

  if (c >= 100) clearInterval(id);
});
