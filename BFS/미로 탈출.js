// 첫째 줄에 두 정수 N,M 이 주어진다.
// N개의 줄에는 각각 M의 정수로 미로의 정보가 주어진다.
// 수들은 공백 없이 붙어서 입력으로 제시된다.
// 또한 시작칸과 마지막 칸은 항상 1이다.
// 1인 위치만 움직일 수 있다.
// 가장 좌측최상단에서 가장 우측하단 까지 최소이동칸의 개수를 출력해야한다.
const escapemaze = (str) => {
  let n;
  let m;
  let graph = [];
  for (let line of str.split("\n")) {
    if (line.split(" ").length === 2) {
      n = +line.split(" ")[0];
      m = +line.split(" ")[1];
      continue;
    }
    // 그래프를 초기화 해준다.
    graph = [...graph, line.split("")];
  }
  // 상하좌우 이동 x,y 좌표
  const dx = [-1, +1, 0, 0];
  const dy = [0, 0, -1, 1];
  let queue = [];
  queue.push([0, 0]);

  // 큐가 다 비어있을때 멈춘다.
  while (queue.length !== 0) {
    let [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      // 미로 찾기 공간을 벗어난 경우 무시
      if (nx < 0 || nx >= n || ny < 0 || ny > m) {
        continue;
      }

      // 해당 노드를 처음 방문하는 경우에만 최단 거리 기록
      if (graph[nx][ny] === "1") {
        queue.push([nx, ny]);
        graph[nx][ny] = +graph[x][y] + 1;
      }
    }
  }
  console.log(graph[n - 1][m - 1]);
};

escapemaze(`5 6
111111
000111
111111
100000
111111`);
