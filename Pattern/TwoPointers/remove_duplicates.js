/**
 * SORTED NUMBERS
 * Given an array of sorted numbers, remove all duplicates from it.
 * You should not use any extra space; after removing the duplicates in-place
 * return the length of the subarray that has no duplicate in it.
 *
 */

//O(n) and O(1);
const remove_duplicates = function (arr) {
  let next = 1;
  for (let i = 0; i < arr.length; i++) {
    //0 //1
    if (arr[next - 1] !== arr[i]) {
      //f, t
      arr[next] = arr[i];
      next += 1;
    }
  }

  return next;
};
// 0 ,1, 2, 3, 4, 5, 6
console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
//[1-1 =0] [0] [2, 3, 3, 3, 6, 9, 9] next = 1;
//[1-1 =0] [1] [2, 3, 3, 3, 6, 9, 9] next = 2;
//[2-1 =1] [2] [2, 3, 3, 3, 6, 9, 9] next = 2;
//[2-1 =1] [3] [2, 3, 3, 3, 6, 9, 9] next = 2;
//[2-1 =1] [4] [2, 3, 6, 3, 6, 9, 9] next = 3;
//[3-1 =2] [5] [2, 3, 6, 9, 6, 9, 9] next = 4;
//[4-1 =3] [6] [2, 3, 6, 9, 6, 9, 9] next = 4;

/**
 *
 * Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and return the new length of the array.
 *
 *
 */

const remove_key_elemen = function (arr, key) {
  let next = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== key) {
      arr[next] = arr[i];
      next += 1;
    }
  }
  return next;
};

console.log(remove_key_elemen([2, 11, 2, 2, 1], 2));
