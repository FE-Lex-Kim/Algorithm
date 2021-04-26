/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let answer = 0;
  lable1: for (const i of words) {
    for (const j of i) {
      if (!allowed.includes(j)) {
        continue lable1;
      }
    }
    answer++;
  }

  return answer;
};

countConsistentStrings("cad", [
  "cc",
  "acd",
  "b",
  "ba",
  "bac",
  "bad",
  "ac",
  "d",
]);
