/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
  let answer = [S[0]];
  S = S.split("");

  for (let i = 1; i < S.length; i++) {
    let last = answer[answer.length - 1];
    let cur = S[i];
    if (last === cur) {
      answer.pop();
    } else {
      answer.push(cur);
    }
  }

  return answer.join("");
};

console.log(removeDuplicates("abbaca"));
