import MyMap from "./MyMap.js";

const map = new MyMap([
  [11, 67],
  [22, 89],
]);

function test() {}

let obj1 = { hell0: "78" };
map.set(1, 7);
map.set(2, 67);
map.set(4, 67);
map.set(6, 67);
map.set(5, 67);
map.set(3, 67);
map.set(3, 67);
map.set(test, 100000);
map.set(test, 100000);
map.set({ abc: 1 }, 898989);
map.set({ abc: 1 }, 898989);
map.set(obj1, 7676767676);
map.set(obj1, 7676767676);

console.log(map);

console.log(map.get({ abc: 1 }));

for (let [k, v] of map) {
  console.log(k, v);
}
