/**
 * 
 * Given an array of strings words (without duplicates), return all the concatenated words in the given list of words.
    A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.
 * 
 */
function identifyConcatenations(words) {
  var res = [];
  // Set for O(1) lookups
  var wordSet = new Set(words);
  var cache = {};

  // Process for each word
  words.forEach((word) => {
    if (dfs(word, wordSet, cache)) res.push(word);
  });
  return res;
}

function dfs(word, wordSet, cache) {
  // If result for current word already calculated then
  // return from cache
  if (cache.hasOwnProperty(word)) return cache[word];

  // Traverse over the word to generate all combinations
  for (var i = 1; i < word.length; i++) {
    // Divide the word into prefix and suffix
    var prefix = word.slice(0, i);
    var suffix = word.slice(i);

    if (wordSet.has(prefix)) {
      if (wordSet.has(suffix) || dfs(suffix, wordSet, cache)) {
        cache[word] = true;
        return true;
      }
    }
  }
  cache[word] = false;
  return false;
}

let words = ["brick", "constructor", "slanderously"];

console.log(`Concatenated words are : ${identifyConcatenations(words)}`);
