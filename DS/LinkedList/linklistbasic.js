class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const n1 = new Node(100);
console.log(n1);

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first Node
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  // Insert last node
  // Insert at Index
  // Get at Index
  // Remove at index
  // clear list
  // print list data

  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
}
