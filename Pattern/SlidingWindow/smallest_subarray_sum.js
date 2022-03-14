/**
 *
 * 
 * Smallest Subarray With a Greater Sum (easy)
 * 
 * 
 * Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.
 * 
 * Input: [2, 1, 5, 2, 3, 2], S=7 
Output: 2
Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].
 */

//STEPS:
/**
     * 
     * //1.add elements from start of array till it becomes >= S
    //2. remember length of this window as smallest window.
    //3. Slide window ahead, by adding one element at a time.
    //4. And then also try to shrink the window from the beginning, We will shrink the window until the window’s sum is smaller than ‘S’ again.
        This is needed as we intend to find the smallest window. This shrinking will also happen in multiple steps; in each step, we will do two things:
            Check if the current window length is the smallest so far, and if so, remember its length.
            Subtract the first element of the window from the running sum to shrink the sliding window.
 */

const smallest_subarray_sum = function (S, arr) {
  if (arr.length === 1 && arr[0] < S) return 0; // no such sub array
  if (arr.length === 1 && arr[0] >= S) return 1;
  let sum = 0;
  let windowStart = 0;
  let minLength = Infinity;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    sum = sum + arr[windowEnd]; // add next element
    while (sum >= S) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1); // Assign min length
      sum = sum - arr[windowStart]; // sum will get reduced exiting the loop, shrinking window to find minimum window.
      windowStart += 1;
    }
  }
  if (minLength === Infinity) return 0; // no such sub array

  return minLength;
};

console.log(smallest_subarray_sum(7, [2, 1, 5, 2, 3, 2]));
