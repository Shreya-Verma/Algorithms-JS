/**
 * 
 * Longest Substring with maximum K Distinct Characters (medium)
 * 
 * 
 * Given a string, find the length of the longest substring in it with no more than K distinct characters.
 *Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".
 *
 */

/**
 * 
 * 1. First, we will insert characters from the beginning of the string until we have K distinct characters in the HashMap.
   2. These characters will constitute our sliding window. We are asked to find the longest such window having no more than K distinct characters. We will remember the length of this window as the longest window so far.
  After this, we will keep adding one character in the sliding window (i.e., slide the window ahead) in a stepwise fashion.
   In each step, we will try to shrink the window from the beginning if the count of distinct characters in the HashMap is larger than K. We will shrink the window until we have no more than K distinct characters in the HashMap. This is needed as we intend to find the longest window.
While shrinking, we’ll decrement the character’s frequency going out of the window and remove it from the HashMap if its frequency becomes zero.
At the end of each step, we’ll check if the current window length is the longest so far, and if so, remember its length.
 * 
 * 
 */

function longest_substring_with_k_distinct(str, K) {
  if (!str || str.length <= 0) return "Illegal Argument";

  const charMap = {};
  let maxLength = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    /// adding char in map
    let rightChar = str[windowEnd];
    if (!(rightChar in charMap)) {
      charMap[rightChar] = 0; /// adding distinct char in map
    }
    charMap[rightChar] += 1; //{a:2, r:1, ..... }

    while (Object.keys(charMap).length > K) {
      let leftChar = str[windowStart];
      charMap[leftChar] -= 1;
      if (charMap[leftChar] === 0) {
        delete charMap[leftChar];
      }
      windowStart += 1;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}

console.log(longest_substring_with_k_distinct("araaci", 2));
