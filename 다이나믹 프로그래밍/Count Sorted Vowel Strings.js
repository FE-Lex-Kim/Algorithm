/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
  let dp = Array.from({ length: n + 1 }, () => []);
  dp[0] = [1, 1, 1, 1, 1];

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < 5; j++) {
      if (j === 0) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
      }
    }
  }

  return dp[n][4];
};

countVowelStrings(33);
