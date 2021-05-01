/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  let map = new Map();
  for (const num of nums) {
    if (map.has(num)) map.set(num, [...map.get(num), num]);
    else map.set(num, [num]);
  }

  let arr = [...map.values()];

  return arr
    .sort((a, b) => (a.length === b.length ? b[0] - a[0] : a.length - b.length))
    .flat();
};

console.log(frequencySort((nums = [1, 5, 0, 5])));
