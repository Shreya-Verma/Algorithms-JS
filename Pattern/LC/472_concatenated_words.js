/**
 * 
 * Given an array of strings words (without duplicates), return all the concatenated words in the given list of words.
    A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.
 * 
 */

function findConcatenatedWords(words) {
  if (!words || !words.length) return;
  if (words.length === 1) return words[0];
  let result = [];
}

let words = [
  "cat",
  "cats",
  "catsdogcats",
  "dog",
  "dogcatsdog",
  "hippopotamuses",
  "rat",
  "ratcatdogcat",
];
console.log(findConcatenatedWords(words));
