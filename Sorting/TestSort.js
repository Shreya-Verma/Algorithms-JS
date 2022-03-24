import { bubbleSort, naiveBubbleSort } from "./bubble_sort.js";
import { insertionSort } from "./insertion_sort.js";
import { mergeSort } from "./merge_sort.js";

let originalArr = [
  120, 40, 60, 150, 50, 20, 100, 130, 10, 30, 140, 80, 90, 70, 110,
];

console.log(
  "-------------------------------------------BUBBLE SORT---------------------------------------------------------"
);
console.log(naiveBubbleSort(originalArr));
console.log(bubbleSort(originalArr));
console.log(
  "-------------------------------------------INSERTION SORT------------------------------------------------------"
);
console.log(insertionSort(originalArr));
console.log(
  "-------------------------------------------MERGE SORT------------------------------------------------------"
);
console.log(mergeSort(originalArr));
