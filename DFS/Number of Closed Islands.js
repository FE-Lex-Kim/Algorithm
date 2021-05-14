/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
  let answer = 0;
  let dfs = (x, y) => {
    let count = 0;
    if (x < 0 || y < 0 || grid.length <= x || grid[0].length <= y) {
      return -1;
    }

    if (grid[x][y] === 0) {
      grid[x][y] = "#";
      count += dfs(x + 1, y) + dfs(x - 1, y) + dfs(x, y + 1) + dfs(x, y - 1);
      return count;
    }

    return 0;
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      let cur = grid[i][j];
      if (cur === 0) {
        if (dfs(i, j) === 0) {
          answer++;
        }
      }
    }
  }

  return answer;
};

closedIsland([
  [1, 1, 1, 1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 1, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0],
]);
