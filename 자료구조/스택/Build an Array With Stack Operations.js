/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  let answer = [];
  for (let i = 1; i <= target[target.length - 1]; i++) {
    if (target.includes(i)) {
      answer.push("Push");
    } else {
      answer.push("Push", "Pop");
    }
  }

  return answer;
};

var buildArray = function (target, n) {
  let answer = [];
  let arr = Array.from({ length: target[target.length - 1] }, (_, i) => i + 1);
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    let copy = arr[i];
    let original = target[j];
    if (copy === original) {
      answer.push("Push");
      j++;
    } else {
      answer.push("Push", "Pop");
    }
  }

  return answer;
};

buildArray((target = [1, 3]), (n = 3));
