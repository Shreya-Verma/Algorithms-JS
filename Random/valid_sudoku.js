/**
 * Given a Sudoku Board configuration, check whether it is valid or not.
 *
 *The basic idea is to check whether each row, column, and 3×3 box is valid or not on the basis of the following points: 

The Sudoku board could be partially filled, where empty cells are filled with the character ‘.’.
An empty Sudoku board is also valid.
A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated.

 * 
 * 
 */
function isValidSudoku(board, n) {
  if (isEmptySudoku(board)) return true;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!isValid(board, i, j)) return false;
    }
  }
  return true;
}

function isEmptySudoku(board) {
  let count = 0;
  board.forEach((row) => {
    if (row.every((n) => n === ".")) {
      count += 9;
    }
  });

  if (count == 81) return true;
  return false;
}
//check if any duplicates in current row
function isCurrentRowValid(arr, row) {
  let rowSet = new Set();
  let count = 0;
  for (let i = 0; i < 9; i++) {
    if (rowSet.has(arr[row][i])) {
      return false;
    }
    if (arr[row][i] !== ".") {
      rowSet.add(arr[row][i]);
    } else {
      count++;
    }
  }
  if (count == 9) return false;
  return true;
}

//check if any duplicates in current row
function isCurrentColumnValid(arr, col) {
  let colSet = new Set();
  let count = 0;
  for (let i = 0; i < 9; i++) {
    if (colSet.has(arr[col][i])) {
      return false;
    }
    if (arr[col][i] !== ".") {
      colSet.add(arr[col][i]);
    } else {
      count++;
    }
  }
  if (count === 9) return false;
  return true;
}

//check if any duplicates in current row
function isCurrentCubeValid(arr, row, col) {
  let cubeSet = new Set();
  let count = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let currentVal = arr[i + row][j + col];
      if (cubeSet.has(currentVal)) {
        return false;
      }
      if (currentVal !== ".") {
        cubeSet.add(currentVal);
      } else {
        count++;
      }
    }
  }
  if (count === 9) return false;
  return true;
}

function isValid(arr, row, col) {
  return (
    isCurrentRowValid(arr, row) &&
    isCurrentColumnValid(arr, col) &&
    isCurrentCubeValid(arr, row - (row % 3), col - (col % 3))
  );
}

let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
consle.log(isValidSudoku(board, 9));
