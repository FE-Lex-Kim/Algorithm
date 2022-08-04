/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let answer = [];
  let newK = k % nums.length;
  let left = 0;
  let right = nums.length - newK;
  if (newK === 0) return;

  while (left < nums.length - newK) {
    let rightElement = nums[right];
    let leftElement = nums[left];
    if (right !== nums.length) {
      answer.push(rightElement);
      right++;
    } else {
      answer.push(leftElement);
      left++;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = answer[i];
  }

  return answer;
};

rotate([1], 1);
