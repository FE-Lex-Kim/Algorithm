/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  // 상하좌우
  let arr = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let answer = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        for (const [a, b] of arr) {
          if (!grid[i + a] || !grid[i + a][j + b]) {
            answer++;
          }
        }
      }
    }
  }

  return answer;
};

islandPerimeter([[1, 0]]);
