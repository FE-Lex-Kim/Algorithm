/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
  let numArr = [];
  let sArr = s.split("");

  for (const i of sArr) {
    if (48 <= i.charCodeAt() && i.charCodeAt() <= 57) {
      numArr.push(+i);
    }
  }

  numArr = [...new Set(numArr)];

  if (numArr.length === 1 || numArr.length === 0) {
    return -1;
  }

  numArr.sort((a, b) => b - a);

  if (numArr[0] <= numArr[1]) return -1;
  return numArr[1];
};

var secondHighest = function (s) {
  let firtst = -1;
  let second = -1;
  for (let i = 0; i < s.length; i++) {
    if (48 <= s[i].charCodeAt() && s[i].charCodeAt() <= 57) {
      if (firtst < +s[i]) {
        second = firtst;
        firtst = +s[i];
      } else if (+s[i] < firtst && second < +s[i]) {
        second = +s[i];
      }
    }
  }

  return second;
};

console.log(secondHighest("ck0120444341"));
