console.log("Queue Implementation Loaded !");

class Queue {
  constructor() {
    this.elements = [];
  }
  enqueue(node) {
    this.elements.push(node);
  }
  dequeue() {
    if (this.elements.length > 0) {
      return this.elements.shift();
    } else {
      return "UnderFlow Situation !";
    }
  }

  isEmpty() {
    return this.elements.length == 0;
  }
  print() {
    return this.elements;
  }
}

const newQueue = new Queue();
newQueue.enqueue("Anand");
newQueue.enqueue("Raj");
newQueue.enqueue("Singh");
console.log(newQueue.print());
newQueue.dequeue();
console.log(newQueue.print());
console.log(newQueue.isEmpty());
