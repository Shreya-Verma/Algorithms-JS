import MySet from "./MySet.js";

let mySet = new MySet([1, 2, 3, 4]);
console.log(mySet);
console.log(mySet.has(78));

for (let k of mySet) {
  console.log(k);
}
