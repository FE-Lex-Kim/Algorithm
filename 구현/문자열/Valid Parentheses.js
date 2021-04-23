/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
      continue;
    } else if (s[i] === ")") {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
        continue;
      }
    } else if (s[i] === "]") {
      if (stack[stack.length - 1] === "[") {
        stack.pop();
        continue;
      }
    } else if (s[i] === "}") {
      if (stack[stack.length - 1] === "{") {
        stack.pop();
        continue;
      }
    }

    return false;
  }
  return !stack.length;
};

var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (stack.pop() !== s[i]) {
          return false;
        }
        break;
    }
  }

  return !stack.length;
};

isValid("()");
