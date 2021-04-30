/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
  s = s.split("").sort();
  let answer = [];

  while (0 < s.length) {
    answer.push(s.shift());
    for (let i = 0; i < s.length; ) {
      if (s.length < 0) return answer;
      let last = answer[answer.length - 1];
      let cur = s[i];
      if (last.charCodeAt() < cur.charCodeAt()) {
        answer.push(cur);
        s.splice(i, 1);
      } else {
        i++;
      }
    }

    answer.push(s.pop());
    for (let j = s.length - 1; 0 <= j; ) {
      if (s.length < 0) return answer;
      let last = answer[answer.length - 1];
      let cur = s[j];
      if (cur.charCodeAt() < last.charCodeAt()) {
        answer.push(cur);
        s.splice(j, 1);
      }
      j--;
    }
  }

  return answer.join("");
};

/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
  s = s.split("");
  let str = "";
  s.sort();

  while (s.length) {
    s = s.filter((v, i) => {
      if (i === 0 || str[str.length - 1] !== v) {
        str += v;
        return false;
      }

      return true;
    });

    s.reverse();
  }

  return str;
};

sortString("cdelotee");
