// 문제유형: 다이나믹 프로그래밍
// 첫째 줄에 식량창고의 개수 N이 주어진다 (3 <= N <= 100)
// 둘째 줄에 공백을 기준으로 각 식량창고에 저장된 식량의 개수 K가 주어진다(0 <= K <=1000)

// 최소한 칸 이상 떨어진 식량창고를 약탈해야한다.
// 첫째 줄에 개미 전사가 얻을 수 있는 식량의 최댓값을 구하는 프로그램 작성

const antWarrior = (str) => {
  let testArr = [];
  for (let line of str.split("\n")) {
    // 문자열로 바뀌어있는 배열의 요소들을 숫자요소로 바꾸어준다
    let numberLine = line.split(" ").map((v) => +v);
    testArr = [...testArr, numberLine];
  }

  // 첫번째 줄에서 첫번째, 두번째 요소 N, M에 할당
  let N = +testArr[0][0];

  // 첫번째줄 배열에서 삭제
  testArr.splice(0, 1);

  // 두 번째줄 하나만 있는경우 사용
  let arr = testArr[0];

  // 앞서 계산된 결과를 저장하기 위한 DP 테이블 초기화
  let dp = Array.from({ length: N }, () => 0);

  // 다이나믹 프로그래밍 진행(바텀업)
  dp[0] = arr[0];
  dp[1] = Math.max(arr[0], arr[1]);

  for (let i = 2; i < N; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i]);
  }

  console.log(dp[N - 1]);
};

antWarrior(`4
1 3 1 5`);
// 8
