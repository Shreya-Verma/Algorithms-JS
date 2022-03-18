/**
 *
 * @param {*} nums
 * @param {*} target
 * @returns
 *
 *
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 */

// 0,1, 2, 3
//[2,7,11,15] target: 11+15 = 26
const bruteForce = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    //0 // 1 //2
    for (let j = i + 1; j < nums.length; j++) {
      //1 // 2 // 3
      if (nums[i] + nums[j] === target) return `(${i}, ${j})`;
      //(0,1)= 2+7, (0,2) 2+11,(0,3) 2+ 15
      //1,2 = 18, 1,3 = 22
      //2,3 = 11+15 = 26
    }
  }
};

// 0,1, 2, 3
//[2,7,11,15] target: 11+15 = 26
const memoized = (nums, target) => {
  const memo = {};
  for (let i = 0; i < nums.length; i++) {
    if (Number.isInteger(memo[nums[i]])) return `(${memo[nums[i]]}, ${i})`;
    //nums[0] : 2, memo : undefined
    //nums[1] : 7, memo : undefined
    //nums[2] : 11, memo : undefined
    //nums[3] : 15, memo : true : // return memo{nums[3]=15: 2}
    else memo[target - nums[i]] = i;
    //memo{26-2=24 , 0} = 0
    //memo{26-7=19 , 1} = 1
    //memo{26-11=15, 2} = 2
  }
};

var twoSum = function (nums, target) {
  return memoized(nums, target);
};
console.log(twoSum([2, 7, 11, 15], 26));
