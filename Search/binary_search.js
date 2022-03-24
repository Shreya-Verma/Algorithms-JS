/**
 * BEST TO USE WHEN HAVE A SORTED ARRAY
 **********************************
 * Time complexity :
 * Worst: O(log n)
 * Best : O(1)
 *
 */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function binary_search(arr, elem) {
  if (arr.length === 0) {
    return 0;
  }
  let first = 0;
  let last = arr.length - 1;
  let middle = Math.floor((first + last) / 2);

  while (arr[middle] !== elem && first <= last) {
    if (element < arr[middle]) {
      last = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((first + last) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

console.log(binary_search(arr, 3));
