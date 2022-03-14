/**
 * Longest Substring with Same Letters after Replacement (hard)
 *
 *
 *
 *
 *  Given a string with lowercase letters only, if you are allowed to replace no more than k letters with any letter, find the length of the longest substring having the same letters after replacement.
 *
 */
const length_of_longest_substring = function (str, K) {
  let maxRepeatLetterCount = 0;
  const charFrequencyMap = {};
  let start = 0;
  let maxLength = 0;
  // iterate through string to add one letter at a  time in window
  for (let end = 0; end < str.length; end++) {
    let rChar = str[end];
    if (!(rChar in charFrequencyMap)) {
      charFrequencyMap[rChar] = 0;
    }
    charFrequencyMap[rChar] += 1; // Added chars to map
    maxRepeatLetterCount = Math.max(
      maxRepeatLetterCount,
      charFrequencyMap[rChar]
    ); // check max frequency

    // Current window size is from windowStart to windowEnd, overall we have a letter which is
    // repeating 'maxRepeatLetterCount' times, this means we can have a window which has one letter
    // repeating 'maxRepeatLetterCount' times and the remaining letters we should replace.
    // if the remaining letters are more than 'k', it is the time to shrink the window as we
    // are not allowed to replace more than 'k' letters
    if (end - start + 1 - maxRepeatLetterCount > K) {
      //shrink window
      let lChar = str[start];
      charFrequencyMap[lChar] -= 1;
      start += 1;
    }
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
};

console.log(length_of_longest_substring("aabccbb", 2));
