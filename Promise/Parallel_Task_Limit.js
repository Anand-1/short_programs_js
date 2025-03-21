// array of function
const tasks_function = [() => {}, () => {}, () => {}, () => {}];
// Array of function that returns promise
const tasks_Function_promise = [
  () => new Promise((resolve) => resolve(1)),
  () => new Promise((resolve) => resolve(2)),
  () => new Promise((resolve) => resolve(3)),
  () => new Promise((resolve) => resolve(4)),
];
//Array of function tha return promise after settimeout/ some time
const tasks = [
  () => new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
  () => new Promise((resolve) => setTimeout(() => resolve(2), 1000)),
  () => new Promise((resolve) => setTimeout(() => resolve(3), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(4), 800)),
];
const results = parallelLimit(tasks, 2);
results.then((data) => console.log(data));
/*The key steps are:
1.Keep track of active tasks.
2.Start executing tasks up to the limit.
3.When a task completes, start the next one.
4.Resolve the final promise when all tasks finish.
*/

function parallelLimit(tasks, limit) {
  return new Promise((resolve, reject) => {
    let parallelTaskCount = 0;
    let totalTask = 0;
    const queue = [];
    const output = [];

    const execute = (task) => {
      // base case
      if (!task) {
        return;
      }

      parallelTaskCount++;

      task()
        .then((result) => {
          console.log(result);
          parallelTaskCount--;
          output.push(result);

          totalTask++;

          if (totalTask === tasks.length) {
            resolve(output);
          } else {
            execute(queue.shift());
          }
        })
        .catch((error) => {
          reject(error);
        });

      if (parallelTaskCount < limit) {
        execute(queue.shift());
      }
    };

    for (let i = 0; i < tasks.length; i++) {
      queue.push(tasks[i]);
    }

    execute(queue.shift());
  });
}
