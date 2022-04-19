import DNode from "./DNode.js";
export default class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //INSERT AT TAIL
  push(data) {
    let newNode = new DNode(data);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //REMOVE FROM TAIL
  pop() {
    if (!this.head) return undefined;

    let removeNode = this.tail;
    if (this.length == 1) {
      this.head = this.tail = null;
    } else {
      // set the node before the current tail as the new tail
      this.tail = this.tail.prev;
      // remove the connection from the new tail to the old tail
      this.tail.next = null;
      // remove the connection from the old tail to the new tail
      removeNode.prev = null;
    }
    this.length--;
    return removeNode;
  }

  //INSERT AT INDEX
  insert(data, index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(data);
    if (index === 0) return !!this.unshift(data);

    let newNode = new DNode(data);

    let prevNode = this.get(index - 1);
    // strore the prev nde's next value in temp
    let nextNode = prevNode.next;
    // connect the new node to the previous node
    newNode.prev = prevNode;
    prevNode.next = newNode;
    // connect the new node to the new next node
    newNode.next = nextNode;
    nextNode.prev = newNode;
    this.length++;
    return true;
  }

  //REMOVE FROM INDEX
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === this.length) return !!this.pop();
    if (index === 0) return !!this.shift();

    let removeNode = this.get(index);
    let tempPrev = removeNode.prev;
    let tempNext = removeNode.next;
    removeNode.next = removeNode.prev = null;

    tempPrev.next = tempNext;
    tempNext.prev = tempPrev;

    this.length--;
    return removeNode;
  }

  //INSERT AT HEAD
  unshift(data) {
    let newNode = new DNode(data);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //REMOVE FROM HEAD
  shift() {
    if (!this.head) return undefined;
    let removeNode = this.head;
    this.head = removeNode.next;
    this.head.prev = null;
    removeNode.next = null;
    this.length--;
    if (this.length == 0) {
      this.head = this.tail = null;
    }
    return removeNode;
  }

  //RETRIVE VALUE AT GIVEN INDEX
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  //UPDATE VALUE OF NODE AT GIVEN INDEX
  set(index, data) {
    let node = this.get(index);
    if (node) {
      node.data = data;
      return true;
    }
    return false;
  }

  isEmpty() {
    return this.head === null;
  }

  size() {
    return this.length;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  toString() {
    let str = "";
    if (this.isEmpty()) {
      return null;
    } else {
      let current = this.head;
      while (current != null) {
        str += current.data + "<==>";
        current = current.next;
      }
    }
    return str + "null";
  }
}
