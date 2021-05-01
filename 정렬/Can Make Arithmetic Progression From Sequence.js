/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  arr.sort((a, b) => a - b);
  let diff = Math.abs(arr[0] - arr[1]);

  for (let i = 1; i < arr.length - 1; i++) {
    let diff1 = Math.abs(arr[i] - arr[i + 1]);
    if (diff !== diff1) return false;
  }

  return true;
};

console.log(canMakeArithmeticProgression([3, 5, 1]));
