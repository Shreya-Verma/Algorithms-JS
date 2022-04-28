/**
 *Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr. Since the answer may be large, return the answer modulo 109 + 7.
 */

function findSumOfSubarrayMinimums(arr) {
  if (!arr || !arr.length) return 0;
  let n = arr.length;
  let sum = 0;

  let MOD = 1e9 + 7;
  for (let i = 0; i < n; i++) {
    let min = arr[i];
    for (let j = i; j < n; j++) {
      min = Math.min(min, arr[j]);
      sum += min;
    }
  }
  return sum % MOD;
}

console.log(
  `Sum of sub array minimums ${findSumOfSubarrayMinimums([3, 1, 2, 4])}`
);
