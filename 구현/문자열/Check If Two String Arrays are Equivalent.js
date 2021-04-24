/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  let str1 = word1.reduce((acc, cur) => acc + cur, "");
  let str2 = word2.reduce((acc, cur) => acc + cur, "");

  return str1 === str2;
};

arrayStringsAreEqual(["ab", "c"], ["a", "bc"]);
