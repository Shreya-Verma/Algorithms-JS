/**
 * You are given an integer array nums.
 * The range of a subarray of nums is the difference between the largest and smallest element in the subarray.
 * Return the sum of all subarray ranges of nums.
 * A subarray is a contiguous non-empty sequence of elements within an array.
 *
 */

function findSumOfSubarrayRanges(nums) {
  if (!nums || !nums.length) return 0;
  let n = nums.length;
  let sum = 0;
  let max, min;
  for (let i = 0; i < n - 1; i++) {
    max = nums[i];
    min = nums[i];
    for (let j = i + 1; j < n; j++) {
      max = Math.max(max, nums[j]);
      min = Math.min(min, nums[j]);
      sum += max - min;
    }
  }
  return sum;
}
