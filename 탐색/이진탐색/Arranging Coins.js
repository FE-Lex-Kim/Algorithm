/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let i = 1;
  let sum = 1;
  while (true) {
    i++;
    sum = sum + i;
    if (sum === n) {
      return i;
    } else if (n < sum) {
      return i - 1;
    }
  }
};

var arrangeCoins = function (n) {
  let start = 0;
  let end = n;
  let k;
  while (start < end) {
    k = start + Math.floor((end - start + 1) / 2);
    let cur = (k * (k + 1)) / 2;
    if (cur === n) {
      return k;
    } else if (n < cur) {
      end = k - 1;
    } else {
      start = k;
    }
  }

  return end;
};

console.log(arrangeCoins(5));
