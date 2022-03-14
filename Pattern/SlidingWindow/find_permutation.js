/**
 * Permutation in a String (hard)
 *
 * Given a string and a pattern, find out if the string contains any permutation of the pattern.
 * Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:

    abc
    acb
    bac
    bca
    cab
    cba
    If a string has ‘n’ distinct characters, it will have n!
    n! permutations.
 *
 */
//SOLUTION
/**
 *  Create a HashMap to calculate the frequencies of all characters in the pattern.
    Iterate through the string, adding one character at a time in the sliding window.
    If the character being added matches a character in the HashMap, decrement its frequency in the map. If the character frequency becomes zero, we got a complete match.
    If at any time, the number of characters matched is equal to the number of distinct characters in the pattern (i.e., total characters in the HashMap), we have gotten our required permutation.
    If the window size is greater than the length of the pattern, shrink the window to make it equal to the pattern’s size. At the same time, if the character going out was part of the pattern, put it back in the frequency HashMap.
 * 
 * 
 */

const find_permutation = function (str, pattern) {
  let charFrequency = {};
  let windowStart = 0;
  let matched = 0;

  //build pattern lookup
  for (i = 0; i < pattern.length; i++) {
    const chr = pattern[i];
    if (!(chr in charFrequency)) {
      charFrequency[chr] = 0;
    }
    charFrequency[chr] += 1;
  }

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd];
    if (rightChar in charFrequency) {
      // Decrement the frequency of matched character
      charFrequency[rightChar] -= 1;
      if (charFrequency[rightChar] === 0) {
        matched += 1;
      }
    }

    if (matched === Object.keys(charFrequency).length) {
      return true;
    }

    //Shrink window
    if (windowEnd >= pattern.length - 1) {
      let leftChar = str[windowStart];
      windowStart += 1;
      if (leftChar in charFrequency) {
        if (charFrequency[leftChar] === 0) {
          matched -= 1;
        }
        charFrequency[leftChar] += 1;
      }
    }
  }

  return false;
};

console.log(find_permutation("odicf", "dc"));
