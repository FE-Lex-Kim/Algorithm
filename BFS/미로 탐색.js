const test2 = (str) => {
  let testArr = [];
  for (let line of str.split("\n")) {
    // 문자열로 바뀌어있는 배열의 요소들을 숫자요소로 바꾸어준다
    let numberLine = line.split(" ");
    testArr = [...testArr, numberLine];
  }

  // 첫번째 줄에서 첫번째, 두번째 요소 N, M에 할당
  let N = +testArr[0][0];
  let M = +testArr[0][1];

  // 첫번째줄 배열에서 삭제
  testArr.splice(0, 1);

  // 만약 두 번째줄 이상 줄이 존재하면 사용
  let arr = testArr;
  arr = testArr.map((v) => {
    return v[0].split("").map((v) => +v);
  });

  //   console.log(arr);

  let needVisitQueue = [[0, 0]];

  // 위, 아래, 왼, 오
  let move = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (needVisitQueue.length !== 0) {
    let node = needVisitQueue.shift();
    let x = node[0];
    let y = node[1];
    if (0 < arr[x][y]) {
      for (let i = 0; i < 4; i++) {
        let nx = node[0] + move[i][0];
        let ny = node[1] + move[i][1];
        if (0 <= nx && 0 <= ny && nx <= N - 1 && ny <= M - 1) {
          if (arr[nx][ny] !== 0 && arr[nx][ny] < 2) {
            arr[nx][ny] = arr[x][y] + 1;
            needVisitQueue.push([nx, ny]);
          }
        }
      }
    }
  }
  //   console.log(arr);
  console.log(arr[N - 1][M - 1]);
};

test2(`7 7
1011111
1110001
1000001
1000001
1000001
1000001
1111111`);
