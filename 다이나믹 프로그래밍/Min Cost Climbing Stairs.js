/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let dp = Array.from({ length: cost.length }, () => 0);
  dp[0] = cost[0];
  dp[1] = cost[1];

  for (let i = 2; i < dp.length; i++) {
    dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
  }

  dp[cost.length] = Math.min(dp[cost.length - 1], dp[cost.length - 2]);

  return dp[cost.length];
};
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
