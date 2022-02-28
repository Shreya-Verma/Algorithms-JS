/**
 * A magic square of order n is an arrangement of n^2 numbers, usually distinct integers, in a square, such that the n numbers in all rows, all columns, and both diagonals sum to the same constant. A magic square contains the integers from 1 to n^2.
 * The constant sum in every row, column and diagonal are called the magic constant or magic sum, M. The magic constant of a normal magic square depends only on n and has the following value: M = n(n^2+1)/2
 */
//PROBLEM STATEMENT
/**
 * A farmer has 25 cows numbered from 1 to 25 such that cow-1 gives 1 gallon of milk,  cow 2- gives 2-gallon milk and the so on up to cow 25 gives 25 gallons of milk. These cows are to be distribute equally among 5 sons, such that the milk from the shared cows should be to equal quantity for each son.
 *
 * In this case M = 5(25+1)/2 = 65
 */

//SOLUTION:
//NOTE: The solution works for odd numbers of N only

// 1 is always stored at position (n/2, n-1) in a matrix of [n*n].
// Four conditions hold:
// 1. The position of next number is calculated by decrementing row number of the previous number by 1, and incrementing the column number of the previous number by 1.
// 2. At any time, if the calculated row position becomes -1, it will wrap around to n-1. Similarly, if the calculated column position becomes n, it will wrap around to 0.
// 3. If the magic square already contains a number at the calculated position, calculated column position will be decremented by 2, and calculated row position will be incremented by 1.
// 4. If the calculated row position is -1 & calculated column position is n, the new position would be: (0, n-2).

function generateMagicSquare(n) {
  //Create 2D Array
  //  [0, 0, 0, 0, 0]
  //  [0, 0, 0, 0, 0]
  //  [0, 0, 0, 0, 0]
  //  [0, 0, 0, 0, 0]
  //  [0, 0, 0, 0, 0]
  const magicSquare = Array(n)
    .fill(0)
    .map((x) => Array(n).fill(0));

  //initalize values of positions
  let row = parseInt(n / 2);
  let col = n - 1;

  //loop for length of numbers form 1---n*n .. in this case 1----25
  for (let x = 1; x <= n * n; ) {
    //check for 4th condition
    if (row == -1 && col == n) {
      row = 0;
      col = n - 2;
    } else {
      // 2nd condition
      if (col == n) {
        col = 0;
      }

      // 2st condition
      if (row < 0) {
        row = n - 1;
      }
    }

    //  Condition 3 : Check if the space is filled
    if (magicSquare[row][col] != 0) {
      row = row + 1;
      col = col - 2;
      continue;
    } else {
      // add a number
      magicSquare[row][col] = x++;
    }

    // 1st condition
    row--;
    col++;
  }

  return magicSquare;
}

console.log(generateMagicSquare(5));
