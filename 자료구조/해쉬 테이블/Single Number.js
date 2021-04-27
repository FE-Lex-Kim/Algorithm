/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let map = new Map();

  for (const i of nums) {
    if (map.has(i)) map.set(i, map.get(i) + 1);
    else map.set(i, 1);
  }

  for (const [k, v] of map.entries()) {
    if (v === 1) return k;
  }
};

console.log(singleNumber([4, 1, 2, 1, 2]));
