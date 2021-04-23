/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
  let answer = "";
  let str = `${n}`;
  let count = 0;
  for (let i = str.length - 1; -1 < i; i--) {
    if (count === 3) {
      answer = "." + answer;
      count = 0;
    }

    answer = str[i] + answer;
    count++;
  }
  return answer;
};
thousandSeparator(0);
