/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let par = 0;
  let most = 0;
  for (const i of s) {
    if (i === "(") {
      par++;
    } else if (i === ")") {
      par--;
    }

    if (most < par) {
      most = par;
    }
  }

  return most;
};

console.log(maxDepth("1"));
