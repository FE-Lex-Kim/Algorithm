/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let start = 1;
  let end = num;
  let mid;
  while (start <= end) {
    mid = start + Math.floor((end - start) / 2);
    let square = mid * mid;
    if (square === num) {
      return true;
    } else if (square < num) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return false;
};

console.log(isPerfectSquare(9));
