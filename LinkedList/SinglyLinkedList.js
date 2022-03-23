import Node from "./Node.js";

export default class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // ADD TO TAIL OF LIST
  push(newData) {
    let newNode = new Node(newData);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //REMOVE FROM TAIL OF LIST
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      //30->20->10->null
      // will go till 20
      newTail = current;
      current = current.next;
    }
    // tail will be  20
    this.tail = newTail;
    this.tail.next = null;
    // 30->20->null
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  //INSERT AT THE HEAD
  unshift(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = this.tail = newNode;
      this.length++;
      return this;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  //REMOVE FROM HEAD OF LIST
  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length == 0) {
      this.tail = null;
    }
    return current;
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

  //INSERT A NODE WITH DATA AT GIVEN INDEX
  insert(data, index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(data);
    if (index === 0) return !!this.unshift(data);

    let newNode = new Node(data);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  //REMOVES ELEMENT AT INDEX
  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.pop();
    if (index === 0) return !!this.shift();
    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    if (!this.head) return null;
    if (this.length == 1) return this.head;

    //swap head and tail pointers if tail pointer is present;
    /// else if list contains only head then set head to prev node after loop completes
    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = current.next; // store next of current node
      current.next = prev; // change next of current node to prev
      // move prev and current one step forward;
      prev = current; // previous is now current
      current = next; // current is now next
    }

    //DO the below step if the tail pointer is not present;
    // this.head = prev;

    return this;
  }

  size() {
    return this.length;
  }

  // isEmpty checks if list is empty or not
  isEmpty() {
    return this.head === null || this.tail === null;
  }

  print() {
    let str = "";
    if (this.isEmpty()) {
      return null;
    } else {
      let current = this.head;
      while (current != null) {
        str += current.data + "->";
        current = current.next;
      }
    }
    return str + "null";
  }
}
