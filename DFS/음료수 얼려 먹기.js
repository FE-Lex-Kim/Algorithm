// 문제유형 : DFS, BFS
// 첫 번쨰 줄에 얼음 틀의 세로 길이 N과 가로 길이 M이 주어진다
// 두번째 줄부터 N + 1 번째 줄까지 얼 틀의 형태가 주어진다
// 이떄 구멍이 뚫려있는 부분은 0, 그렇지 않은 부분은 1

// 한번에 만들 수 있는 아이스크림 개수를 출력한다.
const tastyIcecream = (str) => {
  let N;
  let M;
  let graph = [];
  let result = 0;
  const dfs = (x, y) => {
    if (x <= -1 || x >= N || y <= -1 || y >= M) {
      return false;
    }
    if (graph[x][y] === "0") {
      graph[x][y] = 1;
      dfs(x - 1, y);
      dfs(x, y - 1);
      dfs(x + 1, y);
      dfs(x, y + 1);
      return true;
    }
    return false;
  };

  for (let line of str.split("\n")) {
    if (line.split(" ").length === 2) {
      N = +line.split(" ")[0];
      M = +line.split(" ")[1];
      continue;
    }
    graph = [...graph, line.split("")];
  }
  for (let colum = 0; colum < N; colum++) {
    for (let row = 0; row < M; row++) {
      if (dfs(colum, row) === true) {
        result += 1;
      }
    }
  }
  console.log(result);
};

tastyIcecream(`4 5
00110
00011
11111
01000`);
