/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
  let answer = "";
  for (const i of str) {
    if (65 <= i.charCodeAt() && i.charCodeAt() <= 90) {
      answer += String.fromCharCode(i.charCodeAt() + 32);
    } else {
      answer += i;
    }
  }

  return answer;
};

toLowerCase("LOVELY");
