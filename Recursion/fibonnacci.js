// 0
// 1
// 1=0+1
// 2=1+1
// 3=1+2
// 5=2+3
// 8=3+5
// 13=5+8
// 21=8+13
// 34=13+21

// Problem generate fibonacci series
let num = 10;

function fibonacci(n) {
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr;
}

console.log(fibonacci(num));

// Recursive Fibonnaci

function fibRicursion(n) {
  if (n <= 1) return n;
  return fibRicursion(n - 1) + fibRicursion(n - 2);
}

console.log(fibRicursion(10));
