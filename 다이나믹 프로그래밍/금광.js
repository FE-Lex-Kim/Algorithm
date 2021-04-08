// 문제 유형: 다이나믹 프로그래밍
// n x m 의 크기의 금광이 있다.
// 각각의 칸에는 특정한 크기의 금이 들어있다.

// 첫번째 열부터 금을 캐기 시작한다.
// 첫번째 열에서 어디서 부터 시작해도 상관없다.
// 이후 m - 1번에 걸쳐서 오른쪽 위 , 오른쪽, 오른쪽 아래 3가지 중 하나의 위치로 이동해야한다.
// 채굴자가 얻을 수 있는 금의 최대 크기를 출력하는 프로그램을 작성하라

// 테스트 케이스 T가 주어진다.

// 매 테스트 케이스 첫번째줄에 n과 m이 주어진다

const goldMine = (str) => {
  let testArr = [];
  for (let line of str.split("\n")) {
    // 문자열로 바뀌어있는 배열의 요소들을 숫자요소로 바꾸어준다
    let numberLine = line.split(" ").map((v) => +v);
    testArr = [...testArr, numberLine];
  }

  // 첫번째 줄에서 첫번째, 두번째 요소 N, M에 할당
  let N = +testArr[1][0];
  let M = +testArr[1][1];

  // 첫번째줄 배열에서 삭제
  testArr.splice(0, 2);

  let arr = testArr[0];
  let mine = Array.from({ length: arr.length / M }, () => []);
  let dp = Array.from({ length: arr.length / M }, () => [, , , ,]);

  // mine 배열 생성
  for (let i = 0; i < arr.length; i++) {
    mine[Math.floor(i / 4)].push(arr[i]);
  }

  // dp의 0번째 행부분 초기화
  for (let i = 0; i < N; i++) {
    dp[i][0] = mine[i][0];
  }

  for (let j = 1; j < M; j++) {
    let left;
    let down;
    let up;
    for (let i = 0; i < N; i++) {
      if (i === 0) {
        up = 0;
      } else {
        up = dp[i - 1][j - 1];
      }

      if (i === N - 1) {
        down = 0;
      } else {
        down = dp[i + 1][j - 1];
      }

      left = dp[i][j - 1];
      dp[i][j] = mine[i][j] + Math.max(left, up, down);
    }
  }

  let answer = [];
  for (let i = 0; i < N; i++) {
    answer.push(dp[i][M - 1]);
  }
  console.log(Math.max(...answer));
};

goldMine(`2
3 4
1 3 3 2 2 1 4 1 0 6 4 7`);
