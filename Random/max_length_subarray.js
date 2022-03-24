/**
 *
 * Given two integer arrays nums1 and nums2, return the maximum length of a subarray that appears in both arrays.
 *
 */

function maxLengthSubArray(A, B) {
  if (!A || !B) return -1;
  let result = 0;
  let m = A.length,
    n = B.length;
  let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (A[i] === B[j]) {
        dp[i + 1][j + 1] = dp[i][j] + 1;
        result = Math.max(result, dp[i + 1][j + 1]);
      }
    }
  }

  return result;
}
console.log(maxLengthSubArray([1, 2, 3, 2, 1], [3, 2, 1, 4]));
