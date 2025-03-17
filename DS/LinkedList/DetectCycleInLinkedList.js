// class Node {
//     data: number;
//     next: Node | null;
//     constructor(data: number, next: Node | null = null) {
//         this.data = data;
//         this.next = next;
//     }
// }

// class LinkedList {
//     private head: Node | null;
//     private size: number;
//     constructor(node: Node) {
//         this.head = node;
//         this.size = 1;
//     }
//     detectCycle(): boolean {
//         let slow: Node | null = this.head;
//         let fast: Node | null = this.head;
//         while (fast !== null && fast.next !== null) {
//             slow = slow!.next;       // Move one step
//             fast = fast.next.next;  // Move two steps
//             if (slow === fast) {
//                 return true; // Cycle detected
//             }
//         }
//         return false; // No cycle
//     }
// }
// // Example usage
// const firstNode = new Node(10);
// const list = new LinkedList(firstNode);
// const secondNode = new Node(20);
// const thirdNode = new Node(30);
// const fourthNode = new Node(40);
// list.addAtLast(secondNode);
// list.addAtLast(thirdNode);
// list.addAtLast(fourthNode);
// // Creating a cycle (linking last node to second node)
// fourthNode.next = firstNode;
// console.log("Cycle Detected:", list.detectCycle()); // Output: true
