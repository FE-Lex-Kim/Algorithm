/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.ceil((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }

  if (nums[left] < target) {
    return left + 1;
  } else {
    return left;
  }
};

searchInsert([1, 3, 5, 6], 2);
