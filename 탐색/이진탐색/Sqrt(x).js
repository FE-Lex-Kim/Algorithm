/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let start = 1;
  let end = x;
  let mid;
  while (start < end) {
    mid = start + Math.floor((end - start + 1) / 2);
    let squer = mid * mid;
    if (squer === x) {
      return mid;
    } else if (x < squer) {
      end = mid - 1;
    } else {
      start = mid;
    }
  }

  return end;
};

mySqrt(15);
