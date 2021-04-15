var minSubsequence = function (nums) {
  nums.sort((a, b) => b - a);
  let answer = [];
  let sum = 0;
  let total = nums.reduce((acc, cur) => acc + cur, 0);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    total -= nums[i];
    answer.push(nums[i]);
    if (total < sum) {
      console.log(answer);
      return answer;
    }
  }
};

minSubsequence([4, 4, 7, 6, 7]);
