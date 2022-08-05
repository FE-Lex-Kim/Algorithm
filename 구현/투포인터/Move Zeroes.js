/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length === 1) return nums;

  let start = 0;
  let end = 1;

  while (end < nums.length) {
    let startElement = nums[start];
    let endElement = nums[end];

    if (startElement === 0 && endElement === 0) {
      end++;
      continue;
    }
    if (startElement === 0 && endElement !== 0) {
      [nums[start], nums[end]] = [endElement, startElement];
    }

    start++;
    end++;
  }
};

moveZeroes([1, 0, 1]);
