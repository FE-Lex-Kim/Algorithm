/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  let max = Number.MIN_VALUE;
  let min = Number.MAX_VALUE;
  let sum = 0;

  for (const i of salary) {
    max = Math.max(max, i);
    min = Math.min(min, i);
    sum += i;
  }

  sum = sum - min - max;

  return sum / (salary.length - 2);
};

console.log(average([1000, 2000, 3000]));
