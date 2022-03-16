/**
 * Pair with Target Sum (easy)
 *
 *Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.
 *Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.
 *
 */

//Brute Force
//O(n*n-1)= n2
const pair_with_targetsum_bruteForce = function (arr, target_sum) {
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target_sum) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
};

console.log(pair_with_targetsum_bruteForce([1, 2, 3, 4, 6], 6));

//TWO PAIR
//O(n) Space O(1)
const pair_with_targetsum_two_pair = function (arr, target_sum) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let sum = arr[start] + arr[end];
    if (sum === target_sum) {
      return [start, end];
    }

    if (target_sum > sum) {
      // need a pair with greater sum
      start += 1;
    } else {
      end -= 1;
    }
  }
  return [-1, -1];
};

console.log(pair_with_targetsum_two_pair([1, 2, 3, 4, 6], 6));
