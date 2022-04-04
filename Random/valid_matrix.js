//-------APPROACH 1-------
function isValidMatrix1(matrix) {
  if (!matrix || matrix.length <= 0) return false;
  if (matrix.length == 1 && matrix[0].length === 1) return true;

  let size = matrix.length;

  for (let i = 0; i < size; i++) {
    const rowSet = new Set();
    const colSet = new Set();
    for (let j = 0; j < size; j++) {
      let rowEl = matrix[i][j];

      let colEl = matrix[j][i];

      if (rowSet.has(rowEl)) return false;
      if (colSet.has(colEl)) return false;

      rowSet.add(rowEl);
      colSet.add(colEl);
    }
  }
  return true;
}
//-------APPROACH 2-------
function isValidMatrix2(matrix) {
  if (!matrix || matrix.length <= 0) return false;

  let n = matrix[0].length;

  let sum = (n * (n + 1)) / 2;
  let rowsum;
  let colsum;
  for (let i = 0; i < n; i++) {
    rowsum = 0;
    colsum = 0;
    for (let j = 0; j < n; j++) {
      rowsum += matrix[i][j];
      colsum += matrix[j][i];
    }
    if (rowsum === sum && colsum === sum) return true;
  }
  return false;
}

//-------APPROACH 3-------
function isValidMatrix3(matrix) {
  if (!matrix || matrix.length <= 0) return false;

  let n = matrix[0].length;
  let numSet = new Set();

  for (let i = 1; i <= n; i++) {
    numSet.add(i);
  }

  for (let i = 0; i < n; i++) {
    let rowSet = new Set();
    let colSet = new Set();
    for (let j = 0; j < n; j++) {
      let rowEl = matrix[i][j];
      let colEl = matrix[j][i];
      if (numSet.has(rowEl)) {
        rowSet.add(rowEl);
      } else {
        return false;
      }

      if (numSet.has(colEl)) {
        colSet.add(colEl);
      } else {
        return false;
      }
    }
    if (rowSet.size === n && colSet.size === n) return true;
  }
  return false;
}

let grid1 = [
  [1, 2, 3],
  [2, 3, 1],
  [3, 1, 2],
]; // true
let grid2 = [
  [2, 3, 4],
  [3, 4, 2],
  [4, 2, 3],
]; // false
let grid3 = [
  [-1, -2, -3],
  [-2, -3, -1],
  [-3, -1, -2],
]; // false

let grid4 = [
  [0, 0, 6],
  [0, 6, 0],
  [6, 0, 0],
]; //false

let grid5 = [[0]]; // false
let grid6 = [[1]]; // true

console.log("-------APPROACH 1-------");
console.log(isValidMatrix1(grid1));
console.log(isValidMatrix1(grid2));
console.log(isValidMatrix1(grid3));
console.log(isValidMatrix1(grid4));
console.log(isValidMatrix1(grid5));
console.log(isValidMatrix1(grid6));
console.log("-------APPROACH 2-------");
console.log(isValidMatrix2(grid1));
console.log(isValidMatrix2(grid2));
console.log(isValidMatrix2(grid3));
console.log(isValidMatrix2(grid4));
console.log(isValidMatrix2(grid5));
console.log(isValidMatrix2(grid6));
console.log("-------APPROACH 3-------");
console.log(isValidMatrix2(grid1));
console.log(isValidMatrix2(grid2));
console.log(isValidMatrix2(grid3));
console.log(isValidMatrix2(grid4));
console.log(isValidMatrix2(grid5));
console.log(isValidMatrix2(grid6));
