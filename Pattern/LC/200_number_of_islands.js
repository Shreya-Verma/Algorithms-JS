/**
 * 
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
 * 
 */

function numberOfIslands(grid) {
  if (!grid.length) return 0;
  let rows = grid.length;
  let cols = grid[0].length;
  let islands = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        islands++;
        dfs(i, j, grid);
      }
    }
  }

  return islands;
}

// Takes a cell in a grid with a “1” , turns it into a “0” and explores (DFS) any of the left, right, up, down 1’s
function dfs(row, col, grid) {
  if (
    row < 0 ||
    col < 0 ||
    row >= grid.length ||
    col >= grid[0].length ||
    grid[row][col] === "0"
  ) {
    return;
  }
  // Else explore the nodes
  // Start by marking current island node with "1" to "0" to mark it as visited
  grid[row][col] = "0";
  // explore 1 to left, right, top , botton
  dfs(row, col + 1, grid);
  dfs(row, col - 1, grid);
  dfs(row + 1, col, grid);
  dfs(row - 1, col, grid);
}

let grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "1", "0"],
];

console.log(numberOfIslands(grid));
