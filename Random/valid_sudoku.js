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
function isValidSudoku(board) {
  if (!board || board.length <= 0) return false;
  if (board.length == 1 && board[0].length == 1) return true;
  let size = board.length;
  const rowSet = new Array(9).fill().map(() => new Set());
  const colSet = new Array(9).fill().map(() => new Set());
  const boxSet = new Array(9).fill().map(() => new Set());

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let currEl = board[i][j];
      let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (currEl === ".") continue;

      let a = rowSet[i].has(currEl);
      let b = colSet[j].has(currEl);
      let c = boxSet[boxIndex].has(currEl);

      if (a || b || c) return false;

      rowSet[i].add(currEl);
      colSet[j].add(currEl);
      boxSet[boxIndex].add(currEl);
    }
  }
  return true;
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

console.log(isValidSudoku(board));
