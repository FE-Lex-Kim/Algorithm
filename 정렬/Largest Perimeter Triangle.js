/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  nums.sort((a, b) => b - a);
  for (let i = 0; i < nums.length - 2; i++) {
    let largest = nums[i];
    let otherLength = nums[i + 1] + nums[i + 2];

    if (largest < otherLength) {
      return largest + otherLength;
    }
  }

  return 0;
};

console.log(largestPerimeter([3, 2, 3, 4]));
