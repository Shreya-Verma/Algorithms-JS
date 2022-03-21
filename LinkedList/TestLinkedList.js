import LinkedList from "./LinkedList.js";

let list = new LinkedList();
console.log(list.isEmpty());
for (var i = 5; i <= 10; i++) {
  list = list.insertAtHead(i);
}
list.printList(); //will print the list
console.log(list.getHead());
console.log(list.listSize());
