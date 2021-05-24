function solution(n) {
  let dp = [0, 1, 1];
  let i = 3;
  while (i <= n) {
    dp[i] = (dp[i - 2] % 1234567) + (dp[i - 1] % 1234567);
    i++;
  }
  return dp[n] % 1234567;
}

console.log(solution(1000));
