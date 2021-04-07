// 문제유형: 다이나믹 프로그래밍
// 첫째줄에 N, M이 주어진다
// 이후 N개의 줄에는 각 화폐의 가치가 주어진다. 화폐의 가치는 10000보다 작거나 같은 자연수

// 첫째줄에 최소 화폐개수를 출력
// 불가능하면 -1 출력
// 이 화폐들의 개수를 최소한으로 이용해서 그 가치의 합이 M원이 되도록 해야한다.
// M원을 만들기위한 최소한의 화폐개수를 출력하는 프로그램 작성

const money = (str) => {
  let testArr = [];
  for (let line of str.split("\n")) {
    // 문자열로 바뀌어있는 배열의 요소들을 숫자요소로 바꾸어준다
    let numberLine = line.split(" ").map((v) => +v);
    testArr = [...testArr, numberLine];
  }

  // 첫번째 줄에서 첫번째, 두번째 요소 N, M에 할당
  let N = +testArr[0][0];
  let M = +testArr[0][1];

  // 첫번째줄 배열에서 삭제
  testArr.splice(0, 1);

  // 만약 두 번째줄 이상 줄이 존재하면 사용
  let arr = testArr.flat();

  let dp = Array.from({ length: M + 1 }, () => 10001);
  dp[0] = 0;
  for (let i = 0; i < N; i++) {
    for (let j = arr[i]; j < M + 1; j++) {
      if (dp[j - arr[i]] !== 10001) {
        dp[j] = Math.min(dp[j], dp[j - arr[i]] + 1);
      }
    }
  }

  if (dp[M] === 10001) {
    console.log(-1);
  } else {
    console.log(dp[M]);
  }
};

money(`2 15
2
3`); // 5

money(`3 4
3
5
7`); // -1
