/**
 * 
 * Given an array, find the average of all subarrays of ‘K’ contiguous elements in it.
 0, 1, 2, 3,  4, 5, 6, 7, 8
[1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
*/

//BRUTE FORCE
//K=5
function findAverage(arr, K) {
  const result = [];
  //0-4 /5
  //1-5 /5
  //2-6 /5
  //3-7 /5
  //4-8 /5

  //9-5+1 = 5
  for (let i = 0; i < arr.length - K + 1; i++) {
    // 0
    // 1
    // 2
    // 3
    // 4
    let sum = 0;
    for (let j = i; j < i + K; j++) {
      sum = sum + arr[j];
      // 0 -> 5elem => 4 = 1+3+2+6+ -1
      // 1 -> 5elem => 5 = 3+2+6+-1+4
      // 2 -> 5elem => 6 = 2+6+-1+4+1
      // 3 -> 5elem => 7 = 6+-1+4+1+8
      // 4 -> 5elem => 8 = -1+4+1+8+2
    }
    result.push(sum / K);
  }

  return result;
}
//O(N*K)

console.log(findAverage([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));

/////////////SLIDING_WINDOW//////////

function findAverageSlidingWindow(arr, K) {
  const result = [];

  let windowStart = 0;
  let sum = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // 0
    // 1
    // 2
    // 3
    // 4
    // 5
    sum = sum + arr[windowEnd];
    //0 + 1        //0 >= 4 false
    //1+3           //1 >= 4 false
    //1+3+2         //2 >= 4 false
    //1+3+2+6       //3 >= 4 false
    //1+3+2+6 -1    //4 >= 4true
    //1+3+2+6+ -1 -1 + 4   //5 >= 4true ....
    if (windowEnd >= K - 1) {
      result.push(sum / K);
      sum = sum - arr[windowStart];
      // 1+3+2+6+-1  = 1+3+2+6-1 -1//
      windowStart = windowStart + 1;
    }
  }
  return result;
}

let start = performance.now();

console.log(findAverageSlidingWindow([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));

let end = performance.now();

console.log(`Call to doSomething took ${end - start} milliseconds`);
