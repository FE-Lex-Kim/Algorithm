/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  let answer = 0;
  for (let i = 0; i < grid.length; i++) {
    let x = grid[i];
    let start = 0;
    let end = x.length - 1;
    let mid;
    let res = 0;
    while (start <= end) {
      mid = Math.floor((start + end) / 2);
      if (0 <= x[mid]) {
        start = mid + 1;
      } else {
        res = x.length - mid;
        end = mid - 1;
      }
    }

    answer += res;
  }
  return answer;
};

countNegatives([
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
]);
