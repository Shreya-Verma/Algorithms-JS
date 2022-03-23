import Queue from "./Queue.js";

let myQueue = new Queue();
console.log(myQueue.isEmpty());
console.log(myQueue.enqueue(12));
console.log(myQueue.enqueue(13));
console.log(myQueue.enqueue(14));
console.log(myQueue.enqueue(15));
console.log(myQueue.enqueue(16));
console.log(myQueue.enqueue(17));

for (let k of myQueue) {
  console.log(k);
}

console.log(myQueue.dequeue());
console.log(myQueue.getFront());

for (let k of myQueue) {
  console.log(k);
}
