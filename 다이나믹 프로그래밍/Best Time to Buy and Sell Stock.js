/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let answer = 0;
  let dp = Array.from({ length: prices.length }, () => 0);
  dp[prices.length - 1] = prices[prices.length - 1];

  for (let i = prices.length - 2; i >= 0; i--) {
    const cur = prices[i];
    dp[i] = Math.max(cur, dp[i + 1]);
    answer = Math.max(answer, dp[i] - cur);
  }

  return answer;
};

maxProfit([7, 1, 5, 3, 6, 4]);
