/**
 *
 *
 * Longest Substring with Distinct Characters (hard)
 *
 *
 *
 * Given a string, find the length of the longest substring, which has all distinct characters.
 *
 */
/**
 *
 * SOLUTION
 * This problem follows the Sliding Window pattern, and we can use a similar dynamic sliding window strategy as discussed in Longest Substring with K Distinct Characters. We can use a HashMap to remember the last index of each character we have processed. Whenever we get a duplicate character, we will shrink our sliding window to ensure that we always have distinct characters in the sliding window.
 */
const non_repeat_substring = function (str) {
  let charIndexMap = {};
  let maxLength = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd];
    // if the map already contains the 'rightChar', shrink the window from the beginning so that
    // we have only one occurrence of 'rightChar'

    if (rightChar in charIndexMap) {
      windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
    }
    charIndexMap[rightChar] = windowEnd;

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
};

console.log(non_repeat_substring("aabccbb"));
