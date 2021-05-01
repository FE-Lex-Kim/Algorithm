/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function (R, C, r0, c0) {
  let map = new Map();

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      map.set([i, j], Math.abs(i - r0) + Math.abs(j - c0));
    }
  }

  return [...map.entries()].sort((a, b) => a[1] - b[1]).map((v) => v[0]);
};

console.log(allCellsDistOrder((R = 2), (C = 3), (r0 = 1), (c0 = 2)));
