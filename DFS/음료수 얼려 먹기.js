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

const test2 = (str) => {
  let testArr = [];
  for (let line of str.split("\n")) {
    // 문자열로 바뀌어있는 배열의 요소들을 숫자요소로 바꾸어준다
    let numberLine = line.split(" ").map((v) => v);
    testArr = [...testArr, numberLine];
  }

  // 첫번째 줄에서 첫번째, 두번째 요소 N, M에 할당
  let N = +testArr[0][0];
  let M = +testArr[0][1];

  // 첫번째줄 배열에서 삭제
  testArr.splice(0, 1);
  const dfs = (i, j) => {
    if (i < 0 || j < 0 || N <= i || M <= j) {
      return 0;
    }
    let cur = arr[i][j];
    if (cur === "0") {
      arr[i][j] = "1";

      // 상하좌우
      dfs(i - 1, j); // 상
      dfs(i + 1, j); // 하
      dfs(i, j - 1); // 좌
      dfs(i, j + 1); // 우

      return 1;
    }

    return 0;
  };

  // 만약 두 번째줄 이상 줄이 존재하면 사용
  let arr = testArr.map((v) => v[0].split(""));
  let sum = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      sum += dfs(i, j);
    }
  }

  console.log(sum);
};
