function createCounter() {
  let count = 0;
  return {
    increment() {
      count++;
      console.log(count);
    },
    reset() {
      count = 0;
      console.log("Counter reset");
    },
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

counter2.increment(); // Output?
counter1.reset(); // Output?
counter2.increment(); // Out
