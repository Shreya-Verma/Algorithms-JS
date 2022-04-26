/**
 * Given a binary array data, return the minimum number of swaps required to group all 1’s present in the array together in any place in the array.
 */

function minSwapToGroupAllOnes(arr) {
  let K = arr.reduce((a, b) => a + b, 0);

  if (K < 2 || K === arr.length) return 0;

  let currCount = 0;
  let maxOneCount = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    //adding number of ones in current window
    currCount += arr[windowEnd];

    if (windowEnd - windowStart + 1 >= K) {
      maxOneCount = Math.max(maxOneCount, currCount);

      //Shrink window
      if (arr[windowStart] === 1) {
        currCount -= 1;
      }
      windowStart += 1;
    }
  }

  return K - maxOneCount;
}

console.log(minSwapToGroupAllOnes([1, 0, 1, 0, 1]));
