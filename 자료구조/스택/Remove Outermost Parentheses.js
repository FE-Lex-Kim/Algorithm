/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
  let count = 0;
  let answer = "";
  for (const i of S) {
    if (i === "(") {
      if (count) {
        answer += i;
      }
      count++;
    } else {
      count--;
      if (count) {
        answer += i;
      }
    }
  }

  return answer;
};

removeOuterParentheses("(()())(())");
