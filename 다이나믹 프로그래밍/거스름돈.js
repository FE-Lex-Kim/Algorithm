function solution(n, money) {
  let dp = Array.from({ length: n + 1 }, () => 0);
  dp[0] = 1;
  money.forEach((cur, idx) => {
    for (let i = cur; i < n + 1; i++) {
      dp[i] = dp[i] + dp[i - cur];
    }
  });

  return dp[n] % 1000000007;
}

solution(5, [1, 2, 5]);
