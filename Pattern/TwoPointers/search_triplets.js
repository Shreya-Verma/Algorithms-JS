/**
 *
 * Given an array of unsorted numbers, find all unique triplets in it that add up to zero.
 */
//STEP1:
/**
 *
 * 1. sort array
 * 2. To follow a similar approach, first, we will sort the array and then iterate through it taking one number at a time. 
 *      Let’s say during  our iteration we are at number ‘X’, so we need to find ‘Y’ and ‘Z’ such that X + Y + Z == 0
        X+Y+Z==0
        . At this stage, our problem translates into finding a pair whose sum is equal to “−X” 
        (as from the above equation Y + Z == -X).
 *
 *
 * 
 * 3. Another difference from Pair with Target Sum is that we need to find all the unique triplets. 
 *    To handle this, we have to skip any duplicate number. Since we will be sorting the array,
 *       so all the duplicate numbers will be next  to each other and are easier to skip.
 * 
 */
const search_triplets = function (arr) {
  //1. sort arr;
  arr.sort((a, b) => a - b);
  //[-3,-2,-1,0,1,1,2]
  const triplets = [];

  // skip same element to avoid duplicate triplets
  for (let i = 0; i < arr.length; i++) {
    //[-3,-2,-1,0,1,1,2]
    //0
    //1
    //2
    //3
    //4
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    // Y+Z = -X;
    //[-3,-2,-1,0,1,1,2], -(-3), 1, []
    //[-3,-2,-1,0,1,1,2], -(-2), 2, [[-3,1,2]]
    //[-3,-2,-1,0,1,1,2], -(-1), 3, [[-3,1,2], [-2,0,2],[-2,1,1]]
    //[-3,-2,-1,0,1,1,2], -(0), 4, [[-3,1,2], [-2,0,2],[-2,1,1],[-1,0,1]]
    //[-3,-2,-1,0,1,1,2], -(1), 5, [[-3,1,2], [-2,0,2],[-2,1,1],[-1,0,1]]
    search_pair(arr, -arr[i], i + 1, triplets);
  }
  return triplets;
};

function search_pair(arr, target_sum, left, triplets) {
  let right = arr.length - 1;
  //6
  //1 < 6
  //2 < 6
  //3 < 6
  //4 <6

  //-----------
  //2<6
  //3<6
  //4 < 5

  //----------
  //3<6
  //3 <5

  //------
  // 4 < 6
  // 4 < 5

  // 5<6

  while (left < right) {
    // 0, 1, 2, 3,4,5,6
    //[-3,-2,-1,0,1,1,2]
    let curr_sum = arr[left] + arr[right];
    // -2+2 = 0 != 3
    // -1+2 = 1 !=3
    // 0+2 = 2 !=3;
    // 1+2 == 3

    //-1+2= 1 != 2
    //0+2 =2 == 2
    //1+1 = 2 == 2

    //0+2 = 2 !== 1
    // 0+1 = 1 === 1

    // 1+2=3 !== 0
    // 1+1 = 2 != 0

    // 1+2 = 3 !== -1
    if (curr_sum === target_sum) {
      // make number positive if negative , vice versa
      triplets.push([-target_sum, arr[left], arr[right]]); //[-3,1,2] // [-2,0,2] // [-2,1,1] // [-1,0,1]
      left += 1;
      // 5 // 6
      ///// 4

      // 4
      right -= 1;
      // 5
      ///// 5 // 4

      // 4

      while (left < right && arr[left] === arr[left - 1]) {
        left += 1; // skip same element
      }
      while (left < right && arr[right] === arr[right + 1]) {
        right -= 1; // skip same element
      }
    } else if (target_sum > curr_sum) {
      left += 1;
      //2
      //3
      //4
      //---------
      // 3
      // 5
    } else {
      right -= 1;
      // 5

      // 5

      // 5
    }
  }
}
// 0, 1, 2, 3,4,5,6
//[-3,-2,-1,0,1,1,2]
console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
