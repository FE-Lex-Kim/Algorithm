/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  let arr = [];
  for (let i = 0; i < ops.length; i++) {
    let cur = ops[i];
    if (cur === "C") {
      arr.pop();
    } else if (cur === "D") {
      arr.push(arr[arr.length - 1] * 2);
    } else if (cur === "+") {
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    } else {
      arr.push(+cur);
    }
  }

  return arr.reduce((acc, cur) => acc + cur, 0);
};
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
