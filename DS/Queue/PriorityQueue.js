class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(item, priority) {
    this.items.push({ item, priority });
    this.items.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.items.shift().item;
  }
  showQueue() {
    return this.items;
  }
}

const priorityQ = new PriorityQueue();
priorityQ.enqueue("Task 1", 1);
priorityQ.enqueue("Task 2", 5);
priorityQ.enqueue("Task 3", 4);
console.log(priorityQ.showQueue());
console.log(priorityQ.dequeue()); // Output: "Task 2"
