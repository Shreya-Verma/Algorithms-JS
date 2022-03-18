/**
 *
 * Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.
 *  Numbers can be negative integers
 * [-2,-1,0,1,2,3]
 * Expected out put
 * [0,1,1,4,4,9]
 *
 */

const make_squares = function (arr) {
  const n = arr.length;
  let start = 0;
  let end = n - 1;
  let highestSquareIdx = n - 1;
  let squares = Array(n).fill(0);

  while (start <= end) {
    //0 4
    //0,3
    //1,3
    //1,2
    //2,2
    let startSq = arr[start] * arr[start];
    let endSq = arr[end] * arr[end];
    if (startSq > endSq) {
      squares[highestSquareIdx] = startSq;
      //[0,0,0,4,4];
      //[0,1,1,4,4];
      start += 1;
    } else {
      squares[highestSquareIdx] = endSq;
      //[0,0,0,0,4];
      //[0,0,1,4,4];
      //[0,1,1,4,4];
      end -= 1;
    }
    highestSquareIdx -= 1;
  }

  return squares;
};
console.log(`Squares: ${make_squares([-2, -1, 0, 1, 2])}`);
console.log(`Squares: ${make_squares([-3, -1, 0, 1, 2])}`);
