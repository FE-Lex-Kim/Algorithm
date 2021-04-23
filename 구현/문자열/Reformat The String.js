/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
  let alpha = "";
  let num = "";
  let answer = "";
  let i = 0;
  if (s.length === 1) {
    return s;
  }

  for (let i = 0; i < s.length; i++) {
    if (97 <= s[i].charCodeAt() && s[i].charCodeAt() <= 122) {
      alpha += s[i];
    } else {
      num += s[i];
    }
  }

  if (num === "" || alpha === "") {
    return "";
  }

  if (num.length < alpha.length) {
    while (answer.length < s.length) {
      if (alpha[i] !== undefined) {
        answer += alpha[i];
      }

      if (num[i] !== undefined) {
        answer += num[i];
      }
      i++;
    }
  } else {
    while (answer.length < s.length) {
      if (num[i] !== undefined) {
        answer += num[i];
      }

      if (alpha[i] !== undefined) {
        answer += alpha[i];
      }
      i++;
    }
  }

  return answer;
};

reformat("ab123");
