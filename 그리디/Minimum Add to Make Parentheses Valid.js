/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function (S) {
  let arr = S.split("");
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === "(" && arr[i + 1] === ")") {
      arr.splice(i, 2);
      i = 0;
      continue;
    }
    i++;
  }
  return arr.length;
};

// nice solution
var minAddToMakeValid = function (str) {
  let right = 0;
  let left = 0;
  for (let i of str) {
    if (i === ")") {
      if (left === 0) {
        right++;
      } else {
        left--;
      }
    } else {
      left++;
    }
  }

  return right + left;
};

console.log(minAddToMakeValid("())("));
