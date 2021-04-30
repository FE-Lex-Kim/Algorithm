/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const fc = (str) => {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
      let cur = str[i];
      if (cur === "#") {
        if (0 < stack.length) {
          stack.pop();
        }
      } else {
        stack.push(cur);
      }
    }

    return stack;
  };

  let stackS = fc(s);
  let stackT = fc(t);

  return stackS.join("") === stackT.join("");
};

backspaceCompare("ab#c", "ad#c");
