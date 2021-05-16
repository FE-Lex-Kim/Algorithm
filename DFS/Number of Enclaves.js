/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
  const dfs = (x, y) => {
    let count = [0, true];
    if (grid[x] === undefined || grid[x][y] === undefined) {
      return [0, false];
    }

    let cur = grid[x][y];

    if (cur === 1) {
      grid[x][y] = "#";
      count[0]++;

      let up = dfs(x - 1, y);
      let down = dfs(x + 1, y);
      let right = dfs(x, y + 1);
      let left = dfs(x, y - 1);
      if (!up[1] || !down[1] || !right[1] || !left[1]) {
        return [0, false];
      }

      count[0] += up[0] + down[0] + right[0] + left[0];

      return count;
    }

    return [0, true];
  };

  let answer = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      let cur = grid[i][j];
      if (cur === 1) {
        answer += dfs(i, j)[0];
      }
    }
  }

  return answer;
};

numEnclaves([
  [0, 0, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
]);
