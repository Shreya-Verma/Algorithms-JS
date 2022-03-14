/**
 * Longest Subarray with Ones after Replacement (hard)
 *
 *
 *Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.
 *Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3
 */
const length_of_longest_binary_substring = function (arr, K) {
  let maxLength = 0;
  let maxOnesCount = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    if (arr[windowEnd] === 1) {
      maxOnesCount += 1;
    }
    if (windowEnd - windowStart + 1 - maxOnesCount > K) {
      //Shrink window
      if (arr[windowStart] === 1) {
        maxOnesCount -= 1;
      }
      windowStart += 1;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
};

console.log(
  length_of_longest_binary_substring([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3)
);
