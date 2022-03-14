////////////////////////////////////////////////////////////////////////////////////
/**
 * 
 * Maximum Sum Subarray of Size K (easy)
 * 
 * 
 * Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.
 * Input: [2, 1, 5, 1, 3, 2], k=3 
    Output: 9
    Explanation: Subarray with maximum sum is [5, 1, 3].
 */

//BRUTE FORCE
function max_sub_array_of_size_k(K, arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  let result = 0;
  // 0 - 2
  // 1 - 3
  // 2 - 5
  for (let i = 0; i < arr.length - K + 1; i++) {
    let sum = 0;
    for (let j = i; j < i + K; j++) {
      sum = sum + arr[j];
    }

    result = Math.max(sum, result);
  }
  return result;
}

console.log(max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2]));

/////////////////////////////////////////////////SLIDING WINDOW//////////////////////////////////////////////////

function max_sub_array_of_size_k_sliding_window(K, arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  if (arr.length === K) {
    // return sum of array
    return arr.reduce((acc, val) => acc + val, 0);
  }

  let result = 0;
  let windowStart = 0;
  let sum = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    sum = sum + arr[windowEnd];
    if (windowEnd >= K - 1) {
      result = Math.max(sum, result);
      sum = sum - arr[windowStart];
      windowStart += 1;
    }
  }
  return result;
}

console.log(max_sub_array_of_size_k_sliding_window(3, [2, 1, 5, 1, 3, 2]));
