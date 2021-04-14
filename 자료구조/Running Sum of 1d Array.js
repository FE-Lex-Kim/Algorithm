// leetcode
// 문제유형: Array

var runningSum = function (nums) {
  let arr = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    arr.push(sum);
  }
  return arr;
};

runningSum([1, 2, 3, 4]); // [1,3,6,10]
