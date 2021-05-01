/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  let map = new Map();
  for (const num of arr) {
    let countOne = num
      .toString(2)
      .split("")
      .filter((v) => v === "1").length;

    if (map.has(countOne)) map.set(countOne, [...map.get(countOne), num]);
    else map.set(countOne, [num]);
  }

  let answer = [];
  [...map.entries()]
    .sort((a, b) => a[0] - b[0])
    .forEach((v) => {
      v[1].sort((a, b) => a - b);
      answer.push(...v[1]);
    });

  return answer;
};
console.log(sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]));
