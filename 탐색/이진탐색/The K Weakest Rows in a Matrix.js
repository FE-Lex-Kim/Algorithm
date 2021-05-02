/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  let map = new Map();
  for (let i = 0; i < mat.length; i++) {
    let arr = mat[i];
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === 0) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    map.set(i, start);
  }
  let answer = [...map.entries()]
    .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]))
    .slice(0, k)
    .map((v) => v[0]);

  return answer;
};

kWeakestRows(
  (mat = [
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1],
  ]),
  (k = 3)
);
