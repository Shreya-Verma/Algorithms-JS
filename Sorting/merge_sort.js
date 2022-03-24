/**
 *
 *  Time complexity:
 *  Best: O(n) : array is already sorted
 *  Avg: O(n^2)
 *  Worst: O(n^2)
 *
 */
export function mergeSort(original) {
  if (!original || original.length <= 0) return -1;
  if (original.length === 1) return original;
  let arr = [...original];
  let middle = Math.floor(arr.length / 2);
  const left = arr.splice(0, middle);
  const right = arr;
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let sortedArr = [];
  console.log(`Left Array:  ${left} , Right Array ${right}`);
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}
