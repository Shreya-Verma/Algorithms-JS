import SinglyLinkedList from "./SinglyLinkedList.js";

let list = new SinglyLinkedList();
console.log(`ISEMPTY: `, list.isEmpty());

console.log(list.unshift(10));
console.log(`UNSHIFT: `, list.print());
console.log(list.push(20));
console.log(list.push(30));
console.log(list.push(40));
console.log(list.push(50));
console.log(list.push(60));
console.log(list.push(70));
console.log(list.push(80));
console.log(list.push(90));
console.log(list.push(100));
console.log(`PUSHED: `, list.print());
console.log(`SHIFT REMOVED: `, list.shift());
console.log(`AFTER SHIFT: `, list.print());
console.log(`GET NODE AT 2nd INDEX: `, list.get(2));
console.log(list.set(2, 1000));
console.log(`SET:list.set(2, 1000)  `, list.print());
console.log(`INSERT:list.insert(450, 4)  `, list.insert(450, 4));
console.log(`AFTER INSERT: `, list.print());
console.log(`REMOVE:list.remove(450, 4)  `, list.remove(6));
console.log(`AFTER REMOVE: `, list.print());

let newList = new SinglyLinkedList();
newList.push(1);
newList.push(2);
newList.push(3);
newList.push(4);
newList.push(5);
newList.push(6);
newList.push(7);
newList.push(8);
console.log(`NEW LIST : `, newList.print());
newList.reverse();
console.log(`NEW LIST REVERSED: `, newList.print());
