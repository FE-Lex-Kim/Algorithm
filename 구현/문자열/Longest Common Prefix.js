/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let start = strs[0];
  let answer = "";
  for (let i = 0; i < start.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== start[i]) {
        return answer;
      }
    }
    answer += start[i];
  }

  return answer;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
