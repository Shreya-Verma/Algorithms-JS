/**
 *
 * Implement a function, findProduct(arr), which modifies an array so that each index has a product of all the numbers present in the array except the number stored at that index.
 *
 */

function findProduct(arr) {
  let result = [];
  let temp = 1;
  for (let i = 0; i < arr.length; i++) {
    result[i] = temp;
    // 0 1
    // 1 8
    // 2 16
    // 3 48
    temp *= arr[i];
    // 1* 8
    // 8 * 2
    // 16 * 3
    // 48*4
  }
  temp = 1;
  console.log(result);

  for (let i = arr.length - 1; i >= 0; i--) {
    result[i] *= temp;

    temp *= arr[i];
  }
  console.log(result);
}

console.log(findProduct([8, 2, 3, 4]));
