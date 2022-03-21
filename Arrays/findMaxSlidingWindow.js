/**
 * Given an integer array and a window of size w, find the current maximum value in the window as it slides through the entire array.
 *
 * If the window size is greater than the array size, we will consider the entire array as a single window.
 *
 */
let findMaxSlidingWindow = function (nums, windowSize) {
  if (nums.length < windowSize) windowSize = nums.length;
  if (nums.length == 0) return [];

  let result = [];
  let queue = []; // containing largest element
  //Findin in first window size;
  for (let i = 0; i < windowSize; i++) {
    while (queue.length > 0 && nums[i] >= nums[queue[queue.length - 1]]) {
      queue.pop();
    }
    queue.push(i);
  }

  result.push(nums[queue[0]]);

  for (let i = windowSize; i < nums.length; i++) {
    while (queue.length > 0 && nums[i] >= nums[queue[queue.length - 1]]) {
      queue.pop();
    }
  }
};

console.log(findMaxSlidingWindow([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
