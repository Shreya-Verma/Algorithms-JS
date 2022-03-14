/**
 *
 * Given a string and a pattern, find all anagrams of the pattern in the given string.
 *
 */

const find_string_anagrams = function (str, pattern) {
  const result_indexes = [];
  let charFrequency = {};
  let matched = 0;
  let windowStart = 0;

  //Make a lookup
  for (let char of pattern) {
    if (!(char in charFrequency)) charFrequency[char] = 0;
    charFrequency[char] += 1;
  }
  console.log(charFrequency);

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rChar = str[windowEnd];
    if (rChar in charFrequency) {
      charFrequency[rChar] -= 1;
      if (charFrequency[rChar] === 0) {
        matched += 1;
      }
    }

    if (matched === Object.keys(charFrequency).length) {
      result_indexes.push(windowStart); // from where the anagram started
    }

    //Shrink
    if (windowEnd >= pattern.length - 1) {
      let lChar = str[windowStart];
      windowStart += 1;
      if (lChar in charFrequency) {
        //before putting the character back, decrement the matched count
        if (charFrequency[lChar] === 0) {
          matched -= 1;
        }
        charFrequency[lChar] += 1;
      }
    }
  }

  return result_indexes;
};

console.log(find_string_anagrams("ppqp", "pq"));
