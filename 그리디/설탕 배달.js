// 줄 별로 line으로 값이 출력된다.
// 1
// 2 3 4 5
const sugar = (str) => {
  for (let line of str.split("\n")) {
    let num = +line;

    let dp = Array.from({ length: num + 1 }, () => 5001);

    dp[3] = 1;
    dp[5] = 1;
    for (let i = 6; i < num + 1; i++) {
      dp[i] = Math.min(dp[i - 3], dp[i - 5]) + 1;
    }

    if (dp[num] >= 5001) {
      console.log(-1);
    } else {
      console.log(dp[num]);
    }
  }
};

sugar(`18`); // 4
sugar(`4`); // -1
sugar(`6`); // 2
sugar(`9`); // 3
sugar(`11`); // 3
