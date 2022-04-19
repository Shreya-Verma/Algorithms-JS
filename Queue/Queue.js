import QNode from "./QNode.js";

export default class Queue {
  constructor() {
    this.start = null;
    this.end = null;
    this.length = 0;
  }

  //ADD TO QUEUE
  enqueue(data) {
    const newNode = new QNode(data);
    if (!this.length) {
      this.start = this.end = newNode;
    } else {
      this.end.next = newNode;
      this.end = newNode;
    }
    this.length++;
    return this;
  }

  //REMOVE FROM QUEUE
  dequeue() {
    if (!this.length) return undefined;
    const removeNode = this.start;
    this.start = this.start.next;
    removeNode.next = null;
    this.length--;
    if (this.length == 0) {
      this.start = this.end = null;
    }
    return removeNode;
  }

  getFront() {
    return this.start;
  }

  isEmpty() {
    return this.start === null;
  }

  size() {
    return this.length;
  }

  [Symbol.iterator]() {
    let counter = 0;
    let nextIndex = this.start;
    return {
      next: () => {
        while (nextIndex !== null) {
          let result = { value: nextIndex.data, done: false };
          nextIndex = nextIndex.next;
          counter++;
          return result;
        }
        return { value: counter, done: true };
      },
    };
  }
}
