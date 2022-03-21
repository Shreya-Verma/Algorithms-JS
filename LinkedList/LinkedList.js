import Node from "./Node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // implementing isEmpty module of LinkedList class
  // isEmpty checks if list is empty or not
  isEmpty() {
    return this.head === null;
  }

  //Insertion At Head
  insertAtHead(newData) {
    let tempNode = new Node(newData);
    tempNode.nextElement = this.head;
    this.head = tempNode;
    this.size += 1;
    return this;
  }

  //Insertion At Tail
  insertAtTail(newData) {
    let tempNode = new Node(newData);
    if (this.isEmpty()) {
      this.head = tempNode;
      return this;
    }
    //Start from head
    let currNode = this.head;
    //Iterate to the last element
    while (currNode.nextElement !== null) {
      currNode = currNode.nextElement;
    }
    currNode.nextElement = tempNode;
    this.size += 1;
    return this;
  }

  getHead() {
    return this.head;
  }

  listSize() {
    return this.size;
  }

  printList() {
    if (this.isEmpty()) {
      return "";
    } else {
      let temp = this.head;
      let str = "";
      while (temp != null) {
        str += temp.data + "->";
        temp = temp.nextElement;
      }
      console.log(str + null);
    }
  }
}
