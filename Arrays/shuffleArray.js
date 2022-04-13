/**
 *Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn]
 Return the array in the form 
 [x1,y1,x2,y2,...,xn,yn].
 */

const shuffle = function (nums, n) {
  if (!nums) return -1;
  if (n >= nums.length) return nums;
  let result = [];

  for (let i = 0; i < n; i++) {
    result.push(nums[i]);
    result.push(nums[i + n]);
  }
  return result;
};

console.log(shuffle([1, 1, 2, 2], 2));
