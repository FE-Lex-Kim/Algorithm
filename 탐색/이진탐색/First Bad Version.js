/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1;
    let right = n;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      // if mid is bad version
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    // right는 항상 true 값이다.
    // while 문의 종료 조건은 left가 right와 같아지는 순간이다.
    // 즉, while문이 종료된다는 것은 left + 1 이 되어 값이 더 이상 true 가 아닐 경우이다.

    return left;
  };
};
