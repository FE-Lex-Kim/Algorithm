/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
  let value = arr[start];
  let next = start + value;
  let prev = start - value;
  let answer = false;
  if (value === 0) {
    return true;
  }
  if (value === -1) {
    return false;
  }
  arr[start] = -1;

  if (next < arr.length) {
    answer = answer || canReach(arr, next);
  }

  if (-1 < prev) {
    answer = answer || canReach(arr, prev);
  }

  return answer;
};
console.log(canReach([3, 0, 2, 1, 2], 2));
