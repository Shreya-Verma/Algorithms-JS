/**
 *
 *  Time complexity:
 *  Best: O(n) : array is already sorted
 *  Avg: O(n^2)
 *  Worst: O(n^2)
 *
 */
export function insertionSort(original) {
  if (!original || original.length == 0) return -1;
  if (original.length === 1) return original;

  let arr = [...original];
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    let swaps = 0;
    console.log("pass ", i);
    while (j >= 0 && arr[j] > current) {
      // as long as arr[j] is bigger than current
      // move arr[j] to the right at arr[j + 1]
      swaps += 1;
      console.log("Swaps ", swaps);
      arr[j + 1] = arr[j];
      j--;
    }
    // Place the current element at index 0
    // or next to the smaller element
    arr[j + 1] = current;
  }
  return arr;
}
