/**
 * Words Concatenation (hard)#
 *
 *
 *  Given a string and a list of words, find all the starting indices of substrings in the given string that are a concatenation of all the given words exactly once without any overlapping of words. It is given that all words are of the same length.
 *
 *
 * 
 * 
 * SOLUTION
 * 
 * This problem follows the Sliding Window pattern and has a lot of similarities with Maximum Sum Subarray of Size K. We will keep track of all the words in a HashMap and try to match them in the given string. Here are the set of steps for our algorithm:

    Keep the frequency of every word in a HashMap.
    Starting from every index in the string, try to match all the words.
    In each iteration, keep track of all the words that we have already seen in another HashMap.
    If a word is not found or has a higher frequency than required, we can move on to the next character in the string.
    Store the index if we have found all the words.
 * 
 */
const find_word_concatenation = function (str, words) {
  if (words.length === 0 || words[0].length === 0) {
    return [];
  }

  const wordFrequency = {};

  words.forEach((word) => {
    if (!(word in wordFrequency)) {
      wordFrequency[word] = 0;
    }
    wordFrequency[word] += 1;
  });

  const resultIndices = [];
  const wordsCount = words.length;
  const wordLength = words[0].length;

  for (let i = 0; i < str.length - wordsCount * wordLength + 1; i++) {
    const wordsSeen = {};
    for (let j = 0; j < wordsCount; j++) {
      let next_word_index = i + j * wordLength;
      // Get the next word from the string
      let word = str.substring(next_word_index, next_word_index + wordLength);
      if (!(word in wordFrequency)) {
        // Break if we don't need this word
        break;
      }

      // Add the word to the 'wordsSeen' map
      if (!(word in wordsSeen)) {
        wordsSeen[word] = 0;
      }
      wordsSeen[word] += 1;

      // no need to process further if the word has higher frequency than required
      if (wordsSeen[word] > (wordFrequency[word] || 0)) {
        break;
      }

      if (j + 1 === wordsCount) {
        // Store index if we have found all the words
        resultIndices.push(i);
      }
    }
  }

  return resultIndices;
};
