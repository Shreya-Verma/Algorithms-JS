import SinglyLinkedList from "./SinglyLinkedList.js";
import DoublyLinkedList from "./DoublyLinkedList.js";

let list = new SinglyLinkedList();
console.log(`ISEMPTY: `, list.isEmpty());

console.log(list.unshift(10));
console.log(`UNSHIFT: `, list.toString());
console.log(list.push(20));
console.log(list.push(30));
console.log(list.push(40));
console.log(list.push(50));
console.log(list.push(60));
console.log(list.push(70));
console.log(list.push(80));
console.log(list.push(90));
console.log(list.push(100));
console.log(`PUSHED: `, list.toString());
console.log(`SHIFT REMOVED: `, list.shift());
console.log(`AFTER SHIFT: `, list.toString());
console.log(`GET NODE AT 2nd INDEX: `, list.get(2));
console.log(list.set(2, 1000));
console.log(`SET:list.set(2, 1000)  `, list.toString());
console.log(`INSERT:list.insert(450, 4)  `, list.insert(450, 4));
console.log(`AFTER INSERT: `, list.toString());
console.log(`REMOVE:list.remove(450, 4)  `, list.remove(6));
console.log(`AFTER REMOVE: `, list.toString());

console.log("AFTER ADDING ITERATOR");
for (let k of list) {
  console.log(k);
}

//REVERSE LL function;

SinglyLinkedList.prototype.reverse = function () {
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
};

// FIND CYCLIC LOOP IN LL

const detectLoop = (list) => {
  if (list.length === 1) return true;

  let oneStep = list.getHead();
  let twoStep = list.getHead();
  while (oneStep !== null && (twoStep !== null) & (twoStep.next !== null)) {
    oneStep = oneStep.next;
    twoStep = twoStep.next.next;
    if (oneStep == twoStep) return true;
  }
  return false;
};

let newList = new SinglyLinkedList();
newList.push(1);
newList.push(2);
newList.push(3);
newList.push(4);
newList.push(5);
newList.push(6);
newList.push(7);
newList.push(8);
console.log(`NEW LIST : `, newList.toString());
newList.reverse();
console.log(`NEW LIST REVERSED: `, newList.toString());
console.log(
  "====================================================================="
);
let doubleList = new DoublyLinkedList();
console.log(`ISEMPTY: `, doubleList.isEmpty());

console.log(doubleList.unshift(10));
console.log(`UNSHIFT: `, doubleList.toString());
console.log(doubleList.push(20));
console.log(doubleList.push(30));
console.log(doubleList.push(40));
console.log(doubleList.push(50));
console.log(doubleList.push(60));
console.log(doubleList.push(70));
console.log(doubleList.push(80));
console.log(doubleList.push(90));
console.log(doubleList.push(100));
console.log(`PUSHED: `, doubleList.toString());
console.log(`SHIFT REMOVED: `, doubleList.shift());
console.log(`AFTER SHIFT: `, doubleList.toString());
console.log(`GET NODE AT 2nd INDEX: `, doubleList.get(2));
console.log(doubleList.set(2, 1000));
console.log(`SET:list.set(2, 1000)  `, doubleList.toString());
console.log(`INSERT:list.insert(450, 4)  `, doubleList.insert(450, 4));
console.log(`AFTER INSERT: `, doubleList.toString());
console.log(`REMOVE:list.remove(450, 4)  `, doubleList.remove(6));
console.log(`AFTER REMOVE: `, doubleList.toString());
