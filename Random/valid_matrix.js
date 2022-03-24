function isValidMatrix(matrix) {
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

console.log(
  isValidMatrix([
    [1, 2, 3],
    [2, 3, 1],
    [3, 1, 2],
  ])
);
