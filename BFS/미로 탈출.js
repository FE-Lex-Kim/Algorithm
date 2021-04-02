// 첫째 줄에 두 정수 N,M 이 주어진다.
// N개의 줄에는 각각 M의 정수로 미로의 정보가 주어진다.
// 수들은 공백 없이 붙어서 입력으로 제시된다.
// 또한 시작칸과 마지막 칸은 항상 1이다.
// 1인 위치만 움직일 수 있다.
// 가장 좌측최상단에서 가장 우측하단 까지 최소이동칸의 개수를 출력해야한다.
const escapemaze = (str) => {
  let graph = [];
  let N;
  let M;
  for (let line of str.split("\n")) {
    if (line.split(" ").length === 2) {
      N = +line.split(" ")[0];
      M = +line.split(" ")[1];
      continue;
    }
    // 그래프를 초기화해준다.
    graph = [...graph, line.split("")];
  }
  // 상하좌우 이동할 방향 정의
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];

  const bfs = (x, y) => {
    let queue = [];
    queue.push([x, y]);

    // 큐가 빌때까지 반복한다.
    while (queue.length !== 0) {
      [x, y] = queue.shift();

      // 현재 위치에서 4가지 방향으로 위치 확인
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        // 미로 찾기 공간을 벗어난 경우 무시
        if (nx < 0 || nx >= N || ny < 0 || ny > M) {
          continue;
        }

        // 벽인 경우 무시
        if (graph[nx][ny] === "0") {
          continue;
        }

        // 해당 노드를 처음 방문하는 경우에만 최단 거리 기록
        if (graph[nx][ny] === "1") {
          graph[nx][ny] = +graph[x][y] + 1;
          queue.push([nx, ny]);
        }
      }
    }

    return graph[N - 1][M - 1];
  };
  console.log(bfs(0, 0));
};

escapemaze(`5 6
111111
000001
111111
100000
111111`);
