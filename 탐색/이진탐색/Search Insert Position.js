/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (target < nums[0]) {
    return 0;
  } else if (nums[nums.length - 1] < target) {
    return nums.length;
  }

  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (left < right) {
    mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (target < nums[mid]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};
console.log(searchInsert([1, 3, 5, 6], 4));
