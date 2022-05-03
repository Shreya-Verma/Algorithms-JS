/**
 *
 * Given an array of integers nums, find the maximum length of a subarray where the product of all its elements is positive.
 * A subarray of an array is a consecutive sequence of zero or more values taken out of that array.
 * Return the maximum length of a subarray with positive product.(>0)
 *
 */

function findMaxLengthOfSubarrayWithPositiveProduct(nums) {
  let max = 0;
  //keep the count the negatives till your iterator index.
  let negativeCount = 0;
  //an index of when you last found a zero.
  let zeroIndex = -1;
  //This will be required in case you encountered negative count to be odd.
  let firstNegativeIndex = -1;
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] < 0) {
      negativeCount++;
      //update firstNegativeIndex for first time
      if (firstNegativeIndex === -1) {
        firstNegativeIndex = i;
      } else {
        //if its a negative number and count becomes even
        if (negativeCount % 2 == 0) {
          max = Math.max(max, i - zeroIndex);
        }
      }
    } else if (nums[i] === 0) {
      //reset everything
      firstNegativeIndex = -1;
      negativeCount = 0;
      zeroIndex = i;
    } else {
      if (negativeCount % 2 == 0) {
        max = Math.max(max, i - zeroIndex);
      } else {
        max = Math.max(max, i - firstNegativeIndex);
      }
    }
  }
  return max;
}

console.log(
  findMaxLengthOfSubarrayWithPositiveProduct([1, 2, 0, -1, 2, 3, 4, -2])
);
