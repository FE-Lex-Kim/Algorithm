/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let dp = [];
  dp[0] = nums[0];
  let max = dp[0];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], nums[i] + dp[i - 1]);
    max = Math.max(max, dp[i]);
  }

  console.log(max);
};

var maxSubArray = function (nums) {
  let dp = [nums[0]];
  let answer = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const cur = nums[i];
    dp[i] = Math.max(cur, dp[i - 1] + cur);
    answer = Math.max(answer, dp[i]);
  }

  return answer;
};

maxSubArray([1]);
