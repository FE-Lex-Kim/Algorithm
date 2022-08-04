/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let answer = [];
  let left = 0;
  let right = nums.length - 1;
  let index = nums.length - 1;

  while (left <= right) {
    let leftElement = nums[left] ** 2;
    let rightElement = nums[right] ** 2;

    if (leftElement < rightElement) {
      answer[index--] = rightElement;
      right--;
    } else {
      answer[index--] = leftElement;
      left++;
    }
  }

  return answer;
};

sortedSquares([-7, -3, 2, 3, 11]);
