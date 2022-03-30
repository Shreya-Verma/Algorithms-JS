import MyMap from "./MyMap.js";

const map = new MyMap([
  [11, 67],
  [22, 89],
]);

map.set(1, 7);
map.set(2, 67);
map.set(4, 67);
map.set(6, 67);

console.log(map);

for (let [k, v] of map) {
  console.log(k, v);
}
