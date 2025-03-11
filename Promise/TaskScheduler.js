console.log("Task Scheduler Loaded !");
// Implement a Scheduler with the maximum concurrency Control limit

class TaskScheduler {
  constructor(concurreny) {
    this.concurreny = Number(concurreny);
    this.runningTasks = 0;
    this.__waitingQueue = [];
  }

  getNextTask() {
    if (this.runningTasks < this.concurreny && this.__waitingQueue.length > 0) {
      this.nextTask = this.__waitingQueue.shift();
      this.nextTask();
    }
  }
  addtask(task) {
    return new Promise((resolve, reject) => {
      //
      async function __taskRunner() {
        this.runningTasks += 1;

        try {
          const result = await task();
          console.log(`Running `, result);
          resolve(result);
        } catch (err) {
          console.log(`Task failed`, err);
          reject(err);
        } finally {
          this.runningTasks -= 1;
          this.getNextTask();
        }
      }

      if (this.runningTasks < this.concurreny) {
        __taskRunner.call(this);
      } else {
        this.__waitingQueue.push(__taskRunner.bind(this));
      }
    });
  }
}
const scheduler = new TaskScheduler(2);
scheduler.addtask(
  () => new Promise((res) => setTimeout(() => res("Task 1"), 5 * 1000))
);
scheduler.addtask(
  () => new Promise((res) => setTimeout(() => res("Task 2"), 5 * 1000))
);
scheduler.addtask(
  () => new Promise((res) => setTimeout(() => res("Task 3"), 5 * 1000))
);
scheduler.addtask(
  () => new Promise((res) => setTimeout(() => res("Task 4"), 5 * 1000))
);
scheduler.addtask(
  () => new Promise((res) => setTimeout(() => res("Task 5"), 5 * 1000))
);
//https://www.youtube.com/watch?v=-ZnBEWFkDOk&list=PLlg0mLRU4WvnB1IkBZiwg70btOTH5Y22t&index=10
