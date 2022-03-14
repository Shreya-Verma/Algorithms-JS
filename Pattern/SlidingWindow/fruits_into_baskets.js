/**
 *
 * Longest Substring with maximum K Distinct Characters (medium)
 * 
 * 
 * 
 * 
 *You are visiting a farm to collect fruits. The farm has a single row of fruit trees. You will be given two baskets, and your goal is to pick as many fruits as possible to be placed in the given baskets.

    You will be given an array of characters where each character represents a fruit tree. The farm has following restrictions:

    Each basket can have only one type of fruit. There is no limit to how many fruit a basket can hold.
    You can start with any tree, but you can’t skip a tree once you have started.
    You will pick exactly one fruit from every tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
    Write a function to return the maximum number of fruits in both baskets.


    SOLUTION:
    This problem follows the Sliding Window pattern and is quite similar to Longest Substring with K Distinct Characters. In this problem, we need to find the length of the longest subarray with no more than two distinct characters (or fruit types!). This transforms the current problem into Longest Substring with K Distinct Characters where K=2.


 */

const fruits_into_baskets = function (fruits) {
  const K = 2;
  let charMap = {};
  let start = 0;
  let maxLength = 0;

  for (let end = 0; end < fruits.length; end++) {
    //Sliding window forward
    let rTree = fruits[end];
    if (!(rTree in charMap)) charMap[rTree] = 0;
    charMap[rTree] += 1; //making map of distinct characters {}

    while (Object.keys(charMap).length > K) {
      let lTree = fruits[start];
      charMap[lTree] -= 1;
      if (charMap[lTree] === 0) {
        delete charMap[lTree];
      }
      start += 1;
    }
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};
