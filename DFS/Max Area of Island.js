/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let needVisit = [];
  let answer = 0;
  // 상하좌우
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      let cur = grid[i][j];
      let count = 0;
      // 완전 탐색을 하던도중 1이 나오면 DFS를 시작한다.
      if (cur === 1) {
        // 시작 노드를 needvisit에 넣어준다.
        needVisit.push([i, j]);
        while (needVisit.length !== 0) {
          // needvisit에 가장 최근에 들어온값을 빼준다.
          let [x, y] = needVisit.pop();

          if (x < 0 || y < 0 || grid.length <= x || grid[0].length <= y) {
            continue;
          }
          if (grid[x][y] === 1) {
            // 만약 1인경우면 상하좌우의 값을 이곳에 넣어준다.
            // 1이였던 해당값을 0으로 만들어준다.
            grid[x][y] = 0;
            count++;
            // 상하좌우를 needvist에 넣어준다.
            needVisit.push([x + 1, y]);
            needVisit.push([x - 1, y]);
            needVisit.push([x, y + 1]);
            needVisit.push([x, y - 1]);
          }
        }
        answer = Math.max(count, answer);
      }
    }
  }

  return answer;
};

var maxAreaOfIsland = function (grid) {
  const dfs = (x, y) => {
    let count = 0;
    if (x < 0 || y < 0 || grid.length <= x || grid[0].length <= y) {
      return 0;
    }
    if (grid[x][y] === 1) {
      grid[x][y] = 0;
      count++;
      count += dfs(x + 1, y) + dfs(x - 1, y) + dfs(x, y + 1) + dfs(x, y - 1);
      return count;
    }
    return 0;
  };
  let answer = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      let cur = grid[i][j];
      if (cur === 1) {
        answer = Math.max(answer, dfs(i, j));
      }
    }
  }

  console.log(answer);
};

maxAreaOfIsland([
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]);
