// 문제유형: 다이나믹 프로그래밍

// 첫째 줄에 N이 주어진다. 둘째 줄에 각 병사의 전투력이 공백으로 구분되어 차례대로 주어진다.
// 첫째 줄에 남아 있는 병사의 수가 최대가 되도록 하기 위해서 열외시켜야 하는 병사의 수를 출력해야한다.

// N명의 병사가 무작위로 나열되어 있다.
// 각각의 병사는 특정한 값의 전투력을 보유하고 있다.
// 전투력이 높은 병사가 앞쪽에 오도록 내림차순으로 배치하고자 한다.
// 배치하는 과정에서 특정한 위치에 있느 병사를 열외 시키는 방법을 이용한다.

const arraySoldier = (str) => {
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
  let dp = Array.from({ length: N }, () => 0);
  for (let i = 1; i < N; i++) {
    let cur = arr[i];
    let prev = arr[i - 1];
    if (cur > prev) {
      dp[i] = dp[i - 1] + 1;
      continue;
    }
    dp[i] = dp[i - 1];
  }
  console.log(dp[N - 1]);
  console.log(dp);
};

arraySoldier(`8
6 2 5 1 7 4 8 3`);
// 2
