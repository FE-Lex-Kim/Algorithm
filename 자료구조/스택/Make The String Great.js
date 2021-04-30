/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  let stack = [s[0]];
  for (let i = 1; i < s.length; i++) {
    let cur = s[i];
    let stackLast = stack[stack.length - 1];
    if (stack.length !== 0) {
      if (
        stackLast.charCodeAt() - 32 === cur.charCodeAt() ||
        stackLast.charCodeAt() === cur.charCodeAt() - 32
      ) {
        stack.pop();
        continue;
      }
    }

    stack.push(cur);
  }

  return stack.join("");
};

console.log(makeGood((s = "abBAcC")));
